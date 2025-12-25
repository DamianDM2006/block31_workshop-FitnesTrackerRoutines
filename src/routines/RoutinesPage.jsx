import { useState, useEffect } from "react";
import { getRoutines } from "../api/routines";
import RoutinesList from "./RoutinesList";
import RoutineForm from "./RoutineForm";

const RoutinesPage = () => {
  const [routines, setRoutines] = useState([]);

  const syncRoutines = async () => {
    const data = await getRoutines();
    setRoutines(data);
  };

  useEffect (() => {
    syncRoutines();
  }, []);

  return (
    <>
      <h1>Routines:</h1>
      <RoutinesList routines={routines} />
      <RoutineForm syncRoutines={syncRoutines}/>
    </>
    
  )
};

export default RoutinesPage;