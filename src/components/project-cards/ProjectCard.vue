<template>
    <div class="project-card">
        <project-card-glider :project-images="projectInfo.images" :index="index"></project-card-glider>
        <h3 class="project-card__title">
            {{ projectInfo.title }}
        </h3>
        <p class="project-card__description">
            {{ projectInfo.description }}
        </p>

    </div>
</template>
  
<script>
    import ProjectCardGlider from "./ProjectCardGlider.vue"

    export default {
        name: "ProjectCard",
        props: {
            projectInfo: {
                type: Object,
                required: true
            },
            index: {
                type: Number,
                required: true
            }
        },
        components: {
            ProjectCardGlider
        }
    };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  