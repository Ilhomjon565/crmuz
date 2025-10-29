# 🌐 Subdomain Setup Documentation

EduCRM tizimida har bir role uchun alohida subdomain orqali kirish imkoniyati mavjud.

---

## 🎯 Subdomain Structure

```
educrm.uz              → Main Landing Page
├── teacher.educrm.uz  → Teacher Panel
├── manager.educrm.uz  → Manager Panel
└── director.educrm.uz → Director Panel
```

---

## 📋 DNS Configuration

### DNS Records (A Records yoki CNAME)

Domain provideringizda (Namecheap, GoDaddy, Cloudflare, etc.) quyidagi DNS recordlarni qo'shing:

```
# Main Domain
Type: A
Host: @
Value: YOUR_SERVER_IP
TTL: 3600

# WWW subdomain
Type: CNAME
Host: www
Value: educrm.uz
TTL: 3600

# Teacher Panel
Type: A
Host: teacher
Value: YOUR_SERVER_IP
TTL: 3600

# Manager Panel
Type: A
Host: manager
Value: YOUR_SERVER_IP
TTL: 3600

# Director Panel
Type: A
Host: director
Value: YOUR_SERVER_IP
TTL: 3600
```

### Cloudflare uchun (Recommended)

Agar Cloudflare ishlatayotgan bo'lsangiz:

1. Cloudflare Dashboard → DNS → Records
2. Quyidagi recordlarni qo'shing:

```
Type    Name      Content            Proxy Status    TTL
A       @         YOUR_SERVER_IP     Proxied         Auto
A       teacher   YOUR_SERVER_IP     Proxied         Auto
A       manager   YOUR_SERVER_IP     Proxied         Auto
A       director  YOUR_SERVER_IP     Proxied         Auto
CNAME   www       educrm.uz          Proxied         Auto
```

---

## 🔒 SSL Certificate Setup

### Option 1: Let's Encrypt (FREE, Recommended)

Wildcard SSL certificate uchun:

```bash
# Certbot o'rnatish
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Wildcard certificate olish
sudo certbot certonly --manual \
  --preferred-challenges=dns \
  --email admin@educrm.uz \
  --server https://acme-v02.api.letsencrypt.org/directory \
  --agree-tos \
  -d educrm.uz \
  -d *.educrm.uz

# DNS TXT record qo'shish kerak bo'ladi:
# _acme-challenge.educrm.uz → [verification_code]
```

### Option 2: Cloudflare SSL (FREE)

Agar Cloudflare ishlatayotgan bo'lsangiz:

1. Cloudflare Dashboard → SSL/TLS → Overview
2. Encryption mode: Full (strict)
3. SSL/TLS → Origin Server → Create Certificate
4. Certificate va Private Key ni saqlang
5. Nginx configuration'da foydalaning

```bash
# Certificate files
/etc/ssl/certs/educrm.uz.pem          # Origin Certificate
/etc/ssl/private/educrm.uz.key        # Private Key
```

### Nginx SSL Configuration

```nginx
ssl_certificate /etc/ssl/certs/educrm.uz.pem;
ssl_certificate_key /etc/ssl/private/educrm.uz.key;
```

---

## ⚙️ Next.js Configuration

### Environment Variables

`.env.local` faylini yarating:

```bash
# Main domain
NEXT_PUBLIC_MAIN_DOMAIN=educrm.uz

# Subdomain URLs
NEXT_PUBLIC_TEACHER_URL=https://teacher.educrm.uz
NEXT_PUBLIC_MANAGER_URL=https://manager.educrm.uz
NEXT_PUBLIC_DIRECTOR_URL=https://director.educrm.uz

# Environment
NODE_ENV=production
```

### next.config.mjs

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other configs
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://educrm.uz, https://teacher.educrm.uz, https://manager.educrm.uz, https://director.educrm.uz',
          },
        ],
      },
    ]
  },
}

export default nextConfig
```

---

## 🚀 Deployment Steps

### 1. Server Setup

```bash
# 1. Server'ga kirish
ssh user@YOUR_SERVER_IP

# 2. Nginx o'rnatish
sudo apt update
sudo apt install nginx

# 3. Node.js o'rnatish (v18+)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# 4. PM2 o'rnatish (Process Manager)
sudo npm install -g pm2

# 5. Loyihani clone qilish
git clone https://github.com/your-repo/educrm.git
cd educrm

# 6. Dependencies o'rnatish
npm install

# 7. Build qilish
npm run build

# 8. PM2 bilan ishga tushirish
pm2 start npm --name "educrm" -- start
pm2 save
pm2 startup
```

### 2. Nginx Configuration

```bash
# 1. Nginx config faylini ko'chirish
sudo cp nginx.conf /etc/nginx/sites-available/educrm.uz

# 2. Symlink yaratish
sudo ln -s /etc/nginx/sites-available/educrm.uz /etc/nginx/sites-enabled/

# 3. Default config'ni o'chirish (agar kerak bo'lsa)
sudo rm /etc/nginx/sites-enabled/default

# 4. Nginx test qilish
sudo nginx -t

# 5. Nginx restart qilish
sudo systemctl restart nginx
```

### 3. SSL Certificate

```bash
# Let's Encrypt certificate o'rnatish
sudo certbot --nginx -d educrm.uz -d www.educrm.uz \
  -d teacher.educrm.uz -d manager.educrm.uz -d director.educrm.uz

# Auto-renewal setup
sudo certbot renew --dry-run
```

---

## 🧪 Local Development Setup

### Option 1: /etc/hosts faylini o'zgartirish

```bash
# /etc/hosts faylini tahrirlash
sudo nano /etc/hosts

