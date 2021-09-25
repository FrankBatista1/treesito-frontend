import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getTreesFromApi = async () => {
  const response = await axios.get(`${apiUrl}/trees`);
  return response;
}

export const getSingleTreeFromApi = async (id) => {
  const response = await axios.get(`${apiUrl}/trees/tree/${id}`);
  return response;
}

export const postTreeToApi = async (tree) => {
  const response = await axios.post(`${apiUrl}/trees/tree`, tree);
  return response;
}


export const updateTreeToApi = async (tree) => {
  const response = await axios.put(`${apiUrl}/trees/tree/${tree._id}`, tree)
  return response;
}

export const deleteTreeFromApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/trees/tree/${id}`);
  return response;
}