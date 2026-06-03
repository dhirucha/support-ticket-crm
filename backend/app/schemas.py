from pydantic import BaseModel, EmailStr, Field
from typing import List, Optional
from datetime import datetime
from enum import Enum


# -----------------------------
# Ticket Status Enum
# -----------------------------

class TicketStatus(str, Enum):
    OPEN = "Open"
    IN_PROGRESS = "In Progress"
    CLOSED = "Closed"


# -----------------------------
# Note Schemas
# -----------------------------

class NoteCreate(BaseModel):
    note_text: str = Field(
        ...,
        min_length=1,
        max_length=1000
    )


class NoteResponse(BaseModel):
    id: int
    note_text: str
    created_at: datetime

    class Config:
        from_attributes = True


# -----------------------------
# Ticket Create
# -----------------------------

class TicketCreate(BaseModel):
    customer_name: str = Field(
        ...,
        min_length=2,
        max_length=100
    )

    customer_email: EmailStr

    subject: str = Field(
        ...,
        min_length=3,
        max_length=200
    )

    description: str = Field(
        ...,
        min_length=10,
        max_length=5000
    )


# -----------------------------
# Ticket Update
# -----------------------------

class TicketUpdate(BaseModel):
    status: TicketStatus
    note_text: Optional[str] = None


# -----------------------------
# Ticket List Response
# -----------------------------

class TicketResponse(BaseModel):
    id: int
    ticket_id: str

    customer_name: str
    customer_email: str

    subject: str
    description: str

    status: TicketStatus

    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


# -----------------------------
# Ticket Details Response
# -----------------------------

class TicketDetailResponse(BaseModel):
    id: int
    ticket_id: str

    customer_name: str
    customer_email: str

    subject: str
    description: str

    status: TicketStatus

    created_at: datetime
    updated_at: datetime

    notes: List[NoteResponse] = []

    class Config:
        from_attributes = True