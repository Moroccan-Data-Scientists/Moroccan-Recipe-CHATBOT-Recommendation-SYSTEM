import jwt
from datetime import datetime, timedelta
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from fastapi import Depends, HTTPException
from passlib.context import CryptContext
from user.database import fetch_user

# Secret key for encoding/decoding JWT tokens
SECRET_KEY = "4255708ecaf79a3a84fa4c505f16a64d2ab550860c79ab897ca5b1f167f8e942"
ALGORITHM = "HS256"
TOKEN_EXPIRE_MINUTES = 5 # For demo, we set 5min as the lifetime for the generated token


def create_access_token(email: str, expires_delta: timedelta):
    to_encode = {"sub": email, "exp": datetime.utcnow() + expires_delta}
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def verify_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email = payload.get("sub")
        user = fetch_user({"email": email})
        if user:
            return user
        else:
            return None  # User not found
    except jwt.ExpiredSignatureError:
        return None  # Token expired
    except jwt.JWTError:
        return None  # Invalid token


# Security helper functions
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Authenticate user function
def authenticate_user(email: str, password: str):
    user = fetch_user({"email": email, "password": password})
    if user:
        return user
    return None


def create_access_token(email: str, expires_delta: timedelta):
    to_encode = {"sub": email, "exp": datetime.utcnow() + expires_delta}
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=400, detail="Incorrect username or password")
    access_token_expires = timedelta(minutes=TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        username=user["username"], expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

# Protected route requiring authentication
async def protected_route(token: str = Depends(oauth2_scheme)):
    user = verify_token(token)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid token")
    return {"message": "Access Granted!", "user": user}
