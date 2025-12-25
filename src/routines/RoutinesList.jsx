 import { useState } from "react";
 
 const RoutinesList = ({ routines }) => {
  console.log(routines);
  return (
    <ul>
      {routines.map((routine) => (
        <li  key={routine.id}>
         {routine.name}
        </li>
      ))}
    </ul>
  );
 };

 export default RoutinesList;