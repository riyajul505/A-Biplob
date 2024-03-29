export const loadFromLocalStorage = (keyname) => {
    const data = JSON.parse(localStorage.getItem(`${keyname}`)) ||[];

    return data;
}