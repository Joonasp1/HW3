<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <section class="main-container"></section>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  export default {
    components: {Header},
  }
  //console.log(this.$store.getters.getTest())


</script>

<style>

</style>