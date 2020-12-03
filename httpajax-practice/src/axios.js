import axios from 'axios'

// this .create(), creates a instance of axios, like a copy of the axios object and you can create multiple such copies.
const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

// this is overwrite the default setting in index.js 
instance.defaults.headers.common['Authorization'] = "MIKE TOKEN INSTANCE"

export default instance;