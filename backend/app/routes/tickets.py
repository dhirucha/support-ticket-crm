from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status
)

from sqlalchemy.orm import Session
from typing import List

from app.dependencies import get_db
from app import crud, schemas


router = APIRouter(
    prefix="/api/tickets",
    tags=["Tickets"]
)


@router.post(
    "",
    response_model=schemas.TicketResponse,
    status_code=status.HTTP_201_CREATED
)
def create_ticket(
    ticket: schemas.TicketCreate,
    db: Session = Depends(get_db)
):
    return crud.create_ticket(db, ticket)


@router.get(
    "",
    response_model=List[schemas.TicketResponse]
)
def get_tickets(
    search: str = None,
    status: str = None,
    db: Session = Depends(get_db)
):
    return crud.get_tickets(
        db,
        search,
        status
    )


@router.get(
    "/{ticket_id}",
    response_model=schemas.TicketDetailResponse
)
def get_ticket(
    ticket_id: str,
    db: Session = Depends(get_db)
):

    ticket = crud.get_ticket_by_id(
        db,
        ticket_id
    )

    if not ticket:
        raise HTTPException(
            status_code=404,
            detail="Ticket not found"
        )

    return ticket


@router.put(
    "/{ticket_id}",
    response_model=schemas.TicketDetailResponse
)
def update_ticket(
    ticket_id: str,
    update_data: schemas.TicketUpdate,
    db: Session = Depends(get_db)
):

    ticket = crud.update_ticket(
        db,
        ticket_id,
        update_data
    )

    if not ticket:
        raise HTTPException(
            status_code=404,
            detail="Ticket not found"
        )

    return ticket