import SetForm from "./SetForm.jsx";

const Sets = ({ sets, routine }) => {
  console.log(`routine in Sets`, routine);
  const addSet = () => {
    if (sets.length === 0)
      return <p>There are no sets for this routine.</p>
  };

  console.log(`in Sets`, sets);

  return (
    <>
      <h2>Sets:</h2>
      <ul>
        {sets.map((oneSet) => (
          <li key={oneSet.id}>
            {oneSet.name}:<p>{oneSet.description}</p>
            <p>Count: {oneSet.count}</p>
          </li>
        ))}
      </ul>
      {addSet()}
      {/* <button onClick={SetForm}>Add a set to this routine</button> */}
      <SetForm sets={sets} routine={routine} />
    </>
  );
};

export default Sets;
