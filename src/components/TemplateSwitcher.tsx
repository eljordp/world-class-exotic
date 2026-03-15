"use client";

import { usePathname, useRouter } from "next/navigation";

const templates = [
  { path: "/", label: "Default", desc: "Classic" },
  { path: "/templates/v1", label: "V1", desc: "Cinematic" },
  { path: "/templates/v2", label: "V2", desc: "Bold" },
];

export default function TemplateSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  // Only show on homepage template routes
  const isTemplateRoute =
    pathname === "/" ||
    pathname === "/templates/v1" ||
    pathname === "/templates/v2";

  if (!isTemplateRoute) return null;

  return (
    <div className="fixed top-20 sm:top-24 right-4 z-40 bg-dark-card/95 backdrop-blur-md border border-dark-border rounded-lg shadow-2xl shadow-black/50 p-2">
      <p className="text-[10px] text-text-muted uppercase tracking-widest text-center mb-2 px-2">
        Template
      </p>
      <div className="flex flex-col gap-1">
        {templates.map((t) => {
          const active = pathname === t.path;
          return (
            <button
              key={t.path}
              onClick={() => router.push(t.path)}
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
  );
}
