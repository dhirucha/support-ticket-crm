from app.schemas import TicketCreate

ticket = TicketCreate(
    customer_name="John Doe",
    customer_email="john@gmail.com",
    subject="Login Issue",
    description="Unable to login"
)

print(ticket)