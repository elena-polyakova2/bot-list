//generic getter function to fetch json
export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json(); //return response in json format
};