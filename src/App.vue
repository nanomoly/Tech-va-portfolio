<template>
  <div class="bg-white text-gray-900 scroll-smooth">
    <Hero />
    <About />
    <AutomationTools />
    <Services />
    <Projects />
    <Contact />
  </div>
</template>

<script setup>
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import AutomationTools from './components/AutomationTools.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Services from './components/Services.vue'
</script>

<style>
/* Global Styles */
* {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #2563eb;
}
</style>