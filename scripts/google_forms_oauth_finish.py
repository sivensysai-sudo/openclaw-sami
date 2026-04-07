import json
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build

redirected_url = input().strip()

with open('/root/.openclaw/workspace/.google_forms_oauth_state.json') as f:
    st = json.load(f)

flow = Flow.from_client_config(
    st['client_config'],
    scopes=st['scopes'],
    state=st['state'],
    code_verifier=st.get('code_verifier')
)
flow.redirect_uri = st['redirect_uri']
flow.fetch_token(authorization_response=redirected_url)
creds = flow.credentials

with open('/root/.openclaw/workspace/.google_forms_token.json', 'w') as f:
    f.write(creds.to_json())

forms = build('forms', 'v1', credentials=creds)
sheets = build('sheets', 'v4', credentials=creds)
drive = build('drive', 'v3', credentials=creds)

# Smoke checks
forms.forms().create(body={"info": {"title": "SAMI OAuth Test (will keep)"}}).execute()
sheets.spreadsheets().create(body={"properties": {"title": "SAMI OAuth Test"}}).execute()
drive.about().get(fields="user(emailAddress,displayName)").execute()

print('OK_GOOGLE_FORMS_CONNECTED')
