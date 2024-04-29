import React, { useState } from "react"; 

export default function NewTrip() {
    const [destination, setDestination] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [flight, setFlight] = useState("");
    const [accommodation, setAccommodation] = useState("");
    const [itinerary, setItinerary] = useState("");


  return (
    <main className="container mt-5">
    <form>

      <div className="row g-3">
        <div className="col-sm-8">
          <label htmlFor="destination" className="form-label">
            Destination
          </label>
          <input
            type="text"
            className={`form-control`}
            id="destination"
            placeholder=""
            value=""
            required
          />
          <div className="invalid-feedback">Valid destination is required.</div>
        </div>
        <div className="col-sm-4">
          <label htmlFor="purpose" className="form-label">
            Purpose
          </label>
          <input
            type="text"
            className={`form-control`}
            id="purpose"
            placeholder=""
            value=""
            required
          />
          <div className="invalid-feedback">Valid purpose is required.</div>
        </div>
        <div className="col-sm-6">
          <label htmlFor="departure" className="form-label">
            Departure Date
          </label>
          <div className="input-group has-validation">
            <input
              type="date"
              className={`form-control`}
              id="departure"
              placeholder=""
              required
            />
            <div className="invalid-feedback">
              Valid departure date is required.
            </div>
          </div>
        </div>{" "}
        <div className="col-sm-6">
          <label htmlFor="return" className="form-label">
            Return Date
          </label>
          <div className="input-group has-validation">
            <input
              type="date"
              className={`form-control`}
              id="return"
              placeholder=""
              required
            />
            <div className="invalid-feedback">
              Valid return date is required.
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="flight" className="form-label">
            Flight Confirmation #
          </label>
          <input
            type="text"
            className="form-control"
            id="confirmation"
            placeholder=""
            value=""
            required=""
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="departureairport" className="form-label">
            Departure Airport
          </label>
          <input
            type="text"
            className="form-control"
            id="departureairport"
            placeholder=""
            value=""
            required=""
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="arrivalairport" className="form-label">
            Arrival Airport
          </label>
          <input
            type="text"
            className="form-control"
            id="arrivalairport"
            placeholder=""
            value=""
            required=""
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="accommodation" className="form-label">
            Accommodation Confirmation #
          </label>
          <div className="input-group has-validation">
            <input
              type="text"
              className="form-control"
              id="accommodation"
              placeholder=""
              value=""
              required=""
            />
          </div>
        </div>{" "}
        <div className="col-sm-6">
          <label htmlFor="address" className="form-label">
            Accommodation Address
          </label>
          <div className="input-group has-validation">
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder=""
              value=""
              required=""
            />
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="itinerary" className="form-label">
            Itinerary Items
          </label>
          <textarea
            className="form-control"
            id="itinerary"
            rows={5}
            placeholder="Enter your itinerary items here"
          />
        </div>
      </div>
      <button
  type="submit"
  className="btn btn-primary" 
>
  Add New Trip
</button>
    </form>
    </main>
  );
}
