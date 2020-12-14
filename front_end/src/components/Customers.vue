<template>
  <div class="jumbotron">
    <button
      type="button"
      class="btn btn-primary"
      @click="addnewCustomer()"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Primary
    </button>

    <table class="table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.name }}</td>
          <td>{{ customer.address }}</td>
          <td>
            <button
              type="button"
              class="btn btn-outline-warning"
              @click.prevent="updateCustomer(customer)"
            >
              Edit
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="deleteCustomer(customer.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputName">Email address</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  v-model="name"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputAddress">Password</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputAddress"
                  placeholder="Enter Address"
                  v-model="address"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="submit()">
              Save changes
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
  name: "Customers",

  data() {
    return {
      customers: [],
      name: "",
      address: "",
      customerId: null,
    };
  },

  mounted() {
    this.getCustomers();
  },

  methods: {
    getCustomers() {
      this.axios.get("customers/get-all-customers").then((response) => {
        if (response.data) {
          this.customers = response.data;
        }
      });
    },

    openModal() {
      $("#customerModal").modal("show");
    },
    closeModal() {
      $("#customerModal").modal("hide");
    },

    addnewCustomer() {
      this.openModal();
    },

    updateCustomer(customer) {
      this.customerId = customer.id;
      this.name = customer.id;
      this.address = customer.address;

      this.openModal();
    },

    deleteCustomer(customerId) {
      this.axios
        .post("customers/delete-customer", {
          id: customerId,
        })
        .then((response) => {
          if (response.data) {
            this.customers = response.data;
          }
        });
    },

    submit() {
      let url = "";

      if (this.customerId != null) {
        url = "customers/update-customer";
      } else {
        url = "customers/add-new-customer";
      }
      this.axios
        .post(url, {
          id: this.customerId,
          name: this.name,
          address: this.address,
        })
        .then((response) => {
          if (response.data) {
            this.closeModal();
            this.getCustomers();
          }
        });
    },
  },
};
</script>

<style scoped>
</style>
