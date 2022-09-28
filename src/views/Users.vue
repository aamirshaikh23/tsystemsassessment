<template>
  <div class="home">
    <Header @searched="filterFromSearch" />

    <div class="main-title">
      Top Users
    </div>

    <div class="container-fluid my-5">
      <div class="box">
        <div v-for="user in user_data" :key="user.id">

            <img v-if="user.avatar_url" class="user-img" :src="user.avatar_url">
            <img v-else class="user-img" src="../assets/duck.svg">

            <span class="user-name" @click="routeToUserDetails(user)">{{user.login}}</span>
            <a :href="user.html_url" class="user-url"><i class="fa fa-link" aria-hidden="true"></i> github</a>

          </div>
        </div>
      </div>
      <div class="box not-found" v-show="user_data.length == 0">
        Users not found
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';

import axios from "axios";

export default {
  name: "Users",
  components: {
    Header
  },
  mounted() {
    var inside = this;

    axios
      .get("https://api.github.com/users?per_page=8")
      .then(function(response) {
        inside.user_data_actual = response.data;
        inside.user_data = response.data;
      })
      .catch(function(error) {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  },
  data() {
    return {
      user_data_actual: [],
      user_data: [],
      search: { text: "" },
    };
  },
  methods: {
    routeToUserDetails(user) {
      // This is just for showing vuex use
      this.$store.commit('changeImg',user.avatar_url);
      this.$router.push(`/${user.login}`, );
    },
    
    filterFromSearch(text) {
      this.user_data = this.user_data_actual.filter(function(user) {
        if (
          user.login
            .toLowerCase()
            .indexOf(text.toLowerCase()) != "-1"
        ) {
          return user;
        }
      });
    },
  },
};
</script>

<style scoped  lang="scss">
@import "../styles/main.scss";
</style>