// Comprehensive timezone list with abbreviations and full names
const TIMEZONES_DATA = [
  { id: 'UTC', abbr: 'UTC', name: 'Coordinated Universal Time', offset: 0 },
  { id: 'Etc/GMT', abbr: 'GMT', name: 'Greenwich Mean Time', offset: 0 },
  
  // North America
  { id: 'America/New_York', abbr: 'EST/EDT', name: 'Eastern Time', offset: -5 },
  { id: 'America/Chicago', abbr: 'CST/CDT', name: 'Central Time', offset: -6 },
  { id: 'America/Denver', abbr: 'MST/MDT', name: 'Mountain Time', offset: -7 },
  { id: 'America/Los_Angeles', abbr: 'PST/PDT', name: 'Pacific Time', offset: -8 },
  { id: 'America/Anchorage', abbr: 'AKST/AKDT', name: 'Alaska Time', offset: -9 },
  { id: 'Pacific/Honolulu', abbr: 'HST', name: 'Hawaii Standard Time', offset: -10 },
  { id: 'America/Phoenix', abbr: 'MST', name: 'Arizona Time', offset: -7 },
  { id: 'America/Toronto', abbr: 'EST/EDT', name: 'Toronto Time', offset: -5 },
  { id: 'America/Vancouver', abbr: 'PST/PDT', name: 'Vancouver Time', offset: -8 },
  { id: 'America/Halifax', abbr: 'AST/ADT', name: 'Atlantic Time', offset: -4 },
  { id: 'America/St_Johns', abbr: 'NST/NDT', name: 'Newfoundland Time', offset: -3.5 },
  
  // Central & South America
  { id: 'America/Mexico_City', abbr: 'CST/CDT', name: 'Mexico City Time', offset: -6 },
  { id: 'America/Sao_Paulo', abbr: 'BRT', name: 'Brasilia Time', offset: -3 },
  { id: 'America/Argentina/Buenos_Aires', abbr: 'ART', name: 'Argentina Time', offset: -3 },
  { id: 'America/Santiago', abbr: 'CLT', name: 'Chile Time', offset: -4 },
  { id: 'America/Lima', abbr: 'PET', name: 'Peru Time', offset: -5 },
  { id: 'America/Bogota', abbr: 'COT', name: 'Colombia Time', offset: -5 },
  { id: 'America/Caracas', abbr: 'VET', name: 'Venezuela Time', offset: -4 },
  
  // Europe
  { id: 'Europe/London', abbr: 'GMT/BST', name: 'British Time', offset: 0 },
  { id: 'Europe/Dublin', abbr: 'GMT/IST', name: 'Irish Time', offset: 0 },
  { id: 'Europe/Paris', abbr: 'CET/CEST', name: 'Central European Time', offset: 1 },
  { id: 'Europe/Berlin', abbr: 'CET/CEST', name: 'Central European Time', offset: 1 },
  { id: 'Europe/Rome', abbr: 'CET/CEST', name: 'Central European Time', offset: 1 },
  { id: 'Europe/Madrid', abbr: 'CET/CEST', name: 'Central European Time', offset: 1 },
  { id: 'Europe/Amsterdam', abbr: 'CET/CEST', name: 'Central European Time', offset: 1 },
  { id: 'Europe/Brussels', abbr: 'CET/CEST', name: 'Central European Time', offset: 1 },
  { id: 'Europe/Vienna', abbr: 'CET/CEST', name: 'Central European Time', offset: 1 },
  { id: 'Europe/Stockholm', abbr: 'CET/CEST', name: 'Central European Time', offset: 1 },
  { id: 'Europe/Warsaw', abbr: 'CET/CEST', name: 'Central European Time', offset: 1 },
  { id: 'Europe/Athens', abbr: 'EET/EEST', name: 'Eastern European Time', offset: 2 },
  { id: 'Europe/Helsinki', abbr: 'EET/EEST', name: 'Eastern European Time', offset: 2 },
  { id: 'Europe/Moscow', abbr: 'MSK', name: 'Moscow Standard Time', offset: 3 },
  { id: 'Europe/Istanbul', abbr: 'TRT', name: 'Turkey Time', offset: 3 },
  { id: 'Europe/Zurich', abbr: 'CET/CEST', name: 'Central European Time', offset: 1 },
  { id: 'Europe/Lisbon', abbr: 'WET/WEST', name: 'Western European Time', offset: 0 },
  
  // Asia
  { id: 'Asia/Dubai', abbr: 'GST', name: 'Gulf Standard Time', offset: 4 },
  { id: 'Asia/Kolkata', abbr: 'IST', name: 'India Standard Time', offset: 5.5 },
  { id: 'Asia/Karachi', abbr: 'PKT', name: 'Pakistan Standard Time', offset: 5 },
  { id: 'Asia/Dhaka', abbr: 'BST', name: 'Bangladesh Standard Time', offset: 6 },
  { id: 'Asia/Bangkok', abbr: 'ICT', name: 'Indochina Time', offset: 7 },
  { id: 'Asia/Singapore', abbr: 'SGT', name: 'Singapore Time', offset: 8 },
  { id: 'Asia/Hong_Kong', abbr: 'HKT', name: 'Hong Kong Time', offset: 8 },
  { id: 'Asia/Shanghai', abbr: 'CST', name: 'China Standard Time', offset: 8 },
  { id: 'Asia/Taipei', abbr: 'CST', name: 'Taiwan Standard Time', offset: 8 },
  { id: 'Asia/Tokyo', abbr: 'JST', name: 'Japan Standard Time', offset: 9 },
  { id: 'Asia/Seoul', abbr: 'KST', name: 'Korea Standard Time', offset: 9 },
  { id: 'Asia/Manila', abbr: 'PST', name: 'Philippine Standard Time', offset: 8 },
  { id: 'Asia/Jakarta', abbr: 'WIB', name: 'Western Indonesia Time', offset: 7 },
  { id: 'Asia/Kuala_Lumpur', abbr: 'MYT', name: 'Malaysia Time', offset: 8 },
  { id: 'Asia/Kathmandu', abbr: 'NPT', name: 'Nepal Time', offset: 5.75 },
  { id: 'Asia/Tehran', abbr: 'IRST', name: 'Iran Standard Time', offset: 3.5 },
  { id: 'Asia/Jerusalem', abbr: 'IST', name: 'Israel Standard Time', offset: 2 },
  { id: 'Asia/Riyadh', abbr: 'AST', name: 'Arabia Standard Time', offset: 3 },
  
  // Australia & Pacific
  { id: 'Australia/Sydney', abbr: 'AEDT/AEST', name: 'Australian Eastern Time', offset: 10 },
  { id: 'Australia/Melbourne', abbr: 'AEDT/AEST', name: 'Australian Eastern Time', offset: 10 },
  { id: 'Australia/Brisbane', abbr: 'AEST', name: 'Australian Eastern Standard Time', offset: 10 },
  { id: 'Australia/Perth', abbr: 'AWST', name: 'Australian Western Standard Time', offset: 8 },
  { id: 'Australia/Adelaide', abbr: 'ACDT/ACST', name: 'Australian Central Time', offset: 9.5 },
  { id: 'Pacific/Auckland', abbr: 'NZDT/NZST', name: 'New Zealand Time', offset: 12 },
  { id: 'Pacific/Fiji', abbr: 'FJT', name: 'Fiji Time', offset: 12 },
  { id: 'Pacific/Guam', abbr: 'ChST', name: 'Chamorro Standard Time', offset: 10 },
  
  // Africa
  { id: 'Africa/Cairo', abbr: 'EET', name: 'Eastern European Time', offset: 2 },
  { id: 'Africa/Johannesburg', abbr: 'SAST', name: 'South Africa Standard Time', offset: 2 },
  { id: 'Africa/Lagos', abbr: 'WAT', name: 'West Africa Time', offset: 1 },
  { id: 'Africa/Nairobi', abbr: 'EAT', name: 'East Africa Time', offset: 3 },
  { id: 'Africa/Casablanca', abbr: 'WET', name: 'Western European Time', offset: 0 },
  { id: 'Africa/Algiers', abbr: 'CET', name: 'Central European Time', offset: 1 }
];

