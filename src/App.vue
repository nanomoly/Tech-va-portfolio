<template>
  <div class="min-h-screen bg-transparent text-[var(--text)]">
    <Hero />
    <main>
      <About />
      <AutomationTools />
      <Services />
      <Projects />
      <Contact />
    </main>
  </div>
</template>

<script setup>
import About from './components/About.vue'
import AutomationTools from './components/AutomationTools.vue'
import Contact from './components/Contact.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import Services from './components/Services.vue'
</script>
