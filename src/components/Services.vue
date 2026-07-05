<template>
  <section id="services" class="px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div class="bg-[var(--surface-muted)] p-6 md:p-8">
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Services</p>
          <h2 class="mt-4 text-3xl font-semibold text-[var(--text)] sm:text-4xl" style="font-family: var(--font-display);">
            Practical automation support with frontend-level attention to detail.
          </h2>
          <p class="mt-5 text-base leading-8 text-[var(--text-muted)]">
            I focus on delivery that is technically sound and easy to operate after handoff. Each service below solves a different layer of business workflow friction.
          </p>
        </div>

        <div class="border border-[var(--line)] bg-[var(--surface-strong)] p-2 shadow-[var(--shadow-sm)]">
          <article
            v-for="service in services"
            :key="service.title"
            :class="[
              'grid gap-4 px-4 py-5 md:grid-cols-[2.5rem_minmax(0,1fr)_12rem] md:items-start md:px-6',
              service.id === '02' || service.id === '04' ? 'bg-[rgba(239,232,222,0.34)]' : ''
            ]"
          >
            <div class="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-sm font-semibold text-[var(--text-muted)]">
              {{ service.id }}
            </div>
            <div class="border-b border-[var(--line)] pb-5 md:pb-6">
              <h3 class="text-xl font-semibold text-[var(--text)]">{{ service.title }}</h3>
              <p class="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-muted)]">{{ service.desc }}</p>
            </div>
            <div class="border-b border-[var(--line)] pb-5 text-sm font-medium text-[var(--accent)] md:pb-6">
              {{ service.focus }}
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: '01',
    title: 'Workflow Automation',
    desc: 'Zapier, Make, and n8n automations designed around the actual process, not just the software connection.',
    focus: 'Lead routing and process handoffs',
  },
  {
    id: '02',
    title: 'CRM Automation',
    desc: 'Automated lead capture, tagging, follow-ups, and pipeline updates that keep sales activity organized and timely.',
    focus: 'GoHighLevel and customer lifecycle flow',
  },
  {
    id: '03',
    title: 'AI Automations',
    desc: 'ChatGPT-powered workflows for support, content assistance, and operational tasks where faster responses create leverage.',
    focus: 'AI-assisted business operations',
  },
  {
    id: '04',
    title: 'Database Systems',
    desc: 'Notion and Airtable setups that combine structured information with automation-friendly workflows.',
    focus: 'Source of truth and system structure',
  },
]
</script>
