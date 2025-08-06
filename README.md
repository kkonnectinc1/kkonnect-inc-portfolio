<p align="center">
  <img src="/public/favicon.svg" width="60" alt="Kkonnect Logo" />
</p>

<h1 align="center">Kkonnect Inc — Personal Portfolio</h1>

<p align="center">
  🚀 A visually immersive portfolio site powered by modern web technologies.<br>
  Built with <strong>Remix</strong>, <strong>Three.js</strong>, <strong>Framer Motion</strong>, and <strong>Vite</strong>.
</p>

<p align="center">
  <a href="https://kkonnectinc.com" target="_blank">
    <img src="/public/site-preview.png" alt="Live Site Preview" width="100%" />
  </a>
</p>

---

## 📁 Project Structure

```

kkonnect-inc-portfolio/
├── app/                     # Remix application files
│   ├── components/          # Reusable UI components
│   ├── routes/              # Route modules for pages
│   ├── styles/              # Global and component styles
│   ├── lib/                 # Utility functions and custom hooks
│   ├── root.tsx            # Root layout entry
│   └── entry.client.tsx    # Client-side entry point
├── public/                  # Static assets
│   ├── favicon.svg
│   ├── site-preview\.png
│   └── humans.txt           # Metadata about the site and team
├── scripts/                 # CLI scripts for development
│   └── dev.cjs              # Custom startup monogram script
├── stories/                 # Storybook component stories
├── .dev.vars.example        # Sample environment variables file
├── .eslintrc.js             # Linting configuration
├── remix.config.js          # Remix config
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind CSS config
├── vite.config.ts           # Vite bundler config
├── package.json
└── README.md                # You’re here 👋

````

---

## 🧰 Tech Stack

- **Frontend Framework:** [Remix](https://remix.run)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics:** [Three.js](https://threejs.org)
- **Styling:** Tailwind CSS + PostCSS
- **Bundler:** Vite
- **Deployment:** Cloudflare Pages

---

## 🧪 Getting Started

### Requirements
- Node.js `>= 19.9.0`
- npm `>= 9.6.3`

### Install dependencies
```bash
npm install
````

### Start development server

```bash
npm run dev
```

### Run Storybook (for UI components)

```bash
npm run dev:storybook
```

---

## 🚀 Deployment

Deploy via [Cloudflare Pages](https://pages.cloudflare.com):

```bash
npm run deploy
```

---

## 👤 Humans.txt

The `public/humans.txt` file includes metadata and credits:

```txt
TEAM | チーム
Kkonnect Inc — ケーコネクト株式会社

DESIGN | デザイン
Original by Hamish Williams — Customized by Kkonnect Inc.

TOOLS | ツール
Figma, Blender, Photoshop, VS Code

TECHNOLOGY | テクノロジー
Remix, React, Three.js, Framer Motion

FONTS | フォント
Gotham, IPA Gothic Regular, Hiragino Kaku Gothic W8
```

---

## 📌 Permissions

This is a public portfolio meant to inspire and showcase creative and technical design. You're welcome to:

* Learn from the code.
* Adapt and customize for your own **unique** project.

**Please do not**:

* Use the portfolio unmodified without credit.
* Present Kkonnect Inc.'s original work as your own.

---

## ❓ FAQs

<details>
  <summary>How do I change the color of the 3D background sphere?</summary>

The color is controlled in the fragment shader inside the `DisplacementSphere` component.
Customize the color values directly in the shader code or use uniform variables.

</details>

<details>
  <summary>How do I make the contact form work?</summary>

You can:

* Use AWS SES and plug details into `.dev.vars`.
* Or use [Nodemailer](https://nodemailer.com/) with Gmail for simple integration.
  Make sure to set environment variables in Cloudflare for production.

</details>

---

## 🧠 Credits

* **Original Base Project:** Hamish Williams
* **Customization, Localization & Extension:** Kkonnect Inc
* **Logo & Branding:** © Kkonnect Inc. All rights reserved

---

<p align="center"><strong>🌐 https://kkonnectinc.com</strong></p>
```

---

Let me know if you'd like to auto-generate this from a CLI command or push it to GitHub directly.
