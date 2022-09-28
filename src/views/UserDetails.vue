<template>
  <div class="home">
    <Header />

    <div class="scroller">
      <button class="back-btn" @click="goBack()"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
    
    <img v-if="avatar" class="user-img" :src="avatar">
    <img v-else class="user-det-img" src="../assets/duck.svg">
    <span class="user-det-name">{{user}}</span>
    <div class="repo-margin">
      <div class="display-flex " v-for="repo in repo_data" :key="repo.id">
        <div class="flex-6">
          <a :href="repo.html_url">{{repo.name}}</a>
        </div>
        <div class="flex-1">
          <i class="fa fa-binoculars" aria-hidden="true"></i> {{repo.watchers_count}}
        </div>
        <div class="flex-1">
          <i class="fa fa-star" aria-hidden="true"></i> {{repo.stargazers_count}}
        </div>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import axios from "axios";

export default {
  name: 'home',
  components: {
    Header
  },
  mounted() {
    // eslint-disable-next-line no-console
    this.avatar = this.$store.state.user_avatar;
    this.user = this.$route.params.username;
    let inside = this;
    axios
      .get(`https://api.github.com/users/${this.user}/repos`)
      .then(function(response) {
        // eslint-disable-next-line no-console
        console.log(response.data);

        inside.repo_data = response.data;
      })
      .catch(function(error) {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  },
  data() {
    return {
      user: '',
      avatar: '',
      repo_data: []
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped  lang="scss">
  @import "../styles/main.scss";
</style>
