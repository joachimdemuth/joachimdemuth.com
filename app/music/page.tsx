import type { Metadata } from "next";
import Image from "next/image";
import { getRecentlyPlayed, getTopTracks, getTopArtists } from "@/lib/spotify";
import { timeAgo } from "@/lib/utils";
import { NowPlaying } from "./now-playing";

export const metadata: Metadata = {
  title: "Music - Joachim Demuth",
  description: "What I've been listening to.",
};

export const revalidate = 120;

export default async function Music() {
  const [recentlyPlayed, topTracks, topArtists] = await Promise.all([
    getRecentlyPlayed(15),
    getTopTracks("short_term", 10),
    getTopArtists("short_term", 8),
  ]);

  return (
    <main>
      <h1 className="text-2xl font-medium tracking-tight">Music</h1>
      <p className="mt-3 text-[15px] text-muted">
        I spend too much time discovering music. Here&apos;s the result of that.
      </p>

      {/* Now Playing */}
      <section className="mt-10">
        <NowPlaying />
      </section>

      {/* Top Artists */}
      {topArtists.length > 0 && (
        <section className="mt-16">
          <h2 className="text-sm font-medium text-muted">
            Most listened this month
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {topArtists.map((artist, i) => (
              <li key={artist.name}>
                <a
                  href={artist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  {artist.image ? (
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      width={160}
                      height={160}
                      className="aspect-square w-full rounded-sm object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                      unoptimized
                    />
                  ) : (
                    <div className="aspect-square w-full rounded-sm bg-muted/10" />
                  )}
                  <p className="mt-2 truncate text-[13px] transition-colors group-hover:text-foreground">
                    <span className="text-muted">{i + 1}.</span>{" "}
                    {artist.name}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Top Tracks */}
      {topTracks.length > 0 && (
        <section className="mt-16">
          <h2 className="text-sm font-medium text-muted">On repeat</h2>
          <ol className="mt-6 space-y-3">
            {topTracks.map((track, i) => (
              <li key={`${track.title}-${track.artist}`}>
                <a
                  href={track.trackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="w-5 shrink-0 text-right text-sm tabular-nums text-muted">
                    {i + 1}
                  </span>
                  {track.albumArt && (
                    <Image
                      src={track.albumArt}
                      alt={track.album}
                      width={36}
                      height={36}
                      className="rounded-sm"
                      unoptimized
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[15px] transition-colors group-hover:text-foreground">
                      {track.title}
                    </p>
                    <p className="truncate text-sm text-muted">
                      {track.artist}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Recently Played */}
      {recentlyPlayed.length > 0 && (
        <section className="mt-16">
          <h2 className="text-sm font-medium text-muted">Recently played</h2>
          <ul className="mt-6 space-y-3">
            {recentlyPlayed.map((track, i) => (
              <li key={`${track.title}-${track.playedAt}-${i}`}>
                <a
                  href={track.trackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    {track.albumArt && (
                      <Image
                        src={track.albumArt}
                        alt={track.album}
                        width={36}
                        height={36}
                        className="shrink-0 rounded-sm"
                        unoptimized
                      />
                    )}
                    <div className="min-w-0">
                      <p className="truncate text-[15px] transition-colors group-hover:text-foreground">
                        {track.title}
                      </p>
                      <p className="truncate text-sm text-muted">
                        {track.artist}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 text-xs tabular-nums text-muted/70">
                    {timeAgo(track.playedAt)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Empty state */}
      {topTracks.length === 0 &&
        topArtists.length === 0 &&
        recentlyPlayed.length === 0 && (
          <p className="mt-10 text-[15px] text-muted">
            No listening data available. Make sure the Spotify environment
            variables are configured.
          </p>
        )}
    </main>
  );
}
