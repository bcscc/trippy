import React, { useEffect, useState } from "react";
import TripCard from "./tripcard";

export default function Dashboard() {
  const [trips, setTrips] = useState([]);
  const isLoggedIn = localStorage.getItem("token") ? true : false;

  useEffect(() => {
    async function fetchTrips() {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await fetch("http://localhost:3001/api/trips", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
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
    <main>
      <section
        className="py-5 text-center"
        style={
          {
            backgroundImage: "url('https://iso.500px.com/wp-content/uploads/2016/02/cover.jpg')",
            height: "50vh",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }
      }
      >
        <div className="row py-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Welcome to your Dashboard</h1>
            <p className="lead text-body-secondary">
              See your previously created trips below, or start planning a new
              one!
            </p>
            <p>
              <a
                href="/trip/create"
                className={`btn btn-primary my-2 ${
                  !isLoggedIn ? "disabled" : ""
                }`}
              >
                New Trip
              </a>
            </p>
          </div>
        </div>
      </section>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          {isLoggedIn && (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {trips && trips.length > 0 ? (
                trips.map((trip, index) => <TripCard key={index} trip={trip} />)
              ) : (
                <div className="text-center">
                  <h2>No upcoming trips for you...</h2>
                </div>
              )}
            </div>
          )}
          {!isLoggedIn && <h2>Please log in to access dashboard.</h2>}
        </div>
      </div>
    </main>
  );
}
