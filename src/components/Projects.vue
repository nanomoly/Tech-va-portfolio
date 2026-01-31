<template>
  <section class="max-w-6xl mx-auto px-6 py-20">
    <h2 class="text-3xl font-semibold mb-14 text-center">
      Automation Projects
    </h2>

    <div class="space-y-24">
      <div
        v-for="project in projects"
        :key="project.title"
        class="grid md:grid-cols-2 gap-12 items-center"
      >
        <!-- Placeholder Images -->
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="n in 2"
            :key="n"
            class="aspect-video rounded-xl border border-gray-200 bg-gray-100 flex items-center justify-center text-gray-400 text-sm"
          >
            Screenshot Placeholder
          </div>
        </div>

        <!-- Description -->
        <div>
          <h3 class="text-2xl font-semibold mb-4">
            {{ project.title }}
          </h3>

          <p class="text-gray-700 leading-relaxed">
            {{ project.description }}
          </p>

          <p class="mt-4 text-sm text-gray-500">
            Tools used: {{ project.tools.join(', ') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'CRM & Lead Automation System',
    description:
      'Designed and implemented an end-to-end automation that captures leads, enriches data, assigns pipelines, and triggers multi-channel follow-ups. The system removed manual data entry and significantly improved response time.',
    tools: ['GoHighLevel', 'n8n', 'Zapier', 'Make.com'],
  },
]
</script>
