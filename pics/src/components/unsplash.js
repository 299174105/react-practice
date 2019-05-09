import axios from 'axios';

export default axios.create({

    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization: "Client-ID 95d906c2caa5c8963719f31d4affc6736bb22b5ea6ded89bffea5eed9ee90285"
    }
});