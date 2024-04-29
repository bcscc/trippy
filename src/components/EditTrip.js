import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditTrip() {
  let navigate = useNavigate();
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
      console.log(data);
    }

    fetchTripDetails();
  }, [tripId]);

  if (!trip) {
    return <div>Loading...</div>;
  }

  const handleInputChange = (e, field, nestedField) => {
    if (nestedField) {
      setTrip((prev) => ({
        ...prev,
        [field]: {
          ...prev[field],
          [nestedField]: e.target.value,
        },
      }));
    } else {
      setTrip((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(JSON.stringify(trip));
      const response = await fetch(
        `http://localhost:3001/api/trips/${tripId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(trip),
        }
      );
      if (response.ok) {
        navigate(`/trip/${tripId}`);
      } else {
        alert("Failed to update trip");
      }
    } catch (error) {
      console.error("Failed to update trip:", error);
      alert("Failed to update trip: " + error.message);
    }
  };

  return (
    <main className="container mt-5">
      <form onSubmit={handleSubmit}>
        <h1>
          <span>&#128221;</span> Edit Trip - {trip.destination}
        </h1>
        <div className="row g-3">
          <div className="col-sm-8">
            <label className="form-label">Destination</label>
            <input
              type="text"
              className={`form-control`}
              id="destination"
              placeholder=""
              value={trip.destination}
              onChange={(e) => handleInputChange(e, "destination")}
              required
            />
            <div className="invalid-feedback">
              Valid destination is required.
            </div>
          </div>
          <div className="col-sm-4">
            <label className="form-label">Purpose</label>
            <input
              type="text"
              className={`form-control`}
              id="purpose"
              placeholder=""
              value={trip.description}
              onChange={(e) => handleInputChange(e, "description")}
              required
            />
            <div className="invalid-feedback">Valid purpose is required.</div>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Departure Date</label>
            <div className="input-group has-validation">
              <input
                type="date"
                className={`form-control`}
                id="departure"
                placeholder=""
                value={trip.departureDate}
                onChange={(e) => handleInputChange(e, "departureDate")}
                required
              />
              <div className="invalid-feedback">
                Valid departure date is required.
              </div>
            </div>
          </div>{" "}
          <div className="col-sm-6">
            <label className="form-label">Return Date</label>
            <div className="input-group has-validation">
              <input
                type="date"
                className={`form-control`}
                id="return"
                placeholder=""
                value={trip.returnDate}
                onChange={(e) => handleInputChange(e, "returnDate")}
                required
              />
              <div className="invalid-feedback">
                Valid return date is required.
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <label className="form-label">Flight Confirmation #</label>
            <input
              type="text"
              className="form-control"
              id="confirmation"
              placeholder=""
              value={trip.flight.confirmationNum}
              onChange={(e) =>
                handleInputChange(e, "flight", "confirmationNum")
              }
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Departure Airport</label>
            <input
              type="text"
              className="form-control"
              id="departureairport"
              placeholder=""
              value={trip.flight.departureAirport}
              onChange={(e) =>
                handleInputChange(e, "flight", "departureAirport")
              }
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Arrival Airport</label>
            <input
              type="text"
              className="form-control"
              id="arrivalairport"
              placeholder=""
              value={trip.flight.arrivalAirport}
              onChange={(e) => handleInputChange(e, "flight", "arrivalAirport")}
              required
            />
          </div>
          <div className="col-sm-6">
            <label className="form-label">Accommodation Confirmation #</label>
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control"
                id="accommodation"
                placeholder=""
                value={trip.accommodation.confirmationNum}
                onChange={(e) =>
                  handleInputChange(e, "accommodation", "confirmationNum")
                }
                required
              />
            </div>
          </div>{" "}
          <div className="col-sm-6">
            <label className="form-label">Accommodation Address</label>
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder=""
                value={trip.accommodation.address}
                onChange={(e) =>
                  handleInputChange(e, "accommodation", "address")
                }
                required
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </main>
  );
}
