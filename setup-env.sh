#!/bin/bash

# EduCRM Environment Setup Script
# This script creates .env.local file with subdomain configuration

echo "🚀 EduCRM Environment Setup"
echo "============================"
echo ""

# Check if .env.local already exists
if [ -f ".env.local" ]; then
    echo "⚠️  .env.local already exists!"
    read -p "Do you want to overwrite it? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Setup cancelled."
        exit 1
    fi
fi

# Create .env.local file
cat > .env.local << 'EOF'
# EduCRM Environment Variables - Local Configuration

# Application
NEXT_PUBLIC_APP_NAME=EduCRM
NEXT_PUBLIC_APP_URL=https://educrm.uz
NEXT_PUBLIC_APP_VERSION=1.0.0

# ============================================
# SUBDOMAIN URLs - PRODUCTION
# ============================================
NEXT_PUBLIC_MAIN_DOMAIN=educrm.uz
NEXT_PUBLIC_TEACHER_URL=https://teacher.educrm.uz
NEXT_PUBLIC_MANAGER_URL=https://manager.educrm.uz
NEXT_PUBLIC_DIRECTOR_URL=https://director.educrm.uz

# ============================================
# SUBDOMAIN URLs - DEVELOPMENT
# ============================================
# Using localhost subdomains (works in Chrome/Firefox)
NEXT_PUBLIC_TEACHER_URL_DEV=http://teacher.localhost:3000
NEXT_PUBLIC_MANAGER_URL_DEV=http://manager.localhost:3000
NEXT_PUBLIC_DIRECTOR_URL_DEV=http://director.localhost:3000

# Environment
NODE_ENV=development

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=info@educrm.uz
NEXT_PUBLIC_CONTACT_PHONE=+998-XX-XXX-XXXX

# Debug Mode
NEXT_PUBLIC_DEBUG=true
EOF

echo "✅ .env.local file created successfully!"
echo ""
echo "📝 Configuration Summary:"
echo "========================"
echo ""
echo "Production URLs:"
echo "  Main:     https://educrm.uz"
echo "  Teacher:  https://teacher.educrm.uz"
echo "  Manager:  https://manager.educrm.uz"
echo "  Director: https://director.educrm.uz"
echo ""
echo "Development URLs:"
echo "  Teacher:  http://teacher.localhost:3000"
echo "  Manager:  http://manager.localhost:3000"
echo "  Director: http://director.localhost:3000"
echo ""
echo "🎯 Next Steps:"
echo "=============="
echo "1. Start development server: npm run dev"
echo "2. Open in browser:"
echo "   - Main page: http://localhost:3000"
echo "   - Teacher:   http://teacher.localhost:3000"
echo "   - Manager:   http://manager.localhost:3000"
echo "   - Director:  http://director.localhost:3000"
echo ""
echo "💡 Note: If localhost subdomains don't work in your browser,"
echo "   edit .env.local and use paths (/teacher, /manager, /director)"
echo ""
echo "✨ Setup complete! Happy coding!"

