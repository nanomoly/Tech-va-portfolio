<template>
  <section id="projects" class="bg-gradient-to-b from-white to-gray-50 py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Automation Projects
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Real-world automation solutions that drive business results
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="selectedCategory = category.id"
          :class="[
            'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
            selectedCategory === category.id
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105 cursor-pointer'
              : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:shadow-md cursor-pointer'
          ]"
        >
          {{ category.name }}
          <span
            :class="[
              'ml-2 px-2 py-0.5 rounded-full text-xs',
              selectedCategory === category.id
                ? 'bg-white/20'
                : 'bg-gray-100'
            ]"
          >
            {{ category.count }}
          </span>
        </button>
      </div>

      <div class="space-y-16">
        <div
          v-for="(project, index) in paginatedProjects"
          :key="project.title"
          class="group"
          data-aos="fade-up"
        >
          <div class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group">
            <div class="grid md:grid-cols-2 gap-0">
              
              <!-- Images Section -->
              <div class="relative p-6 bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col justify-center">
                <div class="grid grid-cols-2 gap-4">
                  <div
                    v-for="(img, idx) in [project.image_path_first, project.image_path_second]"
                    :key="idx"
                    class="relative aspect-video rounded-xl border-2 border-gray-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer"
                    @click="openImage(img)"
                  >
                    <img
                      :src="img"
                      :alt="`${project.title} Screenshot ${idx + 1}`"
                      class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div
                      class="absolute inset-0 bg-black/10 opacity-0 hover:opacity-20 transition-opacity rounded-xl"
                    ></div>
                  </div>
                </div>
              </div>

              <!-- Content Section -->
              <div class="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <!-- Badge -->
                  <span
                    :class="[
                      'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4',
                      project.category === 'gohighlevel' ? 'bg-blue-100 text-blue-700' : 
                      project.category === 'manychat' ? 'bg-purple-100 text-purple-700' :
                      'bg-green-100 text-green-700'
                    ]"
                  >
                    <span 
                      :class="[
                        'w-1.5 h-1.5 rounded-full',
                        project.category === 'gohighlevel' ? 'bg-blue-500' : 
                        project.category === 'manychat' ? 'bg-purple-500' :
                        'bg-green-500'
                      ]"
                    ></span>
                    {{ getCategoryName(project.category) }}
                  </span>

                  <!-- Title -->
                  <h3 class="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {{ project.title }}
                  </h3>

                  <!-- Description -->
                  <p class="text-gray-700 leading-relaxed mb-6 text-lg">
                    {{ project.description }}
                  </p>
                </div>

                <!-- Tools -->
                <div>
                  <p class="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                    Tools Used
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tool in project.tools"
                      :key="tool"
                      class="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-lg text-sm font-medium border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all"
                    >
                      {{ tool }}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- Pagination -->
        <div class="flex justify-center items-center mt-12 gap-3">
            <button
              @click="prevPage"
              :disabled="currentPage === 1"
              :class="[
                'px-4 py-2 rounded-lg transition-colors',
                currentPage === 1
                  ? 'bg-gray-300 cursor-not-allowed text-gray-600'
                  : 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
              ]"
            >
              Previous
            </button>

            <template v-for="page in totalPages" :key="page">
              <button
                @click="goToPage(page)"
                :class="[
                  'px-4 py-2 rounded-lg',
                  currentPage === page ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer'
                ]"
              >
                {{ page }}
              </button>
            </template>

           <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              :class="[
                'px-4 py-2 rounded-lg transition-colors',
                currentPage === totalPages
                  ? 'bg-gray-300 cursor-not-allowed text-gray-600'
                  : 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
              ]"
            >
              Next
            </button>
        </div>
      </div>
    </div>
  </section>

  <Teleport to="body">
  <transition name="fade">
    <div
      v-if="activeImage"
      class="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
      @click.self="closeImage"
    >
      <!-- Close button -->
      <button
        class="absolute top-6 right-6 text-white text-3xl hover:scale-110 transition"
        @click="closeImage"
      >
        ✕
      </button>

      <!-- Image -->
      <img
        :src="activeImage"
        class="max-w-full max-h-[90vh] rounded-xl shadow-2xl animate-zoom"
      />
    </div>
  </transition>
</Teleport>

</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes zoom {
  from {
    transform: scale(0.92);
  }
  to {
    transform: scale(1);
  }
}

.animate-zoom {
  animation: zoom 0.25s ease-out;
}
</style>

<script setup>

import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

import img1 from '@/assets/projects/projects_appointment_booked_1.png'
import img2 from '@/assets/projects/projects_appointment_booked_2.png'
import img3 from '@/assets/projects/projects_appointment_confirmation_and_reminder_1.png'
import img4 from '@/assets/projects/projects_appointment_confirmation_and_reminder_2.png'
import img5 from '@/assets/projects/projects_appointment_did_not_booked_1.png'
import img6 from '@/assets/projects/projects_appointment_did_not_booked_2.png'
import img7 from '@/assets/projects/projects_lead_workflow_internal.png'
import img8 from '@/assets/projects/inbound_lead_nurturing_1.png'
import img9 from '@/assets/projects/inbound_lead_nurturing_2.png'
import img10 from '@/assets/projects/inbound_lead_nurturing_web_forms_1.png'
import img11 from '@/assets/projects/inbound_lead_nurturing_web_forms_2.png'
import img12 from '@/assets/projects/inbound_lead_nurturing_tap_to_text_1.png'
import img13 from '@/assets/projects/inbound_lead_nurturing_tap_to_text_2.png'
import img14 from '@/assets/projects/inbound_lead_nurturing_fb_messenger_1.png'
import img15 from '@/assets/projects/inbound_lead_nurturing_fb_messenger_2.png'
import img16 from '@/assets/projects/inbound_lead_nurturing_instagram_dm_1.png'
import img17 from '@/assets/projects/inbound_lead_nurturing_instagram_dm_2.png'
import imgManyChat1 from '@/assets/projects/manychat_workflow_1.png'
import imgManyChat2 from '@/assets/projects/manychat_workflow_2.png'
import imgManyChat3 from '@/assets/projects/many_chat_workflow_specific_message_1.png'
import imgManyChat4 from '@/assets/projects/many_chat_workflow_specific_message_2.png'

