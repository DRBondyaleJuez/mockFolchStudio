<template>
    <div class="project-card">
        <div class="project-card__glider">
        </div>
        <h3 class="project-card__title">
            {{ projectInfo.title }}
        </h3>
        <p class="project-card__description">
            {{ projectInfo.description }}
        </p>

    </div>
  </template>
  
  <script>
    export default {
        name: "HelloWorld",
        props: {
            projectInfo: {
                type: Object,
                required: true
            }
        }
    };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  