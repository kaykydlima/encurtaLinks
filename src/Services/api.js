import axios from "axios";

export const key = "a8c867c27dc23327f62eadceb01aa8d236238d84";

const api = axios.create({
    baseURL:'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
});

export default api;