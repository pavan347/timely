# 🌍 Timely - Multi-Timezone Converter

A Chrome extension designed to help you analyze logs and Zendesk tickets across different timezones. No more switching tabs to convert times!

## Features

- 🔍 **Search Timezones** - Quickly find timezones by abbreviation (IST, PST, UTC, etc.) or name
- ✨ **Comprehensive Timezone Database** - 70+ timezones from around the world
- 🏷️ **Timezone Abbreviations** - Shows common abbreviations like IST, PST/PDT, EST/EDT, etc.
- 🌐 **GMT Offsets** - Displays GMT+/- offset for each timezone
- 📝 **Full Timezone Names** - Complete timezone names for clarity
- 🔄 **Real-time Sync** - Change time in one timezone, all others update automatically
- 💾 **Persistent Storage** - Your timezone preferences are saved
- 🎨 **Beautiful UI** - Clean, compact, and modern interface
- ⚡ **Fast & Lightweight** - No external dependencies

## Installation

### Get the code

You can either clone the repository or download a ZIP:

- Clone: `git clone https://github.com/pavan347/timely.git`
- ZIP: Download from https://github.com/pavan347/timely (Code → Download ZIP) and extract it

### Load Unpacked Extension (Development)

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in the top right)
3. Click "Load unpacked"
4. Select the project folder (the one containing `manifest.json`) — typically `Timely-Extension`
5. Pin the Timely icon to your toolbar for quick access

### Update to the latest version

- If you cloned: open the project folder in a terminal and run `git pull origin main`
- If you used ZIP: delete the old folder and re-download the latest ZIP, then load it again
- In `chrome://extensions`, click "Reload" on the Timely card

## Usage

1. **Click the extension icon** in your Chrome toolbar
2. **Search for timezones** - Type abbreviations like "IST", "PST", "UTC" or city names like "New York", "Tokyo"
3. **Click to add** a timezone from the search results
4. **Adjust the time** using the single time input (HH:MM:SS format) or date picker
5. **Watch all timezones update** automatically!

## How to Use

### Searching & Adding Timezones
1. Click the search box at the top
2. Type timezone abbreviation (e.g., "IST", "PST") or location (e.g., "Tokyo", "London")
3. Click on any timezone from the dropdown to add it
4. Search supports:
   - **Abbreviations**: IST, PST, EST, GMT, UTC, etc.
   - **City names**: New York, Tokyo, London, etc.
   - **Full names**: India Standard Time, Pacific Time, etc.

### Changing Time
- Type time directly in **HH:MM:SS** format (e.g., 14:30:45)
- Or type numbers and it auto-formats (143045 → 14:30:45)
- Change the **date** using the date picker
- All other timezones will automatically adjust

### Timezone Display
Each timezone card shows:
- **Abbreviation** (e.g., IST, PST/PDT) - in blue
- **Full Name** (e.g., India Standard Time)
- **GMT Offset** (e.g., GMT+5:30, GMT-8)

### Removing a Timezone
- **Hover** over any timezone card
- Click the **×** button that appears in the top-right corner
- Note: You must have at least one timezone active

### Reset
- Click "Reset All" to remove all timezones and start fresh (UTC will be added by default)

## Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Permissions**: Storage (to save your timezone preferences)
- **Size**: < 50KB
- **No external API calls** - All timezone conversions happen locally using JavaScript's Intl API

## Common Timezones Included

- 70+ timezones covering all major regions
- North America: EST/EDT, CST/CDT, MST/MDT, PST/PDT, AKST, HST
- Europe: GMT/BST, CET/CEST, EET/EEST, MSK
- Asia: IST, GST, CST, JST, KST, SGT, HKT
- Pacific: AEST/AEDT, NZST/NZDT
- Africa: SAST, WAT, EAT
- South America: BRT, ART, CLT

### Examples of Searchable Terms:
- Abbreviations: **IST**, **PST**, **GMT**, **UTC**, **EST**, **CST**, **JST**
- Cities: **New York**, **London**, **Tokyo**, **Singapore**, **Dubai**
- Regions: **Pacific**, **Eastern**, **Central**, **India**, **China**

## Privacy

This extension:
- ✅ Works completely offline
- ✅ Stores data only locally in your browser
- ✅ Makes NO network requests
- ✅ Collects NO personal data

## Future Enhancements

Potential features for future versions:
- 📋 Copy time in any format
- 🔍 Quick search for timezones
- ⌨️ Keyboard shortcuts
- 📱 Mobile-friendly popup
- 🎨 Custom timezone labels
- 📌 Pin favorite timezones

## License

MIT License - Feel free to modify and use for your needs!

## Support

If you encounter any issues or have feature requests, please create an issue in the repository or contact the author.

- Repository: https://github.com/pavan347/timely
- Issues: https://github.com/pavan347/timely/issues
- Author: Garapati Pavan Kumar (Snaplogic)
- Email: pkgarapati@snaplogic.com

---

Made with ❤️ for productivity
