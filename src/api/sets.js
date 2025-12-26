const API = import.meta.env.VITE_API;

export const getSetById = async (id) => {
  try {
    const response = await fetch(API + "/sets/" + id);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch(err) {
    console.error(err);
    return null;
  }
}