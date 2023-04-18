function load(key) {
    var val = localStorage.getItem(key)
    return (val) ? JSON.parse(val) : null
}


function remove(key) {
    var val = localStorage.removeItem(key)
    return (val) ? JSON.parse(val) : null
}





function store(key, val) {
    localStorage[key] = JSON.stringify(val)
}


export const storageService = {
    load,
    store,
    remove
}