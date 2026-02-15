"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { NowPlaying } from "@/lib/spotify";

export function NowPlaying() {
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

  if (!data) {
    return (
      <div className="flex items-center gap-3 text-sm text-muted">
        <span className="inline-block h-2 w-2 rounded-full bg-muted/50" />
        Loading…
      </div>
    );
  }

  if (!data.isPlaying || !data.track) {
    return (
      <div className="flex items-center gap-3 text-sm text-muted">
        <span className="inline-block h-2 w-2 rounded-full bg-muted/50" />
        Not playing anything right now
      </div>
    );
  }

  const { track } = data;

  return (
    <a
      href={track.trackUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4"
    >
      <div className="relative flex items-center gap-3">
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500" />
        {track.albumArt && (
          <Image
            src={track.albumArt}
            alt={track.album}
            width={40}
            height={40}
            className="rounded-sm"
            unoptimized
          />
        )}
      </div>
      <div className="min-w-0">
        <p className="truncate text-[15px] transition-colors group-hover:text-foreground">
          {track.title}
        </p>
        <p className="truncate text-sm text-muted">
          {track.artist}
        </p>
      </div>
    </a>
  );
}
