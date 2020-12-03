import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

/* Setting the default config */

// make axios.get("https://jsonplaceholder.typicode.com/post")
// to axios.get("/post")
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"
axios.defaults.headers.common["Authorization"] = "MIKE TOKEN"
axios.defaults.headers.post["Content-Type"] = "application/json"


axios.interceptors.request.use(request => {
    console.log("interceptor of HTTP request: ", request)
    // In your interceptor function here, you need to always return the request or the request config otherwise you're blocking the request.

    /* You can edit request here */
    
    return request
}, error => {
    console.log(error)
    /* we should also return promise reject error here so that we still forward it to our request. This make sense if you
    have some local task you want to do like show something on the UI but also globally, you want to log it in the log file which you send to a server or something like that.*/

    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    console.log("interceptor of HTTP response: ", response)
    /* You can edit response here */
    return response
}, error => {
    console.log(error)
    return Promise.reject(error)
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
