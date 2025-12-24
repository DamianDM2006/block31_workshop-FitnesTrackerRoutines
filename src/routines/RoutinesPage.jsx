import { useState, useEffect } from "react";

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
    <h1>Routines:</h1>
  )
};

export default RoutinesPage;