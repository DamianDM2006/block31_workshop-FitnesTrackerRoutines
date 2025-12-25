import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { createRoutine } from "../api/routines";

const RoutineForm = ({ syncRoutines}) => {
  const { token } = useAuth();
  const [error, setError] = useState(null);

  const tryCreateRoutine = async(formData) => {
    setError(null);

    const name = formData.get("name");
    const goal = formData.get("goal");

    try {
      await createRoutine(token, { name, goal });
      syncRoutines();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h2>Add a new routine</h2>
      <form action={tryCreateRoutine}>
        <label>
          Name of the routine
          <input type="text" name="name"/>
        </label>
        <label>
          Brief discription of the routine
          <input type="text" name="goal"/>
        </label>
        <button>Add routine</button>
      </form>
      {error && <p role="alert">{error}</p>}
    </>
  );
};

export default RoutineForm;