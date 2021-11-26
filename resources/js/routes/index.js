import dashboard from "../components/backend/Dashboard.vue";
import category from "../components/backend/category/CategoryList.vue"
import addCategory from "../components/backend/category/CategoryAdd.vue"
import editCategory from "../components/backend/category/CategoryEdit.vue"

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
    {
        path: '/admin/category/edit-category/:id',
        component: editCategory,
        //props: true,

    },
]