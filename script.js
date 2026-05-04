/* ══════════════════════════════════════════
   LUXERA & OUTFITS — script.js
   Lógica completa: productos, buscador, menú, detalle
   ══════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════════════
   PRODUCTS DATABASE
   ══════════════════════════════════════════ */
const PRODUCTS = {
  mex1: {
    cat: 'México',
    title: 'Adidas Jersey Local Selección Nacional de México 26',
    price: '$500 MXN',
    desc: 'Porta los colores verdes con la versión más reciente de la selección nacional. Diseñada con tecnología AEROREADY para máxima frescura y comodidad, ideal para el estadio o el día a día con un ajuste premium que honra la pasión mexicana.',
    images: [
      'https://i.ibb.co/KpckPxFr/image.png',
      'https://i.ibb.co/yFxH9WDT/Captura-de-pantalla-2026-05-02-a-la-s-11-21-05-a-m.png',
      'https://i.ibb.co/tTnV5LhC/Captura-de-pantalla-2026-05-02-a-la-s-11-22-01-a-m.png'
    ]
  },
  mex2: {
    cat: 'México',
    title: 'Adidas Jersey Visitante Selección Nacional de México 26',
    price: '$500 MXN',
    desc: 'La alternativa visitante de la selección para el Mundial 2026, con un diseño elegante que combina modernidad y técnica. Fabricada con materiales de alto desempeño para el aficionado exigente.',
    images: [
      'https://i.ibb.co/zhZ8SgMx/Captura-de-pantalla-2026-05-02-a-la-s-11-50-26-a-m.png',
      'https://i.ibb.co/ycPLnrTV/Captura-de-pantalla-2026-05-02-a-la-s-11-49-53-a-m.png',
      'https://i.ibb.co/Q3C7dxWw/Captura-de-pantalla-2026-05-02-a-la-s-11-49-47-a-m.png'
    ]
  },
  mex3: {
    cat: 'México',
    title: 'Jersey Negro Manga Larga Selección Nacional de México',
    price: '$600 MXN',
    desc: 'Edición oscura y poderosa de la selección mexicana en formato manga larga. Un diseño audaz que mezcla la identidad azteca con una estética moderna y sofisticada, perfecta para coleccionistas.',
    images: [
      'https://i.ibb.co/Q3GZxw8r/Captura-de-pantalla-2026-05-02-a-la-s-12-02-34-p-m.png',
      'https://i.ibb.co/1WQk5zZ/Captura-de-pantalla-2026-05-02-a-la-s-12-03-02-p-m.png',
      'https://i.ibb.co/kstCYK8S/Captura-de-pantalla-2026-05-02-a-la-s-12-02-48-p-m.png'
    ]
  },
  mex4: {
    cat: 'México',
    title: 'Adidas Jersey Retro Selección Nacional de México 86',
    price: '$650 MXN',
    desc: 'Revive la gloria del fútbol con esta pieza de colección del Mundial de México 86. Un diseño icónico que captura la esencia de una época dorada, fabricado con materiales de alta calidad para el verdadero aficionado y coleccionista.',
    images: [
      'https://i.ibb.co/5xXBhwrk/Captura-de-pantalla-2026-05-02-a-la-s-12-07-53-p-m.png',
      'https://i.ibb.co/Xv8S2W0/Captura-de-pantalla-2026-05-02-a-la-s-12-09-38-p-m.png',
      'https://i.ibb.co/fdFMKXWm/Captura-de-pantalla-2026-05-02-a-la-s-12-09-33-p-m.png'
    ]
  },
  mex5: {
    cat: 'México',
    title: 'Adidas Jersey Retro Selección Nacional de México 98',
    price: '$650 MXN',
    desc: 'Una joya del fútbol mexicano de finales de los 90. Esta playera retro evoca momentos históricos con su diseño clásico, los motivos aztecas y colores inconfundibles que marcaron toda una generación.',
    images: [
      'https://i.ibb.co/99z9PqZ1/Captura-de-pantalla-2026-05-02-a-la-s-12-11-21-p-m.png',
      'https://i.ibb.co/V0K5y4vh/Captura-de-pantalla-2026-05-02-a-la-s-12-11-41-p-m.png',
      'https://i.ibb.co/svVcqJvL/Captura-de-pantalla-2026-05-02-a-la-s-12-11-34-p-m.png'
    ]
  },
  mex6: {
    cat: 'México',
    title: 'Chamarra Adidas México 86',
    price: '$1,899 MXN',
    desc: 'La chamarra definitiva para el fanático de la selección. Inspirada en el icónico equipo del 86, esta pieza de colección fusiona el legado histórico con una confección premium que la convierte en la prenda más exclusiva de tu guardarropa.',
    images: [
      'https://i.ibb.co/dwxMKLcN/Captura-de-pantalla-2026-05-02-a-la-s-12-13-22-p-m.png',
      'https://i.ibb.co/vxyw9FcX/Captura-de-pantalla-2026-05-02-a-la-s-12-15-13-p-m.png',
      'https://i.ibb.co/S4VtQm6q/Captura-de-pantalla-2026-05-02-a-la-s-12-15-09-p-m.png'
    ]
  },
  leon1: {
    cat: 'Club León',
    title: 'Charly Jersey Mundial de Clubes Club León',
    price: '$600 MXN',
    desc: 'La Fiera irrumpe en el escenario mundial con este jersey especial. Porta los colores verdes y negros de León en la edición más esperada del Mundial de Clubes, con tecnología de tela de primer nivel.',
    images: [
      'https://i.ibb.co/F4gJJdJM/Captura-de-pantalla-2026-05-02-a-la-s-12-18-06-p-m.png',
      'https://i.ibb.co/wFwD7fmY/Captura-de-pantalla-2026-05-02-a-la-s-12-18-27-p-m.png',
      'https://i.ibb.co/N6GB6NPC/Captura-de-pantalla-2026-05-02-a-la-s-12-18-21-p-m.png'
    ]
  },
  leon2: {
    cat: 'Club León',
    title: 'Charly Jersey Visitante Club León',
    price: '$500 MXN',
    desc: 'El jersey visitante de La Fiera, diseñado para conquistar cualquier estadio. Combina comodidad, identidad de marca y el orgullo del equipo más pasional de la Liga MX con un acabado premium.',
    images: [
      'https://i.ibb.co/HDk7jCh2/Captura-de-pantalla-2026-05-02-a-la-s-12-22-29-p-m.png',
      'https://i.ibb.co/B2njzDt0/Captura-de-pantalla-2026-05-02-a-la-s-12-22-49-p-m.png',
      'https://i.ibb.co/nMzZCc2d/Captura-de-pantalla-2026-05-02-a-la-s-12-22-43-p-m.png'
    ]
  },
  leon3: {
    cat: 'Club León',
    title: 'Charly Jersey Mundial de Clubes Club León',
    price: '$600 MXN',
    desc: 'Segunda edición especial del Club León para el Mundial de Clubes. Una pieza que marcará historia, con detalles únicos y la pasión de todo un estado en cada costura.',
    images: [
      'https://i.ibb.co/21bY70YW/Captura-de-pantalla-2026-05-02-a-la-s-12-24-33-p-m.png',
      'https://i.ibb.co/tw37k1n4/Captura-de-pantalla-2026-05-02-a-la-s-12-25-07-p-m.png',
      'https://i.ibb.co/YTQzG6Sq/Captura-de-pantalla-2026-05-02-a-la-s-12-25-00-p-m.png'
    ]
  },
  chivas1: {
    cat: 'Chivas',
    title: 'Puma Jersey Local Chivas',
    price: '$500 MXN',
    desc: 'Porta los colores del Rebaño Sagrado con la versión local más reciente. Diseñada para ofrecer máxima comodidad y frescura, con el icónico diseño a rayas rojiblancos que hace latir más fuerte a los chivahermanos.',
    images: [
      'https://i.ibb.co/35W2NdwN/Captura-de-pantalla-2026-05-02-a-la-s-12-31-36-p-m.png',
      'https://i.ibb.co/S9JqyH9/Captura-de-pantalla-2026-05-02-a-la-s-12-31-58-p-m.png',
      'https://i.ibb.co/KxwnhfYQ/Captura-de-pantalla-2026-05-02-a-la-s-12-31-51-p-m.png'
    ]
  },
  chivas2: {
    cat: 'Chivas',
    title: "Atletica Jersey '99 Chivas",
    price: '$650 MXN',
    desc: "Una reliquia del fútbol mexicano. La playera del '99 de las Chivas captura el espíritu de una era icónica con su diseño clásico y auténtico, fabricada para los verdaderos coleccionistas del Rebaño.",
    images: [
      'https://i.ibb.co/C382ZmmY/Captura-de-pantalla-2026-05-02-a-la-s-12-34-16-p-m.png',
      'https://i.ibb.co/67VmR7Wj/Captura-de-pantalla-2026-05-02-a-la-s-12-34-44-p-m.png',
      'https://i.ibb.co/Nddk2QDy/Captura-de-pantalla-2026-05-02-a-la-s-12-34-39-p-m.png'
    ]
  },
  ame1: {
    cat: 'América',
    title: 'Adidas Jersey Local Club América',
    price: '$500 MXN',
    desc: 'Las Águilas vuelan alto con su jersey local de temporada. El diseño en amarillo crema y azul marino es símbolo de grandeza, confeccionado con materiales premium para el seguidor más exigente del conjunto americanista.',
    images: [
      'https://i.ibb.co/C5Z9Brk2/Captura-de-pantalla-2026-05-02-a-la-s-12-37-52-p-m.png',
      'https://i.ibb.co/XfwRxMvs/Captura-de-pantalla-2026-05-02-a-la-s-12-38-07-p-m.png',
      'https://i.ibb.co/VYccyPpP/Captura-de-pantalla-2026-05-02-a-la-s-12-38-01-p-m.png'
    ]
  },
  ame2: {
    cat: 'América',
    title: 'Adidas Jersey Visitante Club América',
    price: '$500 MXN',
    desc: 'El águila también conquista de visita. Este jersey con tonos alternos mantiene la esencia americanista con un toque moderno, tecnología de punta y comodidad excepcional para el fanático en cualquier estadio.',
    images: [
      'https://i.ibb.co/KYGmhp7/Captura-de-pantalla-2026-05-02-a-la-s-12-38-26-p-m.png'
    ]
  },
  rm1: {
    cat: 'Real Madrid',
    title: 'Adidas Jersey Real Madrid Local',
    price: '$500 MXN',
    desc: 'Porta los colores del club más laureado de Europa. El blanco impoluto del Real Madrid con detalles premium representa la elegancia y el palmarés de los Merengues, la camiseta definitiva para un campeón.',
    images: [
      'https://i.ibb.co/8Dsxx85z/Captura-de-pantalla-2026-05-02-a-la-s-12-59-57-p-m.png',
      'https://i.ibb.co/h1mmQXJk/Captura-de-pantalla-2026-05-02-a-la-s-1-00-24-p-m.png',
      'https://i.ibb.co/4RWj3n2r/Captura-de-pantalla-2026-05-02-a-la-s-1-00-15-p-m.png'
    ]
  },
  rm2: {
    cat: 'Real Madrid',
    title: 'Adidas Jersey Real Madrid 2011-12 (Detalles Dorados)',
    price: '$650 MXN',
    desc: 'La temporada de la décima gloria. Esta playera de 2011-12 es una pieza de colección que captura el espíritu de un Madrid campeón, con sus inconfundibles detalles dorados que la hacen irresistible para todo aficionado.',
    images: [
      'https://i.ibb.co/4ggh5t0D/Captura-de-pantalla-2026-05-02-a-la-s-1-00-35-p-m.png',
      'https://i.ibb.co/v4Db9Q8w/Captura-de-pantalla-2026-05-02-a-la-s-1-01-11-p-m.png',
      'https://i.ibb.co/Zz1DWyL1/Captura-de-pantalla-2026-05-02-a-la-s-1-01-07-p-m.png'
    ]
  },
  rm3: {
    cat: 'Real Madrid',
    title: 'Adidas Jersey Real Madrid 1986-87',
    price: '$650 MXN',
    desc: 'Un viaje en el tiempo al Real Madrid de los ochenta. Esta pieza retro evoca el fútbol clásico europeo con su diseño auténtico y minimalista, perfecta para coleccionistas que aprecian la historia del deporte rey.',
    images: [
      'https://i.ibb.co/YFYSdhTF/Captura-de-pantalla-2026-05-02-a-la-s-1-01-36-p-m.png',
      'https://i.ibb.co/hxSsMZcW/Captura-de-pantalla-2026-05-02-a-la-s-1-02-23-p-m.png',
      'https://i.ibb.co/6cNn1cpC/Captura-de-pantalla-2026-05-02-a-la-s-1-02-09-p-m.png'
    ]
  },
  barca1: {
    cat: 'Barcelona',
    title: 'Nike Jersey Local Barcelona',
    price: '$500 MXN',
    desc: 'Porta los colores azulgrana del club más apasionado del mundo. La camiseta local del Barça con tecnología Dri-FIT te ofrece comodidad y estilo para vivir el fútbol con la misma intensidad que el Camp Nou.',
    images: [
      'https://i.ibb.co/qYhXLHn4/Captura-de-pantalla-2026-05-02-a-la-s-12-50-07-p-m.png',
      'https://i.ibb.co/XxYHsTwy/Captura-de-pantalla-2026-05-02-a-la-s-12-50-38-p-m.png',
      'https://i.ibb.co/6R7Jrpcy/Captura-de-pantalla-2026-05-02-a-la-s-12-50-31-p-m.png'
    ]
  },
  barca2: {
    cat: 'Barcelona',
    title: 'Nike Jersey Retro 92/95 Barcelona Home',
    price: '$650 MXN',
    desc: 'Revive la era dorada del Dream Team. Esta playera retro 92/95 del Barcelona es una obra de arte del fútbol clásico, con un diseño icónico que captura la gloria de una generación irrepetible para el verdadero culé.',
    images: [
      'https://i.ibb.co/PZhbmC6m/Captura-de-pantalla-2026-05-02-a-la-s-12-51-37-p-m.png',
      'https://i.ibb.co/wF0Z0dJW/Captura-de-pantalla-2026-05-02-a-la-s-12-52-23-p-m.png',
      'https://i.ibb.co/bMQ4jZwd/Captura-de-pantalla-2026-05-02-a-la-s-12-52-17-p-m.png'
    ]
  },
  barca3: {
    cat: 'Barcelona',
    title: 'Barcelona 2000/01 Home Retro Skeleton Travis Scott Edition',
    price: '$650 MXN',
    desc: 'La colaboración más inesperada y exclusiva del fútbol. La clásica playera del Barça 2000/01 reinterpretada por el universo creativo de Travis Scott, con el diseño Skeleton que la convierte en una pieza de edición absolutamente limitada.',
    images: [
      'https://i.ibb.co/4ZTLV4Xm/Captura-de-pantalla-2026-05-02-a-la-s-12-52-35-p-m.png',
      'https://i.ibb.co/CsYC4WPD/Captura-de-pantalla-2026-05-02-a-la-s-12-53-00-p-m.png',
      'https://i.ibb.co/1YrB1SGH/Captura-de-pantalla-2026-05-02-a-la-s-12-52-49-p-m.png'
    ]
  },
  col1: {
    cat: 'Colombia',
    title: 'Adidas Jersey Colombia Local',
    price: '$500 MXN',
    desc: 'La selección cafetera en todo su esplendor. El jersey local de Colombia con su inconfundible amarillo vibrante, franja azul y detalles rojos irradia la alegría y la garra del pueblo colombiano en cada partido.',
    images: [
      'https://i.ibb.co/7x4kZCBy/Captura-de-pantalla-2026-05-02-a-la-s-1-17-36-p-m.png',
      'https://i.ibb.co/CpgpgnxD/Captura-de-pantalla-2026-05-02-a-la-s-1-17-52-p-m.png',
      'https://i.ibb.co/qFdMXZ6D/Captura-de-pantalla-2026-05-02-a-la-s-1-17-45-p-m.png'
    ]
  },
  esp1: {
    cat: 'España',
    title: 'Adidas Jersey España Visitante',
    price: '$500 MXN',
    desc: 'La Roja en su versión visitante, con una estética fresca y moderna que mantiene la esencia del campeón del mundo. Diseñada con materiales de alta tecnología para rendir al nivel de los mejores del planeta.',
    images: [
      'https://i.ibb.co/zhbkFtJt/Captura-de-pantalla-2026-05-02-a-la-s-1-11-06-p-m.png',
      'https://i.ibb.co/cScKVh1D/Captura-de-pantalla-2026-05-02-a-la-s-1-11-39-p-m.png',
      'https://i.ibb.co/QvB3yTsq/Captura-de-pantalla-2026-05-02-a-la-s-1-11-37-p-m.png'
    ]
  },
  esp2: {
    cat: 'España',
    title: 'Adidas Jersey España Local',
    price: '$500 MXN',
    desc: 'La inconfundible camiseta roja de La Furia Española. Símbolo de dominio europeo y mundial, este jersey local combina la pasión española con una confección premium que te hará sentir parte de la historia.',
    images: [
      'https://i.ibb.co/whnXDyzc/Captura-de-pantalla-2026-05-02-a-la-s-1-11-55-p-m.png',
      'https://i.ibb.co/ksGctC7T/Captura-de-pantalla-2026-05-02-a-la-s-1-12-11-p-m.png',
      'https://i.ibb.co/jkB4Y9VQ/Captura-de-pantalla-2026-05-02-a-la-s-1-12-07-p-m.png'
    ]
  },
  f11: {
    cat: 'F1',
    title: 'Camiseta Réplica Logo Blanco Tommy Hilfiger x Cadillac F1 Team',
    price: '$550 MXN',
    desc: 'La fusión perfecta entre el automovilismo de alto rendimiento y la moda urbana de lujo. Esta camiseta exclusiva de la colaboración Tommy Hilfiger y Cadillac F1 destaca por sus detalles bordados y un estilo sofisticado único en su clase.',
    images: [
      'https://i.ibb.co/6JH36Cxz/Captura-de-pantalla-2026-05-02-a-la-s-1-21-28-p-m.png'
    ]
  },
  f12: {
    cat: 'F1',
    title: 'Unisex Tommy Hilfiger x Cadillac F1 Team Black Replica Polo',
    price: '$550 MXN',
    desc: 'El polo negro de la colección Cadillac F1 x Tommy Hilfiger es la pieza lifestyle más codiciada de la temporada. Diseño unisex con bordados de lujo que combinan velocidad, elegancia y un estilo cosmopolita inigualable.',
    images: [
      'https://i.ibb.co/HTmDh0QR/Captura-de-pantalla-2026-05-02-a-la-s-6-05-44-p-m.png'
    ]
  }
};

