const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const BASE = "https://api.spotify.com/v1";

// --- Types ---

export type SpotifyTrack = {
  title: string;
  artist: string;
  album: string;
  albumArt: string | null;
  trackUrl: string;
};

export type NowPlaying =
  | { isPlaying: true; track: SpotifyTrack }
  | { isPlaying: false; track: null };

export type RecentTrack = SpotifyTrack & { playedAt: string };

export type TopArtist = {
  name: string;
  image: string | null;
  genres: string[];
  url: string;
};

// --- Token ---

async function getAccessToken(): Promise<string> {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString(
    "base64",
  );

  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token!,
    }),
    cache: "no-store",
  });

  const data = await res.json();

  if (!data.access_token) {
    throw new Error("Failed to get Spotify access token");
  }

  return data.access_token;
}

// --- Helpers ---

function parseTrack(item: Record<string, unknown>): SpotifyTrack {
  const artists = item.artists as Array<{ name: string }>;
  const album = item.album as {
    name: string;
    images: Array<{ url: string }>;
  };
  const externalUrls = item.external_urls as { spotify: string };

  return {
    title: item.name as string,
    artist: artists.map((a) => a.name).join(", "),
    album: album.name,
    albumArt: album.images?.[0]?.url ?? null,
    trackUrl: externalUrls.spotify,
  };
}

// --- API calls ---

export async function getNowPlaying(): Promise<NowPlaying> {
  try {
    const token = await getAccessToken();

    const res = await fetch(`${BASE}/me/player/currently-playing`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });

    if (res.status === 204 || res.status > 400) {
      return { isPlaying: false, track: null };
    }

    const data = await res.json();

    if (!data.item) {
      return { isPlaying: false, track: null };
    }

    return {
      isPlaying: data.is_playing ?? false,
      track: parseTrack(data.item),
    };
  } catch {
    return { isPlaying: false, track: null };
  }
}

export async function getRecentlyPlayed(
  limit = 20,
): Promise<RecentTrack[]> {
  try {
    const token = await getAccessToken();

    const res = await fetch(
      `${BASE}/me/player/recently-played?limit=${limit}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      },
    );

    if (!res.ok) {
      console.error(
        `Spotify recently-played: ${res.status} ${res.statusText}`,
      );
      return [];
    }

    const data = await res.json();

    return (data.items ?? []).map(
      (item: { track: Record<string, unknown>; played_at: string }) => ({
        ...parseTrack(item.track),
        playedAt: item.played_at,
      }),
    );
  } catch {
    return [];
  }
}

export async function getTopTracks(
  timeRange: "short_term" | "medium_term" | "long_term" = "short_term",
  limit = 10,
): Promise<SpotifyTrack[]> {
  try {
    const token = await getAccessToken();

    const res = await fetch(
      `${BASE}/me/top/tracks?time_range=${timeRange}&limit=${limit}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      },
    );

    if (!res.ok) {
      console.error(`Spotify top-tracks: ${res.status} ${res.statusText}`);
      return [];
    }

    const data = await res.json();

    return (data.items ?? []).map((item: Record<string, unknown>) =>
      parseTrack(item),
    );
  } catch {
    return [];
  }
}

export async function getTopArtists(
  timeRange: "short_term" | "medium_term" | "long_term" = "short_term",
  limit = 10,
): Promise<TopArtist[]> {
  try {
    const token = await getAccessToken();

    const res = await fetch(
      `${BASE}/me/top/artists?time_range=${timeRange}&limit=${limit}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      },
    );

    if (!res.ok) {
      console.error(`Spotify top-artists: ${res.status} ${res.statusText}`);
      return [];
    }

    const data = await res.json();

    return (data.items ?? []).map(
      (item: {
        name: string;
        images: Array<{ url: string }>;
        genres: string[];
        external_urls: { spotify: string };
      }) => ({
        name: item.name,
        image: item.images?.[0]?.url ?? null,
        genres: item.genres ?? [],
        url: item.external_urls.spotify,
      }),
    );
  } catch {
    return [];
  }
}
