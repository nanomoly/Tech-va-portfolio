<template>
  <section class="max-w-6xl mx-auto px-6 py-20">
    <h2 class="text-3xl font-semibold mb-10 text-center">
      Automation Platforms I Specialize In
    </h2>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
      <div
        v-for="tool in tools"
        :key="tool.name"
        class="flex flex-col items-center"
      >
        <img
          :src="tool.logo"
          :alt="tool.name"
          class="h-14 object-contain mb-4"
        />
        <p class="font-medium text-gray-800">
          {{ tool.name }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import n8n from '../assets/n8n.svg'
import ghl from '../assets/gohighlevel.svg'
import zapier from '../assets/zapier.svg'
import make from '../assets/make.svg'

const tools = [
  { name: 'n8n', logo: n8n },
  { name: 'GoHighLevel', logo: ghl },
  { name: 'Zapier', logo: zapier },
  { name: 'Make.com', logo: make },
]
</script>
