<template>

  <header-view></header-view>
  <video-interactive-display></video-interactive-display>
  <div class="main-description">
    <p>
      We are a multidisciplinary design studio working on innovative solutions with a human touch. Our expertise spans design research, speculative design, interaction and product design, service and game design, augmented and virtual reality and AI.
    </p>
    <p>
      Our team combine tech and design to create the best solutions for users, whether it's an app, service or product idea.
    </p>
    <p>
      We work on things that are not real for no good reason, and we make sh*t happen.  
    </p>
  </div>
  <div class="space"></div>
  <div class="projects-section">
    <h2 class="projects-section__title">Projects</h2>
    <project-cards-view></project-cards-view>
  </div>
  <!--<inverting-text></inverting-text>
  <infinite-squares></infinite-squares>
  <HelloWorld msg="Welcome to Your Vue.js App" />-->
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import HeaderView from "./components/HeaderView.vue";
//import InfiniteSquares from "./components/test/InfiniteSquares.vue";
//import InvertingText from "./components/test/InvertingText.vue";
import VideoInteractiveDisplay from "./components/VideoInteractiveDisplay.vue";
import ProjectCardsView from "./components/project-cards/ProjectCardsView.vue";

export default {
  name: "App",
  components: {
    HeaderView,
    VideoInteractiveDisplay,
    ProjectCardsView
  },
};
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/

@import './assets/css/style.css';
</style>
