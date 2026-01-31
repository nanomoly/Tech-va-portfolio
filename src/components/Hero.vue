<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <div class="max-w-6xl mx-auto px-6 py-32 text-center relative z-10">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8 animate-fade-in">
        <span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
        Available for Projects
      </div>
      
      <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent leading-tight">
        Technical Virtual Assistant
        <span class="block mt-2">— Automations</span>
      </h1>
      
      <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
        I design and build automation systems that eliminate manual work and scale operations.
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a 
          href="#contact" 
          class="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-105 active:scale-95"
        >
          Get in Touch
        </a>
        <a 
          href="#projects" 
          class="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all hover:shadow-md"
        >
          View Projects
        </a>
      </div>
    </div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>