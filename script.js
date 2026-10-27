/* =========================================================
   Kerala Properties — homepage interactions
   ========================================================= */

const img = (id, w = 900, extra = '') =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop${extra}`;

/* ---------------- Settings ---------------- */
const WHATSAPP_NUMBER = '910000000000';   // country code + number, no "+" or spaces
const POPUP_INTERVAL = 5 * 60 * 1000;     // popup ad at most once every 5 minutes (across pages and reloads)
const POPUP_FIRST_DELAY = 30000;          // first popup 30 s into a visitor's first visit

// Popup ads — 800 × 450
const POPUP_ADS = [
  { img: '1613490493576-7fde63acd811', href: '#villas', cta: 'Explore Villas' },
  { img: '1600596542815-ffad4c1539a9', href: '#properties', cta: 'View Properties' },
  { img: '1545324418-cc1a3fa10c00', href: '#apartments', cta: 'View Apartments' }
];


const DISTRICTS = [
  'Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha', 'Kottayam', 'Idukki', 'Ernakulam',
  'Thrissur', 'Palakkad', 'Malappuram', 'Kozhikode', 'Wayanad', 'Kannur', 'Kasaragod'
];

/* ---------------- Content (same as the current live site) ----------------
   Photos are Unsplash placeholders — swap the ids/urls for real listing photos. */

// Hero slides — each one spotlights a listing from the sections below
const HERO_SLIDES = [
  { img: '1613490493576-7fde63acd811', kind: 'Featured Villa', title: 'Kakkanad Heights', meta: 'Kakkanad, Kochi', href: 'detail.html?type=villa&id=1' },
  { img: '1593693397690-362cb9666fc2', kind: 'Explore Kerala', title: 'Properties in all 14 districts', meta: 'Houses · Land · Farmhouses', href: '#properties' },
  { img: '1600596542815-ffad4c1539a9', kind: 'House for Sale', title: 'Angamaly, Ernakulam', meta: '4.00 Cents · On Request', href: '#properties' },
  { img: '1545324418-cc1a3fa10c00', kind: 'Featured Apartment', title: 'City Homes', meta: 'Kaloor, Kochi', href: 'detail.html?type=apartment&id=1' },
  { img: '1470071459604-3b5ec3a7fe05', kind: 'Land for Sale', title: 'Aluva, Ernakulam', meta: '5.25 Cents · ₹ 23 Lakhs', href: '#properties' }
];
const HERO_DURATION = 6000;

/* ---------------- Search form data ---------------- */
// Corporations & municipalities per district. Panchayats are typed in —
// load them from the backend when it is ready.
const LOCATIONS = {
  Alappuzha:          { Corporation: [], Municipality: ['Alappuzha', 'Chengannur', 'Cherthala', 'Haripad', 'Kayamkulam', 'Mavelikkara'] },
  Ernakulam:          { Corporation: ['Kochi'], Municipality: ['Aluva', 'Angamaly', 'Eloor', 'Kalamassery', 'Koothattukulam', 'Kothamangalam', 'Maradu', 'Muvattupuzha', 'North Paravur', 'Perumbavoor', 'Piravom', 'Thrikkakara', 'Thripunithura'] },
  Idukki:             { Corporation: [], Municipality: ['Kattappana', 'Thodupuzha'] },
  Kannur:             { Corporation: ['Kannur'], Municipality: ['Anthoor', 'Iritty', 'Kuthuparamba', 'Mattannur', 'Panoor', 'Payyanur', 'Sreekandapuram', 'Taliparamba', 'Thalassery'] },
  Kasaragod:          { Corporation: [], Municipality: ['Kanhangad', 'Kasaragod', 'Nileshwaram'] },
  Kollam:             { Corporation: ['Kollam'], Municipality: ['Karunagappally', 'Kottarakkara', 'Paravur', 'Punalur'] },
  Kottayam:           { Corporation: [], Municipality: ['Changanassery', 'Erattupetta', 'Ettumanoor', 'Kottayam', 'Pala', 'Vaikom'] },
  Kozhikode:          { Corporation: ['Kozhikode'], Municipality: ['Feroke', 'Koduvally', 'Koyilandy', 'Mukkam', 'Payyoli', 'Ramanattukara', 'Vatakara'] },
  Malappuram:         { Corporation: [], Municipality: ['Kondotty', 'Kottakkal', 'Malappuram', 'Manjeri', 'Nilambur', 'Parappanangadi', 'Perinthalmanna', 'Ponnani', 'Tanur', 'Tirur', 'Tirurangadi', 'Valanchery'] },
  Palakkad:           { Corporation: [], Municipality: ['Cherpulassery', 'Chittur-Thathamangalam', 'Mannarkkad', 'Ottapalam', 'Palakkad', 'Pattambi', 'Shoranur'] },
  Pathanamthitta:     { Corporation: [], Municipality: ['Adoor', 'Pandalam', 'Pathanamthitta', 'Thiruvalla'] },
  Thiruvananthapuram: { Corporation: ['Thiruvananthapuram'], Municipality: ['Attingal', 'Nedumangad', 'Neyyattinkara', 'Varkala'] },
  Thrissur:           { Corporation: ['Thrissur'], Municipality: ['Chalakudy', 'Chavakkad', 'Guruvayur', 'Irinjalakuda', 'Kodungallur', 'Kunnamkulam', 'Wadakkanchery'] },
  Wayanad:            { Corporation: [], Municipality: ['Kalpetta', 'Mananthavady', 'Sulthan Bathery'] }
};
const PROPERTY_TYPE_OPTIONS = [
  'Apartments', 'Bar', 'Building Floor', 'Café', 'Commercial Building', 'Commercial Land', 'Commercial Properties',
  'Estate and Plantation', 'Farm House', 'Farm Land', 'Flat', 'Godown / Warehouse', 'House', 'House Plot',
  'Industrial / Manufacturing', 'Office Space', 'PG / Hostel', 'Residential Land', 'Resort', 'School / College',
  'Shop / Showroom', 'Store', 'Villa'
];

// Top ad strip — 6 static ads, height 120
const TOP_ADS = [
  { name: 'Logistics', img: '1586528116311-ad8dd3c8310d' },
  { name: 'Freight', img: '1494412574643-ff11b0a5c1c3' },
  { name: 'Shipping', img: '1578575437130-527eed3abbec' },
  { name: 'Cold Chain', img: '1553413077-190dd305871c' },
  { name: 'Express', img: '1474302770737-173ee21bab63' },
  { name: 'Aviation', img: '1436491865332-7a61a109cc05' }
];

// Premium properties — 6 ad slots, 300w × 250H
const PREMIUM_ADS = ['1613490493576-7fde63acd811', '1600607687939-ce8a6c25118c', '1580587771525-78b9dba3b914', '1512917774080-9991f1c4c750', '1600566753190-17f0baa2a6c3', '1605276374104-dee2a0ed3cd6'];

// News cards (3 headlines × 3 rows)
const NEWS_HEADS = [
  { title: 'Airbus A350F freighter successfully performs its maiden flight', img: '1436491865332-7a61a109cc05' },
  { title: 'Cold Chain Technologies launches reusable dry ice shipper', img: '1586528116311-ad8dd3c8310d' },
  { title: 'Adhoc.Express integrates cargo notes and booking technology', img: '1460925895917-afdab827c52f' }
];
const NEWS_ALT_IMGS = ['1474302770737-173ee21bab63', '1553413077-190dd305871c', '1551288049-bebda4e38f71'];
const NEWS_CAPTION = 'Shares in the logistics group fell 10.7% on Monday after the company announced a major acquisition deal.';

// Sponsored contents — the auto-rotating slider
const SPONSORED = [
  { title: 'Premium Article One', text: 'Sponsored content from our partners – cold chain, logistics and more.', img: '1553413077-190dd305871c' },
  { title: 'Premium Article Two', text: 'Insights on modern construction materials and technology.', img: '1503387762-592deb58ef4e' },
  { title: 'Premium Article Three', text: 'Smart homes and sustainable living in Kerala.', img: '1558002038-1055907df827' },
  { title: 'Premium Article Four', text: 'Investing in land and property – what buyers should know.', img: '1560518883-ce09059eeffa' }
];

// Properties — 27 listings, 9 per page
const PROPERTY_PHOTOS = {
  'House for Sale': ['1600585154340-be6161a56a0c', '1564013799919-ab600027ffc6', '1570129477492-45c003edd2be', '1523217582562-09d0def993a6', '1475855581690-80accde3ae2b', '1600596542815-ffad4c1539a9', '1512917774080-9991f1c4c750', '1580587771525-78b9dba3b914', '1605276374104-dee2a0ed3cd6'],
  'Land for Sale': ['1500382017468-9049fed747ef', '1470071459604-3b5ec3a7fe05', '1593693397690-362cb9666fc2', '1501785888041-af3ef285b470', '1441974231531-c6227db76b6e', '1506744038136-46273834b3fb', '1464822759023-fed622ff2c3b', '1500382017468-9049fed747ef', '1470071459604-3b5ec3a7fe05'],
  'Farmhouse for Sale': ['1500076656116-558758c991c1', '1518780664697-55e3ad937233', '1510798831971-661eb04b3739', '1600047509807-ba8f99d2cdde', '1600210492486-724fe5c67fb0', '1500076656116-558758c991c1', '1518780664697-55e3ad937233', '1510798831971-661eb04b3739', '1600047509807-ba8f99d2cdde']
};
const PROPERTY_TYPES = ['House for Sale', 'Land for Sale', 'Farmhouse for Sale'];
const PROPERTY_PLACES = ['Angamaly, Ernakulam', 'Aluva, Ernakulam', 'Kakkanad, Kochi', 'Thrissur', 'Palakkad', 'Pathanamthitta', 'Munnar, Idukki', 'Kozhikode', 'Kannur'];
const PROPERTIES = Array.from({ length: 27 }, (_, i) => {
  const type = PROPERTY_TYPES[i % 3];
  return {
    id: i + 1,
    type,
    loc: PROPERTY_PLACES[i % PROPERTY_PLACES.length],
    price: i % 4 === 0 ? 'On Request' : `₹ ${20 + i * 3} Lakhs`,
    area: `${(4 + (i * 1.25) % 10).toFixed(2)} Cents`,
    img: PROPERTY_PHOTOS[type][Math.floor(i / 3)]
  };
});
const PER_PAGE = 9;

// Surplus & used materials / household items
const SURPLUS = [
  { name: 'Refrigerator', district: 'Ernakulam', img: '1571175443880-49e1d25b2bc5' },
  { name: 'Steel Doors', district: 'Thrissur', img: '1449844908441-8829872d2607' },
  { name: 'Reading Table', district: 'Ernakulam', img: '1518455027359-f3f8164ba6bd' },
  { name: 'Washing Machine', district: 'Thrissur', img: '1626806787461-102c1bfaaea1' },
  { name: 'LED TV', district: 'Kozhikode', img: '1593359677879-a4bb92f829d1' },
  { name: 'Sofa Set', district: 'Kollam', img: '1555041469-a586c61ea9bc' },
  { name: 'Wooden Setti', district: 'Kottayam', img: '1586023492125-27b2c045efd7' },
  { name: 'Building Bricks', district: 'Palakkad', img: '1504307651254-35680f356dfd' },
  { name: 'Office Chairs', district: 'Ernakulam', img: '1580480055273-228ff5388ef8' },
  { name: 'Air Conditioner', district: 'Kannur', img: '1502672260266-1c1ef2d93688' }
];

// Featured apartments
const APARTMENTS = [
  { name: 'City Homes', loc: 'Kaloor, Kochi', img: '1545324418-cc1a3fa10c00' },
  { name: 'Konark Block', loc: 'Laloor, Thrissur', img: '1460317442991-0ec209397118' },
  { name: 'Eden Woods', loc: 'Kotta Maidan, Palakkad', img: '1515263487990-61b07816b324' },
  { name: 'Alukkas Tower', loc: 'Bheema Palli, Thiruvananthapuram', img: '1493809842364-78817add7ffb' },
  { name: 'Creek Rocks', loc: 'Munnar, Idukki', img: '1574362848149-11496d93a7c7' },
  { name: 'Kalyan Towers', loc: 'Pala, Kottayam', img: '1567496898669-ee935f5f647a' },
  { name: 'Sinar Tower', loc: 'Kotaykkal, Kozhikode', img: '1486406146926-c627a92ad1ab' },
  // sample entries so the grid fills two full rows — replace with real listings
  { name: 'Marine Crest', loc: 'Marine Drive, Kochi', img: '1522708323590-d24dbb6b0267' },
  { name: 'Palm Meadows', loc: 'Kakkanad, Kochi', img: '1600607687939-ce8a6c25118c' },
  { name: 'Riverside Residency', loc: 'Kumarakom, Kottayam', img: '1512918728675-ed5a9ecdebfd' }
];

// Featured villas
const VILLA_PLACES = [['Kakkanad', 'Kochi'], ['Pudhukkad', 'Thrissur'], ['Adoor', 'Pathanamthitta'], ['Aluva', 'Ernakulam'], ['Arikkode', 'Malappuram']];
const VILLA_PHOTOS = ['1613490493576-7fde63acd811', '1605276374104-dee2a0ed3cd6', '1600596542815-ffad4c1539a9', '1580587771525-78b9dba3b914', '1512917774080-9991f1c4c750', '1600047509807-ba8f99d2cdde', '1600210492486-724fe5c67fb0', '1523217582562-09d0def993a6', '1570129477492-45c003edd2be', '1564013799919-ab600027ffc6'];
const VILLAS = [...VILLA_PLACES, ...VILLA_PLACES.slice().reverse()].map(([place, district], i) => ({
  name: `${place} ${i % 2 ? 'Villa' : 'Heights'}`,
  loc: `${place}, ${district}`,
  img: VILLA_PHOTOS[i]
}));

// Featured builders
const BUILDERS = [
  { name: 'Edakom Builders Pvt Ltd', short: 'E', district: 'Ernakulam' },
  { name: 'K2 Builders', short: 'K2', district: 'Kozhikode' },
  { name: 'Rafa Builders', short: 'R', district: 'Thrissur' },
  { name: 'Hayath Properties', short: 'H', district: 'Malappuram' },
  { name: 'Mosons Estate', short: 'M', district: 'Ernakulam' },
  { name: 'Alliance Homes', short: 'A', district: 'Ernakulam' },
  { name: 'Ghazal Builders', short: 'G', district: 'Kannur' },
  { name: 'Plama Developers Ltd.', short: 'P', district: 'Palakkad' },
  { name: 'WinTouch Builders Pvt Ltd', short: 'W', district: 'Thrissur' },
  { name: 'Squarefeet Promoters', short: 'S', district: 'Kollam' },
  { name: 'Malabar Builders India Ltd.', short: 'MB', district: 'Kozhikode' },
  { name: 'Sreerosh Properties Pvt Ltd', short: 'SR', district: 'Kottayam' }
];
const BUILDER_COLORS = ['#fb7e03', '#149fd8', '#0d1720', '#999c9d'];

/* ---------------- Helpers ---------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
// links to homepage sections need 'index.html' in front when used on inner pages
const HOME = (document.body.dataset.page || 'home') === 'home' ? '' : 'index.html';
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const ICONS = {
  pin: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  bed: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 18V8M21 18v-5a3 3 0 0 0-3-3H10v5M3 15h18"/><circle cx="6.5" cy="11.5" r="1.5"/></svg>',
  bath: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3ZM6 12V5a2 2 0 0 1 4 0"/></svg>',
  area: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
  tag: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12V4h8l10 10-8 8L3 12Z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>',
  heart: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/></svg>'
};

const imgTag = (id, alt, cls = 'w-full h-full object-cover', w = 900) =>
  `<img src="${img(id, w)}" alt="${alt}" class="${cls}" loading="lazy" />`;

const showToast = (msg) => {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('is-visible');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => t.classList.remove('is-visible'), 2600);
};

/* ---------------- Renderers ---------------- */
// Cinematic hero: crossfading Ken Burns slides + "now showing" caption
function initHeroSlider() {
  const wrap = $('#heroSlides');
  const caption = $('#heroCaption');
  const progress = $('#heroProgress');
  const pad = n => String(n).padStart(2, '0');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  wrap.innerHTML = HERO_SLIDES.map((sl, i) => `
    <div class="hero4-slide${i ? '' : ' is-on'}">
      <img ${i ? 'data-src' : 'src'}="${img(sl.img, 1800)}" alt="" ${i ? '' : 'fetchpriority="high"'} />
    </div>`).join('');
  $('#heroTotal').textContent = pad(HERO_SLIDES.length);
  // First slide loads immediately; the rest preload once the page is ready
  const preload = () => $$('img[data-src]', wrap).forEach(im => { im.src = im.dataset.src; im.removeAttribute('data-src'); });
  if (document.readyState === 'complete') preload(); else window.addEventListener('load', preload, { once: true });
  progress.style.setProperty('--hero-dur', `${HERO_DURATION}ms`);

  let cur = 0, timer;
  const paint = i => {
    const sl = HERO_SLIDES[i];
    $('#heroIndex').textContent = pad(i + 1);
    $('#heroKind').textContent = sl.kind;
    $('#heroTitle').textContent = sl.title;
    $('#heroMeta').textContent = sl.meta;
    caption.href = sl.href;
    // restart the progress line
    progress.classList.remove('is-running'); void progress.offsetWidth;
    if (!reduced) progress.classList.add('is-running');
  };
  const go = n => {
    const slides = $$('.hero4-slide', wrap);
    slides[cur].classList.remove('is-on');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('is-on');
    caption.classList.add('is-swapping');
    setTimeout(() => { paint(cur); caption.classList.remove('is-swapping'); }, 300);
  };
  const auto = () => { clearInterval(timer); if (!reduced) timer = setInterval(() => go(cur + 1), HERO_DURATION); };

  $$('.hero4-arrow').forEach(b => b.addEventListener('click', () => { go(cur + Number(b.dataset.hero)); auto(); }));
  document.addEventListener('visibilitychange', () => (document.hidden ? clearInterval(timer) : auto()));
  paint(0);
  auto();
}

function renderTopAds() {
  $('#topAds').innerHTML = TOP_ADS.map(ad => `
    <a href="${HOME}#advertise" class="ad-box ad-strip" aria-label="${ad.name} advertisement">
      ${imgTag(ad.img, `${ad.name} advertisement`, '', 500)}
    </a>`).join('');
}

function renderPremiumAds(count = PREMIUM_ADS.length) {
  const list = $('#premAds');
  if (list.children.length === count) return;
  list.innerHTML = Array.from({ length: count }, (_, i) => PREMIUM_ADS[i % PREMIUM_ADS.length]).map((photo, i) => `
    <a href="#advertise" class="ad-box ad-premium" aria-label="Premium property advertisement ${i + 1}">
      ${imgTag(photo, `Premium property advertisement ${i + 1}`, '', 700)}
    </a>`).join('');
}

// Desktop: show only as many 300 × 250 ads as fit beside the news column, so both end level.
// Tablet/phone (ads sit below the news): show them all.
function fitPremiumAds() {
  const list = $('#premAds');
  if (!list) return;
  if (!window.matchMedia('(min-width: 1024px)').matches) {
    renderPremiumAds(PREMIUM_ADS.length);
    [...list.children].forEach(a => { a.style.aspectRatio = ''; a.style.height = ''; });
    return;
  }
  // where the news content really ends (the grid row itself stretches to the taller column)
  const newsEnd = $('#newsGrid').parentElement.lastElementChild.getBoundingClientRect().bottom;
  const listTop = list.getBoundingClientRect().top;
  const gap = parseFloat(getComputedStyle(list).rowGap) || 20;
  const adH = list.getBoundingClientRect().width * 250 / 300;   // natural 300 × 250 height
  const room = newsEnd - listTop;
  const n = Math.max(1, Math.round((room + gap) / (adH + gap)));
  renderPremiumAds(n);
  // share the space evenly so the column ends level with the news (stays close to 300 × 250)
  const h = Math.max(120, (room - (n - 1) * gap) / n);
  [...list.children].forEach(a => { a.style.aspectRatio = 'auto'; a.style.height = `${h}px`; });
}

function renderNews() {
  let html = '';
  for (let r = 0; r < 3; r++) {
    NEWS_HEADS.forEach((n, c) => {
      const photo = r === 1 ? NEWS_ALT_IMGS[c] : n.img;
      html += `
      <article class="news-card group">
        <a href="#">
          <div class="rounded-2xl overflow-hidden aspect-[16/10]">${imgTag(photo, '', 'w-full h-full object-cover group-hover:scale-105 transition duration-700', 600)}</div>
          <h3 class="mt-4 font-display text-lg leading-snug group-hover:text-saffron transition-colors">${n.title}</h3>
          <p class="mt-2 text-sm text-mist-500 leading-relaxed line-clamp-2">${NEWS_CAPTION}</p>
        </a>
      </article>`;
    });
  }
  $('#newsGrid').innerHTML = html;
}

// Sponsored contents: fading slider, auto-advances every 4.5 s, pauses on hover
function initSponsored() {
  const slider = $('#sponsSlider');
  const dots = $('#sponsDots');
  slider.innerHTML = SPONSORED.map((s, i) => `
    <a href="#" class="spons-slide${i ? '' : ' is-on'}" aria-hidden="${i ? 'true' : 'false'}">
      ${imgTag(s.img, s.title, 'absolute inset-0 w-full h-full object-cover', 1400)}
      <div class="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent"></div>
      <span class="absolute top-4 left-4 spons-badge">CN Premium Articles</span>
      <div class="absolute bottom-0 left-0 p-6 md:p-8 text-white max-w-2xl">
        <h4 class="font-display text-2xl md:text-[2rem] leading-tight">${s.title}</h4>
        <p class="mt-2 text-white/80 md:text-lg">${s.text}</p>
      </div>
    </a>`).join('');
  dots.innerHTML = SPONSORED.map((_, i) => `<button class="spons-dot${i ? '' : ' is-on'}" data-i="${i}" aria-label="Slide ${i + 1}"></button>`).join('');

  let cur = 0, timer;
  const go = n => {
    const slides = $$('.spons-slide', slider), ds = $$('.spons-dot', dots);
    slides[cur].classList.remove('is-on'); slides[cur].setAttribute('aria-hidden', 'true'); ds[cur].classList.remove('is-on');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('is-on'); slides[cur].setAttribute('aria-hidden', 'false'); ds[cur].classList.add('is-on');
  };
  // advances on its own — no click needed
  const auto = () => { clearInterval(timer); timer = setInterval(() => go(cur + 1), 4500); };
  $$('.spons-btn').forEach(b => b.addEventListener('click', () => { go(cur + Number(b.dataset.spons)); auto(); }));
  dots.addEventListener('click', e => { const b = e.target.closest('.spons-dot'); if (b) { go(Number(b.dataset.i)); auto(); } });
  slider.addEventListener('mouseenter', () => clearInterval(timer));
  slider.addEventListener('mouseleave', auto);
  auto();
}

/* ---------------- Slim search: status · district · location type · location · type ---------------- */
function initSearch() {
  const form = $('#searchForm');
  if (!form || !$('#sfDistrict')) return;
  const district = $('#sfDistrict'), locType = $('#sfLocType'), location = $('#sfLocation'), panchayat = $('#sfPanchayat');
  const opts = list => list.map(v => `<option value="${v}">${v}</option>`).join('');
  district.insertAdjacentHTML('beforeend', opts(Object.keys(LOCATIONS)));      // alphabetical
  $('#sfType').insertAdjacentHTML('beforeend', opts(PROPERTY_TYPE_OPTIONS));

  const update = () => {
    const d = district.value, t = locType.value, isP = t === 'Panchayat';
    location.classList.toggle('hidden', isP);
    panchayat.classList.toggle('hidden', !isP);
    if (isP) return;
    const items = !d ? [] : t ? LOCATIONS[d][t] : [...LOCATIONS[d].Corporation, ...LOCATIONS[d].Municipality];
    const first = !d ? '- Select district first -' : items.length ? '- Select -' : `No ${t.toLowerCase()} in ${d}`;
    location.innerHTML = `<option value="">${first}</option>${opts(items)}`;
  };
  district.addEventListener('change', update);
  locType.addEventListener('change', update);
  update();

  form.addEventListener('submit', e => {
    e.preventDefault();
    const where = (locType.value === 'Panchayat' ? panchayat.value.trim() : location.value) || district.value || 'all districts';
    const what = form.type.value || 'properties';
    showToast(`Searching ${what.toLowerCase()} for ${form.status.value.toLowerCase()} in ${where}…`);
  });
}

let propFilter = 'all';
let propPage = 1;
function renderProperties() {
  // homepage shows the first 9 — the rest are on "More Properties" (no pagination here)
  const list = PROPERTIES.filter(p => propFilter === 'all' || p.type === propFilter);

  $('#propertyGrid').innerHTML = list.slice(0, PER_PAGE).map((p, i) => `
    <article class="prop-card" style="--i:${i}">
      <div class="prop-media">
        ${imgTag(p.img, `${p.type} in ${p.loc}`)}
        <button class="fav-btn absolute top-4 right-4" aria-label="Save property">${ICONS.heart}</button>
      </div>
      <div class="p-6">
        <h3 class="font-display text-lg">${p.type}</h3>
        <dl class="mt-4 grid gap-2.5 text-sm">
          <div class="prop-row"><dt>${ICONS.pin}Location</dt><dd>${p.loc}</dd></div>
          <div class="prop-row"><dt>${ICONS.tag}Price</dt><dd class="text-saffron-600">${p.price}</dd></div>
          <div class="prop-row"><dt>${ICONS.area}Covered Area</dt><dd>${p.area}</dd></div>
        </dl>
        <a href="#" class="mt-6 flex items-center justify-center gap-2 h-11 rounded-full border border-ink/10 font-semibold text-sm hover:bg-ink hover:text-white hover:border-ink transition">View More <span aria-hidden="true">→</span></a>
      </div>
    </article>`).join('');
}

function renderMaterials(district = '') {
  const list = SURPLUS.filter(m => !district || m.district === district);
  $('#materialGrid').innerHTML = list.length ? list.map((m, i) => `
    <a href="#" class="mat-card group" style="--i:${i}">
      <div class="aspect-square overflow-hidden">${imgTag(m.img, m.name, 'w-full h-full object-cover group-hover:scale-105 transition duration-700', 600)}</div>
      <div class="p-4 md:p-5">
        <h3 class="font-semibold">${m.name}</h3>
        <p class="mt-1 text-xs text-white/55 leading-relaxed">Good condition, available for quick sale.</p>
        <p class="mt-3 text-[11px] uppercase tracking-[0.14em] text-lagoon flex items-center gap-1.5"><span class="w-3.5 h-3.5">${ICONS.pin}</span>${m.district}</p>
      </div>
    </a>`).join('')
    : `<p class="col-span-full text-center text-white/50 py-10">No items in this district yet.</p>`;
}

const zoomCard = (x, kind, id, i, dark) => `
  <article class="zoom-card group${dark ? ' is-dark' : ''}" style="--i:${i}">
    <div class="relative overflow-hidden rounded-2xl aspect-[4/5]">
      ${imgTag(x.img, x.name, 'w-full h-full object-cover group-hover:scale-110 transition duration-[1.2s]', 600)}
      <div class="absolute inset-0 bg-ink/0 group-hover:bg-ink/45 transition duration-500"></div>
      <button class="fav-btn absolute top-3 right-3" aria-label="Save">${ICONS.heart}</button>
      <a href="detail.html?type=${kind}&id=${id}" class="zoom-btn">View Details</a>
    </div>
    <h3 class="mt-4 font-display text-lg leading-snug">${x.name}</h3>
    <p class="mt-1 text-sm ${dark ? 'text-white/55' : 'text-mist-500'}">${x.loc}</p>
  </article>`;

function renderApartments() {
  $('#aptGrid').innerHTML = APARTMENTS.map((a, i) => zoomCard(a, 'apartment', i + 1, i, false)).join('');
}

function renderVillas() {
  $('#villaGrid').innerHTML = VILLAS.map((v, i) => zoomCard(v, 'villa', i + 1, i, false)).join('');
}

function renderBuilders(district = '') {
  const list = BUILDERS.filter(b => !district || b.district === district);
  $('#builderEmpty').classList.toggle('hidden', list.length > 0);
  $('#builderGrid').innerHTML = list.map((b, i) => {
    const color = BUILDER_COLORS[BUILDERS.indexOf(b) % BUILDER_COLORS.length];
    return `
    <a href="directory.html?company=${b.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}" class="builder-card" style="--i:${i}">
      <span class="builder-logo" style="background:${color}">${b.short}</span>
      <h3 class="font-semibold text-sm leading-snug">${b.name}</h3>
      <p class="text-xs text-mist-500 mt-1.5">${b.district}</p>
    </a>`;
  }).join('');
}

/* ---------------- Interactions ---------------- */
function initDistricts() {
  const options = DISTRICTS.map(d => `<option value="${d}">${d}</option>`).join('');
  $$('.district-select').forEach(s => s.insertAdjacentHTML('beforeend', options));
}

function initHeader() {
  $('#toTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  $('#todayDate').textContent = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

function initDrawer() {
  const drawer = $('#drawer');
  const btn = $('#menuBtn');
  const toggle = (open) => {
    drawer.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  btn.addEventListener('click', () => toggle(true));
  $('#closeMenu').addEventListener('click', () => toggle(false));
  $('#drawerOverlay').addEventListener('click', () => toggle(false));
  $$('#drawerPanel a').forEach(a => a.addEventListener('click', () => toggle(false)));
  document.addEventListener('keydown', e => e.key === 'Escape' && toggle(false));
}

function initTabs() {
  // Hero search tabs
  $$('.search-tab').forEach(tab => tab.addEventListener('click', () => {
    $$('.search-tab').forEach(t => t.classList.remove('is-active'));
    tab.classList.add('is-active');
  }));

  // Property type filters + pagination
  $$('#propertyFilters .filter-chip').forEach(chip => chip.addEventListener('click', () => {
    $$('#propertyFilters .filter-chip').forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    propFilter = chip.dataset.filter;
    propPage = 1;
    renderProperties();
  }));
  $('#materialDistrict').addEventListener('change', e => renderMaterials(e.target.value));
  $('#builderDistrict').addEventListener('change', e => renderBuilders(e.target.value));
}

function initSlider() {
  $$('.slider-btn').forEach(btn => btn.addEventListener('click', () => {
    const track = document.getElementById(btn.dataset.slider);
    const card = track.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 24 : 320;
    track.scrollBy({ left: step * Number(btn.dataset.dir), behavior: 'smooth' });
  }));
}

function initFavourites() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.fav-btn');
    if (!btn) return;
    e.preventDefault();
    const on = btn.classList.toggle('is-fav');
    showToast(on ? 'Saved to your shortlist' : 'Removed from shortlist');
  });
}

function initForms() {
  $('#newsletterForm').addEventListener('submit', e => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
      input.focus();
      showToast('Please enter a valid email address');
      return;
    }
    input.value = '';
    showToast('Thank you for subscribing!');
  });
}

/* ---------------- Scroll animations ---------------- */

// Wrap each word of a heading so it can rise into view one by one.
function splitWords(el) {
  const nodes = [...el.childNodes];
  let w = 0;
  const wrap = node => {
    const outer = document.createElement('span');
    const inner = document.createElement('span');
    outer.className = 'w';
    inner.style.setProperty('--w', w++);
    inner.append(node);
    outer.append(inner);
    return outer;
  };
  el.textContent = '';
  nodes.forEach(n => {
    if (n.nodeType === Node.TEXT_NODE) {
      n.textContent.split(/(\s+)/).forEach(part => {
        if (!part) return;
        el.append(/^\s+$/.test(part) ? ' ' : wrap(document.createTextNode(part)));
      });
    } else if (n.nodeName === 'BR') {
      el.append(n);
    } else {
      el.append(wrap(n));
    }
  });
}

function initReveal() {
  $$('.section-title').forEach(t => t.classList.add('split-words'));
  $$('.split-words').forEach(splitWords);

  // Static stagger groups get their index from DOM order
  $$('[data-stagger]').forEach(group =>
    [...group.children].forEach((child, i) => {
      if (!child.style.getPropertyValue('--i')) child.style.setProperty('--i', i);
    }));

  pendingReveals = new Set($$('.reveal, [data-anim], [data-stagger], .split-words'));
  if (!('IntersectionObserver' in window)) { revealInView(); return; }

  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); pendingReveals.delete(en.target); io.unobserve(en.target); }
    });
  }, { threshold: 0, rootMargin: '0px 0px -12% 0px' });
  pendingReveals.forEach(el => io.observe(el));
}

// Safety net for fast scrolls / anchor jumps / throttled observers:
// anything already at or above the reveal line gets shown.
let pendingReveals = new Set();
function revealInView() {
  if (!pendingReveals.size) return;
  const line = window.innerHeight * 0.88;
  pendingReveals.forEach(el => {
    if (el.getBoundingClientRect().top < line) { el.classList.add('is-in'); pendingReveals.delete(el); }
  });
}

function initDistrictBand() {
  const names = [...DISTRICTS, ...DISTRICTS].map(d => `<span>${d}</span>`).join('');
  $$('.district-track').forEach(t => { t.innerHTML = names; });
}

// One rAF-throttled scroll loop drives the header shadow, back-to-top,
// reveal safety net, parallax layers and the district band.
function initScrollEngine() {
  const header = $('#siteHeader');
  const mobileHeader = $('#mobileHeader');
  const brand = $('.brandrow');
  const toTop = $('#toTop');
  const parallax = $$('[data-parallax]');
  const band = $('.district-band');
  const tracks = $$('.district-track');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let ticking = false;

  const update = () => {
    ticking = false;
    const y = window.scrollY;
    const vh = window.innerHeight;

    header.classList.toggle('is-scrolled', y > brand.offsetTop + brand.offsetHeight - 2);
    mobileHeader.classList.toggle('is-scrolled', y > 40);

    toTop.classList.toggle('is-visible', y > 700);
    revealInView();

    if (reduced) return;

    parallax.forEach(el => {
      const box = (el.parentElement || el).getBoundingClientRect();
      if (box.bottom < -200 || box.top > vh + 200) return;
      const offset = (box.top + box.height / 2 - vh / 2) * -Number(el.dataset.parallax);
      el.style.setProperty('--py', `${offset.toFixed(1)}px`);
    });

    if (band) {
      const r = band.getBoundingClientRect();
      if (r.bottom > 0 && r.top < vh) {
        const p = vh - r.top;
        tracks.forEach(t => {
          const dir = Number(t.dataset.marquee);
          const start = dir > 0 ? 0 : -t.scrollWidth / 2;
          t.style.transform = `translate3d(${(start - p * 0.45 * dir).toFixed(1)}px, 0, 0)`;
        });
      }
    }
  };

  const onScroll = () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}

function initCounters() {
  const run = el => {
    const to = Number(el.dataset.to);
    const start = performance.now();
    const dur = 1600;
    const tick = now => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * eased).toLocaleString('en-IN');
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
  }, { threshold: 0.6 });
  $$('.counter').forEach(el => io.observe(el));
}


/* ---------------- Footer, WhatsApp, popup, nav highlight (current design) ---------------- */
// Each form checks its own reCAPTCHA (pages can have more than one)
function captchaWidgetId(form) {
  const box = form.querySelector('.g-recaptcha');
  return box ? [...document.querySelectorAll('.g-recaptcha')].indexOf(box) : -1;
}
function captchaOk(form) {
  const id = captchaWidgetId(form);
  if (id < 0 || !window.grecaptcha || typeof grecaptcha.getResponse !== 'function') return true;
  try { return !!grecaptcha.getResponse(id); } catch { return true; }
}
function captchaReset(form) {
  const id = captchaWidgetId(form);
  if (id >= 0 && window.grecaptcha && grecaptcha.reset) { try { grecaptcha.reset(id); } catch {} }
}

function initContactForm() {
  const form = $('#contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const f = form.elements;
    const checks = [
      [f.name, f.name.value.trim().length > 1],
      [f.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.value.trim())],
      [f.phone, f.phone.value.replace(/\D/g, '').length >= 7],
      [f.message, f.message.value.trim().length > 2]
    ];
    checks.forEach(([el, ok]) => el.classList.toggle('is-invalid', !ok));
    const bad = checks.find(([, ok]) => !ok);
    if (bad) { bad[0].focus(); showToast('Please fill in all the fields correctly'); return; }

    if (!captchaOk(form)) { showToast('Please confirm the reCAPTCHA'); return; }
    // TODO: send to backend (e.g. fetch('/contact', { method: 'POST', body: new FormData(form) }))
    form.reset();
    captchaReset(form);
    showToast("Thank you! We'll get back to you soon.");
  });
  form.addEventListener('input', e => e.target.classList.remove('is-invalid'));
}

function initWhatsApp() {
  const widget = $('#waWidget');
  const toggleBtn = $('#waToggle');
  const panel = $('#waPanel');
  const input = $('#waInput');
  const setOpen = open => {
    widget.classList.toggle('is-open', open);
    toggleBtn.setAttribute('aria-expanded', open);
    panel.setAttribute('aria-hidden', !open);
    if (open) {
      $('#waTime').textContent = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      setTimeout(() => input.focus(), 250);
    }
  };
  toggleBtn.addEventListener('click', () => setOpen(!widget.classList.contains('is-open')));
  $('#waClose').addEventListener('click', () => setOpen(false));
  $('#waForm').addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value.trim() || 'Hello Kerala Properties, I have an enquiry.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    input.value = '';
  });
}

function initPopup() {
  const popup = $('#promoPopup');
  const image = $('#popupImg');
  const link = $('#popupLink');
  const btn = $('#popupBtn');
  let timer, lastFocus;

  // remember when it was last shown so reloads / page changes don't bring it back early
  const store = {
    get(k) { try { return Number(localStorage.getItem(k)) || 0; } catch { return 0; } },
    set(k, v) { try { localStorage.setItem(k, String(v)); } catch {} }
  };
  let idx = store.get('kp_popup_idx');

  const isBusy = () =>
    document.hidden ||
    $('#drawer').classList.contains('is-open') ||
    $('#waWidget').classList.contains('is-open') ||
    (document.activeElement && /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName));

  const schedule = (ms = POPUP_INTERVAL) => { clearTimeout(timer); timer = setTimeout(open, ms); };

  function open() {
    if (isBusy()) { schedule(5000); return; }   // don't interrupt — try again shortly
    const ad = POPUP_ADS[idx++ % POPUP_ADS.length];
    store.set('kp_popup_idx', idx);
    store.set('kp_popup_last', Date.now());
    image.src = img(ad.img, 800, '&h=450');
    link.href = HOME + ad.href;
    btn.href = HOME + ad.href;
    btn.firstChild.textContent = `${ad.cta || 'View Details'} `;
    lastFocus = document.activeElement;
    popup.classList.add('is-open');
    popup.setAttribute('aria-hidden', 'false');
    btn.focus({ preventScroll: true });
  }
  function close() {
    popup.classList.remove('is-open');
    popup.setAttribute('aria-hidden', 'true');
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    schedule();                                 // next popup 5 minutes later
  }

  $$('[data-popup-close]', popup).forEach(el => el.addEventListener('click', close));
  // the ad image and both buttons close the popup and follow their link
  $$('#popupLink, .popup-btn', popup).forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && popup.classList.contains('is-open')) close(); });
  // preload the first popup image
  new Image().src = img(POPUP_ADS[idx % POPUP_ADS.length].img, 800, '&h=450');
  const last = store.get('kp_popup_last');
  schedule(last ? Math.max(5000, last + POPUP_INTERVAL - Date.now()) : POPUP_FIRST_DELAY);
}

function initScrollSpy() {
  const links = $$('[data-spy]');
  const ids = [...new Set(links.map(a => a.dataset.spy))];
  const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
  const setActive = id => {
    links.forEach(a => a.classList.toggle('is-active', a.dataset.spy === id));
    // keep the active pill visible in the swipeable mobile row
    const m = $(`.mnav-link[data-spy="${id}"]`);
    if (m && window.matchMedia('(max-width: 1023px)').matches) {
      const row = m.parentElement;
      row.scrollTo({ left: m.offsetLeft - 16, behavior: 'smooth' });
    }
  };
  let current = '';
  const io = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visible.length && visible[0].target.id !== current) { current = visible[0].target.id; setActive(current); }
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach(sec => io.observe(sec));
}

function initImageFallback() {
  document.addEventListener('error', e => {
    if (e.target.tagName === 'IMG' && !e.target.dataset.failed) {
      e.target.dataset.failed = '1';
      e.target.classList.add('img-fallback');
      e.target.removeAttribute('src');
    }
  }, true);
}

/* ---------------- Boot ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page || 'home';

  // shared on every page: header, ads strip, footer, widgets, animations
  initImageFallback();
  initDistricts();
  if ($('#topAds')) renderTopAds();
  initHeader();
  initDrawer();
  initFavourites();
  initContactForm();
  initWhatsApp();
  initPopup();
  $('#year').textContent = new Date().getFullYear();

  // homepage sections
  if (page === 'home') {
    if ($('#heroSlides')) initHeroSlider();   // hero removed from the homepage; kept for reuse
    renderNews();
    initSponsored();
    renderPremiumAds();
    requestAnimationFrame(fitPremiumAds);
    window.addEventListener('load', fitPremiumAds);
    if (document.fonts) document.fonts.ready.then(fitPremiumAds);
    let fitTimer;
    window.addEventListener('resize', () => { clearTimeout(fitTimer); fitTimer = setTimeout(fitPremiumAds, 150); });
    renderProperties();
    renderMaterials();
    renderApartments();
    renderVillas();
    renderBuilders();
    initTabs();
    initSearch();
    initSlider();
    initForms();
    initDistrictBand();
    initCounters();
  }

  // page-specific scripts (e.g. directory.js) hook in here before animations start
  document.dispatchEvent(new CustomEvent('kp:page-ready', { detail: { page } }));

  initReveal();
  initScrollEngine();
  initScrollSpy();
});
