const RecentActivity = ({ tickets }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="font-bold text-lg mb-4">
        Recent Activity
      </h2>

      {tickets.slice(0, 5).map((ticket) => (
        <div
          key={ticket.ticket_id}
          className="border-b py-3"
        >
          <p className="font-medium">
            {ticket.ticket_id}
          </p>

          <p className="text-sm text-gray-500">
            {ticket.subject}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;