const API = import.meta.env.VITE_API;

export const getRoutines = async () => {
  try {
    const response = await fetch(API + "/routines");
    const jsonresponse = await response.json();
    return jsonresponse;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getRoutine = async (id) => {
  try {
    const response = await fetch(API + "/routines/" + id);
    const jsonresponse = await response.json();
    return jsonresponse;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const createRoutine = async (token, routine) => {
  if (!token) {
    throw Error("You must be signed in to create a new routine.");
  };
  console.log(routine);

  const response = await fetch(API + "/routines", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(routine),
  });

  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }
};

export const deleteRoutine = async(token, id) => {
  if (!token) {
    throw Error("You must be signed in to delete a routine.");
  }

  const response = await fetch(API + "/routines/" + id, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token },
  });

  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }
};