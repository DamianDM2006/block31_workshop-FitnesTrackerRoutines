import { useState, useEffect } from "react";
import { useAuth } from "../auth/AuthContext.jsx";
import { getActivities } from "../api/activities.js";
import { createSet } from "../api/sets.js";

const SetForm = ({ sets, routine, syncRoutine }) => {
  const { token } = useAuth();
  const [error, setError] = useState(null);
  const [activities, setActivities] = useState([]);
  const routineId = routine.id;

  useEffect(() => {
    const syncActivities = async () => {
      const data = await getActivities();
      setActivities(data);
    };
    syncActivities();
  }, []);

  const tryCreateSet = async (formData) => {
    setError(null);
    const activityId = formData.get("activity");
    const count = formData.get("count");
    try {
      await createSet(token, { activityId, routineId, count });
      syncRoutine();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h2>Add a set to this routine.</h2>
      <form action={tryCreateSet}>
        <label>
          Activity: select an activity to add to this routine.
          <select name="activity">
            {activities.map((activity) => (
              <option key={activity.id} value={activity.id}>
                {activity.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Repetitions:
          <input type="number" name="count" />
        </label>
        <button>click to add this set to the routine.</button>
      </form>
    </>
  );
};

export default SetForm;