/* ══════════════════════════════════════════
   CATEGORY SWITCHING
   ══════════════════════════════════════════ */
function switchCat(cat) {
  // Hide all sections, show the selected one
  document.querySelectorAll('.cat-section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('cat-' + cat);
  if (target) target.classList.add('active');

  // Update tab bar active state
  document.querySelectorAll('.category-tabs button').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === cat);
  });

  // Highlight active category in side menu
  document.querySelectorAll('#mobileMenu a[data-menucat]').forEach(a => {
    a.classList.toggle('active-cat', a.dataset.menucat === cat);
  });

  // Clear search on category switch
  clearSearch();

  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ══════════════════════════════════════════
   REAL-TIME SEARCH
   ══════════════════════════════════════════ */
const searchInput = document.getElementById('mainSearchInput');

function clearSearch() {
  if (searchInput) searchInput.value = '';
  document.body.classList.remove('search-mode');
  document.querySelectorAll('.product-card').forEach(c => c.classList.remove('hidden-by-search'));
  document.querySelectorAll('.cat-section').forEach(s => {
    s.style.display = '';
  });
  const noResults = document.getElementById('noResults');
  if (noResults) noResults.style.display = 'none';
}

if (searchInput) {
  searchInput.addEventListener('input', function () {
    const query = this.value.trim().toLowerCase();

    if (!query) {
      clearSearch();
      return;
    }

    document.body.classList.add('search-mode');

    let visibleCount = 0;

    document.querySelectorAll('.product-card').forEach(card => {
      const title = (card.querySelector('.product-title')?.textContent || '').toLowerCase();
      const cat   = (card.querySelector('.product-category')?.textContent || '').toLowerCase();
      const matches = title.includes(query) || cat.includes(query);
      card.classList.toggle('hidden-by-search', !matches);
      if (matches) visibleCount++;
    });

    // Hide sections that have no visible cards
    document.querySelectorAll('.cat-section').forEach(section => {
      const visible = section.querySelectorAll('.product-card:not(.hidden-by-search)').length;
      section.style.display = visible > 0 ? 'block' : 'none';
    });

    const noResults = document.getElementById('noResults');
    if (noResults) noResults.style.display = visibleCount === 0 ? 'block' : 'none';
  });

  // Clear search on Escape key
  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      clearSearch();
      this.blur();
      switchCat('mexico');
    }
  });
}

