<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 py-24 px-6">
    <!-- Decorative Elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    
    <div class="max-w-4xl mx-auto text-center relative z-10">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
        Let's Automate Your Business
      </h2>
      
      <p class="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
        Ready to save time and scale your operations? Let's discuss how automation can transform your workflow.
      </p>
      
      <!-- Email Section -->
      <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 inline-block mb-8">
        <p class="text-sm text-blue-200 mb-2 font-medium uppercase tracking-wide">
          Get in Touch
        </p>
        <a 
          href="mailto:alvarinaivan11@gmail.com" 
          class="text-2xl md:text-3xl font-bold text-white hover:text-blue-200 transition-colors flex items-center gap-3 group"
        >
          <svg class="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          alvarinaivan11@gmail.com
        </a>
      </div>
      
      <!-- Additional CTA -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="mailto:alvarinaivan11@gmail.com" 
          class="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all hover:shadow-2xl hover:scale-105 active:scale-95"
        >
          Send Email
        </a>
        <a 
          href="#projects" 
          class="px-8 py-4 bg-blue-500/20 backdrop-blur text-white rounded-xl font-bold border-2 border-white/30 hover:bg-blue-500/30 hover:border-white/50 transition-all hover:shadow-xl"
        >
          View My Work
        </a>
      </div>
    </div>
  </section>
</template>