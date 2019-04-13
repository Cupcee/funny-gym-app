import axios from 'axios';

const URL = 'http://localhost:3000';

export function getSetsById(id) {
    return axios.get(`${URL}/gymsets/${id}`);
}

export function getSetByDay(id, day) {
    return axios.get(`${URL}/gymsets/?userId=${id}&day=${day}`);
}