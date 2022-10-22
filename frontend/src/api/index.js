import axios from 'axios';

// const API = axios.create({baseURL:'http://localhost:5000'})
const API = axios.create({baseURL:process.env.CONNECTION_URL})

export const SubmitPic = (room, user, picData) => API.post(`/SubmitPic?room=${room}&user=${user}`, picData);
// export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
