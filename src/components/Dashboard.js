import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function fetchTrips() {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await fetch("http://localhost:3001/api/trips", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}`, },
          });
          const data = await response.json();
          setTrips(data.trips);
        } catch (error) {
          console.error("Error fetching trips:", error);
        }
      }
    }

    fetchTrips();
  }, []);

  return (
    <div>
      <h1>Your Trips</h1>
      {trips.length > 0 ? (
        <ul>
          {trips.map((trip, index) => (
            <li key={index}>
              {trip.destination} - {trip.date} - {trip.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>No trips found</p>
      )}
    </div>
  );
}
