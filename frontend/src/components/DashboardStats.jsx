const DashboardStats = ({ tickets }) => {

  const open =
    tickets.filter(
      (t) => t.status === "Open"
    ).length;

  const progress =
    tickets.filter(
      (t) =>
        t.status === "In Progress"
    ).length;

  const closed =
    tickets.filter(
      (t) => t.status === "Closed"
    ).length;

  const total = tickets.length;

  return (
    <div className="grid md:grid-cols-4 gap-4 mb-6">

      <Card
        title="Total"
        value={total}
      />

      <Card
        title="Open"
        value={open}
      />

      <Card
        title="In Progress"
        value={progress}
      />

      <Card
        title="Closed"
        value={closed}
      />

    </div>
  );
};

function Card({
  title,
  value,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border">

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>

    </div>
  );
}

export default DashboardStats;