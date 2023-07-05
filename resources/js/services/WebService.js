import { web } from '../axios/config.js'

const WebService = {
    read: async path => {
        const response = await web.get(path)
        return response.data
    },

    create: async (path, data) => {
        const response = await web.post(path, data);
        //'/api/user/auth/signin'
        return response.data
    },
}

export {
    WebService
}
