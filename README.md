# AI Travel Planner Chatbot (VoyageAI)

A full-stack, AI-powered travel planning web application that generates complete day-by-day itineraries with attractions, morning/afternoon/evening schedules, local restaurants, hotel recommendations, and insider travel tips.

## Architecture

The project consists of two completely separate projects communicating strictly via REST API:

- **`backend/`**: Node.js + Express (CommonJS), `@anthropic-ai/sdk` (Claude), Zod validation (requests & AI responses), and `express-rate-limit`.
- **`frontend/`**: React 18 + Vite + TailwindCSS, Axios (90-second timeout), React Router, Lucide icons, and `sessionStorage` persistence.

---

## Quick Start Guide

### 1. Start the Backend

```bash
cd backend
npm install
npm run dev
```
Backend will start on `http://localhost:5000`.

*(Optional: configure `ANTHROPIC_API_KEY` in `backend/.env`. If not provided, the backend seamlessly runs with built-in schema-compliant mock generation for instant testing.)*

### 2. Start the Frontend

In a separate terminal:
```bash
cd frontend
npm install
npm run dev
```
Frontend will be available on `http://localhost:5173`.

---

## Core Features & Implementation Highlights

- **Strict Prompt & Data Isolation**: User inputs are sanitized and wrapped in delimiter tags `<trip_details>` to protect against prompt injection.
- **Zod Schema Validation**: Both incoming requests and AI JSON responses are strictly validated against typed schemas.
- **Scaled Token Budgeting & Truncation Check**: Token budget dynamically scales based on trip duration (`1500 + days * 1000`). Truncated outputs are trapped before parsing malformed data.
- **Automatic Retry Mechanism**: One automatic retry with explicit schema reminder if Claude produces a JSON mismatch.
- **Refresh-Proof State Flow**: Itinerary data persists via `sessionStorage` (`lastItinerary`), surviving manual browser refreshes.
- **Dual Planning Modes**:
  - **Quick Form**: Interactive pickers for destination, days, budget, travel style, and interests.
  - **Chat Concierge**: Natural conversational assistant that parses trip requirements on the fly.
- **Day-Wise Schedule & Navigation**: Morning, afternoon, and evening breakdowns with interactive Google Maps links.
- **Export & Print**: One-click print-optimized export to PDF.
