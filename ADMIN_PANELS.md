# 📚 Admin Panels Documentation

EduCRM tizimida uchta asosiy boshqaruv paneli mavjud: **Teacher Panel**, **Manager Panel** va **Director Panel**. Har bir panel o'z vakolatlariga ega va maxsus funksiyalar bilan ta'minlangan.

---

## 🎯 Panel URL Manzillari

| Panel | URL | Foydalanuvchilar | Status |
|-------|-----|------------------|--------|
| **Teacher Panel** | `/teacher` | O'qituvchilar | ✅ Faol |
| **Manager Panel** | `/manager` | Menejerlar | ✅ Faol |
| **Director Panel** | `/director` | Direktorlar | ✅ Faol |

---

## 👨‍🏫 Teacher Panel

**URL:** `https://educrm.uz/teacher`  
**Maqsad:** O'qituvchilar uchun darslar, o'quvchilar va topshiriqlarni boshqarish

### Asosiy Funksiyalar

#### 📊 Dashboard (Umumiy ko'rinish)
- Real-time statistika
- Bugungi darslar jadvali
- Tekshirish kerak bo'lgan topshiriqlar
- O'quvchilar faolligi va davomad statistikasi
- Bu oyning natijalar ko'rsatkichlari

**URL:** `/teacher` (default page)

#### 📖 Darslar
- Darslar ro'yxati
- Dars rejalari
- Dars materiallari
- O'tilgan mavzular tarixi

**URL:** `/teacher?tab=lessons`

#### 👥 O'quvchilar
- O'quvchilar ro'yxati
- Shaxsiy ma'lumotlar
- Davomad tarixi
- Individual progress tracking

**URL:** `/teacher?tab=students`

#### 📅 Jadval
- Haftalik dars jadvali
- Oylik rejalashtirish
- Dars vaqtlarini o'zgartirish

**URL:** `/teacher?tab=schedule`

#### 📝 Topshiriqlar
- Topshiriqlar yaratish
- Topshiriqlarni tekshirish
- Natijalarni kiritish
- Topshiriqlar tarixi

**URL:** `/teacher?tab=assignments`

#### 🏆 Baholar
- Baholar kiritish
- Baholar jadvali
- Akademik hisobotlar
- Progress tracking

**URL:** `/teacher?tab=grades`

#### 💬 Xabarlar
- O'quvchilar bilan aloqa
- Ota-onalarga xabarlar
- Bildirishnomalar
- Guruhli xabarlar

**URL:** `/teacher?tab=messages`

---

## 👔 Manager Panel

**URL:** `https://educrm.uz/manager`  
**Maqsad:** Menejerlar uchun o'quvchilar, kurslar va jadvallarni boshqarish

### Asosiy Funksiyalar

#### 📊 Dashboard
- Umumiy statistika
- Jami o'quvchilar soni
- Faol kurslar
- Bugungi darslar
- So'nggi faoliyat tarixi

**URL:** `/manager` (default page)

#### 👥 O'quvchilar
- Barcha o'quvchilar ro'yxati
- O'quvchi qo'shish/o'chirish
- To'lov holati
- Guruh biriktirilishi
- Shartnomalar

**URL:** `/manager?tab=students`

#### 📅 Dars Jadvali
- Barcha guruhlar jadvali
- Jadval tuzish
- O'qituvchilar biriktirilishi
- Xona (class) biriktirilishi
- Jadval optimizatsiyasi

**URL:** `/manager?tab=schedule`

#### 📚 Kurslar
- Kurslar ro'yxati
- Yangi kurs ochish
- Kurs narxlari
- Kurs o'qituvchilari
- O'quv dasturlari

**URL:** `/manager?tab=courses`

#### 💬 Xabarlar
- SMS/Email yuborish
- Ommaviy bildirishnomalar
- Eslatmalar
- Marketing xabarlari

**URL:** `/manager?tab=messages`

#### ⚙️ Sozlamalar
- Filial sozlamalari
- Xodimlar biriktirilishi
- Ruxsatlar
- Tizim sozlamalari

**URL:** `/manager?tab=settings`

---

## 🛡️ Director Panel

**URL:** `https://educrm.uz/director`  
**Maqsad:** Direktorlar uchun to'liq nazorat, moliyaviy analitika va hisobotlar

### Asosiy Funksiyalar

#### 📈 Umumiy ko'rinish (Overview)
- Barcha filiallar statistikasi
- Jami daromad (oylik/yillik)
- O'quvchilar soni dinamikasi
- Xodimlar statistikasi
- Filiallar performance
- Muhim xabarlar va ogohlantirishlar

**URL:** `/director` (default page)

#### 📊 Analitika
- Moliyaviy analitika
- O'quvchilar dinamikasi
- Kurslar samaradorligi
- O'qituvchilar performance
- Marketing ROI
- Conversion metrics

**URL:** `/director?tab=analytics`

#### 👔 Xodimlar
- Barcha xodimlar ro'yxati
- Ish haqi hisoboti
- Performance assessment
- Mehnat shartnomalari
- Xodimlar kirim-chiqimi

**URL:** `/director?tab=staff`

#### 💰 Moliya
- Daromadlar hisoboti
- Xarajatlar
- To'lovlar tarixi
- Qarzdorliklar
- Bank operatsiyalari
- Buxgalteriya

**URL:** `/director?tab=finance`

#### 📄 Hisobotlar
- Oylik hisobotlar
- Yillik hisobotlar
- Audit hisobotlari
- Excel/PDF export
- Custom hisobotlar yaratish

**URL:** `/director?tab=reports`

