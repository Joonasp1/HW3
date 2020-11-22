<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <section class="main-container">
      <ul v-for="post in posts" v-bind:key="post.id">
        <img :src="post.image" alt="test">
      </ul>
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