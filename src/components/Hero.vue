<template>
  <section id="top" class="hero-shell px-4 pb-6 pt-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl px-1 md:px-2">
      <header class="hero-nav mb-10 flex flex-col gap-6 border-b border-[var(--line)] pb-6 lg:flex-row lg:items-center lg:justify-between">
        <a href="#top" class="w-fit text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">
          Ivan Alvarina
        </a>
        <nav class="flex flex-wrap gap-3 text-sm text-[var(--text-muted)]">
          <a class="rounded-full px-3 py-2 hover:bg-[var(--surface-muted)] hover:text-[var(--text)]" href="#about">About</a>
          <a class="rounded-full px-3 py-2 hover:bg-[var(--surface-muted)] hover:text-[var(--text)]" href="#services">Services</a>
          <a class="rounded-full px-3 py-2 hover:bg-[var(--surface-muted)] hover:text-[var(--text)]" href="#projects">Projects</a>
          <a class="rounded-full px-3 py-2 hover:bg-[var(--surface-muted)] hover:text-[var(--text)]" href="#contact">Contact</a>
        </nav>
      </header>

      <div class="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,29rem)] lg:items-end">
        <div class="hero-copy space-y-8 lg:pb-8">
          <div class="space-y-5">
            <div class="max-w-4xl space-y-5">
              <h1 class="max-w-4xl text-4xl leading-tight font-semibold text-[var(--text)] sm:text-5xl lg:text-6xl" style="font-family: var(--font-display);">
                I build automation systems and business tools that save teams time and keep operations moving.
              </h1>
              <p class="max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
                Specializing in Laravel development, AI automation, CRM workflows, and frontend implementation for businesses that need practical technical execution.
              </p>
            </div>
          </div>

          <div class="border-y border-[var(--line)] py-4">
            <p class="text-sm leading-7 text-[var(--text-muted)]">
              <span v-for="(specialty, index) in specialties" :key="specialty">
                <span v-if="index > 0" class="px-2 text-[var(--line-strong)]">·</span>{{ specialty }}
              </span>
            </p>
          </div>

          <div class="hero-actions flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              class="inline-flex items-center justify-center rounded-full bg-[var(--text)] px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[#222]"
            >
              Start a conversation
            </a>
            <a
              href="#projects"
              class="inline-flex items-center text-sm font-semibold text-[var(--text)] underline-offset-4 hover:underline"
            >
              Browse recent work
            </a>
          </div>
        </div>

        <aside class="hero-media grid gap-4 lg:pl-6">
          <div class="hero-photo overflow-hidden bg-[var(--surface-muted)] shadow-[var(--shadow-md)]">
            <div class="aspect-[4/5] bg-[var(--surface-muted)]">
              <img
                :src="profilePhotoSrc"
                alt="Portrait of Ivan Alvarina"
                class="hero-photo-image h-full w-full object-cover object-top"
                @error="onImageError"
              />
              <div
                v-if="showFallback"
                class="flex h-full items-center justify-center bg-[linear-gradient(135deg,#d8cec2,#f6f2eb)] p-8 text-center"
              >
                <div>
                  <p class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">Ivan Alvarina</p>
                  <p class="mt-4 text-5xl font-semibold text-[var(--text)]" style="font-family: var(--font-display);">IA</p>
                  <p class="mt-4 text-sm leading-6 text-[var(--text-muted)]">Technical VA, automation systems, and frontend delivery.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="border-l border-[var(--line-strong)] pl-5">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">Working Style</p>
            <ul class="mt-4 space-y-3 text-sm leading-7 text-[var(--text-muted)]">
              <li>Clear systems thinking over one-off hacks.</li>
              <li>Automation that supports teams, not just tools.</li>
              <li>Frontend work that stays readable, polished, and maintainable.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showFallback = ref(false)
const profilePhotoSrc = `${import.meta.env.BASE_URL}profile-photo.jpg`

const specialties = [
  'Laravel',
  'n8n',
  'GoHighLevel',
  'AI Automation',
  'CRM Systems',
  'Vue Frontends',
]

const onImageError = (event) => {
  showFallback.value = true
  event.target.style.display = 'none'
}
</script>

<style scoped>
.hero-shell {
  animation: heroFade 700ms ease-out both;
}

.hero-nav {
  animation: heroSlideDown 600ms ease-out both;
}

.hero-copy {
  animation: heroSlideUp 720ms cubic-bezier(0.22, 1, 0.36, 1) 80ms both;
}

.hero-actions > a:first-child:hover {
  box-shadow: 0 16px 34px rgba(24, 24, 27, 0.14);
}

.hero-media {
  animation: heroImageIn 820ms cubic-bezier(0.22, 1, 0.36, 1) 140ms both;
}

.hero-photo {
  transform-origin: center;
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.hero-photo:hover {
  transform: translateY(-4px);
  box-shadow: 0 30px 70px rgba(34, 29, 24, 0.14);
}

.hero-photo-image {
  transition: transform 500ms ease;
}

.hero-photo:hover .hero-photo-image {
  transform: scale(1.025);
}

@keyframes heroFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes heroSlideDown {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroSlideUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroImageIn {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.985);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-shell,
  .hero-nav,
  .hero-copy,
  .hero-media {
    animation: none;
  }

  .hero-photo,
  .hero-photo-image {
    transition: none;
  }

  .hero-photo:hover {
    transform: none;
    box-shadow: var(--shadow-md);
  }

  .hero-photo:hover .hero-photo-image {
    transform: none;
  }
}
</style>
