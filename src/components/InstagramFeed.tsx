"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const INSTAGRAM_URL = "https://www.instagram.com/worldclassexotic/";
const INSTAGRAM_HANDLE = "@worldclassexotic";

interface Post {
  id: string;
  permalink: string;
  caption: string;
  mediaType: string;
  imageUrl: string;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/instagram")
      .then((r) => r.json())
      .then((d) => { setPosts(d.posts ?? []); setLoaded(true); })
      .catch(() => setLoaded(true));
  }, []);

  return (
    <section className="py-12 sm:py-20 bg-[#050505] border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-12">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-3 justify-center sm:justify-start mb-3">
              <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl tracking-wider">
                FOLLOW THE <span className="text-gradient-gold">FLEET</span>
              </h2>
            </div>
            <p className="text-text-muted">
              Real cars. Real clients. Real lifestyle.{" "}
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                {INSTAGRAM_HANDLE}
              </a>
            </p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm py-2 px-6 flex items-center gap-2 shrink-0"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow Us
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-1 sm:gap-2">
          {!loaded
            ? Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="aspect-square bg-dark-card border border-dark-border animate-pulse" />
              ))
            : posts.length > 0
            ? posts.map((post) => (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square overflow-hidden group bg-dark-card"
                >
                  {post.imageUrl && (
                    <Image
                      src={post.imageUrl}
                      alt={post.caption.slice(0, 80) || "World Class Exotic"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 33vw, 25vw"
                    />
                  )}
                  {/* Carousel indicator */}
                  {post.mediaType === "CAROUSEL_ALBUM" && (
                    <div className="absolute top-2 right-2 z-10">
                      <svg className="w-4 h-4 text-white drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm14 0H4v12h12V6zM22 8a2 2 0 00-2-2v2h2zm0 4h-2v2h2v-2zm-2 6v2a2 2 0 002-2h-2z" />
                      </svg>
                    </div>
                  )}
                  {/* Hover overlay with caption */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 z-10">
                    <p className="text-white text-xs leading-snug line-clamp-4">
                      {post.caption.split("\n")[0]}
                    </p>
                  </div>
                </a>
              ))
            : (
                // Fallback if feed fails — still links to IG
                Array.from({ length: 9 }).map((_, i) => (
                  <a
                    key={i}
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-square bg-dark-card border border-dark-border hover:border-gold/30 transition-colors flex items-center justify-center"
                  >
                    <svg className="w-6 h-6 text-white/10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                ))
              )}
        </div>

        <p className="text-center text-text-muted text-sm mt-6">
          See the full fleet in action →{" "}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline font-medium">
            {INSTAGRAM_HANDLE}
          </a>
        </p>
      </div>
    </section>
  );
}
