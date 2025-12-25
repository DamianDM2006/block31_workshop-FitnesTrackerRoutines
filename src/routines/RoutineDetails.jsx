import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { getRoutine } from "../api/routines";

const RoutineDetails = () => {
  const { id } = useParams();
  const { navigate } = useNavigate();
  const [routine, setRoutine] = useState();

  useEffect(() => {
    const syncRoutine = async () => {
      const data = await getRoutine(id);
      setRoutine(data);
    };
    syncRoutine();
  }, [id]);

  console.log(`routine`, routine);
  if(!routine) return <p>Loading. . .</p>

  return (
    <>
      <h1>Routine: {routine.name}</h1>
      <h3>Goal:  {routine.goal}</h3>
      <p>Submitted by: {routine.creatorName}</p>
    </>
    
  )
};

export default RoutineDetails;