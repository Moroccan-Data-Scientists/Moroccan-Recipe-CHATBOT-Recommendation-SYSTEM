from fastapi import FastAPI, Depends, Form, Request
from fastapi.responses import HTMLResponse
from sympy import content
from user.manage import route
from user.auth import protected_route
app = FastAPI()
app.include_router(route)

@app.get("/")
def root():
    return HTMLResponse(content="""<h3>Welcome to Moroccan Recipe Chatbot!</h3><br
            <b>Go to <a href='/docs'>API Docs</a></b>
            """)

@app.get("/api/status")
def status():
    return {"APP IS UP !"}


# Protected route requiring authentication
@app.get('/protected')
def protected(request: Request, token:str =  Depends(protected_route)):
    return {"message": "You are authenticated!"}

@app.post('/response')
def response(message: str = Form(...)):
    # `getResponse` function to be defined later.
    response = "A function to be defined here to return a response for the user prompt"
    return response