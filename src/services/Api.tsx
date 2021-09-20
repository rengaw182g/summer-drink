import axios from "axios";

export const api = axios.create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1"
})

export const findName = async ({ name = "" }) => {
    try {
        const result = await api.get(`/search.php?s=${name}`);
        return result;
    } catch (err) {
        console.log(err);
    }
}

export const listCategory = async () => {
    try {
        const result = await api.get(`/list.php?c=list`);
        return result;
    } catch (err) {
        console.log(err);
    }
}

export const detailId = async ({ id = 0 }) => {
    try {
        const result = await api.get(`lookup.php?i=${id}`);
        return result;
    } catch (err) {
        console.log(err);
    }
}
