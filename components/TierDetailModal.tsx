"use client";

import React, { useState, useEffect, useMemo } from "react";
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
  const [animState, setAnimState] = useState<"closed" | "starting" | "open" | "closing">("closed");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle open & close Shared Element Hero Animation with Emphasized Easing: cubic-bezier(0.2, 0.0, 0, 1.0)
  useEffect(() => {
    if (isOpen) {
      setAnimState("starting");
      const timer = setTimeout(() => {
        setAnimState("open");
      }, 30);
      return () => clearTimeout(timer);
    } else {
      setAnimState("closed");
    }
  }, [isOpen]);

  const handleClose = () => {
    setAnimState("closing");
    setTimeout(() => {
      onClose();
      setAnimState("closed");
    }, 450);
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

  // Reset state when tier changes
  useEffect(() => {
    setSearchQuery("");
    setShowInherited(false);
  }, [tier?.id]);

  // Find inherited tiers if applicable
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

  // Calculate total features in current tier
  const categories: TierFeatureCategory[] = tier?.detailedCategories || [];

  const totalFeatureCount = useMemo(() => {
    return categories.reduce((sum, cat) => sum + cat.items.length, 0);
  }, [categories]);

  // Filter categories based on search query
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

  // Calculate exact scale and position offset for Hero Zoom Shared-Element Transition
  const originTransformStyle = useMemo(() => {
    if (!originRect || typeof window === "undefined") {
      return {
        transform: "translate3d(0, 32px, 0) scale(0.82, 0.82)",
      };
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

    return {
      transform: `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scaleX}, ${scaleY})`,
    };
  }, [originRect]);

  if (!isOpen || !tier || !mounted) return null;

  const icons: Record<string, React.ReactNode> = {
    starter: <Zap className="w-6 h-6 text-indigo-400" />,
    growth: <Sparkles className="w-6 h-6 text-amber-400" />,
    enterprise: <Globe className="w-6 h-6 text-emerald-400" />,
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
    if (lower.includes("trí tuệ") || lower.includes("ai") || lower.includes("ia") || lower.includes("人工知能")) return <Sparkles className="w-4 h-4 text-amber-400" />;
    if (lower.includes("báo cáo") || lower.includes("bi") || lower.includes("intel") || lower.includes("negocios") || lower.includes("インテリジェンス")) return <BarChart3 className="w-4 h-4 text-blue-500" />;
    if (lower.includes("tuân thủ") || lower.includes("bảo mật") || lower.includes("compli") || lower.includes("cumplimiento") || lower.includes("コンプライアンス") || lower.includes("セキュリティ")) return <ShieldCheck className="w-4 h-4 text-rose-500" />;
    if (lower.includes("nền tảng") || lower.includes("hệ thống") || lower.includes("plat") || lower.includes("plataforma") || lower.includes("基盤") || lower.includes("システム")) return <Settings className="w-4 h-4 text-violet-500" />;
    return <Layers className="w-4 h-4 text-indigo-500" />;
  };

  const isPopular = tier.popular;

  const headerGradient =
    tier.id === "growth"
      ? "bg-gradient-to-r from-slate-950 via-zinc-900 to-indigo-950 border-b border-amber-500/30"
      : tier.id === "enterprise"
      ? "bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-900 border-b border-emerald-500/30"
      : "bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 border-b border-indigo-900/40";

  // Emphasized Easing Hero transition styles: cubic-bezier(0.2, 0.0, 0, 1.0)
  const isStarting = animState === "starting";
  const isOpenState = animState === "open";
  const isClosing = animState === "closing";

  const modalTransform = isOpenState ? "translate3d(0, 0, 0) scale(1, 1)" : originTransformStyle.transform;
  const modalOpacity = isOpenState ? 1 : isStarting ? 0.2 : 0;
  const backdropOpacity = isOpenState ? 1 : 0;

  const modalTransition = isStarting
    ? "none"
    : isClosing
    ? "transform 0.45s cubic-bezier(0.2, 0.0, 0, 1.0), opacity 0.35s ease-in"
    : "transform 0.55s cubic-bezier(0.2, 0.0, 0, 1.0), opacity 0.4s cubic-bezier(0.2, 0.0, 0, 1.0)";

  const modalContent = (
    <div
      data-lenis-prevent="true"
      data-lenis-prevent-wheel="true"
      data-lenis-prevent-touch="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 md:p-10"
    >
      {/* Backdrop Overlay with Smooth Emphasized Fade Transition */}
      <div
        className="absolute inset-0 bg-slate-950/85 backdrop-blur-lg cursor-pointer transition-opacity duration-500"
        style={{
          opacity: backdropOpacity,
          transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0, 1.0)",
        }}
        onClick={handleClose}
      />

      {/* Modal Dialog Container with App Launch Zoom Shared-Element Transition */}
      <div
        data-lenis-prevent="true"
        data-lenis-prevent-wheel="true"
        data-lenis-prevent-touch="true"
        style={{
          transform: modalTransform,
          opacity: modalOpacity,
          transition: modalTransition,
          transformOrigin: "center center",
          willChange: "transform, opacity",
        }}
        className="relative z-10 w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 border border-slate-200 dark:border-zinc-800 shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className={`p-6 sm:p-8 text-white shadow-md relative ${headerGradient}`}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                {icons[tier.id] || <Layers className="w-6 h-6 text-indigo-400" />}
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-2xl font-black tracking-tight text-white">
                    {tier.name}
                  </h3>
                  {isPopular && (
                    <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md flex items-center gap-1">
                      <Star className="w-3 h-3 fill-slate-950" />
                      {tier.badge}
                    </span>
                  )}
                  {!isPopular && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/15 text-white border border-white/20">
                      {tier.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-300 mt-1 font-semibold">
                  {tier.subtitle}
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/15"
              title={t.close || "Close"}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Pricing & Key Numbers Header Bar */}
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

        {/* Search Bar & Inheritance Banner Bar */}
        <div className="p-4 sm:px-8 bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-xs">
          {/* Live Search Input */}
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
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Inheritance toggle button if tier has previous tiers */}
          {inheritedTiers.length > 0 && (
            <button
              onClick={() => setShowInherited(!showInherited)}
              className="inline-flex items-center justify-center gap-2 text-xs font-black px-4 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 transition-all cursor-pointer shrink-0 shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>
                {tier.inheritsText || "Bao gồm Tier trước"}
              </span>
              {showInherited ? <ChevronUp className="w-4 h-4 text-amber-500" /> : <ChevronDown className="w-4 h-4 text-amber-500" />}
            </button>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          data-lenis-prevent-touch="true"
          onWheel={(e) => e.stopPropagation()}
          style={{ overscrollBehavior: "contain" }}
          className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8 custom-scrollbar min-h-0 bg-slate-50 dark:bg-zinc-950"
        >
          {/* Inherited Tier Features Box (Collapsible & Spacious Grid) */}
          {inheritedTiers.length > 0 && showInherited && (
            <div className="p-6 rounded-2xl bg-amber-500/10 dark:bg-amber-500/10 border border-amber-500/30 space-y-6 shadow-sm animate-fade-in">
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
                <div className="flex items-center gap-2 text-sm sm:text-base font-black text-amber-800 dark:text-amber-300">
                  <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>{tier.inheritsText} ({inheritedTiers.map((t) => t.name).join(" & ")})</span>
                </div>
                <span className="text-[11px] font-bold text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 hidden sm:inline-block">
                  {language === "vi" ? "Đã bao gồm sẵn trong gói" : language === "es" ? "Incluido en el plan" : language === "ja" ? "プランに含まれる" : "Included in plan"}
                </span>
              </div>

              {inheritedTiers.map((inhTier) => (
                <div key={inhTier.id} className="space-y-4">
                  <div className="text-xs font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4 text-amber-500" />
                    <span>{inhTier.name}:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {inhTier.detailedCategories?.map((c, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-amber-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
                      >
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
                                  {itemDesc && (
                                    <p className="text-[10px] text-slate-500 dark:text-zinc-400 leading-tight font-normal mt-0.5">{itemDesc}</p>
                                  )}
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

          {/* Current Tier Category Grid */}
          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col rounded-2xl p-5 bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800/90 shadow-sm hover:shadow-md hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all"
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200 dark:border-zinc-800">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-100 dark:border-indigo-900/60">
                        {getCategoryIcon(cat.categoryName)}
                      </div>
                      <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white tracking-wider uppercase">
                        {cat.categoryName}
                      </h4>
                    </div>
                    <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 px-2.5 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-900/60 shrink-0">
                      {cat.items.length} {language === "vi" ? "tính năng" : language === "es" ? "funciones" : language === "ja" ? "機能" : "items"}
                    </span>
                  </div>

                  {/* Category Items List with High Contrast and Descriptions */}
                  <ul className="space-y-3 flex-1">
                    {cat.items.map((item, i) => {
                      const itemName = typeof item === "string" ? item : item.name;
                      const itemDesc = typeof item === "string" ? null : item.desc;
                      return (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-800 dark:text-zinc-100 leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <div>
                            <div className="font-bold text-slate-900 dark:text-white text-xs">{itemName}</div>
                            {itemDesc && (
                              <div className="text-[11px] text-slate-500 dark:text-zinc-400 font-normal leading-relaxed mt-0.5">
                                {itemDesc}
                              </div>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center text-slate-500 dark:text-zinc-400">
              <p className="text-base font-bold text-slate-700 dark:text-zinc-200">
                {language === "vi"
                  ? `Không tìm thấy tính năng nào phù hợp với từ khóa "${searchQuery}"`
                  : language === "es"
                  ? `No se encontraron funciones para "${searchQuery}"`
                  : language === "ja"
                  ? `「${searchQuery}」に一致する機能は見つかりませんでした`
                  : `No features matching "${searchQuery}"`}
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-3 text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-extrabold"
              >
                {language === "vi" ? "Xóa bộ lọc tìm kiếm" : language === "es" ? "Borrar filtro" : language === "ja" ? "検索フィルターをクリア" : "Clear search filter"}
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-white dark:bg-zinc-900 border-t border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="text-xs text-slate-600 dark:text-zinc-400 text-center sm:text-left font-semibold">
            <span className="font-black text-slate-900 dark:text-white">{tier.name}</span>
            <span className="mx-2">•</span>
            <span>{t.pricingRef} <strong className="text-indigo-600 dark:text-indigo-400">{tier.referenceSystems}</strong></span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleClose}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer border border-slate-200 dark:border-zinc-700"
            >
              {t.close || "Close"}
            </button>

            <button
              onClick={() => {
                handleClose();
                onSelectPlan(tier.id);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all cursor-pointer group"
            >
              <span>{t.selectThisPlan || "Select Plan"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
