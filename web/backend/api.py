from fastapi import FastAPI, Form

app = FastAPI()


@app.get("/api/response/")
def get_response(message):
    return {"message": f"Recieved message: {message}. response: Hello world!"}


@app.post('/')
def response(message: str = Form(...)):
    # `getResponse` function to be defined later.
    response = getResponse(message)
    return response
