# Master AI Prompt: Build an Award-Winning ECE & Quantum Developer Portfolio

Copy and paste the prompt below into any AI assistant (like Antigravity, Claude, ChatGPT, etc.) to recreate this exact web application portfolio from scratch.

```markdown
Role & Task:
You are an expert full-stack developer and web designer. Build a modern, high-end, responsive portfolio website for "Jagadeesh Sappa", an Electronics & Communication Engineering (ECE) student and Quantum Computing Developer who won 1st Place at the Amaravathi Quantum Valley Hackathon 2025 (AQVH) and published research in the APSHES Journal 2025.

Design System & Aesthetic:
- Color Palette: Deep dark background (`#0a0a0a`), rich crimson accent (`#ff2a2a`), clean white text, ambient glowing gradients (blue & crimson), and dark glassmorphic cards (`bg-white/10 backdrop-blur-md`).
- Typography: Clean sans-serif headings with tracking-tight, crisp monospace details for metrics and footer.
- Animations: Smooth scroll, AOS (Animate on Scroll) transitions, Framer Motion interactive cards, and hover micro-interactions.

Technology Stack:
1. Framework: React with Vite
2. Styling: Tailwind CSS
3. Motion/Effects: Framer Motion, AOS (Animate on Scroll)
4. Contact Form: Web3Forms API integration
5. Deployment Target: Vercel Single-Page Application (SPA)

Component Structure & Features:

1. Preloader Component:
   - Full-screen dark loading overlay with smooth fade-out after assets mount.

2. Navbar Component:
   - Fixed top position with glassmorphic blur on scroll.
   - Brand logo: "Jagadeesh." with a crimson dot.
   - Links: Home (#), About (#about), Skills (#skills), Projects (#services), Contact (#contact).
   - Right CTA button: "Hire Me" opening the contact section.
   - Fully responsive mobile slide-down navigation drawer.

3. Hero Section (`#hero`):
   - Dark tech background with subtle ambient radial glows and a 32px radial grid overlay.
   - Animated pill badge: "🏆 1st Place Winner — AQVH 2025".
   - Main Heading: "Hi, I'm Jagadeesh Sappa" with smooth gradient text.
   - Subtitle emphasizing ECE, Quantum Computing, Bloch Verse, and full-stack engineering.
   - Three CTA buttons: "View Projects" (primary crimson), "Contact Me" (glassmorphic), "Resume" (white with download icon).
   - Quick metrics row: 1st Place AQVH 2025 | 9,000+ Quantum Gates Simulated | Published APSHES Journal 2025.
   - Right Column: Profile showcase card with glassmorphism border, floating status pills ("Bloch Verse Creator", "ECE & VLSI Design"), and a crisp portrait image.

4. About Section (`#about`):
   - Crimson background (`bg-[#ff2a2a]`) with torn paper divider SVG transition at the bottom.
   - Left Column: Interactive 3D Lanyard ID Badge card showing portrait photo, name, and "ECE & Quantum Dev" title.
   - Right Column: Concise bio highlighting BVC College of Engineering, AQVH 2025 victory, Bloch Verse, and APSHES 2025 paper.
   - Quick Info Grid: Location (East Godavari, AP), Education (B.Tech ECE), Focus (Quantum & VLSI), Languages.
   - Tech Stack Icons: React, Node.js, and MongoDB icons with hover zoom and drop-shadows.

5. Skills Section (`#skills`):
   - Dark background (`#0a0a0a`) with glowing pill badges.
   - Categories:
     - Quantum Computing (Qiskit, OpenQASM 2.0, IBM Quantum Composer, Statevector Visualizers)
     - Electronics & VLSI (Embedded Systems, FPGA Architecture, Power Electronics, MPPT Controllers, Op-Amps)
     - Full-Stack Web Development (Python, React.js, Node.js, JavaScript ES6+, MongoDB, Tailwind CSS)
     - Engineering Tools (Git/GitHub, VS Code, MATLAB, SPICE Circuit Simulator)

6. Projects Section (`#services`):
   - Header: "From quantum circuits to full-stack applications".
   - Desktop SVG animated dashed connecting line with scroll-linked path animation.
   - Feature Project Cards:
     1. Bloch Verse: Quantum state visualizer built with Qiskit (9,000+ gates simulated, statevector extraction).
     2. E-RISHWA: Solar-powered electric auto rickshaw with MPPT charging (improved range by 30%).
     3. Research Paper: Published quantum state visualization framework in APSHES Journal, 2025.
     4. Circuit Design: Academic portfolio of analog & digital circuit designs (DC power supplies, filters, digital counters).

7. Contact Section (`#contact`):
   - Giant "CONTACT" background watermark text with scroll parallax.
   - Web3Forms API form integration with success/error toast notifications.
   - Accessible input fields: Name, Email, Phone, Message with subtle bottom border styling.

8. Footer Component:
   - Monospace layout with email (`sappsjagadeesh@gmail.com`), phone number (`+91-9912493997`), copyright, and social links (GitHub: `github.com/jagadeesh08-s`, LinkedIn: `linkedin.com/in/jagadeesh-sappa`).

SEO & Technical Requirements:
- Title: "Jagadeesh Sappa | ECE Engineer & Quantum Computing Developer"
- Meta Tags: Complete OpenGraph (`og-image.svg`), Twitter Cards, Canonical Link (`https://jagagadeeshportfolio.vercel.app/`).
- JSON-LD Structured Schemas: `@graph` including `Person`, `SoftwareApplication` (Bloch Verse), `ScholarlyArticle` (APSHES Paper), `WebSite`, `ProfilePage`.
- Filesystem & Crawling: `sitemap.xml`, `robots.txt`, and `vercel.json` configured with `{ "handle": "filesystem" }` routing.
```
