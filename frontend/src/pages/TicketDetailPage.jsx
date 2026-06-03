import { useParams } from "react-router-dom";

import useTicket from "../hooks/useTicket";

import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import TicketDetails from "../components/TicketDetails";

const TicketDetailPage = () => {

  const { ticketId } =
    useParams();

  const {
    ticket,
    loading,
    error,
  } = useTicket(ticketId);

  if (loading)
    return <LoadingSpinner />;

  if (error)
    return (
      <EmptyState
        message={error}
      />
    );

  return (
    <div className="p-6">

      <TicketDetails
        ticket={ticket}
      />

    </div>
  );
};

export default TicketDetailPage;