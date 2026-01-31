<template>
  <section class="bg-gradient-to-b from-gray-50 to-white py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Automation Platforms I Specialize In
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Expert-level proficiency in industry-leading automation tools
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="tool in tools"
          :key="tool.name"
          class="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
        >
          <!-- Gradient Overlay on Hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          
          <div class="relative z-10 flex flex-col items-center">
            <div class="mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <img
                :src="tool.logo"
                :alt="tool.name"
                class="h-16 object-contain"
              />
            </div>
            <p class="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
              {{ tool.name }}
            </p>
          </div>
          
          <!-- Shine Effect -->
          <div class="absolute inset-0 rounded-2xl overflow-hidden">
            <div class="absolute inset-0 translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700"></div>
          </div>
        </div>
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