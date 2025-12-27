import { useState, useEffect } from "react";
import { useAuth } from "../auth/AuthContext.jsx";

 const SetForm = ({ sets }) => {
  console.log(`sets in SetForm`, sets);
  const { token } = useAuth();
  const [error, setError] = useState(null);
  

  const tryCreateSet = async () => {
    setError(null);
  }

 }

export default SetForm;
