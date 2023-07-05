import { api } from '../axios/config.js'

const ApiService = {
    read: async path => {
        const response = await api.get(path)
        return response.data
    },

    create: async (path, data) => {
        const response = await api.post(path, data);
        return response.data
    }
}

export {
    ApiService
}
