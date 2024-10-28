<template>
    <div class="project-card__glider">
        <div :class="`glide-${index}`">
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                     <!--<li class="glide__slide">0</li>
                    <li class="glide__slide">1</li>
                    <li class="glide__slide">2</li>--> 

                    <div v-for="(projectImage, index) in projectImages" :key="index">

                    <li class="glide__slide">
                            <img
                            class="glide-project-image"
                            :src="projectImage"
                            :alt="`Project_Image_${index + 1}`"
                            >
                        </li>
                        
                    </div>
                </ul>
                <div class="glide__bullets" data-glide-el="controls[nav]">
                    <button v-for="(projectImage, index) in projectImages" :key="index" class="glide__bullet" :data-glide-dir="`=${index}`"></button>
                  </div>
            </div>
            <div class="glide__arrows" data-glide-el="controls">
                <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
              </div>
        </div>   
    </div>
</template>

<script>
    import Glide from '@glidejs/glide'
    //import Glide, { Autoplay } from '@glidejs/glide/dist/glide.modular.esm'

    export default {
    name: "ProjectCardGlider",
    props: {
        projectImages: {
            type: Array,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    data() { 
        return {
        };
    },
    mounted() {
        this.setGlider();
    }, 
    methods: {
        setGlider() {
            const config = {
                type: 'carousel',
                startAt: 0,
                perView: 1,
                autoplay: 2000,
                gap: 0

            }
            let currentGlide = new Glide('.glide-'+this.index, config).mount({})
            currentGlide.pause();

            // Add event listeners to handle hover behavior
            const glideElement = document.querySelector(`.glide-${this.index}`);

            // Pause on mouse enter (hover)
            glideElement.addEventListener('mouseover', () => {
                currentGlide.play(2000);
            });

            // Resume on mouse leave
            glideElement.addEventListener('mouseleave', () => {
                currentGlide.pause();
            });
        }
    }   
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import '@glidejs/glide/dist/css/glide.core.min.css';
</style>