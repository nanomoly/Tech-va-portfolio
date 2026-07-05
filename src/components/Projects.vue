<template>
  <section id="projects" class="px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl bg-[rgba(255,253,249,0.68)] p-2 md:p-3">
      <div class="flex flex-col gap-6 border-b border-[var(--line)] pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-2xl">
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Projects</p>
          <h2 class="mt-4 text-3xl font-semibold text-[var(--text)] sm:text-4xl" style="font-family: var(--font-display);">
            Selected automation work with clear business intent.
          </h2>
          <p class="mt-5 text-base leading-8 text-[var(--text-muted)]">
            The portfolio below covers lead capture, reminders, re-engagement, and messaging workflows built across GoHighLevel and ManyChat.
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          <button
            v-for="category in categories"
            :key="category.id"
            type="button"
            @click="selectedCategory = category.id"
            :class="[
              'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium',
              selectedCategory === category.id
                ? 'border-[var(--text)] bg-[var(--text)] text-white'
                : 'border-[var(--line)] bg-[var(--surface)] text-[var(--text-muted)] hover:border-[var(--line-strong)] hover:text-[var(--text)]'
            ]"
          >
            <span>{{ category.name }}</span>
            <span
              :class="[
                'rounded-full px-2 py-0.5 text-xs',
                selectedCategory === category.id ? 'bg-white/15 text-white' : 'bg-[var(--surface-muted)] text-[var(--text-muted)]'
              ]"
            >
              {{ category.count }}
            </span>
          </button>
        </div>
      </div>

      <div class="mt-8 space-y-6">
        <article
          v-for="(project, index) in paginatedProjects"
          :key="project.title"
          class="border-t border-[var(--line-strong)] bg-[var(--surface-strong)] p-5 md:p-6"
        >
          <div class="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(19rem,0.85fr)]">
            <div class="flex flex-col">
              <div class="flex flex-wrap items-center gap-3">
                <p class="text-sm font-semibold text-[var(--text-muted)]">
                  {{ formatProjectNumber(index) }}
                </p>
                <span class="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  {{ getCategoryName(project.category) }}
                </span>
              </div>

              <h3 class="mt-4 max-w-3xl text-2xl font-semibold text-[var(--text)] md:text-3xl">
                {{ project.title }}
              </h3>

              <p class="mt-4 max-w-3xl text-base leading-8 text-[var(--text-muted)]">
                {{ project.description }}
              </p>

              <div class="mt-6">
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">Tools Used</p>
                <div class="mt-3 flex flex-wrap gap-2">
                  <span
                    v-for="tool in project.tools"
                    :key="tool"
                    class="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text-muted)]"
                  >
                    {{ tool }}
                  </span>
                </div>
              </div>
            </div>

            <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              <button
                v-for="(img, idx) in [project.image_path_first, project.image_path_second]"
                :key="`${project.title}-${idx}`"
                type="button"
                class="group overflow-hidden border border-[var(--line)] bg-[var(--surface-muted)] text-left hover:-translate-y-0.5 hover:shadow-[var(--shadow-sm)]"
                @click="openImage(img)"
              >
                <div class="aspect-[16/10] overflow-hidden">
                  <img
                    :src="img"
                    :alt="`${project.title} screenshot ${idx + 1}`"
                    class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div class="flex items-center justify-between px-4 py-3 text-sm text-[var(--text-muted)]">
                  <span>Workflow screenshot {{ idx + 1 }}</span>
                  <span class="font-medium text-[var(--text)]">Open</span>
                </div>
              </button>
            </div>
          </div>
        </article>
      </div>

      <div v-if="totalPages > 1" class="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line)] pt-6">
        <p class="text-sm text-[var(--text-muted)]">
          Page {{ currentPage }} of {{ totalPages }}
        </p>
        <div class="flex flex-wrap gap-2">
          <button
            type="button"
            class="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--text-muted)] hover:border-[var(--line-strong)] hover:text-[var(--text)] disabled:cursor-not-allowed disabled:opacity-45"
            :disabled="currentPage === 1"
            @click="prevPage"
          >
            Previous
          </button>
          <button
            v-for="page in totalPages"
            :key="page"
            type="button"
            :class="[
              'rounded-full border px-4 py-2 text-sm font-medium',
              currentPage === page
                ? 'border-[var(--text)] bg-[var(--text)] text-white'
                : 'border-[var(--line)] text-[var(--text-muted)] hover:border-[var(--line-strong)] hover:text-[var(--text)]'
            ]"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
          <button
            type="button"
            class="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--text-muted)] hover:border-[var(--line-strong)] hover:text-[var(--text)] disabled:cursor-not-allowed disabled:opacity-45"
            :disabled="currentPage === totalPages"
            @click="nextPage"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </section>

  <Teleport to="body">
    <transition name="image-fade">
      <div
        v-if="activeImage"
        class="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(18,18,20,0.84)] px-4 py-8"
        @click.self="closeImage"
      >
        <button
          type="button"
          class="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20"
          @click="closeImage"
        >
          Close
        </button>
        <img
          :src="activeImage"
          alt="Project workflow preview"
          class="max-h-[90vh] w-auto max-w-full border border-white/10 bg-white shadow-2xl"
        />
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