# Quyidagi qatorlarni qo'shing:
127.0.0.1 educrm.local
127.0.0.1 teacher.educrm.local
127.0.0.1 manager.educrm.local
127.0.0.1 director.educrm.local
```

Keyin browser'da:
```
http://educrm.local:3000
http://teacher.educrm.local:3000
http://manager.educrm.local:3000
http://director.educrm.local:3000
```

### Option 2: localhost subdomain'lar

Next.js middleware localhost subdomain'larni qo'llab-quvvatlaydi:

```bash
# Development server'ni ishga tushirish
npm run dev

# Browser'da:
http://localhost:3000                # Main page
http://teacher.localhost:3000        # Teacher panel
http://manager.localhost:3000        # Manager panel
http://director.localhost:3000       # Director panel
```

**Note:** Ba'zi browser'lar (Chrome, Firefox) localhost subdomain'larni qo'llab-quvvatlaydi, lekin Safari'da ishlamasligi mumkin.

---

## 🔍 Testing Subdomain Routing

### 1. DNS Propagation Check

```bash
# DNS records'ni tekshirish
nslookup teacher.educrm.uz
nslookup manager.educrm.uz
nslookup director.educrm.uz

# yoki dig bilan:
dig teacher.educrm.uz
dig manager.educrm.uz
dig director.educrm.uz
```

### 2. SSL Certificate Test

```bash
# SSL certificate'ni tekshirish
openssl s_client -connect teacher.educrm.uz:443 -servername teacher.educrm.uz
openssl s_client -connect manager.educrm.uz:443 -servername manager.educrm.uz
openssl s_client -connect director.educrm.uz:443 -servername director.educrm.uz
```

### 3. Online Tools

- **SSL Labs:** https://www.ssllabs.com/ssltest/
- **DNS Checker:** https://dnschecker.org/
- **Subdomain Finder:** https://subdomainfinder.c99.nl/

---

## 🔒 Security Best Practices

### 1. CORS Configuration

```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const origin = request.headers.get('origin')
  const allowedOrigins = [
    'https://educrm.uz',
    'https://teacher.educrm.uz',
    'https://manager.educrm.uz',
    'https://director.educrm.uz',
  ]
  
  if (origin && allowedOrigins.includes(origin)) {
    const response = NextResponse.next()
    response.headers.set('Access-Control-Allow-Origin', origin)
    return response
  }
  
  return NextResponse.next()
}
```

### 2. Rate Limiting

```nginx
# nginx.conf
limit_req_zone $binary_remote_addr zone=teacher:10m rate=10r/s;
limit_req_zone $binary_remote_addr zone=manager:10m rate=10r/s;
limit_req_zone $binary_remote_addr zone=director:10m rate=10r/s;

server {
    server_name teacher.educrm.uz;
    location / {
        limit_req zone=teacher burst=20 nodelay;
        # ...
    }
}
```

### 3. Firewall Rules

```bash
# UFW firewall
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp
sudo ufw enable
```

---

## 🐛 Troubleshooting

### DNS not resolving

```bash
# Check DNS propagation
dig teacher.educrm.uz +trace

# Flush DNS cache (local)
# macOS:
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder

# Windows:
ipconfig /flushdns

# Linux:
sudo systemd-resolve --flush-caches
```

### SSL Certificate Issues

```bash
# Check certificate
sudo certbot certificates

# Renew certificate
sudo certbot renew --force-renewal

# Check Nginx logs
sudo tail -f /var/log/nginx/error.log
```

### Nginx Issues

```bash
# Test configuration
sudo nginx -t

# Check status
sudo systemctl status nginx

# Restart Nginx
sudo systemctl restart nginx

# View error logs
sudo tail -f /var/log/nginx/error.log
```

### Next.js Issues

```bash
# Check PM2 logs
pm2 logs educrm

# Restart application
pm2 restart educrm

# Check Node.js process
ps aux | grep node
```

---

## 📊 Monitoring

### Setup monitoring for subdomains

```bash
# Install monitoring tools
sudo apt install curl

# Create monitoring script
nano /home/user/monitor.sh
```

```bash
#!/bin/bash
# monitor.sh

DOMAINS=(
  "https://educrm.uz"
  "https://teacher.educrm.uz"
  "https://manager.educrm.uz"
  "https://director.educrm.uz"
)

for domain in "${DOMAINS[@]}"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" "$domain")
  if [ $status -eq 200 ]; then
    echo "✅ $domain is UP (Status: $status)"
  else
    echo "❌ $domain is DOWN (Status: $status)"
    # Send alert (email, Telegram, etc.)
  fi
done
```

```bash
# Make executable
chmod +x /home/user/monitor.sh

# Add to crontab (check every 5 minutes)
crontab -e
# Add line:
*/5 * * * * /home/user/monitor.sh
```

---

## 🎯 Performance Optimization

### 1. Cloudflare Settings

```
SSL/TLS:
- Full (strict)
- Automatic HTTPS Rewrites: ON
- Always Use HTTPS: ON

Speed:
- Auto Minify: CSS, JavaScript, HTML
- Brotli: ON
- HTTP/2: ON
- HTTP/3 (with QUIC): ON

Caching:
- Caching Level: Standard
- Browser Cache TTL: 4 hours
```

### 2. Nginx Caching

```nginx
# Add to nginx.conf
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=1g inactive=60m;

location / {
    proxy_cache my_cache;
    proxy_cache_valid 200 60m;
    proxy_cache_use_stale error timeout http_500 http_502 http_503 http_504;
}
```

---

## 📞 Support

Agar muammo yuzaga kelsa:

- 📧 **Email:** support@educrm.uz
- 📖 **Documentation:** https://educrm.uz/docs
- 💬 **Telegram:** @educrm_support

---

**Last Updated:** October 29, 2025  
**Version:** 1.0.0

