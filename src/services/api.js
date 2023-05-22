import axios from 'axios'

const apiCodeBurger = axios.create({
    baseURL: 'http://localhost:301'
})

export default apiCodeBurger