let activeTz = [];
let isUpdating = false;
let filteredTimezones = [...TIMEZONES_DATA];
let is24HourFormat = true;
let manualPaused = false; // when true, pause all auto-updates because user is editing

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  // CRITICAL: Load time format FIRST before rendering any cards
  await loadTimeFormat();
  await loadTheme();
  await loadTimezones();  // This calls renderTimezones(), so format must be loaded first
  setupEventListeners();
  setupTimezoneSearch();
  setupThemeToggle();
  setupTimeFormatToggle();
  setupRefreshButton();
});

// Setup timezone search
function setupTimezoneSearch() {
  const searchInput = document.getElementById('timezoneSearch');
  const dropdown = document.getElementById('timezoneDropdown');
  
  searchInput.addEventListener('focus', () => {
    filteredTimezones = [...TIMEZONES_DATA];
    renderTimezoneDropdown();
    dropdown.style.display = 'block';
  });
  
  searchInput.addEventListener('blur', () => {
    // Delay to allow mousedown events on dropdown items to fire
    setTimeout(() => {
      dropdown.style.display = 'none';
      searchInput.value = '';
    }, 300);
  });
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    if (query === '') {
      filteredTimezones = [...TIMEZONES_DATA];
    } else {
      filteredTimezones = TIMEZONES_DATA.filter(tz => 
        tz.abbr.toLowerCase().includes(query) ||
        tz.name.toLowerCase().includes(query) ||
        tz.id.toLowerCase().includes(query)
      );
    }
    
    renderTimezoneDropdown();
    dropdown.style.display = 'block';
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.add-timezone-section')) {
      dropdown.style.display = 'none';
      searchInput.value = '';
    }
  });
}

