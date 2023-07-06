import { web } from '../axios/config.js'

const WebService = {
    receive: async path => {
        const response = await web.get(path)
        return response.data
    },

    send: async (path, data) => {
        const response = await web.post(path, data);
        return response.data
    },
}

export {
    WebService
}
