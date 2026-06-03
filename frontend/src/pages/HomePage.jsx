import { useState } from "react";

import SearchBar from "../components/SearchBar";
import StatusFilter from "../components/StatusFilter";
import TicketTable from "../components/TicketTable";
import DashboardStats from "../components/DashboardStats";
import RecentActivity from "../components/RecentActivity";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";

import useTickets from "../hooks/useTickets";

const HomePage = () => {
  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const {
    tickets,
    loading,
    error,
  } = useTickets(search, status);

  return (
    <div className="p-6">

      <DashboardStats
        tickets={tickets}
      />

      <div className="bg-white p-4 rounded-xl shadow-sm border mb-6">

  <div className="grid md:grid-cols-4 gap-4">

    <div className="md:col-span-3">
      <SearchBar
        value={search}
        onChange={setSearch}
      />
    </div>

    <StatusFilter
      value={status}
      onChange={setStatus}
    />

  </div>

</div>

      {loading && (
        <LoadingSpinner />
      )}

      {error && (
        <EmptyState
          message={error}
        />
      )}

      {!loading &&
        tickets.length === 0 && (
          <EmptyState
            message="No tickets found"
          />
        )}

      {!loading &&
        tickets.length > 0 && (
          <>
            <TicketTable
              tickets={tickets}
            />

            <div className="mt-6">
              <RecentActivity
                tickets={tickets}
              />
            </div>
          </>
        )}
    </div>
  );
};

export default HomePage;