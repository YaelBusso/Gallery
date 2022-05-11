import axios from 'axios';

// const API = axios.create({ baseURL: 'https://api.jsonbin.io/b/627b346c38be29676100ef94' });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//   }

//   return req;
// });

// export const fetchImage = (id) => API.get(`/images/${id}`);
// export const fetchImages = () => API.get(`/images`);
// export const createImage = (newPost) => API.post('/images', newPost);
// export const updateImage = (id, updatedPost) => API.patch(`/images/${id}`, updatedPost);
// export const deleteImage = (id) => API.delete(`/images/${id}`);
const SECRET_KEY = "$2b$10$mDDPw85Qhc8zycOFyr9mAuJaIqoqaLd9nDH0mBFhCHyybApT5BEve";
const TRY=process.env.REACT_APP_TRY;
console.log("SECRET_KEY: " + SECRET_KEY, "TRY: " + TRY);

export const fetchImages = () => axios({
    method: 'get',
    url: "https://api.jsonbin.io/b/627b346c38be29676100ef94",
    headers: {
        "Secret-Key": SECRET_KEY
    },
}).then(function (res) {
    console.log(res.data)
});