/* ══════════════════════════════════════════
   PRODUCT DETAIL VIEW
   ══════════════════════════════════════════ */
function openDetail(id) {
  const p = PRODUCTS[id];
  if (!p) return;

  document.getElementById('detailCat').textContent   = p.cat;
  document.getElementById('detailTitle').textContent = p.title;
  document.getElementById('detailDesc').textContent  = p.desc;
  document.getElementById('detailPrice').textContent = p.price;

  // Main image
  const mainImg = document.getElementById('detailMainImg');
  mainImg.src = p.images[0];
  mainImg.alt = p.title;

  // Thumbnail strip
  const thumbsEl = document.getElementById('detailThumbs');
  thumbsEl.innerHTML = '';

  p.images.forEach((src, i) => {
    const div = document.createElement('div');
    div.className = 'detail-thumb' + (i === 0 ? ' active' : '');

    const img = document.createElement('img');
    img.src     = src;
    img.alt     = `${p.title} vista ${i + 1}`;
    img.loading = 'lazy';
    div.appendChild(img);

    div.addEventListener('click', () => {
      mainImg.src = src;
      thumbsEl.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
      div.classList.add('active');
    });

    thumbsEl.appendChild(div);
  });

  const view = document.getElementById('detailView');
  view.classList.add('open');
  view.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeDetail() {
  document.getElementById('detailView').classList.remove('open');
  document.body.style.overflow = '';
}

function showCatalog() {
  closeDetail();
  const hero = document.getElementById('heroSection');
  if (hero) hero.scrollIntoView({ behavior: 'smooth' });
}

/* ══════════════════════════════════════════
   SIDE PANEL MENU
   ══════════════════════════════════════════ */
let menuOpen = false;

function toggleMobileMenu() {
  menuOpen = !menuOpen;
  document.getElementById('mobileMenu').classList.toggle('open', menuOpen);
  document.getElementById('menuOverlay').classList.toggle('open', menuOpen);
  document.getElementById('hamburgerIcon').className = menuOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';
  document.body.style.overflow = menuOpen ? 'hidden' : '';
}

function closeMobileMenu() {
  menuOpen = false;
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('menuOverlay').classList.remove('open');
  document.getElementById('hamburgerIcon').className = 'fa-solid fa-bars';
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════
   PREVENT PAGE JUMP ON FOOTER LINKS
   ══════════════════════════════════════════ */
document.querySelectorAll('.footer-col a').forEach(el => {
  if (el.getAttribute('href') === '#') {
    el.addEventListener('click', e => e.preventDefault());
  }
});
