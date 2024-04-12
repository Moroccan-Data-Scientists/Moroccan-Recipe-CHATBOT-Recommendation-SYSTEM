from fastapi import FastAPI

app = FastAPI()

@app.get("/api/response/")
def get_response(message):
    return {"message": f"Recieved message: {message}. response: Hello world!"}