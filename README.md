# Create Simple README.md

cd ~/Documents/surge-qa-assessment

cat > README.md << 'EOF'
# eBay Similar Items Testing

## What is this?
This project tests the "Similar Items" feature on eBay product pages using automated testing.

**Test URL**: https://www.ebay.com/itm/405838590558

## What you need
- Node.js (version 16+)
- Java (for reports)

## Quick Setup

### 1. Install everything
```bash
# Install dependencies
npm install

# Install browsers
npx playwright install
```

### 2. Run tests
```bash
# Quick test
npm run test:smoke

# Main eBay tests
npm run test:ebay

# All tests
npm test
```

### 3. See results
```bash
# Run tests and see report
npm run test:allure
npm run allure:serve
```

## All Commands

### Basic Testing
```bash
npm run test:smoke          # Quick check
npm run test:ebay           # Main tests
npm test                    # Run everything
npm run test:headed         # See browser
```

### Reports
```bash
npm run test:allure         # Test with reports
npm run allure:serve        # Open report
```

### If Something Breaks
```bash
npx playwright install      # Fix browser issues
npm install                 # Fix dependency issues
npm run clean              # Clear old files
```

## What Tests Are Included

✅ **TC001**: Check similar items show up  
✅ **TC002**: Items are same category (wallets)  
✅ **TC003**: Prices are reasonable  
✅ **TC005**: Page loads fast  
✅ **TC015**: Works on mobile  
✅ **TC016**: No wrong categories  

## Project Files
```
tests/
├── smoke.spec.ts           # Quick tests
├── ebay-similar-items.spec.ts  # Main tests
├── pages/ProductPage.ts    # Page actions
└── fixtures/test-data.ts   # Test data
```

## How It Works
1. Goes to eBay product page
2. Looks for "Similar Items" section
3. Checks if items are related to wallets
4. Tests on different browsers
5. Creates nice reports

## Common Issues

**Tests fail?**
- eBay changes their website often
- Update selectors in `tests/fixtures/test-data.ts`

**No browsers?**
- Run: `npx playwright install`

**No reports?**
- Install Java first
- Run: `npm install -g allure-commandline`

## Requirements Met
✅ Uses Playwright  
✅ Tests derive from manual test cases  
✅ Shared on GitHub  
✅ Has this README  

## GitHub Repository
https://github.com/m-amaann/surge-qa-assessment

That's it! Simple automated testing for eBay similar items.
EOF

echo "✅ Simple README created!"
echo "📄 Preview first few lines:"
head -10 README.md