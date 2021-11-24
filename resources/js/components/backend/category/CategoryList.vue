<template>
  <div class="mt-3">
    <div class="row">
      <div class="col-md-10">
        <div class="card">
          <div class="card-header">
            <div class="d-flex justify-content-between">
                <h3>Category List</h3>
              <router-link to="/admin/category/add-category" class="btn btn-sm btn-info" ><i class="fas fa-plus-circle"> Add Category</i></router-link>
            </div>
          </div>
          <div class="card-body">
            <table class="table table-striped table-border">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
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
export default {};
</script>

<style>
</style>