// Render timezone dropdown options
function renderTimezoneDropdown() {
  const dropdown = document.getElementById('timezoneDropdown');
  dropdown.innerHTML = '';
  
  if (filteredTimezones.length === 0) {
    dropdown.innerHTML = '<div class="no-results">No timezones found</div>';
    return;
  }
  
  filteredTimezones.forEach(tz => {
    const option = document.createElement('div');
    option.className = 'timezone-option';
    option.dataset.tzId = tz.id;
    
    const gmtOffset = getGMTOffset(tz.offset);
    
    option.innerHTML = `
      <div class="timezone-option-name">${tz.abbr} - ${tz.id.replace(/_/g, ' ')}</div>
      <div class="timezone-option-details">${tz.name} (GMT${gmtOffset})</div>
    `;
    
    // Use mousedown instead of click to fire before blur event
    option.addEventListener('mousedown', (e) => {
      e.preventDefault(); // Prevent blur from firing
      addTimezone(tz.id);
      document.getElementById('timezoneSearch').value = '';
      document.getElementById('timezoneDropdown').style.display = 'none';
      document.getElementById('timezoneSearch').blur();
    });
    
    dropdown.appendChild(option);
  });
}

// Get GMT offset string
function getGMTOffset(offset) {
  if (offset === 0) return '';
  const sign = offset > 0 ? '+' : '';
  const hours = Math.floor(Math.abs(offset));
  const minutes = (Math.abs(offset) % 1) * 60;
  
  if (minutes === 0) {
    return `${sign}${offset}`;
  } else {
    return `${sign}${offset > 0 ? hours : -hours}:${minutes.toString().padStart(2, '0')}`;
  }
}

// Get timezone data
function getTimezoneData(tzId) {
  return TIMEZONES_DATA.find(tz => tz.id === tzId) || {
    id: tzId,
    abbr: tzId.split('/').pop().replace(/_/g, ' '),
    name: tzId.replace(/_/g, ' '),
    offset: 0
  };
}

