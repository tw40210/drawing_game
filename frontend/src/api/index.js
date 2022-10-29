import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'})
// const API = axios.create({baseURL:process.env.CONNECTION_URL})

export const SubmitPic = (room, user, picData) => API.get(`/SubmitPic?room=${room}&user=${user}`, picData);
export const SimpleJoin = (playerName) => API.get(`/picGame/SimpleJoinRoom?player=${playerName}`);
export const SimpleCheck = () => API.get(`/picGame/SimpleCheckRoomStart`);
export const SimpleStart = () => API.get(`/picGame/SimpleStart`);
export const SimpleReset = () => API.get(`/picGame/SimpleReset`);
// export const fetchPosts = (page) => API.get(`/posts?page=${page}`);

