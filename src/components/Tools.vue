<template>
  <section>
    <h2>Tools I Work With</h2>
    <ul>
      <li v-for="tool in tools" :key="tool">{{ tool }}</li>
    </ul>
  </section>
</template>

<script setup>
const tools = [
  'Zapier', 'Make (Integromat)', 'n8n',
  'Notion', 'Airtable',
  'HubSpot', 'GoHighLevel',
  'Slack', 'Google Workspace',
  'OpenAI API'
]
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
li {
  background: #1e293b;
  padding: 8px 14px;
  border-radius: 20px;
}
</style>
