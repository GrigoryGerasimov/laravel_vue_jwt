import axios from 'axios'
import { ErrorHandlingService } from '../services/ErrorHandlingService.js'
import { TokenService, JWT } from '../services/TokenService.js'

const web = axios.create()
const api = axios.create()

api.interceptors.request.use(async config => {
    const { access_token, expires_by } = TokenService.read()

    if (access_token && expires_by && expires_by <= Date.now()) {
        const response = await axios.post('/api/auth/refresh', {}, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        })
        TokenService.store(response.data)
    }

    if (TokenService.read()[JWT.ACCESS_TOKEN]) {
        config.headers.authorization = `Bearer ${TokenService.read()[JWT.ACCESS_TOKEN]}`
    }

    return config
}, error => {
    ErrorHandlingService.log(error)
})

api.interceptors.response.use(config => {
    if (TokenService.read()[JWT.ACCESS_TOKEN]) {
        config.headers.authorization = `Bearer ${TokenService.read()[JWT.ACCESS_TOKEN]}`
    }

    return config
}, error => {
    ErrorHandlingService.log(error)
})

export {
    api,
    web
}
