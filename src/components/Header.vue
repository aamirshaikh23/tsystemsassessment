<template>
    <nav class="navbar bg-dark ">
      <a class="navbar-brand" @click="routeToHome()"><img class="github-header" src="../assets/github-icon.svg"> Github Userboard</a>
      <form class="form-inline" v-show="this.current_route == '/'">
      <i class="fa fa-search" aria-hidden="true"></i>
      <input @input="search_text()" v-model="search.text" class="form-control mr-sm-2" type="text" aria-label="Search" />
    </form>
    </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      search: { text: "" },
      current_route: ""
    };
  },
  created() {
    this.current_route = this.$router.currentRoute.path;
    // eslint-disable-next-line no-console
    console.log('mcr',this.current_route);
  },
  methods: {
    search_text() {
      this.$store.commit('searchableText', this.search.text);
      this.$emit("searched", this.search.text);
    },
    routeToHome() {
        this.$router.push('/');
    }
  },
};
</script>

<style scoped  lang="scss">
@import "../styles/header.scss";
</style>