// Setup event listeners
function setupEventListeners() {
  document.getElementById('resetBtn').addEventListener('click', resetAll);
}

// Setup theme toggle
function setupThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  
  toggle.addEventListener('change', () => {
    const isDark = toggle.checked;
    setTheme(isDark);
  });
}

// Load saved theme
async function loadTheme() {
  const result = await chrome.storage.sync.get(['darkMode']);
  const isDark = result.darkMode || false;
  document.getElementById('themeToggle').checked = isDark;
  applyTheme(isDark);
}

// Set and save theme
async function setTheme(isDark) {
  await chrome.storage.sync.set({ darkMode: isDark });
  applyTheme(isDark);
}

// Apply theme to body
function applyTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
}

// Setup refresh button
function setupRefreshButton() {
  const refreshBtn = document.getElementById('refreshBtn');
  refreshBtn.addEventListener('click', () => {
    // Reset all timezones to current time
    const now = new Date();
    activeTz.forEach(tz => {
      // Clear manual override flag and update
      const card = document.querySelector(`[data-timezone="${tz}"]`);
      if (card) {
        card.dataset.manual = 'false';
      }
      updateTimezoneCard(tz, now);
    });
    // Clear global manual pause and restart updates
    manualPaused = false;
  });
}

// Auto-update loop: updates non-manual cards every second
let autoUpdateTimer = null;
function startAutoUpdate() {
  // If already running, do nothing
  if (autoUpdateTimer) return;

  // Tick function: update non-manual cards and schedule next tick at the next whole second
  const tick = () => {
    // If any manual pause is in effect, skip updating all cards
    if (manualPaused) {
      const ms = 1000 - (Date.now() % 1000) + 5;
      autoUpdateTimer = setTimeout(tick, ms);
      return;
    }

    const now = new Date();
    activeTz.forEach(tz => {
      const card = document.querySelector(`[data-timezone="${tz}"]`);
      if (!card) return;
      updateTimezoneCard(tz, now);
    });

    // Schedule next tick to align roughly on the next second boundary
    const ms = 1000 - (Date.now() % 1000) + 5; // small buffer
    autoUpdateTimer = setTimeout(tick, ms);
  };

  // Start immediately
  tick();
}

function stopAutoUpdate() {
  if (autoUpdateTimer) {
    clearTimeout(autoUpdateTimer);
    autoUpdateTimer = null;
  }
}

// Setup time format toggle
function setupTimeFormatToggle() {
  const formatButtons = document.querySelectorAll('.format-btn');
  
  // Set initial button state based on already-loaded format
  updateTimeFormatButtons();
  
  formatButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const format = btn.dataset.format;
      setTimeFormat(format === '12');
    });
  });
}

// Load saved time format
async function loadTimeFormat() {
  const result = await chrome.storage.sync.get(['is12Hour']);
  // Default to 24-hour format (is12Hour = false means 24-hour)
  const is12Hour = result.is12Hour !== undefined ? result.is12Hour : false;
  is24HourFormat = !is12Hour;
}

// Set and save time format
async function setTimeFormat(is12Hour) {
  is24HourFormat = !is12Hour;
  await chrome.storage.sync.set({ is12Hour });
  updateTimeFormatButtons();
  
  // Re-render cards using the centralized renderer which preserves manual flags
  renderTimezones();
}

// Update active time format button
function updateTimeFormatButtons() {
  const formatButtons = document.querySelectorAll('.format-btn');
  formatButtons.forEach(btn => {
    const is12Hour = btn.dataset.format === '12';
    btn.classList.toggle('active', is12Hour === !is24HourFormat);
  });
}

// Convert time to 12-hour or 24-hour format
function formatTime(hours24, minutes, seconds) {
  // Display only hours and minutes (no seconds)
  const mm = String(minutes).padStart(2, '0');
  if (is24HourFormat) {
    return {
      time: `${String(hours24).padStart(2, '0')}:${mm}`,
      period: ''
    };
  } else {
    const period = hours24 >= 12 ? 'PM' : 'AM';
    const hours12 = hours24 % 12 || 12;
    return {
      time: `${String(hours12).padStart(2, '0')}:${mm}`,
      period: period
    };
  }
}

