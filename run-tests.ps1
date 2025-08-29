# ==============================================
# Clariti Playwright Test Runner for Windows
# ==============================================

Write-Host "🚀 Starting setup and tests for Clariti Playwright project"

# Step 1: Install npm dependencies
Write-Host "📦 Installing npm dependencies..."
npm install

# Step 2: Install Playwright browsers
Write-Host "🌐 Installing Playwright browsers..."
npm run install-browsers

# Step 3: Setup environment file
if (-Not (Test-Path ".env")) {
    Copy-Item ".env.example" ".env"
    Write-Host "✅ .env file created. Edit it if needed."
} else {
    Write-Host "✅ .env file already exists."
}

# Step 4: Run all tests
Write-Host "🧪 Running Playwright tests..."
npm run test

# Step 5: Open HTML report
Write-Host "📊 Opening HTML report..."
npm run report

Write-Host "✅ All done!"
