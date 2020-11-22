<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <section class="main-container">
      <div v-for="post in posts" v-bind:key="post.id">
        <div class="post">
          <div class="post-author">
            <span class="post-author-info">
            <img :src="post.author.avatar" alt="Post author">
            <small>{{post.author.firstname}} {{post.author.lastname}}</small>
            </span>
            <small>{{post.createTime}}</small>
          </div>
          <div v-if="post.media != null">
            <div v-if="post.media.type == 'image'" class="post-image">
              <img :src="post.media.url" alt="">
            </div>
            <div v-if="post.media.type == 'video'" class="post-image">
              <video controls>
                <source :src="post.media.url" type="video/mp4">
              </video>
            </div>
          </div>
          <div class="post-title">
            <h3 v-if="post.text != null">{{post.text}}</h3>
          </div>
          <div class="post-actions">
            <button type="button" name="like" class="like-button" id="like-button" @click="likePressed(post.id)">{{post.likes | capitalizeLikes}}</button>
          </div>
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
    posts: function () {
      return this.$store.getters.postGetter
    }
  },
  filters: {
    capitalizeLikes: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    },
    methods: {

      likePressed: function (id) {

        let likebutton = document.getElementById(id);

        if (likebutton.classList.contains('liked')) {

          likebutton.classList.remove('liked');

        } else {

          likebutton.classList.add('liked');

        }

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

.post {
  width: 80%;
  margin: 15px auto;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5px;
}

.post .post-author {
  padding: 10px;
}

.post .post-author::after {
  content: "";
  display: block;
  clear: both;
}

.post .post-author .post-author-info {
  float: left;
  position: relative;
  width: 50%;
}

.post .post-author .post-author-info img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.post .post-author .post-author-info small {
  position: absolute;
  top: 10px;
  left: 35px;
}

.post .post-author .post-author-info + small {
  float: right;
  color: grey;
  padding: 10px;
}

.post .post-image img, video {
  width: 100%;
  min-height: 150px;
  max-height: 350px;
  object-fit: cover;
  object-position: top center;
}

.post .post-title {
  padding: 10px;
}

.post .post-title h3 {
  display: inline;
}

.post .post-title ~ .post-actions {
  padding: 10px;
}

.like-button {
  background-image: url(../assets/like.png);
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 5px center;
  background-color: #8a8a8a;
  width: 60px;
  height: 25px;
  padding-left: 23px;
  line-height: 10px;
  text-align: left;
  border: none;
}

.like-button.liked {
  background-color: #01579b;
}

</style>