// Parse time input (supports both 12hr and 24hr)
function parseTimeInput(timeStr, currentPeriod = '') {
  const parts = timeStr.split(':');
  if (parts.length < 2) return null;

  let hours = parseInt(parts[0]) || 0;
  const minutes = Math.min(59, Math.max(0, parseInt(parts[1]) || 0));
  const seconds = 0; // seconds are no longer user-editable

  // If in 12-hour mode, convert to 24-hour
  if (!is24HourFormat) {
    if (currentPeriod === 'PM' && hours !== 12) {
      hours += 12;
    } else if (currentPeriod === 'AM' && hours === 12) {
      hours = 0;
    }
  }

  hours = Math.min(23, Math.max(0, hours));

  return { hours, minutes, seconds };
}

// Setup drag and drop for timezone cards
function setupDragAndDrop() {
  const cards = document.querySelectorAll('.timezone-card');
  
  cards.forEach(card => {
    // Remove draggable from the entire card
    card.setAttribute('draggable', 'false');
    
    // Only the drag handle should be draggable
    const dragHandle = card.querySelector('.drag-handle');
    if (dragHandle) {
      dragHandle.setAttribute('draggable', 'true');
      
      dragHandle.addEventListener('dragstart', (e) => {
        // Set the card as the dragged element, not the handle
        draggedElement = card;
        draggedIndex = Array.from(card.parentNode.children).indexOf(card);
        card.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', card.innerHTML);
      });
    }

      // Remove drag-over class from all cards when drag starts
      dragHandle && dragHandle.addEventListener && dragHandle.addEventListener('dragstart', () => {
        const allCards = document.querySelectorAll('.timezone-card');
        allCards.forEach(c => c.classList.remove('drag-over'));
      });
    card.addEventListener('drop', handleDrop);
    card.addEventListener('dragleave', handleDragLeave);
  });
}

let draggedElement = null;
let draggedIndex = null;

function handleDragStart(e) {
  draggedElement = this;
  draggedIndex = Array.from(this.parentNode.children).indexOf(this);
  this.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e) {
  this.classList.remove('dragging');
  
  // Remove drag-over class from all cards
  const cards = document.querySelectorAll('.timezone-card');
  cards.forEach(card => card.classList.remove('drag-over'));
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  
  e.dataTransfer.dropEffect = 'move';
  
  if (this !== draggedElement) {
    this.classList.add('drag-over');
  }
  
  return false;
}

function handleDragLeave(e) {
  this.classList.remove('drag-over');
}

async function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  
  this.classList.remove('drag-over');
  
  if (draggedElement !== this) {
    const dropIndex = Array.from(this.parentNode.children).indexOf(this);
    
    // Reorder the activeTz array
    const draggedTz = activeTz[draggedIndex];
    activeTz.splice(draggedIndex, 1);
    activeTz.splice(dropIndex, 0, draggedTz);
    
    // Save the new order
    await saveTimezones();
    
    // Re-render
    renderTimezones();
  }
  
  return false;
}

// Load saved timezones from storage
async function loadTimezones() {
  const result = await chrome.storage.sync.get(['timezones']);
  activeTz = result.timezones || [];
  
  if (activeTz.length === 0) {
    // Add UTC by default
    activeTz = ['UTC'];
    await saveTimezones();
  }
  
  renderTimezones();
}

// Save timezones to storage
async function saveTimezones() {
  await chrome.storage.sync.set({ timezones: activeTz });
}

// Add a new timezone
async function addTimezone(tz) {
  if (!tz) return;
  
  if (activeTz.includes(tz)) {
    alert('This timezone is already added!');
    return;
  }
  
  activeTz.push(tz);
  await saveTimezones();
  renderTimezones();
}

