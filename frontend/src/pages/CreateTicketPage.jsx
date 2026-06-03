import { useNavigate } from "react-router-dom";

import TicketForm from "../components/TicketForm";
import { ticketService } from "../services/ticketService";

const CreateTicketPage = () => {
  const navigate = useNavigate();

  const createTicket = async (
    formData
  ) => {
    try {
      await ticketService.createTicket(
        formData
      );

      alert(
        "Ticket created successfully"
      );

      navigate("/");
    } catch {
      alert(
        "Failed to create ticket"
      );
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-4">
        Create Ticket
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <TicketForm
          onSubmit={createTicket}
        />

      </div>

    </div>
  );
};

export default CreateTicketPage;