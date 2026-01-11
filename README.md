# Scrollytelling Portfolio

A high-performance personal portfolio website built with Next.js 14+, Framer Motion, and HTML5 Canvas.

## Features

- **Scroll-linked Animation**: Smooth scrubbing through a WebP image sequence using HTML5 Canvas.
- **Parallax Overlay**: Text elements fade in/out with parallax effects linked to scroll progress.
- **Glassmorphism Projects**: A modern grid layout for showcasing work.
- **Performance**: Images are preloaded to prevent flickering; Canvas used for efficient rendering.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Structure

- `app/components/ScrollyCanvas.tsx`: Core canvas & scroll logic.
- `app/components/Overlay.tsx`: Floating text layers.
- `public/sequence/`: Image frames for the animation.
