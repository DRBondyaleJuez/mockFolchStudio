<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <header-view></header-view>
  <inverting-text></inverting-text>
  <infinite-squares></infinite-squares>
  <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import HeaderView from "./components/HeaderView.vue";
import InfiniteSquares from "./components/test/InfiniteSquares.vue";
import InvertingText from "./components/test/InvertingText.vue";

export default {
  name: "App",
  components: {
    HeaderView,
    InfiniteSquares,
    InvertingText
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
