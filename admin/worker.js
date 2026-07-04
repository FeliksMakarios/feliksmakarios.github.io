// Decap CMS OAuth Gateway for Cloudflare Workers
// Based on https://github.com/sdelements/decap-cms-oauth-provider-go
// Deploy: paste this into Cloudflare Workers editor
// Env vars needed: OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, REDIRECT_URL, GATEWAY_ORIGIN

const oauthProvider = "github";
const oauthScopes = "repo,user";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS headers
    const corsHeaders = {
      "Access-Control-Allow-Origin": env.GATEWAY_ORIGIN || "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Credentials": "true",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    // Step 1: Redirect to GitHub OAuth
    if (url.pathname === "/auth") {
      const params = new URLSearchParams({
        client_id: env.OAUTH_CLIENT_ID,
        redirect_uri: env.REDIRECT_URL,
        scope: oauthScopes,
        response_type: "code",
      });
      return Response.redirect(
        `https://${oauthProvider}.com/login/oauth/authorize?${params}`,
        302
      );
    }

    // Step 2: Handle callback from GitHub
    if (url.pathname === "/callback") {
      const code = url.searchParams.get("code");
      if (!code) {
        return new Response("Missing code parameter", { status: 400 });
      }

      // Exchange code for access token
      const tokenResponse = await fetch(
        `https://${oauthProvider}.com/login/oauth/access_token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            client_id: env.OAUTH_CLIENT_ID,
            client_secret: env.OAUTH_CLIENT_SECRET,
            code: code,
            redirect_uri: env.REDIRECT_URL,
          }),
        }
      );

      const tokenData = await tokenResponse.json();

      if (tokenData.error) {
        return new Response(JSON.stringify(tokenData), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Redirect back to CMS with token
      const redirectUrl = new URL(env.GATEWAY_ORIGIN);
      redirectUrl.hash = `access_token=${tokenData.access_token}&token_type=bearer`;
      return Response.redirect(redirectUrl.toString(), 302);
    }

    return new Response("Decap CMS OAuth Gateway. Use /auth to start.", {
      headers: { "Content-Type": "text/plain" },
    });
  },
};
