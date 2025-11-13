#!/bin/bash

# Kos Transfer Project Cleanup Script
# This script removes GitHub Spark dependencies and unused files

echo "🧹 Cleaning up Kos Transfer project..."

# Remove Spark-specific files
echo "📝 Removing Spark configuration files..."
rm -f runtime.config.json
rm -f spark.meta.json
rm -f components.json
rm -f theme.json
rm -f SECURITY.md
rm -f LICENSE

# Remove .idea directory (JetBrains IDE)
echo "🗑️  Removing IDE files..."
rm -rf .idea

# Remove unused UI components (keep only button, card, badge)
echo "🔧 Removing unused UI components..."
cd src/components/ui
for file in *.tsx; do
  if [[ "$file" != "button.tsx" && "$file" != "card.tsx" && "$file" != "badge.tsx" ]]; then
    rm -f "$file"
    echo "   Removed: $file"
  fi
done
cd ../../..

# Clean node_modules and lock files
echo "📦 Cleaning dependencies..."
rm -rf node_modules
rm -f package-lock.json
rm -f bun.lock

# Reinstall clean dependencies
echo "📦 Installing clean dependencies..."
npm install

echo "✅ Cleanup complete!"
echo ""
echo "Next steps:"
echo "1. Run 'npm run dev' to start development server"
echo "2. Update WhatsApp number in components"
echo "3. Replace placeholder images with actual photos"
