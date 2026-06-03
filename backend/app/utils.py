from sqlalchemy.orm import Session
from app.models import Ticket


def generate_ticket_id(db: Session):

    latest_ticket = (
        db.query(Ticket)
        .order_by(Ticket.id.desc())
        .first()
    )

    if not latest_ticket:
        return "TKT-001"

    latest_number = int(
        latest_ticket.ticket_id.split("-")[1]
    )

    return f"TKT-{latest_number + 1:03d}"