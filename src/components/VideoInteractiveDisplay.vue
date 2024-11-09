<template>
    <div class="video-interactive-display">
        <div class="media-wrapper">
            <multi-media-displayer
                :mediaItems = "mediaList"
                :autoPlayInterval="5000"
                :containerWidth="1000"
            ></multi-media-displayer>
        </div>
    </div>
</template>

<script>
import interactiveDisplayMediaList from '../assets/js/data/interactive-display-media-content.js';
import MultiMediaDisplayer from "./MultiMediaDisplayer.vue"

export default {
    name: "VideoInteractiveDisplay",
    components: {
        MultiMediaDisplayer
    },
    data() { 
        return {
            mediaList:interactiveDisplayMediaList
        };
    },
    /*
    mounted() {
        this.setMediaList();
    }, 
    methods: {
        setMediaList() {
            console.log("setting media list");
            console.log(VideoInteractiveDisplay.getMediaList);
            mediaList = VideoInteractiveDisplay.getMediaList();
        }
    }
    */

       
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>