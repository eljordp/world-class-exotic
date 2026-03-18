"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const templates = [
  { path: "/", label: "Default", desc: "Classic" },
  { path: "/templates/v1", label: "V1", desc: "Cinematic" },
  { path: "/templates/v2", label: "V2", desc: "Bold" },
];

export default function TemplateSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // Only show on homepage template routes
  const isTemplateRoute =
    pathname === "/" ||
    pathname === "/templates/v1" ||
    pathname === "/templates/v2";

  if (!isTemplateRoute) return null;

  const current = templates.find((t) => t.path === pathname);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Expanded panel */}
      {open && (
        <div className="mb-2 bg-dark-card/95 backdrop-blur-md border border-dark-border rounded-lg shadow-2xl shadow-black/50 p-2">
          <p className="text-[10px] text-text-muted uppercase tracking-widest text-center mb-2 px-2">
            Template
          </p>
          <div className="flex flex-col gap-1">
            {templates.map((t) => {
              const active = pathname === t.path;
              return (
                <button
                  key={t.path}
                  onClick={() => {
                    router.push(t.path);
                    setOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded text-left transition-all text-sm min-w-[120px] ${
                    active
                      ? "bg-gold text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      active ? "bg-white" : "bg-white/20"
                    }`}
                  />
                  <span className="font-[family-name:var(--font-heading)] tracking-wider">
                    {t.label}
                  </span>
                  <span className={`text-xs ml-auto ${active ? "text-white/70" : "text-text-muted"}`}>
                    {t.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="ml-auto flex items-center gap-2 bg-dark-card/95 backdrop-blur-md border border-dark-border rounded-full px-4 py-2 shadow-2xl shadow-black/50 text-sm text-white/70 hover:text-white hover:border-gold/50 transition-all"
      >
        <span className="w-2 h-2 bg-gold rounded-full" />
        <span className="font-[family-name:var(--font-heading)] tracking-wider text-xs">
          {current?.desc || "Template"}
        </span>
        <svg
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