// Remove a timezone
async function removeTimezone(tz) {
  if (activeTz.length === 1) {
    alert('You must have at least one timezone!');
    return;
  }
  
  activeTz = activeTz.filter(t => t !== tz);
  await saveTimezones();
  renderTimezones();
}

// Reset all timezones
async function resetAll() {
  if (confirm('Are you sure you want to remove all timezones?')) {
    activeTz = ['UTC'];
    await saveTimezones();
    renderTimezones();
  }
}

// Render all timezone cards
function renderTimezones() {
  const container = document.getElementById('timezonesContainer');
  const emptyState = document.getElementById('emptyState');
  
  // Preserve manual flags from existing cards so re-renders (format change) don't lose user edits
  const existingCards = document.querySelectorAll('.timezone-card');
  const manualMap = {};
  existingCards.forEach(c => {
    if (c.dataset && c.dataset.timezone) {
      manualMap[c.dataset.timezone] = c.dataset.manual === 'true';
    }
  });

  container.innerHTML = '';
  
  if (activeTz.length === 0) {
    emptyState.style.display = 'block';
    return;
  }
  
  emptyState.style.display = 'none';
  
  activeTz.forEach(tz => {
    const card = createTimezoneCard(tz);
    // Restore manual flag for this timezone if present
    if (manualMap[tz]) {
      card.dataset.manual = 'true';
    } else {
      card.dataset.manual = 'false';
    }
    container.appendChild(card);
  });
  
  // Setup drag and drop
  setupDragAndDrop();

  // Start the auto-update loop to keep UI current
  startAutoUpdate();
}

// Create a timezone card
function createTimezoneCard(tz) {
  const card = document.createElement('div');
  card.className = 'timezone-card';
  card.dataset.timezone = tz;
  
  const now = new Date();
  const timeInTz = convertToTimezone(now, tz);
  const tzData = getTimezoneData(tz);
  const gmtOffset = getGMTOffset(tzData.offset);
  
  const hours = parseInt(timeInTz.hours);
  const minutes = parseInt(timeInTz.minutes);
  const seconds = parseInt(timeInTz.seconds);
  const formatted = formatTime(hours, minutes, seconds);
  
  // Build the time wrapper HTML
  let timeWrapperContent = `<input type="text" class="time-input" placeholder="${is24HourFormat ? 'HH:MM' : 'hh:MM'}" value="${formatted.time}" data-tz="${tz}" data-period="${formatted.period}" maxlength="5">`;
  
  // Add AM/PM badge only in 12-hour mode
  if (!is24HourFormat) {
    timeWrapperContent += `<span class="time-period">${formatted.period}</span>`;
  }
  
  card.innerHTML = `
    <div class="timezone-header">
      <div class="timezone-name">
        <span class="drag-handle" title="Drag to reorder">⋮⋮</span>
        <span class="timezone-abbr">${tzData.abbr}</span>
        <span class="timezone-full">${tzData.name}</span>
        <span class="timezone-gmt">GMT${gmtOffset}</span>
      </div>
      <button class="remove-btn" data-tz="${tz}" title="Remove timezone">×</button>
    </div>
    <div class="time-date-inputs">
      <div class="input-group date-group">
        <label>Date</label>
        <input type="date" class="date-input" value="${timeInTz.date}" data-tz="${tz}">
      </div>
      <div class="input-group time-group">
        <label>Time</label>
        <div class="time-wrapper">
          ${timeWrapperContent}
        </div>
      </div>
    </div>
  `;
  
  // Add event listeners
  const removeBtn = card.querySelector('.remove-btn');
  removeBtn.addEventListener('click', () => removeTimezone(tz));
  
  const timeInput = card.querySelector('.time-input');
  const dateInput = card.querySelector('.date-input');
  const timePeriod = card.querySelector('.time-period');
  
  // Toggle AM/PM on click in 12-hour mode
  if (timePeriod) {
    timePeriod.addEventListener('click', () => {
      // Mark manual edit so auto-update won't overwrite
      card.dataset.manual = 'true';
      manualPaused = true;
      const newPeriod = timePeriod.textContent === 'AM' ? 'PM' : 'AM';
      timePeriod.textContent = newPeriod;
      timeInput.dataset.period = newPeriod;
      handleTimeInputChange(tz);
    });
    timePeriod.style.cursor = 'pointer';
  }
  
  // No slider in this iteration — slider-related code removed
  
  // Format time input as user types
  timeInput.addEventListener('input', (e) => {
    // Mark manual edit
    card.dataset.manual = 'true';
    manualPaused = true;

  // Allow digits and a colon, limit to 5 characters (HH:MM)
  let raw = e.target.value.replace(/[^0-9:]/g, '');
  if (raw.length > 5) raw = raw.substring(0,5);
  // Avoid rewriting e.target.value here (keeps caret position stable while typing)

    // If the current input can be parsed as a time (e.g., '1:20' or '11:20'), trigger conversion
    const currentPeriod = timeInput.dataset.period || (timePeriod ? timePeriod.textContent : '');
    const parsedNow = parseTimeInput(raw, currentPeriod);
    if (parsedNow) {
      handleTimeInputChange(tz);
    }
  });
  
  timeInput.addEventListener('blur', () => {
    // On blur, normalize format to HH:MM (insert colon if missing)
    let v = timeInput.value.replace(/[^0-9]/g, '');
    if (v.length === 4) {
      v = v.substring(0,2) + ':' + v.substring(2);
    }
    if (v.length === 5 && v.indexOf(':') === 2) {
      timeInput.value = v;
      handleTimeInputChange(tz);
    } else {
      // If invalid, reset to current timezone time
      const now = convertToTimezone(new Date(), tz);
      timeInput.value = `${now.hours}:${now.minutes}`;
    }
  });
  
  dateInput.addEventListener('change', () => {
    // Mark manual edit
    card.dataset.manual = 'true';
    manualPaused = true;
    handleTimeInputChange(tz);
  });
  
  return card;
}

