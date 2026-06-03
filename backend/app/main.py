from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine

import app.models

from app.routes.tickets import router as ticket_router


Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Customer Support CRM API",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5173"
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(ticket_router)


@app.get("/")
def root():
    return {
        "message": "Customer Support CRM API Running"
    }