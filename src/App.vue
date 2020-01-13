<template>
  <div id="app">There should be no vue-router warnings in the console</div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$router.resolve({
      fullPath: "/foo",
      path: "/foo",
      name: "route__1",
      params: { pathMatch: "terms" },
      query: {}
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
