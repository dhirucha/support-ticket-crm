from sqlalchemy.orm import Session
from sqlalchemy import or_

from app import models, schemas
from app.utils import generate_ticket_id


def create_ticket(db: Session, ticket: schemas.TicketCreate):

    db_ticket = models.Ticket(
        ticket_id=generate_ticket_id(db),
        customer_name=ticket.customer_name,
        customer_email=ticket.customer_email,
        subject=ticket.subject,
        description=ticket.description,
        status="Open"
    )

    db.add(db_ticket)
    db.commit()
    db.refresh(db_ticket)

    return db_ticket


def get_tickets(
    db: Session,
    search: str = None,
    status: str = None
):

    query = db.query(models.Ticket)

    if search:
        query = query.filter(
            or_(
                models.Ticket.ticket_id.ilike(f"%{search}%"),
                models.Ticket.customer_name.ilike(f"%{search}%"),
                models.Ticket.customer_email.ilike(f"%{search}%"),
                models.Ticket.subject.ilike(f"%{search}%"),
                models.Ticket.description.ilike(f"%{search}%")
            )
        )

    if status:
        query = query.filter(
            models.Ticket.status == status
        )

    return query.order_by(
        models.Ticket.created_at.desc()
    ).all()


def get_ticket_by_id(
    db: Session,
    ticket_id: str
):
    return (
        db.query(models.Ticket)
        .filter(models.Ticket.ticket_id == ticket_id)
        .first()
    )


def update_ticket(
    db: Session,
    ticket_id: str,
    update_data: schemas.TicketUpdate
):

    ticket = get_ticket_by_id(db, ticket_id)

    if not ticket:
        return None

    ticket.status = update_data.status

    if update_data.note_text:

        note = models.Note(
            ticket_fk=ticket.id,
            note_text=update_data.note_text
        )

        db.add(note)

    db.commit()
    db.refresh(ticket)

    return ticket