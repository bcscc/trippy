import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ActivityItem from "./ActivityItem";

export default function TripDetails() {
  let navigate = useNavigate();
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);

  const [newActivityDescription, setNewActivityDescription] = useState("");
  const [newActivityNotes, setNewActivityNotes] = useState("");

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

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this trip?"
    );
    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3001/api/trips/${tripId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not delete trip");
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Failed to delete trip:", error);
      alert(`Failed to delete trip: ${error.message}`);
    }
  };

  const handleAddActivity = async (event) => {
    event.preventDefault();
    const activityData = {
      description: newActivityDescription,
      notes: newActivityNotes,
    };

    try {
      const response = await fetch(
        `http://localhost:3001/api/trips/${tripId}/activities`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(activityData),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to add activity");
      }
      navigate(0);
    } catch (error) {
      console.error("Failed to add activity:", error);
    }
  };

  return (
    <main className="container mt-5">
      <div>
        <h1 className="mb-3">
          {trip.destination} - {trip.description}
        </h1>
        <div className="row g-3">
          <h3>
            Dates: {trip.departureDate} - {trip.returnDate}
          </h3>
          <div className="col-sm-5">
            <h3>
              Flights: {trip.flight.departureAirport} <span>&#9992;</span>{" "}
              {trip.flight.arrivalAirport}
            </h3>
          </div>
          <div className="col-sm-7 text-end">
            <h3>Confirmation #{trip.flight.confirmationNum}</h3>
          </div>
          <div>
            <h3>Accommodation</h3>
            <div className="px-3">
              <h4>
                <span>&#x2022;</span>Address: {trip.accommodation.address}
              </h4>
              <h4>
                <span>&#x2022;</span>Confirmation #
                {trip.accommodation.confirmationNum}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="mb-3">Itinerary</h3>
            <div className="row text-uppercase fw-bold border-bottom border-2">
              <div className="col-5">
                <p className="m-0">Description</p>
              </div>
              <div className="col-6">
                <p className="m-0">Notes</p>
              </div>
            </div>
            {trip.itinerary && trip.itinerary.length > 0 ? (
              trip.itinerary.map((activity, index) => (
                <ActivityItem key={index} activity={activity} tripId={tripId} />
              ))
            ) : (
              <div>
                <p>No activities planned...</p>
              </div>
            )}
            <form className="row my-2" onSubmit={handleAddActivity}>
              <div className="col-5">
                <input
                  type="text"
                  className={`form-control`}
                  value={newActivityDescription}
                  onChange={(e) => setNewActivityDescription(e.target.value)}
                  placeholder="Activity Description"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  value={newActivityNotes}
                  className={`form-control`}
                  onChange={(e) => setNewActivityNotes(e.target.value)}
                  placeholder="Notes"
                />
              </div>
              <div className="col-1 align-end">
                <button className="btn btn-success">Add</button>
              </div>
            </form>
          </div>
        </div>
        <button
          onClick={() => navigate(`/trip/edit/${tripId}`)}
          className="btn btn-primary"
        >
          Edit
        </button>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
      <div id="liveAlertPlaceholder"></div>
    </main>
  );
}
