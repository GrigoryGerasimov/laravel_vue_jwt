import { StorageService } from './StorageService.js'

const JWT = {
    ACCESS_TOKEN: 'access_token',
    TOKEN_TYPE: 'token_type',
    EXPIRES_IN: 'expires_in',
    EXPIRES_BY: 'expires_by'
}

const TokenService = {
    store(token) {
        StorageService.store(JWT.ACCESS_TOKEN, token[JWT.ACCESS_TOKEN])
        StorageService.store(JWT.TOKEN_TYPE, token[JWT.TOKEN_TYPE])
        StorageService.store(JWT.EXPIRES_BY, Date.now() + token[JWT.EXPIRES_IN] * 1000)
    },

    read() {
        return {
            [JWT.ACCESS_TOKEN]: StorageService.read(JWT.ACCESS_TOKEN),
            [JWT.TOKEN_TYPE]: StorageService.read(JWT.TOKEN_TYPE),
            [JWT.EXPIRES_BY]: StorageService.read(JWT.EXPIRES_BY)
        }
    }
}

export {
    TokenService
}
