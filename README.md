# DNA - Dancing Nurses Association Official Website
The official web platform for the Dancing Nurses Association (D.N.A.) of the Central Philippine University - College of Nursing. This application serves as a digital hub for performances, member directories, and organizational information.

## 🚀 Features
**Dynamic Landing Page:** Features the latest organization performances and leadership.

**Member Directory:** A complete, searchable list of active members categorized by year and section.

**Officer Showcase:** Dedicated section for the executive board and organization advisers.

**Performance Gallery:** Integration with video data to showcase the group's wide range of artistic works.

**Google Sheets Sync:** An administrative sync system that pulls real-time data from Google Sheets into a Vercel Postgres database.

## 🛠️ Tech Stack
- **Framework:** Next.js (App Router)

- **Language:** TypeScript

- **Styling:** Tailwind CSS

- **Database:** Vercel Postgres (SQL)

- **External API:** Google Sheets API v4

- **Deployment:** Vercel

## 🏗️ Getting Started
**Prerequisites**
- Node.js 18.x or later

- A Google Service Account with access to your project's Spreadsheet

- Vercel Postgres database instance


## 👩‍💻 Credits
Developed for the Dancing Nurses Association of Central Philippine University.

"One blood, One gene."

## Run this every update in the Gsheets

Invoke-RestMethod -Uri http://localhost:3000/api/sync-sheets -Method POST

--ongoing