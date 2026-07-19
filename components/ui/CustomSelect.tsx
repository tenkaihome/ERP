"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
}

export default function CustomSelect({
  id,
  value,
  onChange,
  options,
  placeholder = "Chọn một tùy chọn",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Handle open/close animations
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 250); // 250ms matches the duration of animate-dropdown-unbounce
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      {/* Dropdown Button */}
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between pl-4 pr-3.5 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-left text-zinc-800 dark:text-zinc-100 transition-all cursor-pointer shadow-sm"
      >
        <span className={selectedOption ? "font-medium" : "text-zinc-400"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
            isOpen ? "transform rotate-180 text-indigo-500" : ""
          }`}
        />
      </button>

      {/* Options Dropdown List */}
      {shouldRender && (
        <div
          data-lenis-prevent
          className={`absolute z-30 w-full mt-2 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl max-h-60 overflow-y-auto custom-scrollbar origin-top divide-y divide-zinc-100 dark:divide-zinc-850 ${
            isOpen ? "animate-dropdown-bounce" : "animate-dropdown-unbounce"
          }`}
        >
          <div className="py-1.5">
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm transition-all duration-150 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 hover:text-indigo-600 dark:hover:text-indigo-400"
                  }`}
                >
                  <span>{option.label}</span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
