const API = import.meta.env.VITE_API;

export const getSetById = async (id) => {
  try {
    const response = await fetch(API + "/sets/" + id);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const createSet = async (token, set) => {
  try {
    const response = await fetch(API + "/sets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(set),
    });
    if (!response.ok) {
      const result = await response.json();
      throw Error(result.message);
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};
