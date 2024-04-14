

# Moroccan Recipe Recommender

## Introduction

The Moroccan Recipe Recommender is an AI-based system that provides recommendations for Moroccan recipes. 

- ### Backend:

The API offers endpoints for retrieving recipe recommendations, user authentication, and more.

To run the API locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Moroccan-Data-Scientists/Moroccan-Recipe-CHATBOT-Recommendation-SYSTEM
   ```
2. Locate the api directory:
```
cd Moroccan-Recipe-CHATBOT-Recommendation-SYSTEM/web/Backend
```
3. Install the dependencies:
```
pip install -r requirements.txt
```
4. Run the server
```
uvicorn main:app --reload
```
5. Access from the browser
```
http://localhost:8000
```
6. Access the Swagger UI documentation:
```
http://localhost:8000/docs
```