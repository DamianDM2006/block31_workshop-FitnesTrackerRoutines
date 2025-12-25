const API = import.meta.env.VITE_API;

export const getRoutines = async() => {
  try{
    const response = await fetch(API + "/routines");
    const jsonresponse = await response.json();
    console.log(jsonresponse);
    return jsonresponse;
  } catch (err) {
    console.error(err);
    return null;
  }
}