import img8 from '@/assets/projects/inbound_lead_nurturing_1.png'
import img9 from '@/assets/projects/inbound_lead_nurturing_2.png'
import img14 from '@/assets/projects/inbound_lead_nurturing_fb_messenger_1.png'
import img15 from '@/assets/projects/inbound_lead_nurturing_fb_messenger_2.png'
import img16 from '@/assets/projects/inbound_lead_nurturing_instagram_dm_1.png'
import img17 from '@/assets/projects/inbound_lead_nurturing_instagram_dm_2.png'
import img12 from '@/assets/projects/inbound_lead_nurturing_tap_to_text_1.png'
import img13 from '@/assets/projects/inbound_lead_nurturing_tap_to_text_2.png'
import img10 from '@/assets/projects/inbound_lead_nurturing_web_forms_1.png'
import img11 from '@/assets/projects/inbound_lead_nurturing_web_forms_2.png'
import imgManyChat3 from '@/assets/projects/many_chat_workflow_specific_message_1.png'
import imgManyChat4 from '@/assets/projects/many_chat_workflow_specific_message_2.png'
import imgManyChat1 from '@/assets/projects/manychat_workflow_1.png'
import imgManyChat2 from '@/assets/projects/manychat_workflow_2.png'
import img1 from '@/assets/projects/projects_appointment_booked_1.png'
import img2 from '@/assets/projects/projects_appointment_booked_2.png'
import img3 from '@/assets/projects/projects_appointment_confirmation_and_reminder_1.png'
import img4 from '@/assets/projects/projects_appointment_confirmation_and_reminder_2.png'
import img5 from '@/assets/projects/projects_appointment_did_not_booked_1.png'
import img6 from '@/assets/projects/projects_appointment_did_not_booked_2.png'
import img7 from '@/assets/projects/projects_lead_workflow_internal.png'

const activeImage = ref(null)
const currentPage = ref(1)
const selectedCategory = ref('all')
const pageSize = 3

const openImage = (src) => {
  activeImage.value = src
}