// Convert date to timezone
function convertToTimezone(date, tz) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  
  const parts = formatter.formatToParts(date);
  const get = (type) => parts.find(p => p.type === type)?.value || '00';
  
  const hours = get('hour').padStart(2, '0');
  const minutes = get('minute').padStart(2, '0');
  const seconds = get('second').padStart(2, '0');
  const year = get('year');
  const month = get('month').padStart(2, '0');
  const day = get('day').padStart(2, '0');
  
  return {
    hours,
    minutes,
    seconds,
    date: `${year}-${month}-${day}`,
    display: `${hours}:${minutes}:${seconds}`
  };
}

// Handle time input change
function handleTimeInputChange(sourceTz) {
  if (isUpdating) return;
  isUpdating = true;
  
  console.log('handleTimeInputChange called for:', sourceTz, 'isUpdating was false, now true');
  
  try {
    const card = document.querySelector(`[data-timezone="${sourceTz}"]`);
    const timeInput = card.querySelector('.time-input');
    const dateInput = card.querySelector('.date-input');
    const timePeriod = card.querySelector('.time-period');
    
    const timeValue = timeInput.value;
    const dateStr = dateInput.value;
    const period = timePeriod ? timePeriod.textContent : '';
    
    console.log('Read from card:', { timeValue, dateStr, period });
    
    // Parse time
    const parsed = parseTimeInput(timeValue, period);
    if (!parsed) {
      console.log('Failed to parse time');
      return;
    }
    
    const { hours, minutes, seconds } = parsed;
    
    console.log('Parsed to 24-hour:', { hours, minutes, seconds });
    
    // Update the input to show corrected values, but don't overwrite if the user is currently editing this input
    const formatted = formatTime(hours, minutes, seconds);
    if (document.activeElement !== timeInput) {
      timeInput.value = formatted.time;
      if (timePeriod) {
        timePeriod.textContent = formatted.period;
        timeInput.dataset.period = formatted.period;
      }
    } else {
      // If user is editing, only update stored period but leave the visible value alone to preserve caret
      if (timePeriod) {
        timePeriod.textContent = formatted.period;
        timeInput.dataset.period = formatted.period;
      }
    }
    
    // Create a date object in the source timezone
    const sourceDate = createDateInTimezone(dateStr, hours, minutes, seconds, sourceTz);
    
    console.log('Created date in', sourceTz, ':', sourceDate);
    
    // Update all other timezones
    activeTz.forEach(tz => {
      if (tz !== sourceTz) {
        console.log('Updating timezone:', tz);
        updateTimezoneCard(tz, sourceDate);
      }
    });
  } finally {
    isUpdating = false;
    console.log('handleTimeInputChange done, isUpdating = false');
  }
}

