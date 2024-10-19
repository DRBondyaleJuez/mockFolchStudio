<template>
    <div class="inverting-text-component">
        <!-- Fixed text wrapper -->
        <div class="text-wrapper">
            <h1 class="inverting-text" :style="textStyles">
                {{ text }}
            </h1>
        </div>

        <!-- Scrolling sections -->
        <div class="sections-container">
            <div v-for="(section, index) in sections" :key="index" class="section" :style="getSectionStyle(section)">
                <span v-if="showLabels" class="section-label">
                    {{ section.label }}
                </span>
                <!-- Slot for custom content in each section -->
                <slot :name="`section-${index}`">
                    <div class="default-content">
                        <h2>Section {{ index + 1 }}</h2>
                        <p>{{ section.label }}</p>
                    </div>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InvertingText',

    props: {
        // Main text to display
        text: {
            type: String,
            default: 'FIXED TEXT'
        },
        // Font size for the main text
        fontSize: {
            type: String,
            default: '5rem'
        },
        // Show section labels
        showLabels: {
            type: Boolean,
            default: true
        },
        // Custom sections array
        customSections: {
            type: Array,
            default: () => []
        }
    },

    data() {
        return {
            // Default sections if none provided
            defaultSections: [
                { background: '#000000', label: 'Black Background' },
                { background: '#ffffff', label: 'White Background' },
                { background: '#ff0000', label: 'Red Background' },
                { background: '#00ff00', label: 'Green Background' },
                { background: '#0000ff', label: 'Blue Background' },
                {
                    background: 'linear-gradient(90deg, #ff0000 0%, #00ff00 50%, #0000ff 100%)',
                    label: 'Gradient Background'
                }
            ]
        }
    },

    computed: {
        // Combine default and custom sections
        sections() {
            return this.customSections.length > 0 ? this.customSections : this.defaultSections
        },

        // Computed styles for the text
        textStyles() {
            return {
                fontSize: this.fontSize
            }
        }
    },

    methods: {
        // Generate styles for each section
        getSectionStyle(section) {
            return {
                background: section.background
            }
        }
    }
}
</script>

<style scoped>
.inverting-text-component {
    position: relative;
    width: 100%;
}

.text-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    mix-blend-mode: difference;
}

.inverting-text {
    font-family: Arial, sans-serif;
    font-weight: 900;
    margin: 0;
    padding: 0;
    color: white;
    text-align: center;
}

.section {
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.section-label {
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-family: Arial, sans-serif;
    font-size: 1rem;
    color: white;
    mix-blend-mode: difference;
}

.default-content {
    color: white;
    mix-blend-mode: difference;
    text-align: center;
}
</style>