<template>
  <div class="mt-3">
    <div class="row">
      <div class="col-md-10">
        <div class="card">
          <div class="card-header">
            <div class="d-flex justify-content-between">
              <h3>Category Add Form</h3>
              <router-link class="btn btn-sm btn-info" to="/admin/category"
                ><i class="fas fa-plus-circle">
                  Back Category List</i
                ></router-link
              >
            </div>
          </div>
          <div class="card-body">
            <form @submit.prevent="addCategory">
              <div class="form-group">
                <label for="exampleInputEmail1">Category Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Category Name"
                  v-model="form.name"
                />
                <div
                  class="text-danger font-weight-bold"
                  v-if="form.errors.has('name')"
                  v-html="form.errors.get('name')"
                />
              </div>

              <label for="exampleInputEmail1">Status</label>
              <br />
              <div class="form-group form-check form-check-inline">
                <input
                  type="radio"
                  class="form-check-input"
                  id="active"
                  value="1"
                  v-model="form.status"
                />

                <label class="form-check-label" for="active">Active</label>
              </div>
              <div class="form-group form-check form-check-inline">
                <input
                  type="radio"
                  class="form-check-input"
                  id="inactive"
                  value="0"
                  v-model="form.status"
                />

                <label class="form-check-label" for="inactive">InActive</label>
              </div>
              <div
                class="text-danger font-weight-bold"
                v-if="form.errors.has('status')"
                v-html="form.errors.get('status')"
              />

              <div class="d-flex justify-content-between">
                <button
                  type="submit"
                  :disabled="form.busy"
                  class="btn btn-primary"
                >
                  Add Category
                </button>
                <button type="reset" class="btn btn-sm btn-dark">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  background: "#00ff00",
  iconColor: "black",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
//v-form import
import { Form } from "vform";
import axios from "axios";

export default {
  data() {
    return {
      form: new Form({
        name: "",
        status: "",
      }),
    };
  },
  methods: {
    addCategory() {
      const test = this;
      this.form.post("/admin/add-category").then((response) => {
        // Toast.fire({
        //   icon: "success",
        //   title: "Category ha been added successfully!",
        // });
      this.$toasted.success('Category ha been added successfully!')
        test.form.name = null;
        test.form.status = null;
      });
    },
  },
};
</script>

<style>
</style>