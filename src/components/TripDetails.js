import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TripDetails() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    async function fetchTripDetails() {
      const response = await fetch(
        `http://localhost:3001/api/trips/${tripId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      const data = await response.json();
      setTrip(data);
    }

    fetchTripDetails();
  }, [tripId]);

  if (!trip) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container mt-5">
      <div>
        <h1>{trip.destination}</h1>
      </div>
    </main>
  );
};