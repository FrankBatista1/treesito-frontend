import axios from "axios";

const apiUrl = 'http://localhost:5000/api';

export const getTreesFromApi = async () => {
  const response = await axios.get(`${apiUrl}/plants`);
  return response;
};

export const getSingleTreeFromApi = async (id) => {
  const response = await axios.get(`${apiUrl}/plants/planted/${id}`);
  return response;
};

export const postTreeToApi = async (tree) => {
  const response = await axios.post(`${apiUrl}/plants/planted/`, tree);
  return response;
};

export const updateTreeToApi = async (tree) => {
  const response = await axios.put(`${apiUrl}/plants/planted/${tree._id}`, tree);
  return response;
};

export const deleteTreeFromApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/plants/planted/${id}`);
  return response;
};
