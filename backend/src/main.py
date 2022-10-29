from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from .routers import picGameRouter


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    picGameRouter.router,
    prefix="/picGame",
    tags=["picGame"],
    responses={404: {"description": "Not found"}},
)

if __name__ == '__main__':
    uvicorn.run("src.main:app", port=5000, log_level="info")