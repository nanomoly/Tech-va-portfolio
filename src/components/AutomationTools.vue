<template>
  <section class="px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div class="max-w-xl">
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Platforms</p>
          <h2 class="mt-4 text-3xl font-semibold text-[var(--text)] sm:text-4xl" style="font-family: var(--font-display);">
            Tools I use to build reliable automation stacks.
          </h2>
          <p class="mt-5 text-base leading-8 text-[var(--text-muted)]">
            These are the platforms I work in most often when building lead routing, CRM workflows, notifications, and cross-tool automations.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
          <article
            v-for="tool in tools"
            :key="tool.name"
            class="group border-t border-[var(--line-strong)] bg-[var(--surface)] p-5 hover:-translate-y-0.5 hover:shadow-[var(--shadow-sm)]"
          >
            <div class="flex min-h-16 items-center">
              <img :src="tool.logo" :alt="tool.name" class="h-12 w-auto object-contain grayscale transition group-hover:grayscale-0" />
            </div>
            <p class="mt-6 text-sm font-semibold text-[var(--text)]">{{ tool.name }}</p>
            <p class="mt-2 text-sm leading-6 text-[var(--text-muted)]">{{ tool.note }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ghl from '../assets/gohighlevel.svg'
import make from '../assets/make.svg'
import n8n from '../assets/n8n.svg'
import zapier from '../assets/zapier.svg'

const tools = [
  { name: 'n8n', logo: n8n, note: 'Flexible workflow orchestration for custom logic and integrations.' },
  { name: 'GoHighLevel', logo: ghl, note: 'CRM workflows, lead handling, and lifecycle automations.' },
  { name: 'Zapier', logo: zapier, note: 'Fast implementation for common business app handoffs.' },
  { name: 'Make.com', logo: make, note: 'Scenario-based automations with strong visual control.' },
]
</script>
