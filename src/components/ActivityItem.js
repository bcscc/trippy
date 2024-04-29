import React from "react";
import { useNavigate } from "react-router-dom";

export default function ActivityItem({ activity, tripId }) {
  const navigate = useNavigate();

  const handleDeleteActivity = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/trips/${tripId}/activities/${activity.activityId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to delete activity");
      }
      navigate(0);
    } catch (error) {
      console.error("Failed to delete activity:", error);
      alert(`Failed to delete activity: ${error.message}`);
    }
  };

  return (
    <div className="row border-bottom border-2">
      <div className="col-5">
        <p className="m-1">{activity.description}</p>
      </div>
      <div className="col-6">
        <p className="my-1">{activity.notes}</p>
      </div>
      <div className="col-1">
        <button onClick={handleDeleteActivity} className="btn btn-warning">
          Delete
        </button>
      </div>
    </div>
  );
}
