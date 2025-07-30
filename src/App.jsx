import React from "react";
import Header from "./components/Header";
import UpcomingReservations from "./components/UpcomingReservations";
import { reservations } from "./utils/data";

function App() {
  return (
    <div className="app">
      <Header />
      <UpcomingReservations reservations={reservations} />
    </div>
  );
}

export default App;
