const TicketDetails = ({ ticket }) => {
  return (
    <div
  className="
  bg-white
  rounded-xl
  shadow-sm
  border
  p-6
  "
>

     <div className="flex justify-between mb-6">

  <div>
    <h2 className="text-2xl font-bold">
      {ticket.ticket_id}
    </h2>

    <p className="text-gray-500">
      {ticket.subject}
    </p>
  </div>

  <span
    className="
    bg-blue-100
    text-blue-700
    px-4
    py-2
    rounded-full
    h-fit
    "
  >
    {ticket.status}
  </span>

</div>

      <div className="space-y-3">

        <p>
          <strong>Name:</strong>{" "}
          {ticket.customer_name}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {ticket.customer_email}
        </p>

        <p>
          <strong>Subject:</strong>{" "}
          {ticket.subject}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          {ticket.status}
        </p>

        <p>
          <strong>Description:</strong>
        </p>

        <div className="bg-slate-100 p-4 rounded-lg">
  {ticket.description}
</div>

<h3 className="font-semibold mt-8 mb-4">
  Notes
</h3>

<div className="space-y-4">

  {ticket.notes?.length > 0 ? (
    ticket.notes.map((note) => (
      <div
        key={note.id}
        className="
        border-l-4
        border-blue-500
        bg-slate-50
        p-4
        rounded-r-lg
        "
      >
        <p>{note.note_text}</p>

        <p className="text-xs text-gray-500 mt-2">
          {new Date(
            note.created_at
          ).toLocaleString()}
        </p>
      </div>
    ))
  ) : (
    <p className="text-gray-500">
      No notes yet
    </p>
  )}

</div>

      </div>

    </div>
  );
};

export default TicketDetails;