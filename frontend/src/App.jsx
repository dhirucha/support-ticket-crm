import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import CreateTicketPage from "./pages/CreateTicketPage";
import TicketDetailPage from "./pages/TicketDetailPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">

        <Navbar />

        <main className="max-w-7xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
              path="/create"
              element={<CreateTicketPage />}
            />

            <Route
              path="/tickets/:ticketId"
              element={<TicketDetailPage />}
            />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;