<template>
  <div>
    <navbar/>

    <div>
      <RouterView></RouterView>
    </div>

    <foter/>
  </div>
</template>

<script setup>
import navbar from './components/navBarComponent.vue'
import foter from './components/footerComponent.vue'
</script>
