<template>
  <div class="drop-down-menu" id="drop-down">
    <div id="name">Nimi</div>
    <div id="email">Meil</div>
    <hr>
    <a href="browse.html">
      <div class="hyperlink">Browse</div>
    </a>
    <hr>
    <a href="login.html">
      <div class="hyperlink">Log Out</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
}
</script>

<style scoped>
  .drop-down-menu {
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 2;
    width: 18%;
    padding: 20px;
    padding-top: 60px;
    background-color: white;
    /*display: none;*/
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