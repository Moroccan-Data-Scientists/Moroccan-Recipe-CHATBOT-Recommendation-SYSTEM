import user.database as db
from user.database import users_collection
from user.models import User, LoginUser, Token
from fastapi import Depends, Form, HTTPException, Request
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from passlib.context import CryptContext
from datetime import datetime, timedelta
from fastapi.routing import APIRouter
from user.auth import create_access_token

route = APIRouter(prefix="/user", tags=["user"])
@route.post("/login")
async def login(request: Request, form_data: OAuth2PasswordRequestForm = Depends()):

    try:
        user = users_collection.find_one({
            "username": form_data.username,
            "password": form_data.password
        })
        if user:
            access_token_expires = timedelta(minutes=5)
            access_token = create_access_token(user["username"], access_token_expires)
            # return RedirectResponse(url=f"/home?user={user['username']}&token={access_token}", status_code=302)
            return {"message": "Login success!", "token": access_token, "user": user["username"]}
        else:
            return  {"Error": "Invalid user or password!"}

    except Exception as e:
        return {"Error": str(e)}


@route.post("/register")
def create_user(request: Request,
                fullname: str = Form(...),
                username: str = Form(...),
                password: str = Form(...),
                email: str = Form(...)
                ):
    # hashed_password = pwd_context.hash(password)
    try:
        db.create_user(fullname, username, email, password)
        return {"User "+fullname+" created successfully!"}
    except Exception as e:
        return {"message": "Operation failed!", "detail" : str(e)}
