import axios from 'axios'

const api=axios.create({
    baseURL:'https://thinkboard-frontend-vug8.onrender.com/s'
})

export default api;