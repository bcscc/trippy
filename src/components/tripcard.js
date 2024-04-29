import React from "react";
import { useNavigate } from "react-router-dom";

export default function TripCard({ trip }) {
  let navigate = useNavigate();

  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg>
          <image
            xlinkHref="https://media.istockphoto.com/id/1355017918/photo/passenger-airplane-taking-of-at-sunrise.webp?b=1&s=170667a&w=0&k=20&c=PPbjTcZHqycV0G1gkG0GRpEnmf1BOO0Cf07ltf1_tX4="
            width="100%"
          />
        </svg>
        <div className="card-body">
          <p className="card-text">
            {trip.destination} - {trip.description}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => navigate(`/trip/${trip.tripId}`)}
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => navigate(`/trip/edit/${trip.tripId}`)}
              >
                Edit
              </button>
            </div>
            <small className="text-body-secondary">{trip.departureDate}</small>
          </div>
        </div>
      </div>
    </div>
  );
}