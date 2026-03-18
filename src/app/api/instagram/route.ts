import { NextResponse } from "next/server";

// Cache for 10 minutes — Behold updates every 15 min
let cache: { data: unknown; at: number } | null = null;
const CACHE_TTL = 10 * 60 * 1000;

export async function GET() {
  const feedUrl = process.env.BEHOLD_FEED_URL;

  if (!feedUrl) {
    return NextResponse.json({ posts: [], error: "BEHOLD_FEED_URL not set" });
  }

  if (cache && Date.now() - cache.at < CACHE_TTL) {
    return NextResponse.json(cache.data);
  }

  try {
    const res = await fetch(feedUrl, { next: { revalidate: 600 } });
    const json = await res.json();

    // Normalize to what the frontend needs
    const posts = (json.posts ?? []).slice(0, 9).map((p: {
      id: string;
      permalink: string;
      prunedCaption?: string;
      caption?: string;
      mediaType: string;
      timestamp: string;
      sizes?: { medium?: { mediaUrl: string }; small?: { mediaUrl: string } };
    }) => ({
      id: p.id,
      permalink: p.permalink,
      caption: p.prunedCaption ?? p.caption ?? "",
      mediaType: p.mediaType,
      timestamp: p.timestamp,
      imageUrl: p.sizes?.medium?.mediaUrl ?? p.sizes?.small?.mediaUrl ?? "",
    }));

    const data = { posts, username: json.username, followersCount: json.followersCount };
    cache = { data, at: Date.now() };
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ posts: [], error: "Failed to fetch feed" });
  }
}
