import axios from 'axios'

export const apiService = axios.create({
    baseURL: 'http://localhost:3001/users',
    headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
    }
})

