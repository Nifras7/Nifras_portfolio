# Nifras — Personal Portfolio

An editorial-grade, minimalist personal portfolio web application built for Nifras, inspired by the layout architecture of [therishithakor.com](https://therishithakor.com) and modernized with production work from [nifras.netlify.app](https://nifras.netlify.app).

## 1. Visual Tokens & Editorial Aesthetic

- **Theme**: Strict Editorial Light Mode
- **Background Canvas**: `#F8F8FA` (warm editorial off-white)
- **Primary Surfaces**: `#FFFFFF` (elevated card containers)
- **Secondary Surfaces / Chips**: `#F1F2F5` (cool-gray chip backgrounds)
- **Borders**: `rgba(0, 0, 0, 0.08)` (subtle base) / `rgba(0, 0, 0, 0.18)` (hover state)
- **Shadows**:
  - Subtle: `0 2px 8px rgba(0, 0, 0, 0.04)`
  - Elevated: `0 12px 32px rgba(0, 0, 0, 0.06)`
- **Typography**:
  - Primary Display & Body: **Plus Jakarta Sans**
  - Monospace Data / Times / Chips: **JetBrains Mono**
- **Discipline Color Accents**:
  - **Web Development / Frontend**: `#2563EB` (Cobalt Blue)
  - **App & Mobile Engineering**: `#059669` (Emerald Green)
  - **UI/UX & System Design**: `#4F46E5` (Indigo)
  - **Cloud / Backend / Visuals**: `#D97706` (Amber Ochre)

---

## 2. Core Modules Architecture

1. **Sticky Navigation Header**:
   - Monogram logo (`N`) and brand signature (`#121316`).
   - Live local digital clock in JetBrains Mono updating every second with glowing green pulse dot.
   - Availability tag: `"Available for work · Remote-first"`.
   - Smooth navigation links (`#schedule`, `#story`, `#projects`, Contact).
   - "Start a project" modal trigger.

2. **Hero Section with Auto-Rotating Discipline Calendar**:
   - Hero statement: *"Hi, I'm Nifras. Full-Stack Developer, UI/UX Designer & Problem Solver."*
   - Auto-rotating focus card cycling every 3.8s with smooth cubic-bezier (`cubic-bezier(0.16, 1, 0.3, 1)`) easing.
   - Rotating sync icon + 4 interactive indicator pill dots.
   - Discipline index (`01 / 04` to `04 / 04`) with interactive click-to-switch and timer reset.
   - Dual CTAs: *"Start a project →"* & *"View full schedule"*.

3. **Discipline Calendar (Replaces Doors Section)**:
   - Full weekly 4-column responsive grid detailing each focus track.
   - Status legend: *Active Track* vs. *Open Slot · Available for Booking*.
   - Accent color top borders, allocated time slots, tech stack chips, and direct inquiry booking triggers.

4. **Career & Milestones Timeline ("My Story")**:
   - Continuous vertical connecting border and status markers.
   - Milestones for Present (Senior Full-Stack & Solutions Developer), Previous (Full-Stack Web & Mobile Engineer), Foundations (UI/UX Designer & Frontend Developer), and Education (B.Sc. in Computer Science).

5. **Curated Production Deployments**:
   - Editorial cards showcasing full-stack platforms, mobile health suites, design systems, and cloud microservices.

6. **Interactive Project Inquiry Modal**:
   - Backdrop blur overlay (`rgba(18, 19, 22, 0.45)` with `backdrop-filter: blur(8px)`).
   - Input validation for name, email, project overview, and desired timeline.
   - Simulated instant dispatch with celebratory confirmation view.

---

## 3. Development & Build

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Getting Started

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```
