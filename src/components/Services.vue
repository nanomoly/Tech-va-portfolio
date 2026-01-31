<template>
  <section>
    <h2>Automation Services</h2>
    <div class="grid">
      <div v-for="service in services" :key="service.title" class="card">
        <h3>{{ service.title }}</h3>
        <p>{{ service.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { title: 'Workflow Automation', desc: 'Zapier, Make, n8n workflows tailored to your business.' },
  { title: 'CRM Automation', desc: 'Automated lead capture, tagging, follow-ups, and pipelines.' },
  { title: 'AI Automations', desc: 'ChatGPT-powered automations for support, content, and ops.' },
  { title: 'Database Systems', desc: 'Notion & Airtable system design and automation.' }
]
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
.card {
  background: #020617;
  padding: 20px;
  border-radius: 12px;
}
</style>
