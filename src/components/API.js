import axios from 'axios';

const API = axios.create({baseURL:'http://datamall2.mytransport.sg/ltaodataservice'});

export default API;