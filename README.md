# Navigate to your project directory
cd /surge-qa-assessment

# eBay Similar Items - QA Automation Framework

## 📖 Project Overview

This repository contains automated testing framework for eBay's "Similar Items" functionality, developed as part of a QA Skills Assessment using **Playwright** and **TypeScript**.

### 🎯 Assessment Scenario
Testing the "Similar Items" feature on eBay product pages:
- Shopper searches for a wallet on eBay
- Main product page displays related best-seller products  
- Related products from same category and price range
- Up to 6 similar products displayed

**🔗 Test Product URL**: https://www.ebay.com/itm/405838590558  
**📂 GitHub Repository**: https://github.com/m-amaann/surge-qa-assessment

---

## 🛠️ Prerequisites & Installation

### System Requirements
- **Node.js**: Version 16 or higher
- **Java**: Version 8+ (required for Allure reports)
- **Git**: For repository management
- **Terminal/Command Line**: Access required

### Step 1: Verify Prerequisites
```bash
# Check Node.js version
node --version

# Check npm version  
npm --version

# Check Java version (for Allure)
java -version

# Check Git
git --version
```

### Step 2: Clone Repository
```bash
# Clone the project
git clone https://github.com/m-amaann/surge-qa-assessment.git

# Navigate to project directory
cd surge-qa-assessment

# Verify project structure
ls -la
```

### Step 3: Install Dependencies
```bash
# Install all project dependencies
npm install

# Install Playwright browsers (REQUIRED)
npx playwright install

# Install Allure CLI globally (optional but recommended)
npm install -g allure-commandline

# Verify Playwright installation
npx playwright --version

# Verify Allure installation (if installed)
allure --version
```

---

##  Running Tests

### Quick Start Commands
```bash
# 1. Smoke test (quick verification)
npm run test:smoke

# 2. Main eBay automation tests
npm run test:ebay

# 3. Run all tests
npm test

# 4. Run with visible browser (debug mode)
npm run test:headed

# 5. Interactive UI mode
npm run test:ui
```



### Specific Test Suites
```bash
# Mobile responsiveness tests
npm run test:mobile

# Performance testing
npm run test:performance

# Cross-browser testing
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```



### Debug & Development
```bash
# Debug mode with breakpoints
npm run test:debug

# Run specific test file
npx playwright test tests/smoke.spec.ts

# Run specific test with pattern
npx playwright test --grep "TC001"

# Run tests in headed mode for specific browser
npx playwright test --project=chromium --headed
```

---



## Reports & Analytics

### Allure Reports (Primary)
```bash
# Run tests with Allure reporting
npm run test:allure

# Generate and serve Allure report
npm run allure:serve

# Generate Allure report only
npm run allure:generate

# Open existing Allure report
npm run allure:open

# Clean previous Allure results
npm run allure:clean
```


### Built-in Reports
```bash
# View Playwright built-in report
npx playwright show-report

# Generate JSON report for CI/CD
npx playwright test --reporter=json
```

---



## 📁 Project Structure

```
surge-qa-assessment/
├── 📁 tests/                          # Test automation files
│   ├── 📁 fixtures/                   # Test data & configuration
│   │   └── test-data.ts              # Centralized test data
│   ├── 📁 pages/                     # Page Object Models
│   │   └── ProductPage.ts            # eBay product page actions
│   ├── 📁 types/                     # TypeScript interfaces
│   │   └── test-types.ts             # Type definitions
│   ├── 📁 utils/                     # Helper utilities
│   ├── smoke.spec.ts                 # Framework verification
│   ├── ebay-similar-items.spec.ts    # Main test suite
│   ├── mobile.spec.ts                # Mobile testing
│   └── performance.spec.ts           # Performance tests
├── 📁 allure-results/                 # Allure test results
├── 📁 test-results/                  # Test artifacts
├── 📁 .github/workflows/             # CI/CD automation
├── playwright.config.ts              # Framework configuration
├── package.json                      # Dependencies & scripts
└── README.md                         # This documentation
```

---


## 🧪 Test Coverage & Implementation


