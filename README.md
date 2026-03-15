<div align="center">
  <br />
  <a href="https://github.com/Itssanthoshhere/QuickShow-Movie-Theater-Booking-Platform" target="_blank">
    <img src="client/public/quickshowThumbnail.png" alt="QuickShow Project Banner">
  </a>
  <br />
  <div>
    <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logoColor=white&logo=react"/>
    <img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logoColor=white&logo=node.js"/>
    <img src="https://img.shields.io/badge/-Express-black?style=for-the-badge&logoColor=white&logo=express"/>
    <img src="https://img.shields.io/badge/-MongoDB-00A35C?style=for-the-badge&logoColor=white&logo=mongodb"/>
    <br/>
    <img src="https://img.shields.io/badge/-Stripe-626CD9?style=for-the-badge&logoColor=white&logo=stripe"/>
    <img src="https://img.shields.io/badge/-Clerk-000000?style=for-the-badge&logoColor=white&logo=clerk"/>
    <img src="https://img.shields.io/badge/-TailwindCSS-38B2AC?style=for-the-badge&logoColor=white&logo=tailwindcss"/>
    <img src="https://img.shields.io/badge/-Inngest-black?style=for-the-badge&logoColor=white&logo=inngest"/>
  </div>
  <div align="center">
    <h3>🎬 QuickShow – Movie Theater Booking Platform</h3>
    <b>Full-stack movie booking experience</b> built with <b>React, Node.js, and MongoDB</b>. 
    Book tickets in real-time, manage theaters, process payments, and enjoy an admin dashboard that brings the magic of cinema to your fingertips.  
    <br/>
    <i>Designed for movie lovers, admins, and modern theaters seeking a digital booking system.</i>
  </div>
  <br />
  <a href="https://quick-show-ticketbooking.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-brightgreen?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  <br />
</div>

---

## 📋 Table of Contents

1. ✨ Introduction
2. ⚙️ Tech Stack
3. 🔋 Features
4. ⚡ Automation & Background Jobs
5. 🤸 Quick Start
6. 🧱 Project Structure
7. 🧩 API Overview
8. 🚀 Deployment
9. 📝 Customization
10. 🤝 Contribution
11. 🔗 Contacts
12. 📄 License
13. 🙏 Acknowledgements

---

## ✨ Introduction

**QuickShow** is a modern **movie theater booking platform** that simplifies ticket management for users and administrators.

It provides a **complete end-to-end cinema booking experience**, including:

* real-time seat selection
* secure payment processing
* automated show management
* email notifications
* background job automation

The system also integrates **TMDB movie data** and **Inngest workflows** to automatically keep the platform updated with new movies and shows.

🎯 Whether you're running a cinema or booking your next movie night — QuickShow delivers a seamless experience.

---

## ⚙️ Tech Stack

## 💻 Frontend

* **React 19 + Vite** – Fast modern frontend stack
* **Tailwind CSS 4** – Responsive UI styling
* **React Router DOM** – Navigation and routing
* **Axios** – API communication
* **Lucide React** – Lightweight icon system

---

## ⚙️ Backend

* **Node.js + Express 5** – Backend API framework
* **MongoDB + Mongoose** – Database and schema management
* **Stripe** – Secure payment processing
* **Clerk** – Authentication and user management
* **TMDB API** – Movie data provider
* **Cloudinary** – Media storage for images
* **Nodemailer** – Email notifications
* **Inngest** – Background jobs and workflow automation

---

## 🔋 Features

- 🎟️ **Smart Booking System** – Real-time seat availability and interactive seat layouts
- 💳 **Secure Payments** – Integrated with **Stripe Checkout** and webhooks
- 👥 **User Management** – Authentication, profiles, and favorites powered by **Clerk**
- 🧑‍💼 **Admin Dashboard** – Manage movies, shows, and bookings from a centralized admin panel
- 🎬 **Movie Catalog** – Browse movies with posters, ratings, runtime, and details
- 🔄 **Automatic Movie Sync** – Fetches **Now Playing movies from TMDB API**
- 📅 **Automatic Show Generation** – Background job automatically creates shows for upcoming days
- 📧 **Email Notifications** – Booking confirmations and reminders via **Nodemailer**
- ⏰ **Background Workflows** – Powered by **Inngest** for:
  - user synchronization
  - booking validation
  - payment verification
  - show reminders
  - automated movie updates
- ☁️ **Cloud Storage** – Media storage handled using **Cloudinary**
- 📱 **Responsive UI** – Optimized for desktop, tablet, and mobile devices

---

## ⚡ Automation & Background Jobs

QuickShow uses **Inngest workflows** to automate backend operations.

