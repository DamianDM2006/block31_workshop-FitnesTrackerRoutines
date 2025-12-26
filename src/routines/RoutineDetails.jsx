import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { getRoutine, deleteRoutine } from "../api/routines";
import { useAuth } from "../auth/AuthContext";
import Sets from "../sets/Sets.jsx";

const RoutineDetails = () => {
  const { token } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [routine, setRoutine] = useState();
  const [error, setError] = useState(null);
  const [sets, setSets] = useState([]);

  useEffect(() => {
    const syncRoutine = async () => {
      const data = await getRoutine(id);
      setRoutine(data);
      setSets(data.sets);
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
      <Sets sets={sets}/>        
      {token && <button onClick={tryDelete}>Delete this routine</button>}
      {error && <p role="alert"></p>}
    </>
  )
};

export default RoutineDetails;