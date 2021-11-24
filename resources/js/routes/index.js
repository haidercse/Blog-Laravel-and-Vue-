import dashboard from "../components/backend/Dashboard.vue";
import category from "../components/backend/category/CategoryList.vue"
import addCategory from "../components/backend/category/CategoryAdd.vue"

export default [{
        path: '/admin/dashboard',
        component: dashboard,

    },
    {
        path: '/admin/category',
        component: category,

    },
    {
        path: '/admin/category/add-category',
        component: addCategory,

    },
]