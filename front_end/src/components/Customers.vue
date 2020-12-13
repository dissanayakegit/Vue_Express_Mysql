<template>
  <div class="hello">
    <pre>{{customers}}</pre>
  </div>
</template>

<script>

export default {
  name: "Customers",
  props: {
    msg: String,
  },

  data() {
    return {
      customers: []
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
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
