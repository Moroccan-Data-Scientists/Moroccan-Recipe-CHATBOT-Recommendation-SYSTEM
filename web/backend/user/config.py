from os import environ
from dotenv import load_dotenv

load_dotenv()
# Load database credentials from environment variables
user = environ.get("ATLAS_USER")
pwd = environ.get("ATLAS_PWD")
db = environ.get("ATLAS_DB")
url = environ.get("ATLAS_URL")

# load OAuth credentials from environment variables
CLIENT_ID = environ.get('client_id', None)
CLIENT_SECRET = environ.get('client_secret', None)
SECRET_KEY = environ.get('secret_key', None)

