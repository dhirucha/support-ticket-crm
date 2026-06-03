import { useEffect, useState } from "react";
import { ticketService } from "../services/ticketService";

const useTickets = (search, status) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTickets = async () => {
    try {
      setLoading(true);

      const response =
        await ticketService.getTickets({
          search,
          status,
        });

      setTickets(response.data);
      setError("");
    } catch (err) {
      setError("Failed to load tickets");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, [search, status]);

  return {
    tickets,
    loading,
    error,
    refresh: fetchTickets,
  };
};

export default useTickets;