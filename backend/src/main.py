from fastapi import FastAPI
from .routers import picGameRouter

app = FastAPI()


app.include_router(
    picGameRouter.router,
    prefix="/picGame",
    tags=["picGame"],
    responses={404: {"description": "Not found"}},
)