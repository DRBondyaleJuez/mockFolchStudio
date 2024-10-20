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
//import VideoInteractiveDisplay from '../utils/video-interactive-display.js';
import MultiMediaDisplayer from "./MultiMediaDisplayer.vue"

export default {
    name: "HeaderView",
    components: {
        MultiMediaDisplayer
    },
    data() { 
        return {
            mediaList:[
                { type: 'image', url: "/assets/static/interactive-display-media-content/logo.jpg" },
                { type: 'image', url:"/assets/static/interactive-display-media-content/janik-charles-my-vibe.jpg" },
                { type: 'image', url: "/assets/static/interactive-display-media-content/ar-filters.jpg" },
                { type: 'gif', url: "/assets/static/interactive-display-media-content/innovation-spin.gif" },
                { type: 'video', url: "/assets/static/interactive-display-media-content/time-is-relative.mp4" },
                { type: 'image', url: "/assets/static/interactive-display-media-content/xoxo.jpg"}
            ]
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