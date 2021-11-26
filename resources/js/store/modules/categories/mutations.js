export const SET_CATEGORIES = (state, categories) => {
    state.categories = categories;
}

export const REMOVE_CATEGORY = (state, category) => {
    state.categories = state.categories.filter((item) => {

        return item.id != category.id;
    })
}