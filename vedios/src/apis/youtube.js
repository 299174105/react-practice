import axios from 'axios';
const KEY = 'AIzaSyDckXE0rB3o9XeBXR5Ue1Xfs_Y34JlLHdE';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxReasults:5,
        key:KEY
    }
})