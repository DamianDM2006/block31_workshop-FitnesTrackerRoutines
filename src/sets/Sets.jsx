import SetForm from "./SetForm.jsx";

const Sets = ({sets}) => {

  const addSet = () => {
    return (
    <>
      <p>There are no sets for this routine.</p>
      <button onClick={SetForm}>Add a set to this routine</button>
    </>
    )
  };


  if (sets.length === 0) return addSet();
  console.log(`inSets`, sets);


  return (
    <>
      <h2>Sets:</h2>
      <ul>
        {sets.map((oneSet) => (
          <li key={oneSet.id} >
            {oneSet.name}:
            <p>{oneSet.description}</p>
            <p>Count:  {oneSet.count}</p>
          </li>
        ))}
      </ul>
      {addSet()}
    </>
  )
};

export default Sets;