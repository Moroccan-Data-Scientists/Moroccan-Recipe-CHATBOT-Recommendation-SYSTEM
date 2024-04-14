from pydantic import BaseModel
from enum import Enum


class Token(BaseModel):
    access_token: str
    token_type: str


class User(BaseModel):
    fullname: str
    username: str
    password: str
    email: str


class LoginUser(BaseModel):
    username: str
    password: str
