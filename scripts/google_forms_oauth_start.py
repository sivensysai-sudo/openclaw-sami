import json
import os
from google_auth_oauthlib.flow import Flow

CLIENT_ID = os.getenv("GOOGLE_OAUTH_CLIENT_ID", "")
CLIENT_SECRET = os.getenv("GOOGLE_OAUTH_CLIENT_SECRET", "")

if not CLIENT_ID or not CLIENT_SECRET:
    raise RuntimeError("Set GOOGLE_OAUTH_CLIENT_ID and GOOGLE_OAUTH_CLIENT_SECRET env vars first")

SCOPES = [
    "https://www.googleapis.com/auth/forms.body",
    "https://www.googleapis.com/auth/forms.responses.readonly",
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/calendar",
    "https://www.googleapis.com/auth/script.projects",
    "https://www.googleapis.com/auth/script.deployments",
    "https://www.googleapis.com/auth/script.scriptapp",
]
REDIRECT_URI = "https://localhost/callback"

client_config = {
    "installed": {
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
    }
}

flow = Flow.from_client_config(client_config, scopes=SCOPES)
flow.redirect_uri = REDIRECT_URI
auth_url, state = flow.authorization_url(
    access_type="offline",
    include_granted_scopes="true",
    prompt="consent",
)

with open('/root/.openclaw/workspace/.google_forms_oauth_state.json', 'w') as f:
    json.dump({
        'client_config': client_config,
        'scopes': SCOPES,
        'redirect_uri': REDIRECT_URI,
        'state': state,
        'code_verifier': flow.code_verifier,
    }, f)

print(auth_url)
