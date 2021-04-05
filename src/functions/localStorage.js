function setLocalStorage(identifier, data) {
    localStorage.setItem(identifier, JSON.stringify(data));
    return 'Success.';
}

function getLocalStorage(identifier) {
    let data = localStorage.getItem(identifier);
    return JSON.parse(data);
}

export { setLocalStorage, getLocalStorage };
