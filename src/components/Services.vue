<template>
  <section class="py-24 px-6 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Automation Services
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive automation solutions tailored to your business needs
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(service, index) in services" 
          :key="service.title" 
          class="group relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          <!-- Icon -->
          <div 
            class="w-14 h-14 rounded-xl mb-6 flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
            :class="service.iconBg"
          >
            {{ service.icon }}
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {{ service.title }}
          </h3>
          
          <p class="text-gray-600 leading-relaxed">
            {{ service.desc }}
          </p>
          
          <!-- Hover Arrow -->
          <div class="mt-6 flex items-center gap-2 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            <span class="text-sm">Learn more</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          <!-- Gradient Background -->
          <div class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl pointer-events-none"
               :class="service.gradient"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { 
    title: 'Workflow Automation', 
    desc: 'Zapier, Make, n8n workflows tailored to your business.',
    icon: '⚡',
    iconBg: 'bg-yellow-100 text-yellow-600',
    gradient: 'from-yellow-500 to-orange-500'
  },
  { 
    title: 'CRM Automation', 
    desc: 'Automated lead capture, tagging, follow-ups, and pipelines.',
    icon: '🎯',
    iconBg: 'bg-blue-100 text-blue-600',
    gradient: 'from-blue-500 to-cyan-500'
  },
  { 
    title: 'AI Automations', 
    desc: 'ChatGPT-powered automations for support, content, and ops.',
    icon: '🤖',
    iconBg: 'bg-purple-100 text-purple-600',
    gradient: 'from-purple-500 to-pink-500'
  },
  { 
    title: 'Database Systems', 
    desc: 'Notion & Airtable system design and automation.',
    icon: '📊',
    iconBg: 'bg-green-100 text-green-600',
    gradient: 'from-green-500 to-emerald-500'
  }
]
</script>