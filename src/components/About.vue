<template>
  <section id="about" class="px-4 py-10 sm:px-6 lg:px-8">
    <div class="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <div class="border-t border-[var(--line-strong)] pt-6 md:pt-8">
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">About</p>
        <h2 class="mt-4 text-3xl font-semibold text-[var(--text)] sm:text-4xl" style="font-family: var(--font-display);">
          Built for teams that value dependable execution.
        </h2>
        <div class="mt-6 space-y-5 text-base leading-8 text-[var(--text-muted)]">
          <p>
            I'm <span class="font-semibold text-[var(--text)]">Ivan Alvarina</span>, a
            <span class="font-semibold text-[var(--text)]">Technical Virtual Assistant</span> and
            <span class="font-semibold text-[var(--text)]">Full Stack Web Developer</span> with
            <span class="font-semibold text-[var(--text)]">2 years of experience</span> building scalable applications with
            <span class="font-semibold text-[var(--text)]">Laravel</span> and modern JavaScript frameworks.
          </p>
          <p>
            I create automation systems that connect CRMs, APIs, databases, and business tools to save time, reduce errors, and keep workflows moving without constant manual intervention.
          </p>
          <p>
            My focus is clean implementation: readable code, reliable logic, and systems that still make sense when a client needs to maintain or expand them later.
          </p>
        </div>
      </div>

      <div class="grid gap-6">
        <article class="grid gap-4 border-b border-[var(--line)] pb-6 md:grid-cols-[10rem_minmax(0,1fr)]">
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">Core Strengths</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="strength in strengths"
              :key="strength"
              class="bg-[var(--surface-muted)] px-3 py-2 text-sm text-[var(--text)]"
            >
              {{ strength }}
            </span>
          </div>
        </article>
        <article
          v-for="item in principles"
          :key="item.title"
          class="border-b border-[var(--line)] pb-6"
        >
          <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">{{ item.eyebrow }}</p>
              <h3 class="mt-2 text-2xl font-semibold text-[var(--text)]">{{ item.title }}</h3>
            </div>
            <p class="w-fit rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              {{ item.tag }}
            </p>
          </div>
          <p class="mt-5 max-w-2xl text-sm leading-7 text-[var(--text-muted)]">
            {{ item.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const strengths = [
  'Laravel Development',
  'AI Automation',
  'n8n Workflows',
  'GoHighLevel CRM',
  'API Integrations',
  'Reporting Systems',
]

const principles = [
  {
    eyebrow: 'Approach',
    title: 'Systems before surface-level fixes',
    tag: 'Workflow Design',
    description:
      'I map the actual business process first, then automate around the points where handoffs, follow-ups, or data movement usually break down.',
  },
  {
    eyebrow: 'Delivery',
    title: 'Technical work that stays understandable',
    tag: 'Maintainability',
    description:
      'Whether the project is an integration or a frontend build, I aim for structure that another developer or operator can read without guessing what happened.',
  },
  {
    eyebrow: 'Outcome',
    title: 'Useful automation that earns trust',
    tag: 'Client Value',
    description:
      'The goal is not just more automation. It is smoother operations, fewer dropped leads, and a setup that feels professional to both teams and customers.',
  },
]
</script>
