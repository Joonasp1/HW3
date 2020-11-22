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
  components: {Header}
}

import axios from 'axios'


async function getProfiles() {
  const response = await axios ({
    url: "https://private-anon-35a9ef575f-wad20postit.apiary-mock.com/profiles",
    method: "GET"
  })
  console.log(response.data)
  return response.data
}
getProfiles()
//const profiles = getProfiles() See läheb kasutusele

</script>

<style>

</style>