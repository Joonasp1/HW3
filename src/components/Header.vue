<template>
  <div>
    <header>
      <nav>
        <div class="logo-container">
            <img src="../assets/logo.png" alt="postIt">
        </div>
        <div class="search-container">
          <input type="text" name="search">
          <button type="button">Search</button>
        </div>
        <div  class="avatar-container">
          <img @click=toggleShowDropDown() src="../assets/avatar.png" alt="Me" class="avatar" id="avatar">
        </div>
      </nav>
    </header>
    <div class="drop-down-menu" id="drop-down-menu">
      <div id="name">Nimi</div>
      <div id="email">Meil</div>
      <hr>
      <router-link v-bind:to="'/Browse'">
        <div @click=toggleShowDropDown() class="hyperlink">Browse</div>
      </router-link>
      <hr>
      <router-link v-bind:to="'/'">
        <div @click=toggleShowDropDown() class="hyperlink">Log Out</div>
      </router-link>
    </div>
  </div>
</template>

<script>

let showingDropdown = false;

export default {
  name: "Header",
  components: {},
  methods: {
    toggleShowDropDown: function () {
      if (showingDropdown) {
        document.getElementById("drop-down-menu").style.display = "none";
        showingDropdown = false;
      } else {
        document.getElementById("drop-down-menu").style.display = "block";
        showingDropdown = true;
      }
    }
  }
}
</script>

<style>

button {
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  background-color: #01579b;
  border: none;
  border-radius: 4px;
}

button:hover {
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
}

header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
}

header:hover {
  box-shadow: 0 -20px 30px #4d4d4d;
}

nav {
  display: flex;
  background-color: #ffffff;
  align-items: center;
}

nav div {
  height: 30px;
  flex-grow: 4;
  padding: 10px;
}

nav div img {
  height: 100%;
  width: 30px;
  margin-left: 15px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top center;
}

nav div.search-container > input {
  box-sizing: border-box;
  height: 30px;
  width: 80%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
}

nav div.search-container > button {
  height: 30px;
  width: 20%;
  margin: 0;
  padding: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

nav div.avatar-container {
  margin-right: 15px;
  text-align: right;
}

#avatar:hover {
  cursor: pointer;
}

.drop-down-menu {
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 2;
  width: 18%;
  padding: 20px;
  padding-top: 60px;
  background-color: white;
  display: none;
}

.drop-down-menu:hover {
  box-shadow: 0 -10px 20px #4d4d4d;
}

.hyperlink {
  color: #0277bd;
  text-decoration: underline;
}

.hyperlink:hover {
  cursor: pointer;
}

</style>