#### ⚙️ Sozlamalar
- Tizim sozlamalari
- Filiallar boshqaruvi
- Ruxsatlar va rollar
- Integratsiyalar
- Security settings

**URL:** `/director?tab=settings`

---

## 🔐 Xavfsizlik va Autentifikatsiya

### Kirish Talablari

Barcha panellarga kirish uchun quyidagilar talab qilinadi:

1. **Username/Email** - Tizimda ro'yxatdan o'tgan foydalanuvchi
2. **Password** - Xavfsiz parol (minimum 8 belgi)
3. **2FA Code** (optional) - Ikki faktorli autentifikatsiya

### Ruxsatlar Tizimi

```
Director (Highest Level)
    ├── Barcha filiallarni ko'rish
    ├── Moliyaviy ma'lumotlar
    ├── Xodimlarni boshqarish
    └── Tizim sozlamalari

Manager (Mid Level)
    ├── O'z filialini ko'rish
    ├── O'quvchilarni boshqarish
    ├── Jadval tuzish
    └── Kurslarni boshqarish

Teacher (Basic Level)
    ├── O'z darslarini ko'rish
    ├── O'z o'quvchilarini ko'rish
    ├── Baholar qo'yish
    └── Topshiriqlarni tekshirish
```

---

## 🚀 Asosiy Sahifadan Kirish

Asosiy sahifada (`/`) "Boshqaruv Panellari" bo'limida uchta panel kartochkasi ko'rsatiladi:

```
https://educrm.uz
    ↓
    Boshqaruv Panellari bo'limi
    ↓
    ┌─────────────┬─────────────┬─────────────┐
    │   Teacher   │   Manager   │   Director  │
    │    Panel    │    Panel    │    Panel    │
    └─────────────┴─────────────┴─────────────┘
         ↓              ↓              ↓
    /teacher       /manager       /director
```

---

## 📱 Responsive Design

Barcha panellar to'liq responsive va quyidagi qurilmalarda ishlaydi:

- ✅ Desktop (1920px+)
- ✅ Laptop (1366px - 1920px)
- ✅ Tablet (768px - 1365px)
- ✅ Mobile (320px - 767px)

---

## 🎨 UI/UX Xususiyatlari

### Design System

- **Color Schemes:**
  - Teacher Panel: Emerald → Teal → Cyan gradient
  - Manager Panel: Blue → Indigo → Purple gradient
  - Director Panel: Purple → Pink → Rose gradient

- **Animations:**
  - Framer Motion animatsiyalari
  - Smooth page transitions
  - Hover effects va micro-interactions
  - Loading states

- **Components:**
  - Gradient cards
  - Glass morphism effects
  - Shadow elevations
  - Icon-based navigation

---

## 🔧 Texnik Ma'lumotlar

### Technology Stack

```javascript
// Frontend
- Next.js 14+
- React 18+
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

// Routing
- App Router (Next.js)
- Client-side navigation
- Dynamic imports

// State Management
- React Hooks (useState, useEffect)
- URL-based tab management
```

### File Structure

```
/app
├── teacher/
│   └── page.tsx          # Teacher panel
├── manager/
│   └── page.tsx          # Manager panel
├── director/
│   └── page.tsx          # Director panel
└── page.tsx              # Main landing page

/components
├── admin-access-section.tsx  # Panels showcase section
└── ui/                   # Reusable UI components
```

---

## 📊 API Endpoints (Future Implementation)

### Authentication

```
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh
POST /api/auth/verify-2fa
```

### Teacher APIs

```
GET  /api/teacher/lessons
GET  /api/teacher/students
POST /api/teacher/assignments
PUT  /api/teacher/grades
GET  /api/teacher/schedule
```

### Manager APIs

```
GET  /api/manager/students
POST /api/manager/students
PUT  /api/manager/students/:id
GET  /api/manager/courses
POST /api/manager/schedule
```

### Director APIs

```
GET  /api/director/analytics
GET  /api/director/finance
GET  /api/director/reports
GET  /api/director/staff
POST /api/director/branches
```

---

## 🐛 Known Issues va Limitations

1. **Authentication:** Hozircha authentication implemented emas, demo mode
2. **Data Persistence:** Backend bilan bog'lanish hali yo'q, static data
3. **Real-time Updates:** WebSocket yoki polling hali implemented emas
4. **File Uploads:** Fayl yuklash funksiyasi hali mavjud emas

---

## 🎯 Keyingi Bosqichlar (Roadmap)

- [ ] Backend API integratsiyasi
- [ ] Real authentication tizimi
- [ ] Database bilan ishlash (PostgreSQL/MongoDB)
- [ ] Real-time updates (WebSocket)
- [ ] File upload funksiyasi
- [ ] Advanced analytics dashboards
- [ ] Mobile apps (React Native)
- [ ] Push notifications
- [ ] Email/SMS integratsiyasi
- [ ] Payment gateway integratsiyasi

---

## 📞 Qo'shimcha Ma'lumot

- **Website:** https://educrm.uz
- **Documentation:** https://educrm.uz/docs
- **Support:** support@educrm.uz
- **GitHub:** (repository URL)

---

## 📝 Changelog

### Version 1.0.0 (2025-10-29)
- ✅ Teacher Panel yaratildi
- ✅ Manager Panel yaratildi
- ✅ Director Panel yaratildi
- ✅ Admin Access Section komponenti
- ✅ Responsive design implemented
- ✅ Framer Motion animations qo'shildi
- ✅ Documentation yaratildi

---

**Last Updated:** October 29, 2025  
**Version:** 1.0.0  
**Author:** EduCRM Development Team

