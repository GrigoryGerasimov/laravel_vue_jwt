const StorageService = {
    store(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    },

    read(key) {
        const fromLS = localStorage.getItem(key)
        return fromLS && JSON.parse(fromLS)
    },

    remove(key) {
        localStorage.removeItem(key)
    },

    clear() {
        localStorage.clear()
    },

    keyName(keyIndex) {
        localStorage.key(keyIndex)
    }
}

export {
    StorageService
}
