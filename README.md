# Intern Portal – Full Stack Web Application

A full-stack intern & project management portal built with Next.js, Tailwind CSS, and Supabase.  
This project includes admin authentication, protected routes, and real-time CRUD operations.

---

## 🔗 Live Demo
**URL:** https://YOUR-VERCEL-URL.vercel.app  
*(Replace with your deployed link)*

---

## 🔐 Admin Login (For Evaluation)
**Admin URL:** /admin/login  
**Email:** admin@example.com  
**Password:** admin123  
*(Replace with your real test credentials)*

---

## ✅ Test Flow (How to Evaluate)

1. Login  
   - Go to `/admin/login`  
   - Login with admin credentials  

2. Admin Dashboard  
   - Redirects to `/admin/dashboard`  

3. Intern Management  
   - Go to `/admin/interns`  
   - Add Intern  
   - Delete Intern  
   - Go to `/interns` → changes reflect  

4. Project Management  
   - Go to `/admin/projects`  
   - Add Project  
   - Delete Project  
   - Go to `/projects` → changes reflect  
   - Refresh → data persists  

5. Route Protection  
   - Open `/admin/dashboard` without login → redirects to login  

---

## 🧰 Tech Stack

- Frontend: Next.js (App Router)
- Styling: Tailwind CSS
- Backend & Database: Supabase
- Authentication: Supabase Auth
- Hosting: Vercel

---

## ⚙️ Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key