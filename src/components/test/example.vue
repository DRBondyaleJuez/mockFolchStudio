<template>
    <div>
      <!-- Props usage -->
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
  
      <!-- Using Data and Computed properties -->
      <p>Count: {{ count }}</p>
      <p>Double Count (computed): {{ doubleCount }}</p>
  
      <!-- Using v-model and Methods -->
      <input v-model="message" placeholder="Type something...">
      <button @click="incrementCount">Increment Count</button>
      <button @click="resetCount">Reset Count</button>
  
      <!-- Using Refs -->
      <button ref="resetBtn" @click="resetCount">Reset Count via Ref</button>
  
      <!-- Watching a specific data property -->
      <p>Last Message: {{ lastMessage }}</p>
  
      <!-- DOM element interaction via ref -->
      <button @click="focusInput">Focus Input Field</button>
      <input ref="messageInput" type="text" placeholder="This will be focused">
    </div>
  </template>
  
  <script>
  export default {
    // Props passed from parent component
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        default: 'No description provided'
      }
    },
  
    // Component Data
    data() {
      return {
        count: 0,
        message: '',
        lastMessage: ''
      };
    },
  
    // Computed properties that are derived from other data
    computed: {
      doubleCount() {
        return this.count * 2;
      }
    },
  
    // Watchers to react to data changes
    watch: {
      message(newVal, oldVal) {
        this.lastMessage = oldVal;
      }
    },
  
    // Methods (functions related to component logic)
    methods: {
      incrementCount() {
        this.count++;
      },
      resetCount() {
        this.count = 0;
      },
      // Example of using a ref() to manipulate DOM directly
      focusInput() {
        this.$refs.messageInput.focus();
      }
    },
  
    // Lifecycle Hooks - Mounted and Created
    created() {
      console.log('Component Created');
    },
    mounted() {
      console.log('Component Mounted');
      // Focus the input field on mount
      this.$refs.messageInput.focus();
    }
  };
  </script>
  
  <style scoped>
  /* Scoped CSS to style only within this component */
  button {
    margin-top: 10px;
    padding: 5px;
    font-size: 16px;
  }
  </style>
  