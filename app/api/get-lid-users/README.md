# Get Lid Users API

Bu API endpoint lid foydalanuvchilarini token bilan autentifikatsiya qilib olish va ularni holatga qarab filtrlash uchun ishlatiladi.

## Endpoint

```
GET /api/get-lid-users
POST /api/get-lid-users
```

## Autentifikatsiya

Barcha so'rovlar token bilan autentifikatsiya qilinishi kerak. Token quyidagi usullardan biri bilan yuborilishi mumkin:

1. **Authorization header** (tavsiya etiladi):
   ```
   Authorization: Bearer your-token-here
   ```

2. **Query parameter**:
   ```
   GET /api/get-lid-users?token=your-token-here
   ```

## Ruxsat etilgan tokenlar

- `admin-token-123` - Admin huquqlari
- `manager-token-456` - Manager huquqlari  
- `user-token-789` - User huquqlari

## GET /api/get-lid-users

Lid foydalanuvchilarini olish uchun.

### Query Parameters

- `token` (string, optional) - Autentifikatsiya tokeni (agar Authorization header ishlatilmasa)
- `status` (string, optional) - Foydalanuvchilarni holat bo'yicha filtrlash
- `lidId` (string, optional) - Muayyan lid ID bo'yicha filtrlash

### Ruxsat etilgan statuslar

- `ariza qabul qilindi` - Ariza qabul qilindi
- `aloqaga chiqildi` - Aloqaga chiqildi
- `sinov darsida` - Sinov darsida
- `qabul qilindi` - Qabul qilindi
- `arxiv` - Arxiv

### Misollar

#### Barcha foydalanuvchilarni olish
```bash
curl -H "Authorization: Bearer admin-token-123" \
     "http://localhost:3000/api/get-lid-users"
```

#### Muayyan holatdagi foydalanuvchilarni olish
```bash
curl -H "Authorization: Bearer admin-token-123" \
     "http://localhost:3000/api/get-lid-users?status=ariza%20qabul%20qilindi"
```

#### Muayyan lid ID bo'yicha filtrlash
```bash
curl -H "Authorization: Bearer admin-token-123" \
     "http://localhost:3000/api/get-lid-users?lidId=lid1"
```

#### Bir nechta filterlar bilan
```bash
curl -H "Authorization: Bearer admin-token-123" \
     "http://localhost:3000/api/get-lid-users?lidId=lid1&status=qabul%20qilindi"
```

### Javob formati

```json
{
  "success": true,
  "data": {
    "users": [
      {
        "_id": "1",
        "lidId": "lid1",
        "fullname": "Ahmad Karimov",
        "phoneNumber": "+998901234567",
        "courses": [
          {
            "courseName": "Web Development",
            "price": 500000,
            "duration": "6 oy",
            "status": "ariza qabul qilindi"
          }
        ],
        "longitude": 69.2401,
        "latitude": 41.2995,
        "createdAt": "2024-01-15T10:00:00Z",
        "updatedAt": "2024-01-15T10:00:00Z"
      }
    ],
    "usersByStatus": {
      "ariza qabul qilindi": [...],
      "aloqaga chiqildi": [...],
      "sinov darsida": [...],
      "qabul qilindi": [...],
      "arxiv": [...]
    },
    "stats": {
      "total": 5,
      "byStatus": {
        "ariza qabul qilindi": 1,
        "aloqaga chiqildi": 1,
        "sinov darsida": 1,
        "qabul qilindi": 1,
        "arxiv": 1
      }
    },
    "allowedStatuses": [
      "ariza qabul qilindi",
      "aloqaga chiqildi",
      "sinov darsida",
      "qabul qilindi",
      "arxiv"
    ]
  },
  "message": "Lid foydalanuvchilari muvaffaqiyatli olingan"
}
```

## POST /api/get-lid-users

Foydalanuvchi kursining holatini yangilash uchun.

### Request Body

```json
{
  "userId": "user-id",
  "courseId": "course-id", 
  "newStatus": "qabul qilindi"
}
```

### Misol

```bash
curl -X POST \
     -H "Authorization: Bearer admin-token-123" \
     -H "Content-Type: application/json" \
     -d '{
       "userId": "1",
       "courseId": "course1",
       "newStatus": "qabul qilindi"
     }' \
     "http://localhost:3000/api/get-lid-users"
```

### Javob formati

```json
{
  "success": true,
  "message": "Status muvaffaqiyatli yangilandi",
  "data": {
    "userId": "1",
    "courseId": "course1",
    "newStatus": "qabul qilindi",
    "updatedAt": "2024-01-20T10:00:00Z"
  }
}
```

## Xatoliklar

### 401 Unauthorized
```json
{
  "success": false,
  "message": "Token talab qilinadi"
}
```

### 400 Bad Request
```json
{
  "success": false,
  "message": "Yaroqsiz status. Ruxsat etilgan statuslar: ariza qabul qilindi, aloqaga chiqildi, sinov darsida, qabul qilindi, arxiv"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Server xatoligi yuz berdi"
}
```

## JavaScript/TypeScript misoli

```typescript
// Foydalanuvchilarni olish
async function getLidUsers(token: string, status?: string, lidId?: string) {
  const params = new URLSearchParams()
  if (status) params.append('status', status)
  if (lidId) params.append('lidId', lidId)
  
  const response = await fetch(`/api/get-lid-users?${params}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  
  return await response.json()
}

// Status yangilash
async function updateUserStatus(token: string, userId: string, courseId: string, newStatus: string) {
  const response = await fetch('/api/get-lid-users', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId,
      courseId,
      newStatus
    })
  })
  
  return await response.json()
}

// Foydalanish
const users = await getLidUsers('admin-token-123', 'ariza qabul qilindi')
console.log(users.data.users)

// Status yangilash
await updateUserStatus('admin-token-123', '1', 'course1', 'qabul qilindi')
```
