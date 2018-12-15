import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID c15d03b5e5cd8cc8d5457411227606ca33947095734d1ffddb221bb268c09970'
   }

})