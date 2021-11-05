import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quize-fa158-default-rtdb.firebaseio.com/'
})