import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewTrip() {
  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [flightConfirmationNum, setFlightCon] = useState("");
  const [flightDepartureAirport, setFlightDepart] = useState("");
  const [flightArrivalAirport, setFlightArrive] = useState("");
  const [accommodationConfirmationNum, setAccommodationCon] = useState("");
  const [accommodationAddress, setAccommodationAdd] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const tripData = {
      destination,
      description,
      departureDate,
      returnDate,
      flightDepartureAirport,
      flightArrivalAirport,
      flightConfirmationNum,
      accommodationAddress,
      accommodationConfirmationNum,
    };

    try {
      console.log(tripData);

      const response = await fetch("http://localhost:3001/api/trips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(tripData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      navigate("/dashboard");
    } catch (error) {
      console.error("Failed to add trip:", error);
      alert("Failed to add trip: " + error.message);
    }
  };

  return (
    <main className="container mt-5">
      <form onSubmit={handleSubmit}>
        <h1>
          Create Trip <span>&#9992;</span>
        </h1>
        <div className="row g-3">
          <div className="col-sm-8">
            <label className="form-label">Destination</label>
            <input
              type="text"
              className={`form-control`}
              id="destination"
              placeholder="City, State (Country)"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
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
              placeholder="Vacation, Business, Personal, etc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
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
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
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
              value={flightConfirmationNum}
              onChange={(e) => setFlightCon(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Departure Airport</label>
            <input
              type="text"
              className="form-control"
              id="departureairport"
              placeholder="JFK"
              value={flightDepartureAirport}
              onChange={(e) => setFlightDepart(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Arrival Airport</label>
            <input
              type="text"
              className="form-control"
              id="arrivalairport"
              placeholder="LGA"
              value={flightArrivalAirport}
              onChange={(e) => setFlightArrive(e.target.value)}
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
                value={accommodationConfirmationNum}
                onChange={(e) => setAccommodationCon(e.target.value)}
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
                value={accommodationAddress}
                onChange={(e) => setAccommodationAdd(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Create New Trip
        </button>
      </form>
    </main>
  );
}