const activeImage = ref(null)
const currentPage = ref(1)
const selectedCategory = ref('all')
const pageSize = 3 // number of projects per page

const openImage = (src) => {
  activeImage.value = src
}

const closeImage = () => {
  activeImage.value = null
}

// Close on ESC
const handleKeydown = (e) => {
  if (e.key === 'Escape') closeImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

// Reset to page 1 when category changes
watch(selectedCategory, () => {
  currentPage.value = 1
})

const projects = [
  {
    title: 'Appointment Scheduling Booked Automation',
    description:
      'Designed and implemented an end-to-end automation that captures leads.',
    tools: ['GoHighLevel', 'Google Sheets', 'Twilio'],
    category: 'gohighlevel',
    image_path_first: img1,
    image_path_second: img2,
  },

  {
    title: 'Appointment Confirmation & Reminder Automation',
    description:
      'Developed a comprehensive automation system that handles appointment confirmations.',
    tools: ['GoHighLevel', 'Google Calendar', 'Twilio'],
    category: 'gohighlevel',
    image_path_first: img3,
    image_path_second: img4,
  },

  {
    title: 'Appointment Did Not Booked Follow-Up Automation',
    description:
      'Created a targeted follow-up automation to re-engage leads who did not book appointments.',
    tools: ['GoHighLevel', 'Google Sheets', 'Twilio'],
    category: 'gohighlevel',
    image_path_first: img5,
    image_path_second: img6,
  },

  {
    title: 'Lead Workflow Internal Notification Automation',
    description:
      'Built an internal notification system that alerts the sales team when new leads are captured.',
    tools: ['GoHighLevel', 'Google Sheets'],
    category: 'gohighlevel',
    image_path_first: img7,
    image_path_second: img7,
  },

  {
    title: 'Inbound Lead Nurturing Automation with Zapier',
    description:
      'Implemented an inbound lead nurturing automation that engages and nurtures leads through personalized communication.',
    tools: ['GoHighLevel', 'Zapier', 'Email Marketing', 'Twilio'],
    category: 'gohighlevel',
    image_path_first: img8,
    image_path_second: img9,
  },

  {
    title: 'Inbound Lead Nurturing via Web Forms Automation',
    description:
      'Developed an automation that captures leads from web forms and nurtures them through targeted follow-ups.',
    tools: ['GoHighLevel', 'Funnels', 'Web Forms', 'Email Marketing'],
    category: 'gohighlevel',
    image_path_first: img10,
    image_path_second: img11,
  },
  
  {
    title: 'Inbound Lead Nurturing via Tap to Text Automation',
    description:
      'Created an automation that leverages tap-to-text functionality to engage leads and nurture them effectively.',
    tools: ['GoHighLevel', 'Twilio', 'Email Marketing'],
    category: 'gohighlevel',
    image_path_first: img12,
    image_path_second: img13,
  },

  {
    title: 'Inbound Lead Nurturing via Facebook Messenger Automation',
    description:
      'Built an automation that utilizes Facebook Messenger to capture and nurture inbound leads through personalized interactions.',
    tools: ['GoHighLevel', 'Facebook Messenger', 'Email Marketing'],
    category: 'gohighlevel',
    image_path_first: img14,
    image_path_second: img15,
  },

  {
    title: 'Inbound Lead Nurturing via Instagram DM Automation',
    description:
      'Implemented an automation that captures leads from Instagram Direct Messages and nurtures them through targeted communication.',
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
  }


]

// Category configuration
const categories = computed(() => {
  const counts = {
    all: projects.length,
    gohighlevel: projects.filter(p => p.category === 'gohighlevel').length,
    manychat: projects.filter(p => p.category === 'manychat').length,
    other: projects.filter(p => p.category === 'other').length,
  }

  return [
    { id: 'all', name: 'All Projects', count: counts.all },
    { id: 'gohighlevel', name: 'GoHighLevel', count: counts.gohighlevel },
    { id: 'manychat', name: 'ManyChat', count: counts.manychat },
    { id: 'other', name: 'Other Tools', count: counts.other },
  ]
})

// Helper function to get category name
const getCategoryName = (categoryId) => {
  const categoryMap = {
    gohighlevel: 'GoHighLevel',
    manychat: 'ManyChat',
    other: 'Other Tools'
  }
  return categoryMap[categoryId] || 'Project'
}

// Filtered projects based on selected category
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') {
    return projects
  }
  return projects.filter(p => p.category === selectedCategory.value)
})

// Computed for paginated projects
const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredProjects.value.slice(start, start + pageSize)
})

// Total pages
const totalPages = computed(() =>
  Math.ceil(filteredProjects.value.length / pageSize)
)

// Navigation
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) currentPage.value = page
}
</script>