/**
 * Standalone script to get a Spotify refresh token.
 *
 * Uses redirect URI: http://127.0.0.1:8888/callback
 *
 * Run: node scripts/get-spotify-token.mjs
 */

import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { URL } from "node:url";
import { execSync } from "node:child_process";
import { resolve } from "node:path";

const PORT = 8888;
const REDIRECT_URI = `http://127.0.0.1:${PORT}/callback`;

const SCOPES = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-top-read",
].join(" ");

// Read .env.local
const envPath = resolve(process.cwd(), ".env.local");
const env = Object.fromEntries(
  readFileSync(envPath, "utf-8")
    .split("\n")
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => {
      const idx = l.indexOf("=");
      return [l.slice(0, idx).trim(), l.slice(idx + 1).trim()];
    }),
);

const CLIENT_ID = env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = env.SPOTIFY_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET in .env.local");
  process.exit(1);
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${PORT}`);

  if (!url.pathname.startsWith("/callback")) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");

  if (error) {
    console.error(`\nAuth error: ${error}`);
    res.writeHead(400);
    res.end(`Error: ${error}`);
    server.close();
    process.exit(1);
  }

  if (!code) {
    res.writeHead(400);
    res.end("No code received");
    return;
  }

  // Exchange code for tokens
  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
    }),
  });

  const data = await tokenRes.json();

  if (!tokenRes.ok) {
    console.error("\nToken exchange failed:", JSON.stringify(data, null, 2));
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html><body style="background:#0a0a0a;color:#e5e5e5;font-family:monospace;padding:2rem">
        <h2 style="color:#ef4444">Token exchange failed</h2>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      </body></html>
    `);
    server.close();
    process.exit(1);
  }

  console.log("\n✓ Got refresh token!\n");
  console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}\n`);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <html><body style="background:#0a0a0a;color:#e5e5e5;font-family:monospace;padding:2rem">
      <h2 style="color:#22c55e">Got it!</h2>
      <p>Check your terminal for the refresh token. You can close this tab.</p>
    </body></html>
  `);

  server.close();
  process.exit(0);
});

server.listen(PORT, "127.0.0.1", () => {
  const authUrl =
    `https://accounts.spotify.com/authorize?` +
    new URLSearchParams({
      client_id: CLIENT_ID,
      response_type: "code",
      redirect_uri: REDIRECT_URI,
      scope: SCOPES,
    }).toString();

  console.log(`\nListening on http://127.0.0.1:${PORT}`);
  console.log(`Redirect URI: ${REDIRECT_URI}\n`);
  console.log("Opening browser...\n");

  try {
    execSync(`open "${authUrl}"`);
  } catch {
    console.log(`Open this URL manually:\n\n${authUrl}\n`);
  }
});
