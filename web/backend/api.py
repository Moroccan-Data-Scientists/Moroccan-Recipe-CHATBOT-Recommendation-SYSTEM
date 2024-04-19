from fastapi import FastAPI, Depends, Form, Request
from fastapi.responses import HTMLResponse, RedirectResponse
from starlette.middleware.sessions import SessionMiddleware
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from user.manage import route
from user.auth import protected_route
from user.config import SECRET_KEY

app = FastAPI()
app.include_router(route)
app.add_middleware(SessionMiddleware, secret_key=SECRET_KEY)
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/")
def index(request: Request):
    user = request.session.get('user')
    if user:
        return RedirectResponse('/home')
    return templates.TemplateResponse(
        name="index.html",
        context={"request": request}
    )


@app.get("/api/status")
def status():
    return {"APP IS UP !"}

@app.get('/signup')
def signup(request: Request):
    return templates.TemplateResponse(
        name='form.html#signup',
        context={'request': request}
    )

@app.get('/login')
def login(request: Request):
    return templates.TemplateResponse(
        name='form.html',
        context={'request': request}
    )
@app.get('/forgot-password')
def forgot_password(request: Request):
    return templates.TemplateResponse(
        name='email_form.html',
        context={'request': request}
    )

@app.get('/verify')
def verify_code(request: Request):
    return templates.TemplateResponse(
        name='code_form.html',
        context={'request': request}
    )

@app.get('/reset-password')
def reset_password(request: Request):
    return templates.TemplateResponse(
        name='reset_password.html',
        context={'request': request}
    )
# Protected route requiring authentication
@app.get('/protected')
def protected(request: Request, token:str =  Depends(protected_route)):
    return {"message": "You are authenticated!"}

@app.post('/response')
def response(message: str = Form(...)):
    # `getResponse` function to be defined later.
    response = "A function to be defined here to return a response for the user prompt"
    return response

@app.get('/home')
def welcome(request: Request):
    # token = request.session.get('access_token')
    # if not token :
    #     return RedirectResponse('/login')
        # return user
    return templates.TemplateResponse(
        name='home.html',
        context={'request': request}
    )