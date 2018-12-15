import axios from 'axios';


const KEY = 'AIzaSyC7451DpqBpn3oba84CCJe6QF78qfo78Dk';

export default axios.create ({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})