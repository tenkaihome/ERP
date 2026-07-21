"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import {
  X,
  Search,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Layers,
  Zap,
  Globe,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Users,
  TrendingUp,
  Package,
  UserCheck,
  GitBranch,
  Building2,
  Plug,
  BarChart3,
  Settings,
  Star,
  BadgeCheck,
} from "lucide-react";
import { PricingTier, TierFeatureCategory } from "../common/types";
import { useLanguage } from "@/components/LanguageProvider";
import { TRANSLATIONS } from "@/common/translations";
import { formatPriceByLang } from "../common/utils";

interface TierDetailModalProps {
  isOpen: boolean;
  tier: PricingTier | null;
  allTiers: PricingTier[];
  originRect?: { top: number; left: number; width: number; height: number } | null;
  onClose: () => void;
  onSelectPlan: (tierId: string) => void;
}

// Trigger haptic vibration on mobile devices
const triggerHaptic = (pattern: number | number[] = 18) => {
  if (typeof window !== "undefined" && "vibrate" in navigator) {
    try {
      navigator.vibrate(pattern);
    } catch {
      // Ignore if vibration API is not supported/blocked
    }
  }
};

export default function TierDetailModal({
  isOpen,
  tier,
  allTiers,
  originRect,
  onClose,
  onSelectPlan,
}: TierDetailModalProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language] || TRANSLATIONS["vi"];

  const [searchQuery, setSearchQuery] = useState("");
  const [showInherited, setShowInherited] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Animation states
  const [animState, setAnimState] = useState<"closed" | "open" | "closing">("closed");

  // Mobile swipe/drag dismiss states
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartYRef = useRef(0);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Frame-perfect transition locking using requestAnimationFrame
  useEffect(() => {
    if (isOpen) {
      if (isMobile) triggerHaptic(18); // Only vibrate on mobile
      setAnimState("closed"); // Force frame 0 to render in closed/origin state

      const raf = requestAnimationFrame(() => {
        setAnimState("open");
      });
      return () => cancelAnimationFrame(raf);
    } else {
      setAnimState("closed");
      setDragY(0);
    }
  }, [isOpen, isMobile]);

  const handleClose = () => {
    if (isMobile) triggerHaptic(12);
    setAnimState("closing");
    const duration = isMobile ? 400 : 450;
    setTimeout(() => {
      onClose();
      setAnimState("closed");
      setDragY(0);
    }, duration);
  };

  // Stable top-level pointer handlers to prevent capture resets on state changes
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isMobile) {
      touchStartYRef.current = e.clientY;
      setIsDragging(true);
      try {
        if (e.currentTarget.setPointerCapture) {
          e.currentTarget.setPointerCapture(e.pointerId);
        }
      } catch {
        // Safe fallback
      }
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const deltaY = e.clientY - touchStartYRef.current;
    if (deltaY > 0) {
      setDragY(deltaY);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      if (
        e.currentTarget.hasPointerCapture &&
        e.currentTarget.hasPointerCapture(e.pointerId)
      ) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Safe fallback
    }
    if (dragY > 80) {
      handleClose();
    } else {
      setDragY(0);
    }
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      if (
        e.currentTarget.hasPointerCapture &&
        e.currentTarget.hasPointerCapture(e.pointerId)
      ) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Safe fallback
    }
    setDragY(0);
  };

  // Lock body scroll cleanly without layout shift & add ESC listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    document.documentElement.classList.add("modal-open");
    document.body.classList.add("modal-open");

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Reset states on tier change
  useEffect(() => {
    setSearchQuery("");
    setShowInherited(false);
  }, [tier?.id]);

  // Inherited tiers calculation
  const inheritedTiers = useMemo(() => {
    if (!tier) return [];
    if (tier.id === "growth") {
      return allTiers.filter((t) => t.id === "starter");
    }
    if (tier.id === "enterprise") {
      return allTiers.filter((t) => t.id === "starter" || t.id === "growth");
    }
    return [];
  }, [tier, allTiers]);

  const categories: TierFeatureCategory[] = tier?.detailedCategories || [];

  const totalFeatureCount = useMemo(() => {
    return categories.reduce((sum, cat) => sum + cat.items.length, 0);
  }, [categories]);

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const query = searchQuery.toLowerCase().trim();

    return categories
      .map((cat) => {
        const matchingItems = cat.items.filter((item) => {
          const itemName = typeof item === "string" ? item : item.name;
          const itemDesc = typeof item === "string" ? "" : item.desc || "";
          return (
            itemName.toLowerCase().includes(query) ||
            itemDesc.toLowerCase().includes(query)
          );
        });
        const catMatch = cat.categoryName.toLowerCase().includes(query);

        if (catMatch) return cat;
        if (matchingItems.length > 0) {
          return {
            ...cat,
            items: matchingItems,
          };
        }
        return null;
      })
      .filter((cat): cat is TierFeatureCategory => cat !== null);
  }, [categories, searchQuery]);

  // Bounding rect calculations for desktop zoom
  const originTransformStyle = useMemo(() => {
    if (!originRect || typeof window === "undefined") {
      return "translate3d(0, 32px, 0) scale(0.85, 0.85)";
    }

    const modalWidth = Math.min(1024, window.innerWidth - 32);
    const modalHeight = Math.min(850, window.innerHeight * 0.92);

    const cardCenterX = originRect.left + originRect.width / 2;
    const cardCenterY = originRect.top + originRect.height / 2;

    const modalCenterX = window.innerWidth / 2;
    const modalCenterY = window.innerHeight / 2;

    const deltaX = Math.round(cardCenterX - modalCenterX);
    const deltaY = Math.round(cardCenterY - modalCenterY);

    const scaleX = (originRect.width / modalWidth).toFixed(4);
    const scaleY = (originRect.height / modalHeight).toFixed(4);

    return `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scaleX}, ${scaleY})`;
  }, [originRect]);

  if (!isOpen || !tier || !mounted) return null;

  const isPopular = tier.popular;
  const isOpenState = animState === "open";
  const isClosing = animState === "closing";

  const icons: Record<string, React.ReactNode> = {
    starter: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />,
    growth: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />,
    enterprise: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />,
  };

  const getCategoryIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes("nhân sự") || lower.includes("hr") || lower.includes("recursos humanos") || lower.includes("人事")) return <Users className="w-4 h-4 text-indigo-500" />;
    if (lower.includes("tài chính") || lower.includes("kế toán") || lower.includes("fa") || lower.includes("finanz") || lower.includes("finan") || lower.includes("財務") || lower.includes("会計")) return <TrendingUp className="w-4 h-4 text-emerald-500" />;
    if (lower.includes("chuỗi cung ứng") || lower.includes("kho") || lower.includes("sc") || lower.includes("supply") || lower.includes("suministro") || lower.includes("在庫") || lower.includes("サプライチェーン")) return <Package className="w-4 h-4 text-amber-500" />;
    if (lower.includes("khách hàng") || lower.includes("crm") || lower.includes("clientes") || lower.includes("顧客")) return <UserCheck className="w-4 h-4 text-sky-500" />;
    if (lower.includes("quy trình") || lower.includes("workflow") || lower.includes("flujos") || lower.includes("ワークフロー")) return <GitBranch className="w-4 h-4 text-purple-500" />;
    if (lower.includes("công ty") || lower.includes("chi nhánh") || lower.includes("branch") || lower.includes("empresa") || lower.includes("拠点") || lower.includes("カンパニー")) return <Building2 className="w-4 h-4 text-indigo-400" />;
    if (lower.includes("tích hợp") || lower.includes("api") || lower.includes("integ") || lower.includes("integración") || lower.includes("統合")) return <Plug className="w-4 h-4 text-teal-500" />;
    if (lower.includes("trí tuệ") || lower.includes("ai") || lower.includes("ia") || lower.includes("人工知 năng")) return <Sparkles className="w-4 h-4 text-amber-400" />;
    if (lower.includes("báo cáo") || lower.includes("bi") || lower.includes("intel") || lower.includes("negocios") || lower.includes("インテリジェンス")) return <BarChart3 className="w-4 h-4 text-blue-500" />;
    if (lower.includes("tuân thủ") || lower.includes("bảo mật") || lower.includes("compli") || lower.includes("cumplimiento") || lower.includes("コンプライアンス") || lower.includes("セキュリティ")) return <ShieldCheck className="w-4 h-4 text-rose-500" />;
    if (lower.includes("nền tảng") || lower.includes("hệ thống") || lower.includes("plat") || lower.includes("plataforma") || lower.includes("基盤") || lower.includes("システム")) return <Settings className="w-4 h-4 text-violet-500" />;
    return <Layers className="w-4 h-4 text-indigo-500" />;
  };

  const headerGradient =
    tier.id === "growth"
      ? "bg-gradient-to-r from-slate-950 via-zinc-900 to-indigo-950 border-b border-amber-500/30"
      : tier.id === "enterprise"
      ? "bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-900 border-b border-emerald-500/30"
      : "bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 border-b border-indigo-900/40";

  // Backdrop opacity fade
  const backdropOpacity = isOpenState ? 1 : 0;

  // ==========================================
  // MOBILE RENDER TREE (Bottom Sheet with drag-down)
  // ==========================================
  if (isMobile) {
    let mobileTransform = "translate3d(0, 100%, 0)";
    let mobileOpacity = 0;
    let mobileTransition = "none";

    if (isOpenState) {
      mobileTransform = `translate3d(0, ${dragY}px, 0)`;
      mobileOpacity = 1;
      mobileTransition = isDragging
        ? "none"
        : "transform 0.5s cubic-bezier(0.2, 0.0, 0, 1.0), opacity 0.4s cubic-bezier(0.2, 0.0, 0, 1.0)";
    } else if (isClosing) {
      mobileTransform = "translate3d(0, 100%, 0)";
      mobileOpacity = 0;
      mobileTransition = "transform 0.4s cubic-bezier(0.2, 0.0, 0, 1.0), opacity 0.3s ease-in";
    }

    return createPortal(
      <div
        data-lenis-prevent="true"
        data-lenis-prevent-wheel="true"
        data-lenis-prevent-touch="true"
        className="fixed inset-0 z-[9999] flex items-end justify-center p-0"
      >
        <div
          className="absolute inset-0 bg-slate-950/85 backdrop-blur-lg cursor-pointer transition-opacity duration-500"
          style={{
            opacity: backdropOpacity,
            transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0, 1.0)",
          }}
          onClick={handleClose}
        />

        <div
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          data-lenis-prevent-touch="true"
          style={{
            transform: mobileTransform,
            opacity: mobileOpacity,
            transition: mobileTransition,
            willChange: "transform",
          }}
          className="relative z-10 w-full h-[94dvh] flex flex-col rounded-t-3xl bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 border-t border-slate-200 dark:border-zinc-800 shadow-2xl overflow-hidden"
        >
          {/* Header Area with stable top-level pointer handlers */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            style={{ touchAction: "none" }}
            className={`pt-3 pb-4 px-4 text-white shadow-md relative shrink-0 ${headerGradient} select-none`}
          >
            <div className="w-12 h-1 bg-white/40 hover:bg-white/60 rounded-full mx-auto mb-3 cursor-grab active:cursor-grabbing" />
            <div className="flex items-start justify-between gap-2.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shrink-0">
                  {icons[tier.id] || <Layers className="w-5 h-5 text-indigo-400" />}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-black tracking-tight text-white truncate">{tier.name}</h3>
                    {isPopular ? (
                      <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md flex items-center gap-1 shrink-0">
                        <Star className="w-2.5 h-2.5 fill-slate-950" />
                        {tier.badge}
                      </span>
                    ) : (
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/15 text-white border border-white/20 shrink-0">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5 font-semibold line-clamp-1">{tier.subtitle}</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/15 shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3 flex flex-row items-center justify-between gap-2 pt-2.5 border-t border-white/15">
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-black text-amber-400 tracking-tight">
                  {formatPriceByLang(tier.basePriceMin, language, true)} - {formatPriceByLang(tier.basePriceMax, language, true)}
                </span>
                <span className="text-[10px] font-bold text-slate-300">{t.currencyUnitUserMonth}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-extrabold px-2.5 py-1 rounded-lg bg-white/10 border border-white/20 text-white backdrop-blur-md shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{totalFeatureCount}+ {language === "vi" ? "phân hệ" : language === "es" ? "módulos" : language === "ja" ? "モジュール" : "modules"}</span>
              </div>
            </div>
          </div>

          {/* Search bar & Inherited Toggle */}
          <div className="p-2.5 bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 flex flex-row items-center justify-between gap-2 shadow-xs shrink-0">
            <div className="relative flex-1">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchFeaturePlaceholder || "Search..."}
                className="w-full pl-8 pr-7 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">Clear</button>
              )}
            </div>
            {inheritedTiers.length > 0 && (
              <button
                onClick={() => setShowInherited(!showInherited)}
                className="inline-flex items-center justify-center gap-1.5 text-[11px] font-black px-2.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 transition-all cursor-pointer shrink-0 shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>+ Tier {tier.id === "growth" ? "1" : "2"}</span>
                {showInherited ? <ChevronUp className="w-3.5 h-3.5 text-amber-500" /> : <ChevronDown className="w-3.5 h-3.5 text-amber-500" />}
              </button>
            )}
          </div>

          {/* Body Scroll area */}
          <div
            data-lenis-prevent="true"
            data-lenis-prevent-wheel="true"
            data-lenis-prevent-touch="true"
            onWheel={(e) => e.stopPropagation()}
            style={{ overscrollBehavior: "contain" }}
            className="p-3 overflow-y-auto flex-1 space-y-4 custom-scrollbar min-h-0 bg-slate-50 dark:bg-zinc-950"
          >
            {/* Inherited Tiers section */}
            {inheritedTiers.length > 0 && showInherited && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-4 shadow-sm animate-fade-in">
                {inheritedTiers.map((inhTier) => (
                  <div key={inhTier.id} className="space-y-3">
                    <div className="text-[11px] font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 flex items-center gap-2">
                      <BadgeCheck className="w-3.5 h-3.5 text-amber-500" />
                      <span>{inhTier.name}:</span>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {inhTier.detailedCategories?.map((c, cIdx) => (
                        <div key={cIdx} className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-amber-200/80 dark:border-zinc-800 shadow-xs">
                          <div className="font-black text-xs text-slate-900 dark:text-white uppercase mb-2 flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-zinc-800">
                            {getCategoryIcon(c.categoryName)}
                            <span>{c.categoryName}</span>
                          </div>
                          <ul className="space-y-2 text-xs">
                            {c.items.map((item, itemIdx) => {
                              const itemName = typeof item === "string" ? item : item.name;
                              const itemDesc = typeof item === "string" ? null : item.desc;
                              return (
                                <li key={itemIdx} className="flex items-start gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                  <div>
                                    <span className="font-bold text-slate-800 dark:text-zinc-200">{itemName}</span>
                                    {itemDesc && <p className="text-[10px] text-slate-500 dark:text-zinc-400 mt-0.5">{itemDesc}</p>}
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Current categories */}
            {filteredCategories.length > 0 ? (
              <div className="grid grid-cols-1 gap-3.5">
                {filteredCategories.map((cat, idx) => (
                  <div key={idx} className="flex flex-col rounded-xl p-3.5 bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800/90 shadow-sm">
                    <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-slate-200 dark:border-zinc-800">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(cat.categoryName)}
                        <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase">{cat.categoryName}</h4>
                      </div>
                      <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-900/60 shrink-0">
                        {cat.items.length}
                      </span>
                    </div>
                    <ul className="space-y-2.5 flex-1">
                      {cat.items.map((item, i) => {
                        const itemName = typeof item === "string" ? item : item.name;
                        const itemDesc = typeof item === "string" ? null : item.desc;
                        return (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-800 dark:text-zinc-100">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <div>
                              <div className="font-bold text-slate-900 dark:text-white text-xs">{itemName}</div>
                              {itemDesc && <div className="text-[10px] text-slate-500 dark:text-zinc-400 font-normal mt-0.5">{itemDesc}</div>}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-slate-500">
                <p className="text-sm font-bold text-slate-700 dark:text-zinc-200">{language === "vi" ? `Không tìm thấy từ khóa "${searchQuery}"` : `No matches`}</p>
              </div>
            )}
          </div>

          {/* Footer buttons */}
          <div className="p-3 bg-white dark:bg-zinc-900 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-end gap-2 shrink-0">
            <button onClick={handleClose} className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700">
              {t.close || "Close"}
            </button>
            <button
              onClick={() => {
                handleClose();
                onSelectPlan(tier.id);
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-black bg-indigo-600 text-white shadow-lg cursor-pointer"
            >
              <span>{t.selectThisPlan || "Select Plan"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>,
      document.body
    );
  }

  // ==========================================
  // DESKTOP RENDER TREE (Pure original card zoom, zero touch listeners)
  // ==========================================
  // Initial starting render frame MUST be originTransformStyle at opacity 0 to prevent any full-screen flash!
  let desktopTransform = originTransformStyle;
  let desktopOpacity = 0;
  let desktopTransition = "none";

  if (isOpenState) {
    desktopTransform = "translate3d(0, 0, 0) scale(1, 1)";
    desktopOpacity = 1;
    desktopTransition = "transform 0.55s cubic-bezier(0.2, 0.0, 0, 1.0), opacity 0.45s cubic-bezier(0.2, 0.0, 0, 1.0)";
  } else if (isClosing) {
    desktopTransform = originTransformStyle;
    desktopOpacity = 0;
    desktopTransition = "transform 0.45s cubic-bezier(0.2, 0.0, 0, 1.0), opacity 0.35s ease-in";
  }

  return createPortal(
    <div
      data-lenis-prevent="true"
      data-lenis-prevent-wheel="true"
      data-lenis-prevent-touch="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6 md:p-10"
    >
      <div
        className="absolute inset-0 bg-slate-950/85 backdrop-blur-lg cursor-pointer transition-opacity duration-500"
        style={{
          opacity: backdropOpacity,
          transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0, 1.0)",
        }}
        onClick={handleClose}
      />

      <div
        data-lenis-prevent="true"
        data-lenis-prevent-wheel="true"
        data-lenis-prevent-touch="true"
        style={{
          transform: desktopTransform,
          opacity: desktopOpacity,
          transition: desktopTransition,
          transformOrigin: "center center",
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
        }}
        className="relative z-10 w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 border border-slate-200 dark:border-zinc-800 shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className={`p-6 sm:p-8 text-white shadow-md relative shrink-0 ${headerGradient}`}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                {icons[tier.id] || <Layers className="w-6 h-6 text-indigo-400" />}
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-2xl font-black tracking-tight text-white">{tier.name}</h3>
                  {isPopular ? (
                    <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md flex items-center gap-1">
                      <Star className="w-3 h-3 fill-slate-950" />
                      {tier.badge}
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/15 text-white border border-white/20">
                      {tier.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-300 mt-1 font-semibold">{tier.subtitle}</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/15"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/15">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight">
                {formatPriceByLang(tier.basePriceMin, language, true)} - {formatPriceByLang(tier.basePriceMax, language, true)}
              </span>
              <span className="text-xs font-bold text-slate-300">{t.currencyUnitUserMonth}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-extrabold px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{totalFeatureCount}+ {language === "vi" ? "dịch vụ & phân hệ cốt lõi" : language === "es" ? "servicios y módulos clave" : language === "ja" ? "コア機能・モジュール" : "core services & modules"}</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-4 sm:px-8 bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-xs shrink-0">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchFeaturePlaceholder || "Search module / feature..."}
              className="w-full pl-10 pr-8 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">Clear</button>
            )}
          </div>
          {inheritedTiers.length > 0 && (
            <button
              onClick={() => setShowInherited(!showInherited)}
              className="inline-flex items-center justify-center gap-2 text-xs font-black px-4 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 transition-all cursor-pointer shrink-0 shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>{tier.inheritsText || "Bao gồm Tier trước"}</span>
              {showInherited ? <ChevronUp className="w-4 h-4 text-amber-500" /> : <ChevronDown className="w-4 h-4 text-amber-500" />}
            </button>
          )}
        </div>

        {/* Scrollable features */}
        <div
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          data-lenis-prevent-touch="true"
          onWheel={(e) => e.stopPropagation()}
          style={{ overscrollBehavior: "contain" }}
          className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8 custom-scrollbar min-h-0 bg-slate-50 dark:bg-zinc-950"
        >
          {inheritedTiers.length > 0 && showInherited && (
            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-6 shadow-sm animate-fade-in">
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
                <div className="flex items-center gap-2 text-base font-black text-amber-800 dark:text-amber-300">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <span>{tier.inheritsText} ({inheritedTiers.map((t) => t.name).join(" & ")})</span>
                </div>
              </div>
              {inheritedTiers.map((inhTier) => (
                <div key={inhTier.id} className="space-y-4">
                  <div className="text-xs font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4 text-amber-500" />
                    <span>{inhTier.name}:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {inhTier.detailedCategories?.map((c, cIdx) => (
                      <div key={cIdx} className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-amber-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
                        <div className="font-black text-xs text-slate-900 dark:text-white uppercase mb-2 flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-zinc-800">
                          {getCategoryIcon(c.categoryName)}
                          <span>{c.categoryName}</span>
                        </div>
                        <ul className="space-y-2 text-xs">
                          {c.items.map((item, itemIdx) => {
                            const itemName = typeof item === "string" ? item : item.name;
                            const itemDesc = typeof item === "string" ? null : item.desc;
                            return (
                              <li key={itemIdx} className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-bold text-slate-800 dark:text-zinc-200">{itemName}</span>
                                  {itemDesc && <p className="text-[10px] text-slate-500 dark:text-zinc-400 leading-tight font-normal mt-0.5">{itemDesc}</p>}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((cat, idx) => (
                <div key={idx} className="flex flex-col rounded-2xl p-5 bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800/90 shadow-sm">
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200 dark:border-zinc-800">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(cat.categoryName)}
                      <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase">{cat.categoryName}</h4>
                    </div>
                    <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 px-2.5 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-900/60">
                      {cat.items.length}
                    </span>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {cat.items.map((item, i) => {
                      const itemName = typeof item === "string" ? item : item.name;
                      const itemDesc = typeof item === "string" ? null : item.desc;
                      return (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-800 dark:text-zinc-100">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <div>
                            <div className="font-bold text-slate-900 dark:text-white text-xs">{itemName}</div>
                            {itemDesc && <div className="text-[11px] text-slate-500 dark:text-zinc-400 font-normal leading-relaxed mt-0.5">{itemDesc}</div>}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center text-slate-500">
              <p className="text-base font-bold text-slate-700 dark:text-zinc-200">{language === "vi" ? `Không tìm thấy tính năng nào phù hợp với "${searchQuery}"` : `No features found`}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-white dark:bg-zinc-900 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between gap-4 shadow-lg shrink-0">
          <div className="text-xs text-slate-600 dark:text-zinc-400 font-semibold">
            <span className="font-black text-slate-900 dark:text-white">{tier.name}</span>
            <span className="mx-2">•</span>
            <span>{t.pricingRef} <strong className="text-indigo-600 dark:text-indigo-400">{tier.referenceSystems}</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handleClose} className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all">
              {t.close || "Close"}
            </button>
            <button
              onClick={() => {
                handleClose();
                onSelectPlan(tier.id);
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black bg-indigo-600 text-white shadow-lg hover:bg-indigo-500 transition-all"
            >
              <span>{t.selectThisPlan || "Select Plan"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
