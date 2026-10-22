# EchoSign 🎵🖐️

A static web application that teaches **American Sign Language (ASL)** to hearing beginners through songs with simple, rhythmic word structures.

EchoSign is designed with a **retro flat music-player aesthetic**: rounded gadget cards, soft shadows, chunky play/skip controls, and accessible high-contrast typography.

---

## 🎨 Design System & Palette

The visual design is inspired by tactile retro MP3 players, pocket tape decks, and modern neo-flat UI cards:

| Token | Hex Value | Role |
| :--- | :--- | :--- |
| **Coral** | `#F27B7B` | Primary CTAs, active play buttons, focal accents |
| **Indigo** | `#5B5FA8` | Player frame, secondary badges, subtle borders |
| **Deep Navy** | `#2B2F7A` | Chunky borders, high-contrast headings, retro drop shadows |
| **Cream** | `#FFF4E3` | Warm background canvas and inset screen displays |

- **Font**: [Nunito](https://fonts.google.com/specimen/Nunito) (Google Fonts) – friendly rounded geometry.
- **Iconography**: Clean inline SVG illustrations (no external copyrighted images or asset dependencies).

---

## 📁 Project Structure

```text
ECHOSIGN/
├── index.html        # Semantic HTML5 home page
├── css/
│   └── style.css     # CSS variables, retro flat player cards, mobile-first queries
├── js/
│   └── main.js       # Play/pause toggle, equalizer animation, faux progress bar, mobile drawer
└── README.md         # Project documentation & local run guide
```

---

## 🚀 How to Run & Preview Locally

Because EchoSign uses pure static HTML, CSS, and vanilla JavaScript without build steps or frameworks, you can preview it instantly:

### Method 1: Direct in Browser
Double-click `index.html` or right-click `index.html` and select **"Open with..."** -> **Google Chrome / Microsoft Edge / Firefox**.

### Method 2: Local HTTP Server (Recommended)
Using Python (pre-installed on most systems):
```bash
# In the project root:
python -m http.server 3000
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

Or using Node / npx:
```bash
npx serve .
```

---

## ☁️ Deploying to Vercel

EchoSign is 100% static and deploys to Vercel in seconds:

1. Push this folder to a GitHub repository (or use the [Vercel CLI](https://vercel.com/cli) by running `npx vercel`).
2. Import the repository into your Vercel Dashboard.
3. Framework Preset: **Other** (leave Root Directory as `./` and Build Command empty).
4. Click **Deploy**.

---

## 🤟 Important Cultural Note

> **A portfolio project, not a substitute for Deaf-led ASL instruction.**
>
> American Sign Language is a rich, living visual language with its own grammar, spatial syntax, and profound cultural heritage. We strongly encourage all learners to take classes taught by Deaf instructors and support Deaf organizations.
