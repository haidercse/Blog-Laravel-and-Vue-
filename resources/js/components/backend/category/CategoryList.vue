<template>
  <div class="mt-3">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <div class="d-flex justify-content-between">
              <h3>Category List</h3>
              <router-link
                to="/admin/category/add-category"
                class="btn btn-sm btn-info"
                ><i class="fas fa-plus-circle"> Add Category</i></router-link
              >
            </div>
          </div>
          <div class="card-body">
            <table class="table table-striped table-border">
              <thead>
                <tr>
                  <th scope="col">
                    <input type="checkbox">
                  </th>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Slug</th>
                  <th scope="col">Created At</th>
                   <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(category, index) in categories" :key="index">
                  <th scope="row">
                     <input type="checkbox" :value="category.id" v-model="categoryIds">
                  </th>
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ category.name }}</td>
                  <td>{{ category.slug }}</td>
                  <td>{{ category.created_at | time }}</td>
                  <td><span :class="statusColor(category.status)"> {{ statusName(category.status)   }}</span></td>
                  <td>
                    <router-link :to="`/admin/category/edit-category/${category.slug}`" class="btn btn-success btn-sm">Edit</router-link>
                    <button type="button" class="btn btn-danger btn-sm" @click.prevent="removeCategory(category.slug)">Delete</button>
                  </td>
                </tr>
                <tr  v-if="categoriesLength == 0">
                  <td colspan="6">
                     <h2 class=" text-center text-danger mt-3">There is no any Data in this table!!</h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data(){
    return{
      categoryIds : [],
    }
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    ...mapActions(["getCategories","remove"]),
    statusName(status){
       let data = {
         0 : 'Inactive',
         1 : 'Active',
       }

       return data[status];
    },
    statusColor(status){
       let data = {
         0 : 'badge badge-danger',
         1 : 'badge  badge-success',
       }

       return data[status];
    },

    removeCategory(slug){
        this.$swal({
        title: 'Are you sure?',
        text: 'You can\'t revert your action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes Delete it!',
        cancelButtonText: 'No, Keep it!',
        showCloseButton: true,
        showLoaderOnConfirm: true
    }).then((result) => {
        if (result.value) {
           this.remove(slug);
            this.$swal('Deleted', 'You successfully deleted this file', 'success')
        } else {
            this.$swal('Cancelled', 'Your file is still intact', 'info')
        }
    })
  
       
    }
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories.categories,
     ...mapGetters(['categoriesLength'])
    }),
  },
};
</script>

<style>
</style>