const closeImage = () => {
  activeImage.value = null
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeImage()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

watch(selectedCategory, () => {
  currentPage.value = 1
})

const projects = [
  {
    title: 'Appointment Scheduling Booked Automation',
    description: 'Designed and implemented an end-to-end automation that captures leads.',
    tools: ['GoHighLevel', 'Google Sheets', 'Twilio'],
    category: 'gohighlevel',
    image_path_first: img1,
    image_path_second: img2,
  },
  {
    title: 'Appointment Confirmation & Reminder Automation',
    description: 'Developed a comprehensive automation system that handles appointment confirmations.',
    tools: ['GoHighLevel', 'Google Calendar', 'Twilio'],
    category: 'gohighlevel',
    image_path_first: img3,
    image_path_second: img4,
  },
  {
    title: 'Appointment Did Not Booked Follow-Up Automation',
    description: 'Created a targeted follow-up automation to re-engage leads who did not book appointments.',
    tools: ['GoHighLevel', 'Google Sheets', 'Twilio'],
    category: 'gohighlevel',
    image_path_first: img5,
    image_path_second: img6,
  },
  {
    title: 'Lead Workflow Internal Notification Automation',
    description: 'Built an internal notification system that alerts the sales team when new leads are captured.',
    tools: ['GoHighLevel', 'Google Sheets'],
    category: 'gohighlevel',
    image_path_first: img7,
    image_path_second: img7,
  },
  {
    title: 'Inbound Lead Nurturing Automation with Zapier',
    description: 'Implemented an inbound lead nurturing automation that engages and nurtures leads through personalized communication.',
    tools: ['GoHighLevel', 'Zapier', 'Email Marketing', 'Twilio'],
    category: 'gohighlevel',
    image_path_first: img8,
    image_path_second: img9,
  },
  {
    title: 'Inbound Lead Nurturing via Web Forms Automation',
    description: 'Developed an automation that captures leads from web forms and nurtures them through targeted follow-ups.',
    tools: ['GoHighLevel', 'Funnels', 'Web Forms', 'Email Marketing'],
    category: 'gohighlevel',
    image_path_first: img10,
    image_path_second: img11,
  },
  {
    title: 'Inbound Lead Nurturing via Tap to Text Automation',
    description: 'Created an automation that leverages tap-to-text functionality to engage leads and nurture them effectively.',
    tools: ['GoHighLevel', 'Twilio', 'Email Marketing'],
    category: 'gohighlevel',
    image_path_first: img12,
    image_path_second: img13,
  },
  {
    title: 'Inbound Lead Nurturing via Facebook Messenger Automation',
    description: 'Built an automation that utilizes Facebook Messenger to capture and nurture inbound leads through personalized interactions.',
    tools: ['GoHighLevel', 'Facebook Messenger', 'Email Marketing'],
    category: 'gohighlevel',
    image_path_first: img14,
    image_path_second: img15,
  },
  {
    title: 'Inbound Lead Nurturing via Instagram DM Automation',
    description: 'Implemented an automation that captures leads from Instagram Direct Messages and nurtures them through targeted communication.',
    tools: ['GoHighLevel', 'Instagram DM', 'Email Marketing'],
    category: 'gohighlevel',
    image_path_first: img16,
    image_path_second: img17,
  },
  {
    title: 'User sends a message on Facebook Messenger',
    description: 'Designed a ManyChat automation that captures user messages on Facebook Messenger and triggers personalized responses.',
    tools: ['ManyChat', 'Facebook Messenger'],
    category: 'manychat',
    image_path_first: imgManyChat1,
    image_path_second: imgManyChat2,
  },
  {
    title: 'Trigger Auto-Reply and Private Message for Specific Keyword Comments on a Post',
    description: 'Created a ManyChat automation that detects specific keywords in comments on a Facebook post and sends an auto-reply and private message to the user.',
    tools: ['ManyChat', 'Facebook Comments', 'Facebook Messenger'],
    category: 'manychat',
    image_path_first: imgManyChat3,
    image_path_second: imgManyChat4,
  },
]

const categories = computed(() => {
  const counts = {
    all: projects.length,
    gohighlevel: projects.filter((project) => project.category === 'gohighlevel').length,
    manychat: projects.filter((project) => project.category === 'manychat').length,
    other: projects.filter((project) => project.category === 'other').length,
  }

  return [
    { id: 'all', name: 'All Projects', count: counts.all },
    { id: 'gohighlevel', name: 'GoHighLevel', count: counts.gohighlevel },
    { id: 'manychat', name: 'ManyChat', count: counts.manychat },
    { id: 'other', name: 'Other Tools', count: counts.other },
  ]
})

const getCategoryName = (categoryId) => {
  const categoryMap = {
    gohighlevel: 'GoHighLevel',
    manychat: 'ManyChat',
    other: 'Other Tools',
  }

  return categoryMap[categoryId] || 'Project'
}

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') {
    return projects
  }

  return projects.filter((project) => project.category === selectedCategory.value)
})

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredProjects.value.slice(start, start + pageSize)
})

const totalPages = computed(() => Math.ceil(filteredProjects.value.length / pageSize))

const formatProjectNumber = (index) => {
  const projectNumber = (currentPage.value - 1) * pageSize + index + 1
  return `Project ${String(projectNumber).padStart(2, '0')}`
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1
  }
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>

<style scoped>
.image-fade-enter-active,
.image-fade-leave-active {
  transition: opacity 180ms ease;
}

.image-fade-enter-from,
.image-fade-leave-to {
  opacity: 0;
}
</style>
