import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { deleteActivity, getActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

const ActivityDetails = () => {
  const { token } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const syncActivity = async () => {
      const data = await getActivity(id);
      setActivity(data);
    };
    syncActivity();
  }, [id]);

  const tryDelete = async () => {
    setError(null);

    try {
      await deleteActivity(token, activity.id);
      navigate("/activities");
    } catch (err) {
      setError(err.message);
    }
  };

  if(!activity) return <p>Loading. . .</p>

  return (
    <>
      <h1>Activity:  {activity.name}</h1>
      <p>submitted by: {activity.creatorName}</p>
      <p>{activity.description}</p>
      {token && <button onClick={tryDelete}>Delete activity</button>}
      {error && <p role="alert">{error}</p>}
    </>
    
  );
};

export default ActivityDetails;