import axios from 'axios'

const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'https://medcab-backend-test.herokuapp.com/api/auth',
        headers:{
            Authorization: token
        }
    })
}

export default axiosWithAuth;