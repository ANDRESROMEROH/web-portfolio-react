import axios from 'axios';

export default class BaseService {
    baseUrl;
    timeout;
    headers;
    client;

    constructor(baseUrl) {
        this.baseUrl = this.initUrl(baseUrl);
        this.timeout = 5000; // 5s by default for now
        this.headers = {};
        this.client = axios.create({
            baseURL: this.baseUrl,
            timeout: this.timeout,
            headers: this.headers
        });
    }

    initUrl(baseUrl) {
        if (process.env.NODE_ENV === 'development') {
            return `http://localhost:5000/api/v1${baseUrl}`;
        } else { // if not dev -> prod :D
            return `https://andresromero-dev.herokuapp.com/api/v1${baseUrl}`;
        }
    }
}