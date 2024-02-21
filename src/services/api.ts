import axios from "axios";

const baseURL = "http://localhost:3000/trpc/";
// const baseURL = 'https://jsonplaceholder.typicode.com';
const api = axios.create({
  baseURL,
});

// // Invoking get method to perform a GET request
// export const fetchUser = async () => {
//   const url = `${baseUrl}/job.list`;
//   const response = await axios.get(url);
//   console.log(response.data);
// };

export const fetchJobs = async () => {
  try {
    const response = await api.get("/job.list");
    const list = response.data.result.data.data; // if you want access other properties change data
    // console.log(data);
    return list;
  } catch (error) {
    console.error("Error fetching Jobs:", error);
    throw error;
  }
};

export const fetchCandidates = async () => {
  try {
    const response = await api.get("/candidate.list");
    const list = response.data.result.data.data; // if you want access other properties change data
    return list;
  } catch (error) {
    console.error("Error fetching candidates:", error);
    throw error;
  }
};
