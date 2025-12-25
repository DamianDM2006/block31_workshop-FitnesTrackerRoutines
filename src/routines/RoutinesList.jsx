 import { Link } from "react-router";

 const RoutinesList = ({ routines }) => {
  return (
    <ul>
      {routines.map((routine) => (
        <RoutineLi
          key={routine.id}
          routine={routine}
        />
      ))}
    </ul>
  );
 };

 export default RoutinesList;

 const RoutineLi = ({ routine }) => {

  return (
    <li>
      <Link to={"/routines/" + routine.id}>{routine.name}</Link>
    </li>
  )
 };

