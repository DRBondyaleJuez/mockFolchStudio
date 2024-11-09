<template>
    <div class="project-cards-view">
        <div v-for="(projectItem, index) in projectList" :key="index">
            <project-card :project-info=projectItem :index="index"></project-card>
        </div>
    </div>
</template>
  
<script>
    import ProjectCard from "./ProjectCard.vue"
    import projectsInfoAndMediaList from '../../assets/js/data/projects-info-and-media-list';

  export default {
    name: "ProjectCardsView",
    components: {
        ProjectCard
    },
    data() { 
        return {
            projectList: projectsInfoAndMediaList
            
            /*[
                { title: 'Music Videos', 
                description: 'Record, direct, film and produce music videos', 
                images: [
                    "/assets/static/interactive-display-media-content/logo.jpg",
                    "/assets/static/interactive-display-media-content/janik-charles-my-vibe.jpg",
                    "/assets/static/interactive-display-media-content/ar-filters.jpg"
                ]  },
                { title: 'Videogames', 
                description: 'Design, develop and program videogames', 
                images: [
                    "/assets/static/interactive-display-media-content/logo.jpg",
                    "/assets/static/interactive-display-media-content/janik-charles-my-vibe.jpg",
                    "/assets/static/interactive-display-media-content/ar-filters.jpg"
                ]  },
                { title: 'Music Videos', 
                description: 'Record, direct, film and produce music videos', 
                images: [
                    "/assets/static/interactive-display-media-content/logo.jpg",
                    "/assets/static/interactive-display-media-content/janik-charles-my-vibe.jpg",
                    "/assets/static/interactive-display-media-content/ar-filters.jpg"
                ]  },
                { title: 'Videogames', 
                description: 'Design, develop and program videogames', 
                images: [
                    "/assets/static/interactive-display-media-content/logo.jpg",
                    "/assets/static/interactive-display-media-content/janik-charles-my-vibe.jpg",
                    "/assets/static/interactive-display-media-content/ar-filters.jpg"
                ]  },
            ]*/
        };
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  