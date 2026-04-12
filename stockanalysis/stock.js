/* ============================================================
   stock.js — Single JS file
   Contains: data fetching (with retry), list rendering,
             chart rendering, details rendering, event handlers
   ============================================================ */

// ── Constants ──────────────────────────────────────────────
const Stocks = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'PYPL', 'TSLA', 'JPM', 'NVDA', 'NFLX', 'DIS'];

const apiMap = {
    '1month': '1mo',
    '3month': '3mo',
    '1year':  '1y',
    '5year':  '5y'
};

const API_BASE = 'https://stock-market-api-k9vl.onrender.com/api';

// ── State ──────────────────────────────────────────────────
let currentStock = 'AAPL';
let currentRange = '1mo';
let chartObj     = null;

let cachedChartData   = null;
let cachedStatsData   = null;
let cachedProfileData = null;

// ── Fetch with retry (handles sleeping Render server) ──────
async function fetchWithRetry(url, retries = 5, delayMs = 5000) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 60000); // 60s timeout
            const res = await fetch(url, { signal: controller.signal });
            clearTimeout(timeout);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return await res.json();
        } catch (err) {
            console.warn(`Attempt ${attempt} failed for ${url}:`, err.message);
            if (attempt === retries) throw err;
            setStatus(`Server waking up… please wait (attempt ${attempt}/${retries})`);
            await new Promise(r => setTimeout(r, delayMs));
        }
    }
}

// ── Status / Loading helpers ───────────────────────────────
function setStatus(msg) {
    document.getElementById('det-summary').innerText = msg;
    document.getElementById('det-name').innerText = '⏳ Loading...';
}

function showLoader(visible) {
    document.getElementById('loader-overlay').style.display = visible ? 'flex' : 'none';
}

// ── Fetch all API data ─────────────────────────────────────
async function fetchAllData() {
    showLoader(true);
    setStatus('Connecting to server… this may take up to 30 seconds on first load.');

    const [chartJson, statsJson, profileJson] = await Promise.all([
        fetchWithRetry(`${API_BASE}/stocksdata`),
        fetchWithRetry(`${API_BASE}/stocksstatsdata`),
        fetchWithRetry(`${API_BASE}/profiledata`)
    ]);

    cachedChartData   = chartJson.stocksData[0];
    cachedStatsData   = statsJson.stocksStatsData[0];
    cachedProfileData = profileJson.partnerData[0];

    showLoader(false);
}

// ── Render stock list (right panel) ───────────────────────
function renderStockList() {
    const listDiv = document.getElementById('stock-list');
    listDiv.innerHTML = '';

    Stocks.forEach(symbol => {
        const stock = cachedStatsData[symbol];
        if (!stock) return;

        const profit      = stock.profit;
        const profitClass = profit > 0 ? 'profit-green' : 'profit-red';
        const profitSign  = profit > 0 ? '+' : '';
        const isActive    = symbol === currentStock ? 'active' : '';

        const row = document.createElement('div');
        row.className = `stock-row ${isActive}`;
        row.setAttribute('data-symbol', symbol);
        row.onclick = () => changeStock(symbol);
        row.innerHTML = `
            <span class="sym-badge">${symbol}</span>
            <span class="bv">$${Number(stock.bookValue).toFixed(3)}</span>
            <span class="${profitClass}">${profitSign}${profit.toFixed(2)}%</span>
        `;
        listDiv.appendChild(row);
    });
}

// ── Render details section (bottom) ───────────────────────
function renderDetails() {
    const stock   = cachedStatsData[currentStock];
    const profile = cachedProfileData[currentStock];
    if (!stock || !profile) return;

    const profit      = stock.profit;
    const profitClass = profit > 0 ? 'profit-green' : 'profit-red';
    const profitSign  = profit > 0 ? '+' : '';

    document.getElementById('det-name').innerText = profile.name || currentStock;

    const profitEl = document.getElementById('det-profit');
    profitEl.innerText = `Profit: ${profitSign}${profit.toFixed(2)}%`;
    profitEl.className = profitClass;

    document.getElementById('det-book').innerText    = `Book Value: $${Number(stock.bookValue).toFixed(3)}`;
    document.getElementById('det-summary').innerText = profile.summary || 'No summary available.';
}

// ── Render chart ───────────────────────────────────────────
function renderChart() {
    const history = cachedChartData[currentStock]?.[currentRange];
    if (!history) return;

    const prices = history.value;
    const labels = history.timeStamp.map(t =>
        new Date(t * 1000).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })
    );

    const peak = Math.max(...prices);
    const low  = Math.min(...prices);
    document.getElementById('stats-display').innerText = `Peak: $${peak.toFixed(2)}  |  Low: $${low.toFixed(2)}`;

    if (chartObj) chartObj.destroy();

    const ctx = document.getElementById('stockChart').getContext('2d');

    chartObj = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                data: prices,
                borderColor: '#00e676',
                borderWidth: 2.5,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#00e676',
                pointHoverBorderColor: '#ffffff',
                pointHoverBorderWidth: 2,
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(13, 17, 71, 0.95)',
                    borderColor: '#1a237e',
                    borderWidth: 1,
                    titleColor: '#a0aec0',
                    bodyColor: '#00e676',
                    titleFont: { size: 11 },
                    bodyFont:  { size: 13, weight: 'bold' },
                    padding: 10,
                    displayColors: false,
                    callbacks: {
                        title: (items) => items[0].label,
                        label: (item)  => `${currentStock}: $${Number(item.raw).toFixed(2)}`
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#8892a4', font: { size: 11 }, maxTicksLimit: 8, maxRotation: 0 },
                    grid:   { color: 'rgba(255,255,255,0.04)' },
                    border: { color: 'rgba(255,255,255,0.08)' }
                },
                y: {
                    ticks: { color: '#8892a4', font: { size: 11 }, callback: val => `$${val.toFixed(0)}` },
                    grid:   { color: 'rgba(255,255,255,0.04)' },
                    border: { color: 'rgba(255,255,255,0.08)' }
                }
            }
        }
    });
}

// ── Highlight active list item ─────────────────────────────
function setActiveListItem(symbol) {
    document.querySelectorAll('.stock-row').forEach(row => {
        row.classList.toggle('active', row.getAttribute('data-symbol') === symbol);
    });
}

// ── Event Handlers ─────────────────────────────────────────
function changeStock(symbol) {
    currentStock = symbol;
    setActiveListItem(symbol);
    renderDetails();
    renderChart();
}

function changeRange(rangeKey) {
    currentRange = apiMap[rangeKey];
    document.querySelectorAll('.range-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${rangeKey}`).classList.add('active');
    renderChart();
}

// ── Init ───────────────────────────────────────────────────
async function init() {
    try {
        await fetchAllData();
        renderStockList();
        renderDetails();
        renderChart();
    } catch (err) {
        console.error('Failed to load stock data:', err);
        showLoader(false);
        document.getElementById('det-name').innerText    = 'Failed to load data';
        document.getElementById('det-summary').innerText = 'Could not connect to the server. Please refresh the page and wait up to 60 seconds for the server to wake up.';
    }
}

init();