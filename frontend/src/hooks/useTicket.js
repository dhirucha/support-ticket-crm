import { useEffect, useState } from "react";
import { ticketService } from "../services/ticketService";

const useTicket = (ticketId) => {
  console.log("API RESPONSE:", response.data);
  
  const [ticket, setTicket] = useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    fetchTicket();
  }, [ticketId]);

  const fetchTicket = async () => {
    try {
      setLoading(true);

      const response =
        await ticketService.getTicket(
          ticketId
        );

      setTicket(response.data);
    } catch {
      setError(
        "Unable to load ticket"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    ticket,
    loading,
    error,
    refresh: fetchTicket,
  };
};

export default useTicket;