// Create a Date object in a specific timezone
function createDateInTimezone(dateStr, hours, minutes, seconds, tz) {
  const [year, month, day] = dateStr.split('-').map(Number);

  // Start with a UTC guess for the given wall time (treating the wall time as if it were UTC)
  let utcMs = Date.UTC(year, month - 1, day, hours, minutes, seconds);

  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  // Iterate a couple times to converge on the correct UTC instant for that wall time in the timezone
  const desiredMs = Date.UTC(year, month - 1, day, hours, minutes, seconds);
  for (let i = 0; i < 10; i++) {
    const parts = formatter.formatToParts(new Date(utcMs));
    const get = (type) => parts.find(p => p.type === type)?.value || '0';

    const yearT = parseInt(get('year'));
    const monthT = parseInt(get('month')) - 1;
    const dayT = parseInt(get('day'));
    const hourT = parseInt(get('hour'));
    const minuteT = parseInt(get('minute'));
    const secondT = parseInt(get('second'));

    const tzCorrespondingMs = Date.UTC(yearT, monthT, dayT, hourT, minuteT, secondT);

    // offset between UTC and the timezone's wall time at our current guess
    const offset = tzCorrespondingMs - utcMs;

    // New UTC ms should be desiredMs minus the offset
    const newUtcMs = desiredMs - offset;

    if (Math.abs(newUtcMs - utcMs) < 1) {
      utcMs = newUtcMs;
      break;
    }

    utcMs = newUtcMs;
  }

  return new Date(utcMs);
}

// Update a timezone card with a new date
function updateTimezoneCard(tz, date) {
  const card = document.querySelector(`[data-timezone="${tz}"]`);
  if (!card) return;
  
  const timeInTz = convertToTimezone(date, tz);
  const hours = parseInt(timeInTz.hours);
  const minutes = parseInt(timeInTz.minutes);
  const seconds = parseInt(timeInTz.seconds);
  const formatted = formatTime(hours, minutes, seconds);
  
  const timeInput = card.querySelector('.time-input');
  const timeWrapper = card.querySelector('.time-wrapper');
  let timePeriod = card.querySelector('.time-period');
  
  timeInput.value = formatted.time;
  timeInput.dataset.period = formatted.period;
  
  // Handle AM/PM badge visibility based on format
  if (is24HourFormat) {
    // Remove AM/PM in 24-hour mode
    if (timePeriod) {
      timePeriod.remove();
    }
  } else {
    // Add or update AM/PM in 12-hour mode
    if (timePeriod) {
      timePeriod.textContent = formatted.period;
    } else {
      const periodSpan = document.createElement('span');
      periodSpan.className = 'time-period';
      periodSpan.textContent = formatted.period;
      periodSpan.style.cursor = 'pointer';
      periodSpan.addEventListener('click', () => {
        const newPeriod = periodSpan.textContent === 'AM' ? 'PM' : 'AM';
        periodSpan.textContent = newPeriod;
        timeInput.dataset.period = newPeriod;
        handleTimeInputChange(tz);
      });
      timeWrapper.appendChild(periodSpan);
    }
  }
  
  card.querySelector('.date-input').value = timeInTz.date;
}