### Automated Workflows

| Workflow               | Description                              |
| ---------------------- | ---------------------------------------- |
| User Sync              | Syncs Clerk users to MongoDB             |
| Payment Validation     | Cancels unpaid bookings after 10 minutes |
| Booking Confirmation   | Sends confirmation email after payment   |
| Show Reminders         | Sends reminder emails before showtime    |
| New Show Notifications | Alerts users when new shows are added    |
| TMDB Movie Sync        | Fetches now-playing movies automatically |
| Show Generator         | Creates showtimes for upcoming days      |

These workflows ensure the platform stays **fully automated and up-to-date** without manual admin work.

---

# 🤸 Quick Start

## Prerequisites

Install the following:

* Git
* Node.js
* MongoDB Atlas
* Vercel (for deployment)

---

## Clone the Repository

```bash
git clone https://github.com/Itssanthoshhere/QuickShow-Movie-Theater-Booking-Platform.git
cd QuickShow-Movie-Theater-Booking-Platform
```

---

## Install Dependencies

```bash
cd client
npm install

cd ../server
npm install
```

---

## Environment Variables

Create `.env` files for **client** and **server**.

---

### Server `.env`

```env
MONGODB_URI=

CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=

TMDB_API_KEY=

STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

SENDER_EMAIL=
SMTP_USER=
SMTP_PASS=
```

TMDB_API_KEY should be the **TMDB Read Access Token (v4)** from:

[https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)

---

### Client `.env`

```env
VITE_CURRENCY='₹'

VITE_CLERK_PUBLISHABLE_KEY=

VITE_BASE_URL=http://localhost:3000

VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original
```

---

## Run the Project

Start backend:

```bash
cd server
npm run dev
```

Start frontend:

```bash
cd client
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 🧱 Project Structure

```
QuickShow/
├── client/
│   ├── src/
│   ├── public/
│   ├── vite.config.js
│   └── vercel.json
│
└── server/
    ├── configs/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    ├── inngest/
    ├── server.js
    └── vercel.json
```

---

## 🧩 API Overview

| Endpoint                     | Method | Description                 |
| ---------------------------- | ------ | --------------------------- |
| `/api/show`                  | GET    | Fetch available shows       |
| `/api/show/:movieId`         | GET    | Fetch showtimes for a movie |
| `/api/booking`               | POST   | Create booking              |
| `/api/user/bookings`         | GET    | Get user bookings           |
| `/api/user/favourites`       | GET    | Fetch favourite movies      |
| `/api/user/update-favourite` | POST   | Add/remove favourite movie  |
| `/api/admin/add-show`        | POST   | Add a new show              |
| `/api/admin/all-bookings`    | GET    | Get all bookings            |
| `/api/admin/dashboard`       | GET    | Admin analytics             |
| `/api/stripe/webhook`        | POST   | Stripe payment webhook      |

---

## 🚀 Deployment

QuickShow is deployed using **Vercel**.

### Frontend

```
https://quick-show-ticketbooking.vercel.app/
```

### Backend API

```
https://quick-show-servers.vercel.app/
```

The backend handles:

* authentication
* bookings
* payments
* background workflows
* automated movie syncing

---

## 📝 Customization

- 🎨 Update branding & colors in `client/src/index.css`
- 🖼️ Replace hero images in `client/public/readme/`
- 🧠 Modify API routes in `server/routes/`
- 💼 Configure environment settings in `.env` files

---

## 🤝 Contribution

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```
git checkout -b feature/my-feature
```

3. Commit your changes

```
git commit -m "feat: add new feature"
```

4. Push the branch

```
git push origin feature/my-feature
```

5. Open a Pull Request

---

## 🔗 Contacts

- **GitHub:** [Itssanthoshhere](https://github.com/Itssanthoshhere)
- **LinkedIn:** [Santhosh VS](https://www.linkedin.com/in/thesanthoshvs/)

---

## 📄 License

This project is for **educational and portfolio use only**.
All trademarks, logos, and assets belong to their respective owners.

---

## 🙏 Acknowledgements

- [React](https://react.dev/) – Frontend framework
- [Node.js](https://nodejs.org/) – Backend runtime
- [Tailwind CSS](https://tailwindcss.com/) – Styling framework
- [Vercel](https://vercel.com/) – Hosting platform
- [Stripe](https://stripe.com/) – Payment gateway
- [Clerk](https://clerk.com/) – Authentication
- [Cloudinary](https://cloudinary.com/) – Media storage
- [Inngest](https://inngest.com/) – Background workflows

---

#### ⭐ Show Your Support

If you like **QuickShow**, give it a ⭐ on GitHub and share it with your network!

---
