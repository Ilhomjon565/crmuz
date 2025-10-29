# 🔗 Panel URL Manzillari - Tezkor Ma'lumot

## Asosiy Panel URL'lari

| Panel | URL | Qisqa Tavsif |
|-------|-----|--------------|
| 🏠 **Asosiy Sahifa** | `/` | Landing page, panel kirish tugmalari |
| 👨‍🏫 **Teacher Panel** | `/teacher` | O'qituvchilar uchun boshqaruv paneli |
| 👔 **Manager Panel** | `/manager` | Menejerlar uchun boshqaruv paneli |
| 🛡️ **Director Panel** | `/director` | Direktorlar uchun boshqaruv paneli |

---

## Production URL'lar

### Asosiy Sahifa
```
https://educrm.uz
```

### Teacher Panel
```
https://educrm.uz/teacher
```

### Manager Panel
```
https://educrm.uz/manager
```

### Director Panel
```
https://educrm.uz/director
```

### Director Panel Registration
```
https://director.educrm.uz/register
```

---

## Development URL'lar (Local)

```bash
# Localhost URL'lari (npm run dev)
http://localhost:3000                   # Asosiy sahifa
http://localhost:3000/teacher           # Teacher panel
http://localhost:3000/manager           # Manager panel
http://localhost:3000/director          # Director panel
http://localhost:3000/director/register # Director registration
```

---

## Tab Navigation (Query Parameters)

Har bir panelda ichki tab'lar query parameter orqali ishlaydi:

### Teacher Panel Tabs
```
/teacher?tab=overview      # Dashboard (default)
/teacher?tab=lessons       # Darslar
/teacher?tab=students      # O'quvchilar
/teacher?tab=schedule      # Jadval
/teacher?tab=assignments   # Topshiriqlar
/teacher?tab=grades        # Baholar
/teacher?tab=messages      # Xabarlar
/teacher?tab=settings      # Sozlamalar
```

### Manager Panel Tabs
```
/manager?tab=dashboard     # Dashboard (default)
/manager?tab=students      # O'quvchilar
/manager?tab=schedule      # Dars jadvali
/manager?tab=courses       # Kurslar
/manager?tab=messages      # Xabarlar
/manager?tab=settings      # Sozlamalar
```

### Director Panel Tabs
```
/director?tab=overview     # Umumiy ko'rinish (default)
/director?tab=analytics    # Analitika
/director?tab=staff        # Xodimlar
/director?tab=finance      # Moliya
/director?tab=reports      # Hisobotlar
/director?tab=settings     # Sozlamalar
```

---

## File Structure

```
/app
├── page.tsx              # Asosiy sahifa (/)
├── teacher/
│   └── page.tsx         # Teacher panel (/teacher)
├── manager/
│   └── page.tsx         # Manager panel (/manager)
└── director/
    └── page.tsx         # Director panel (/director)

/components
└── admin-access-section.tsx  # Panellar showcase komponenti
```

---

## Direct Access (Testing)

Testlash uchun to'g'ridan-to'g'ri URL'larga o'ting:

```bash
# Browser'da ochish:
http://localhost:3000/teacher
http://localhost:3000/manager
http://localhost:3000/director

# yoki production:
https://educrm.uz/teacher
https://educrm.uz/manager
https://educrm.uz/director
```

---

## API Routes (Kelgusida)

```
# Authentication
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/user

# Teacher
GET    /api/teacher/lessons
GET    /api/teacher/students
POST   /api/teacher/assignments

# Manager
GET    /api/manager/students
POST   /api/manager/students
GET    /api/manager/courses

# Director
GET    /api/director/analytics
GET    /api/director/finance
GET    /api/director/reports
```

---

**Quick Links:**
- 📖 [To'liq Documentation](./ADMIN_PANELS.md)
- 🏠 [README](./README.md)
- 🚀 [Changelog](./CHANGELOG.md)

