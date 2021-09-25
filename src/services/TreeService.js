import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getTreesFromApi = async () => {
  const response = await axios.get(`${apiUrl}/plant`);
  return response;
};

export const getSingleTreeFromApi = async (id) => {
  const response = await axios.get(`${apiUrl}/plant/planted/${id}`);
  return response;
};

export const postTreeToApi = async (tree) => {
  const response = await axios.post(`${apiUrl}/plant/planted/`, tree);
  return response;
};

export const updateTreeToApi = async (tree) => {
  const response = await axios.put(`${apiUrl}/plant/planted/${tree._id}`, tree);
  return response;
};

export const deleteTreeFromApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/plant/planted/${id}`);
  return response;
};
