<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <section class="main-container"> <!--needs work-->
      <div v-for="profile in profiles" v-bind:key="profile.id">
        <div class="profile">
          <div class="profile-cropper">
            <img src={profile.avatar}>
          </div>
          <br>
          <b>{profile.firstname} {profile.lastname}</b>
          <br><br>
          <button type="button" name="follow" class="follow-button" id="profile.id" @click="followPressed(profile.id)">Follow</button>
        </div>
      </div>
    </section>
  </div>
</template>


<script>

import Header from "@/components/Header";
export default {
  components: {Header},
  computed: {
    profiles: function () {
      return this.$store.getters.profileGetter
    }
  },
  methods: {
    followPressed: function(id){
      let followbutton = document.getElementById("follow-button"+id);
      if(followbutton.classList.contains('followed')){
        followbutton.classList.remove('followed');
        followbutton.textContent = "Follow";
      }
      else{
        followbutton.classList.add('followed');
        followbutton.textContent = "Followed";
      }
}
  }
}

</script>

<style>

.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}

.profile {
  position:relative;
  width:48%;
  height:0;
  padding-bottom: 48%;
  float:left;
  text-align: center;
  vertical-align: middle;
  padding-top: 10px;
  padding-bottom: 225px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 5px;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
}

.profile-cropper {
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
}

.profile-cropper img {
  display: inline;
  margin: 0 auto;
  height:150%;
  width:auto;
}

.follow-button {
  color: white;
  background-color: rgb(128, 0, 143);
  border: 1px solid rgb(128, 0, 143);
  box-shadow: 0 0 5px rgba(128, 0, 143, 0.33);
}

.follow-button.followed {
  color: rgb(128, 0, 143);
  background-color: white;
  font-weight: bold;
  border: 1px solid rgb(128, 0, 143);
  box-shadow: 0 0 5px rgba(128, 0, 143, 0.33);
}

</style>