### Test Execution Examples
```bash
# Run specific test case
npx playwright test --grep "TC001"

# Run high priority tests only
npx playwright test --grep "High"

# Run mobile-specific tests
npx playwright test tests/mobile.spec.ts

# Run performance tests
npx playwright test tests/performance.spec.ts
```

---

## 🔧 Configuration & Customization

### Environment Setup
```bash
# Create environment file
cp .env.example .env

# Edit environment variables
nano .env
```

**Environment Variables:**
```bash
BASE_URL=https://www.ebay.com
TEST_PRODUCT_URL=https://www.ebay.com/itm/405838590558

```

### Playwright Configuration
```bash
# View current configuration
cat playwright.config.ts

# Run with custom config
npx playwright test --config=playwright.custom.config.ts
```

### Browser Selection
```bash
# Run on specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# Run on mobile
npx playwright test --project="Mobile Chrome"
npx playwright test --project="Mobile Safari"
```

---

## 🚀 CI/CD Integration

### GitHub Actions Setup
The project includes automated CI/CD pipeline:

```bash
# View workflow file
cat .github/workflows/playwright.yml

# Trigger manual workflow
# (Use GitHub web interface or gh CLI)
gh workflow run playwright.yml
```

### Local CI Simulation
```bash
# Run complete CI pipeline locally
npm run ci

# Clean and run all tests
npm run clean && npm test

# Generate all reports
npm run test:allure && npm run allure:generate
```

---

## 🛠️ Troubleshooting & Common Issues

### Installation Issues
```bash
# If browsers not installed
npx playwright install --force

# If dependencies missing
npm install --force

# Clear npm cache
npm cache clean --force

# Reinstall everything
rm -rf node_modules package-lock.json
npm install
```

### Test Execution Issues
```bash
# Check Playwright installation
npx playwright doctor

# Run tests in verbose mode
DEBUG=pw:api npx playwright test

# Clear test artifacts
npm run clean

# Update browser binaries
npx playwright install --force
```

### Allure Issues
```bash
# Check Java installation
java -version

# Reinstall Allure CLI
npm uninstall -g allure-commandline
npm install -g allure-commandline

# Clear Allure cache
rm -rf allure-results allure-report
```

### eBay-Specific Issues
```bash
# If selectors fail, check current selectors
npx playwright test --headed tests/smoke.spec.ts

# Update test data if needed
nano tests/fixtures/test-data.ts

# Check eBay page structure manually
npx playwright codegen https://www.ebay.com/itm/405838590558
```

---

## 📦 Package Scripts Reference

### Core Commands
| Command | Description | Usage |
|---------|-------------|-------|
| `npm test` | Run all tests | Main test execution |
| `npm run test:smoke` | Quick verification | Setup validation |
| `npm run test:ebay` | eBay-specific tests | Core functionality |
| `npm run test:headed` | Visual browser mode | Debugging |
| `npm run test:debug` | Debug with breakpoints | Development |

### Reporting Commands
| Command | Description | Usage |
|---------|-------------|-------|
| `npm run test:allure` | Tests with Allure | Rich reporting |
| `npm run allure:serve` | Generate & serve report | View results |
| `npm run allure:generate` | Generate report only | CI/CD pipeline |
| `npm run allure:open` | Open existing report | Quick access |

### Utility Commands
| Command | Description | Usage |
|---------|-------------|-------|
| `npm run install:browsers` | Install Playwright browsers | Setup |
| `npm run install:allure` | Install Allure CLI | Reporting setup |
| `npm run clean` | Clean artifacts | Maintenance |
| `npm run ci` | Full CI pipeline | Automation |

---

## 🎯 Quick Verification Workflow

### Step-by-Step Verification
```bash
# 1. Verify installation
node --version && npm --version

# 2. Install dependencies  
npm install && npx playwright install

# 3. Run smoke test
npm run test:smoke

# 4. Run main tests
npm run test:ebay

# 5. Generate report
npm run test:allure && npm run allure:serve

# 6. Check results
echo "✅ Framework verification complete!"
```

### Expected Results
- **Smoke Test**: Should pass with eBay page access confirmed
- **eBay Tests**: May need selector updates due to dynamic content
- **Reports**: Allure dashboard opens in browser
- **Performance**: Tests complete within defined timeouts

