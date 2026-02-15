"use client";

import { useEffect, useState } from "react";
import type { NowPlaying } from "@/lib/spotify";

export function NowPlayingCompact() {
  const [data, setData] = useState<NowPlaying | null>(null);

  useEffect(() => {
    let active = true;

    async function poll() {
      try {
        const res = await fetch("/api/spotify/now-playing");
        if (res.ok && active) {
          setData(await res.json());
        }
      } catch {
        // silent
      }
    }

    poll();
    const interval = setInterval(poll, 30_000);

    return () => {
      active = false;
      clearInterval(interval);
    };
  }, []);

  if (!data || !data.isPlaying || !data.track) {
    return null;
  }

  const { track } = data;

  return (
    <a
      href={track.trackUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
    >
      <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
      <span className="truncate">
        {track.title} — {track.artist}
      </span>
    </a>
  );
}
