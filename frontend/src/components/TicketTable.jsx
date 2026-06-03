import { Link } from "react-router-dom";

const getBadge = (status) => {
  switch (status) {
    case "Open":
      return `
      bg-emerald-100
      text-emerald-700
      `;

    case "In Progress":
      return `
      bg-yellow-100
      text-yellow-700
      `;

    case "Closed":
      return `
      bg-red-100
      text-red-700
      `;

    default:
      return `
      bg-slate-100
      text-slate-700
      `;
  }
};

const TicketTable = ({ tickets }) => {
  return (
    <div className="overflow-x-auto">
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">

      <table className="w-full min-w-800px">

        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">
              Ticket ID
            </th>

            <th className="p-4 text-left">
              Customer
            </th>

            <th className="p-4 text-left">
              Subject
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left">
              Created
            </th>
          </tr>
        </thead>

        <tbody>
          {tickets.map((ticket) => (
            <tr
              key={ticket.ticket_id}
              className="border-t hover:bg-slate-50"
            >
              <td className="p-4">
                <Link
                  to={`/tickets/${ticket.ticket_id}`}
                  className="text-blue-600 font-medium"
                >
                  {ticket.ticket_id}
                </Link>
              </td>

              <td className="p-4">
                {ticket.customer_name}
              </td>

              <td className="p-4">
                {ticket.subject}
              </td>

              <td className="p-4">
                <span
  className={`
    px-3
    py-1
    rounded-full
    text-xs
    font-medium
    ${getBadge(ticket.status)}
  `}
>
  {ticket.status}
</span>
              </td>

              <td className="p-4">
                {new Date(ticket.created_at)
                  .toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
    </div>
  );
};

export default TicketTable;