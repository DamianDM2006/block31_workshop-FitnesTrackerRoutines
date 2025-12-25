import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { getRoutine, deleteRoutine } from "../api/routines";
import { useAuth } from "../auth/AuthContext";

const RoutineDetails = () => {
  const { token } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [routine, setRoutine] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const syncRoutine = async () => {
      const data = await getRoutine(id);
      setRoutine(data);
    };
    syncRoutine();
  }, [id]);

  const tryDelete = async () => {
    setError(null);
    try {
      await deleteRoutine(token, routine.id);
      navigate("/routines");
    } catch(err) {
      setError(err.message);
    }
  }

  console.log(`routine`, routine);
  if(!routine) return <p>Loading. . .</p>

  return (
    <>
      <h1>Routine: {routine.name}</h1>
      <h3>Goal:  {routine.goal}</h3>
      <p>Submitted by: {routine.creatorName}</p>
      {token && <button onClick={tryDelete}>Delete this routine</button>}
      {error && <p role="alert"></p>}
    </>
    
  )
};

export default RoutineDetails;