import axios from "axios";

export const getCategories = ({ commit }) => {
    axios.get('/admin/category/get-category')
        .then((response) => {
            console.log(response.data.data);
            commit('SET_CATEGORIES', response.data.data);
        })
        .catch((error) => {
            console.log(error);
        })
}

export const remove = ({ commit }, slug) => {
    axios.get(`/admin/category/remove-category/${slug}`)
        .then((response) => {
            commit('REMOVE_CATEGORY', response.data.data);
        })
        .catch((err) => {
            console.log(err);
        })

}