---

## 🔍 Framework Features

### 🎯 Core Capabilities
- **TypeScript**: Type-safe test development
- **Page Object Model**: Maintainable test architecture  
- **Cross-Browser**: Chrome, Firefox, Safari, Mobile
- **Performance Monitoring**: Load time tracking
- **Mobile Testing**: Responsive design validation
- **Rich Reporting**: Allure analytics with trends

### 🛡️ Reliability Features
- **Multiple Selectors**: Fallback strategies for eBay's dynamic structure
- **Retry Logic**: Automatic retry on transient failures
- **Wait Strategies**: Proper page synchronization
- **Error Handling**: Graceful failure management
- **Screenshot/Video**: Automatic evidence capture

### 📊 Analytics & Insights
- **Test Trends**: Historical success/failure analysis
- **Performance Metrics**: Load time and network monitoring
- **Failure Categorization**: Organized defect classification
- **Environment Tracking**: Complete execution context
- **Flaky Test Detection**: Reliability analysis

---

## 🤝 Contributing & Development

### Development Workflow
```bash
# 1. Create feature branch
git checkout -b feature/new-test-case

# 2. Add new test
nano tests/new-feature.spec.ts

# 3. Run tests locally
npm run test:headed

# 4. Commit changes
git add .
git commit -m "Add new test case for feature X"

# 5. Push and create PR
git push origin feature/new-test-case
```

### Code Quality
```bash
# Run linting (if configured)
npm run lint

# Format code (if configured)
npm run format

# Type checking
npx tsc --noEmit
```

---

## 📚 Additional Resources

### Documentation Links
- **Playwright**: https://playwright.dev/docs/
- **Allure Framework**: https://docs.qameta.io/allure/
- **TypeScript**: https://www.typescriptlang.org/docs/
- **GitHub Actions**: https://docs.github.com/en/actions

### Learning Resources
- **Playwright Best Practices**: https://playwright.dev/docs/best-practices
- **Test Automation Patterns**: https://playwright.dev/docs/test-patterns
- **Performance Testing**: https://playwright.dev/docs/test-performance

### Support
- **GitHub Issues**: Report bugs and feature requests
- **GitHub Discussions**: Ask questions and share ideas
- **Playwright Community**: https://playwright.dev/community/

---

## 📋 Assessment Completion Checklist

### ✅ Prerequisites Met
- [x] **Playwright Framework**: Implemented with TypeScript
- [x] **GitHub Repository**: Public repository shared
- [x] **Project Structure**: Organized and professional

### ✅ Tasks Completed
- [x] **Automation Framework**: Complete Playwright implementation
- [x] **Test Case Derivation**: All manual TCs automated (TC001-TC018)
- [x] **README Documentation**: Comprehensive setup and usage guide

### ✅ Quality Features
- [x] **Cross-Browser Testing**: Chrome, Firefox, Safari, Mobile
- [x] **Performance Testing**: Load time monitoring and validation
- [x] **Rich Reporting**: Allure framework with analytics
- [x] **CI/CD Integration**: GitHub Actions workflow
- [x] **Error Handling**: Robust failure management
- [x] **Documentation**: Professional and comprehensive

---

## 🏆 Framework Summary

This QA automation framework demonstrates:

1. **🔧 Technical Excellence**: Modern tools and best practices
2. **📊 Comprehensive Testing**: Functional, performance, mobile, cross-browser
3. **🎯 Real-world Adaptability**: Handles dynamic eBay content
4. **📈 Professional Reporting**: Enterprise-grade analytics
5. **🚀 Production Ready**: CI/CD integration and maintainable code

**Framework Version**: 2.0.0 (TypeScript + Allure)  
**Assessment**: eBay Similar Items Testing - Complete ✅  
**Repository**: https://github.com/m-amaann/surge-qa-assessment

---

*Happy Testing! 🎭*
EOF

echo "✅ README.md created successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Review the README content: cat README.md"
echo "2. Make any necessary adjustments"
echo "3. Commit to GitHub: git add README.md && git commit -m 'Add comprehensive README'"
echo "4. Push to repository: git push origin main"