"use client";

import { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import { format, parse, isValid, isBefore, startOfDay } from "date-fns";

interface DatePickerProps {
  label: string;
  value: string; // "YYYY-MM-DD"
  onChange: (val: string) => void;
  minDate?: string; // "YYYY-MM-DD"
  placeholder?: string;
  blockedDates?: string[]; // "YYYY-MM-DD" array
}

export default function DatePicker({ label, value, onChange, minDate, placeholder, blockedDates = [] }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState(value ? format(new Date(value + "T00:00:00"), "MM/dd/yyyy") : "");
  const ref = useRef<HTMLDivElement>(null);

  const selected = value ? new Date(value + "T00:00:00") : undefined;
  const min = minDate ? startOfDay(new Date(minDate + "T00:00:00")) : startOfDay(new Date());
  const blockedSet = new Set(blockedDates);
  const disabledDays = [
    { before: min },
    (date: Date) => blockedSet.has(format(date, "yyyy-MM-dd")),
  ];

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Sync input text when value changes externally
  useEffect(() => {
    if (value) setInputText(format(new Date(value + "T00:00:00"), "MM/dd/yyyy"));
    else setInputText("");
  }, [value]);

  function handleDaySelect(day: Date | undefined) {
    if (!day) return;
    const str = format(day, "yyyy-MM-dd");
    onChange(str);
    setInputText(format(day, "MM/dd/yyyy"));
    setOpen(false);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const text = e.target.value;
    setInputText(text);
    // Try parsing MM/DD/YYYY or YYYY-MM-DD
    const parsed = parse(text, "MM/dd/yyyy", new Date());
    if (isValid(parsed) && !isBefore(parsed, min)) {
      onChange(format(parsed, "yyyy-MM-dd"));
    } else {
      // try YYYY-MM-DD directly
      const parsed2 = parse(text, "yyyy-MM-dd", new Date());
      if (isValid(parsed2) && !isBefore(parsed2, min)) {
        onChange(format(parsed2, "yyyy-MM-dd"));
      }
    }
  }

  return (
    <div ref={ref} className="relative">
      <label className="text-sm text-text-muted block mb-2">{label}</label>
      <div className="flex">
        {/* Text input */}
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onFocus={() => setOpen(true)}
          placeholder={placeholder || "MM/DD/YYYY"}
          className="w-full bg-dark border border-dark-border border-r-0 text-white px-4 py-3 focus:border-gold outline-none transition-colors placeholder:text-white/20"
        />
        {/* Calendar toggle button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`px-3 border border-dark-border bg-dark hover:border-gold/60 transition-colors shrink-0 ${open ? "border-gold text-gold" : "text-white/30"}`}
          aria-label="Open calendar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>

      {/* Calendar popup */}
      {open && (
        <div className="absolute z-50 top-full mt-1 left-0 bg-dark-card border border-dark-border shadow-2xl">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={handleDaySelect}
            disabled={disabledDays}
            defaultMonth={selected ?? min}
            showOutsideDays
            classNames={{
              root: "p-4",
              months: "",
              month: "",
              month_caption: "flex items-center justify-between mb-3 px-1",
              caption_label: "font-[family-name:var(--font-heading)] tracking-widest text-sm text-white uppercase",
              nav: "flex gap-1",
              button_previous: "p-1 text-white/40 hover:text-gold transition-colors",
              button_next: "p-1 text-white/40 hover:text-gold transition-colors",
              weeks: "",
              week: "flex",
              weekdays: "flex mb-1",
              weekday: "w-9 h-9 flex items-center justify-center text-xs text-white/25 font-medium",
              day: "w-9 h-9 flex items-center justify-center",
              day_button: "w-8 h-8 flex items-center justify-center text-sm rounded-none transition-all hover:bg-gold/20 hover:text-white text-white/70 disabled:text-white/15 disabled:cursor-not-allowed",
              selected: "!bg-gold !text-black font-bold",
              today: "text-gold font-semibold",
              outside: "opacity-30",
              disabled: "opacity-20 cursor-not-allowed",
              range_start: "",
              range_end: "",
              range_middle: "",
              hidden: "invisible",
            }}
          />
        </div>
      )}
    </div>
  );
}
