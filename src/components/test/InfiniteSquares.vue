<template>
    <div class="squares-container">
      <div
        v-for="(square, index) in squares"
        :key="index"
        class="square"
        :style="{ backgroundColor: square.color }"
        ref="squares"
      ></div>
      <!-- Intersection observer target -->
      <div ref="observer" class="observer-target"></div>
    </div>
</template>
  
<script>
  export default {
    name: 'InfiniteSquares',
    data() {
      return {
        squares: [],
        observer: null,
        colors: [
          '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
          '#D4A5A5', '#9B59B6', '#3498DB', '#E74C3C', '#2ECC71'
        ]
      }
    },
    mounted() {
      // Initialize with some squares
      this.addSquares(10)
      
      // Set up intersection observer
      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            this.addSquares(5)
          }
        },
        {
          rootMargin: '100px'
        }
      )
      
      // Start observing
      this.observer.observe(this.$refs.observer)
    },
    beforeUnmount() {
      // Clean up observer
      if (this.observer) {
        this.observer.disconnect()
      }
    },
    methods: {
      getRandomColor() {
        return this.colors[Math.floor(Math.random() * this.colors.length)]
      },
      addSquares(count) {
        for (let i = 0; i < count; i++) {
          this.squares.push({
            color: this.getRandomColor()
          })
        }
      }
    }
  }
</script>
  
<style scoped>
  .squares-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
  }
  
  .square {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .square:hover {
    transform: scale(1.05);
  }
  
  .observer-target {
    width: 100%;
    height: 20px;
  }
</style>