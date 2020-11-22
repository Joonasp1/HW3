<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <section class="main-container">
      <img v-for="post in posts" :src="post.image" alt="test" v-bind:key="post.id">
    </section>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  export default {
    components: {Header},
    computed: {
      posts: function (){
        return this.$store.getters.postGetter
      }
    }
  }


</script>

<style>

</style>