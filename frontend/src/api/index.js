import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'})
// const API = axios.create({baseURL:process.env.CONNECTION_URL})

export const SubmitPic = (room, playerName, picData) => API.get(`/picGame/SubmitPic?room=${room}&playerName=${playerName}&picData=${picData}`, );
//refactor picData to body
export const CheckNextRound = (round) => API.get(`/picGame/CheckNextRound?round=${round}`);

export const SimpleJoin = (playerName) => API.get(`/picGame/SimpleJoinRoom?player=${playerName}`);
export const SimpleCheck = () => API.get(`/picGame/SimpleCheckRoomStart`);
export const SimpleStart = () => API.get(`/picGame/SimpleStart`);
export const SimpleReset = () => API.get(`/picGame/SimpleReset`);
// export const fetchPosts = (page) => API.get(`/posts?page=${page}`);

