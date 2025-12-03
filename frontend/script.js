const CONFIG = {
    apiUrl: 'https://api.spacecinema.kz',
    defaultLanguage: 'kk',
    autoSlideInterval: 5000,
    assetsPath: 'assets/'
};

// Данные фильмов
const MOVIES = [
    {
        id: 1,
        title: "ДЮНА: 2-БӨЛІМ",
        originalTitle: "Dune: Part Two",
        duration: "2сағ 46мин",
        rating: "8.9",
        year: 2024,
        genre: ["Фантастика", "Әрекет", "Драма"],
        badge: "IMAX",
        image: "assets/dune2.jpg",
        trailerId: "42RV2e1GyzM",
        description: "Фримендердің соғысы жаңа деңгейге көтеріледі. Пол Атрейдес жаңа планеталарды бағындыруға тырысады.",
        director: "Дени Вильнёв",
        cast: ["Тимоти Шаламе", "Зендея", "Ребекка Фергюсон"],
        showtimes: ["10:00", "14:00", "18:00", "22:00"],
        price: 2500,
        ageRating: "12+",
        type: "now"
    },
    {
        id: 2,
        title: "ОНО",
        originalTitle: "It",
        duration: "2сағ 15мин",
        rating: "7.3",
        year: 2017,
        genre: ["Ужасы", "Триллер", "Драма"],
        badge: "",
        image: "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg",
        trailerId: "FnCdOQsX5kc",
        description: "Дерби қаласында балалар жоғала бастайды. Балалар топырықпен күресуге шешім қабылдайды.",
        director: "Анди Мускетти",
        cast: ["Билл Скарсгард", "Джэйден Мартелл", "София Лиллис"],
        showtimes: ["11:00", "15:00", "19:00", "23:00"],
        price: 2200,
        ageRating: "18+",
        type: "now"
    },
    {
        id: 3,
        title: "ИЛЛЮЗИЯ ОБМАНА",
        originalTitle: "Now You See Me",
        duration: "1сағ 56мин",
        rating: "7.2",
        year: 2013,
        genre: ["Криминал", "Триллер", "Детектив"],
        badge: "",
        image: "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_.jpg",
        trailerId: "4OtM9j2lcUA",
        description: "Төрт сиқыршы ФБР мен Интерполды алдап, банктерді тонайды. Олардың сыры қандай?",
        director: "Луи Летерье",
        cast: ["Джесси Айзенберг", "Марк Руффало", "Вуди Харрельсон"],
        showtimes: ["12:00", "16:00", "20:00"],
        price: 2000,
        ageRating: "12+",
        type: "now"
    },
    {
        id: 4,
        title: "АУРУ",
        originalTitle: "Contagion",
        duration: "1сағ 46мин",
        rating: "6.8",
        year: 2011,
        genre: ["Драма", "Триллер"],
        badge: "",
        image: "assets/auru.jpg",
        trailerId: "4sYSyuuLk5g",
        description: "Азамат пен Таншолпан қарызға батып кеткен жас отбасы. Үмітсіздікке бой алдырған сәтте Азамат айла ойлап табады: әйелін өлім аузындағы науқас етіп көрсетіп, «емге» ақша жинау.",
        director: "Стивен Содерберг",
        cast: ["Мэтт Дэймон", "Кейт Уинслет", "Джуда Лоу"],
        showtimes: ["13:00", "17:00", "21:00"],
        price: 1900,
        ageRating: "21+",
        type: "now"
    },
    {
        id: 5,
        title: "ЗВЕРОПОЛИС 2",
        originalTitle: "Zootopia 2",
        duration: "1сағ 48мин",
        rating: "8.0",
        year: 2025,
        genre: ["Мультфильм", "Комедия", "Әрекет"],
        badge: "3D",
        image: "assets/ZOO.jpg",
        trailerId: "jWM0ct-OLsM",
        description: "Disney-дің «Аңдар шаһары 2» анимациялық фильмінде детективтер Жуди Хоппс пен Ник Уайлд жұмбақ рептилияның шырғалаң ізіне түседі. Ол рептилия түрлі жануарға пана болған Аңдар шаһарына келіп, бүкіл қаланың астан-кестенін шығарады. Бұл істі ашу үшін ақкөңіл қоян Жуди мен айлакер түлкі Ник қаланың мүлде жаңа аудандарында бүркемеленіп жұмыс істеуге мәжбүр.",
        director: "Байрон Ховард",
        cast: ["Джиннифер Гудвин", "Джейсон Бейтман"],
        showtimes: ["10:30", "14:30", "18:30"],
        price: 1800,
        ageRating: "0+",
        type: "soon"
    },
    {
        id: 6,
        title: "100 МЕТРОВКА",
        originalTitle: "100 Meters",
        duration: "1сағ 48мин",
        rating: "7.1",
        year: 2016,
        genre: ["Аниме", "Спорттық"],
        badge: "",
        image: "assets/100M.jpg",
        trailerId: "tGSUjuSBt1A",
        description: "Школьник Тогаси — талантливый спринтер, которому с детства не было равных в беге на 100 метров. Однажды в его школу переводится Комия — бегун с железной волей, но которому не хватает техники. Тогаси начинает обучать Комию, и их дружба постепенно превращается в соперничество. Спустя годы они вновь встречаются на треке, чтобы выяснить, кто же действительно быстрее.",
        director: "Марсель Баррена",
        cast: ["Дэни Ровира", "Александра Хименес"],
        showtimes: ["11:30", "15:30", "19:30"],
        price: 2100,
        ageRating: "12+",
        type: "now"
    },
    {
        id: 7,
        title: "ИНТЕРСТЕЛЛАР",
        originalTitle: "Interstellar",
        duration: "2сағ 49мин",
        rating: "8.6",
        year: 2014,
        genre: ["Фантастика", "Драма", "Әрекет"],
        badge: "IMAX",
        image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        trailerId: "zSWdZVtXT7E",
        description: "Жер өмір үшін жарамсыз болған кезде, астронавттар жаңа планеталарды іздейді.",
        director: "Кристофер Нолан",
        cast: ["Мэттью Макконахи", "Энн Хэтэуэй", "Джессика Честейн"],
        showtimes: ["12:00", "16:00", "20:00", "00:00"],
        price: 2800,
        ageRating: "12+",
        type: "now"
    },
    {
        id: 8,
        title: "ДЖЕКПОТ",
        originalTitle: "Jackpot",
        duration: "1сағ 35мин",
        rating: "6.5",
        year: 2023,
        genre: ["Боевик", "Драма"],
        badge: "",
        image: "assets/Jek-Pot.jpg",
        trailerId: "Lk2oDvoonUc",
        description: "Кедей жігіт лотСуперагент Сил и команда охотятся на мексиканский картель по обе стороны границы. Преступники отвечают им взаимностью — палят из всех стволов. Неожиданно в игру вступает третья сторона. Кто-то дерзко грабит склады картеля. За несколько дней исчезают миллионы долларов. Но деньги не исчезают бесследно. Неизвестный открывает в банке счет и начинает раздавать награбленное всем нуждающимся. Теперь его жизнь зависит от того, кто найдет его первым — спецы или головорезы картеля.ереяда үлкен соманы ұтып алады, бірақ оны сақтау оңай емес.",
        director: "Майкл Довз",
        cast: ["Адам Девлин", "Джулианна Гилл"],
        showtimes: ["13:30", "17:30", "21:30"],
        price: 1900,
        ageRating: "16+",
        type: "now"
    },
    {
        id: 9,
        title: "ЧЕЛОВЕК-БЕНЗОПИЛА",
        originalTitle: "Chainsaw Man",
        duration: "2сағ 10мин",
        rating: "8.2",
        year: 2024,
        genre: ["Аниме", "Әрекет", "Қорқынышты"],
        badge: "",
        image: "assets/chainsawMan.jpg",
        trailerId: "QzftTLmS8cM",
        description: "Денджи - қайғылы өмір сүретін жас жігіт. Ол шайтандарды аулаушы болады.",
        director: "Рю Накаям",
        cast: ["Кикито Мия", "Томори Кусиро"],
        showtimes: ["14:00", "18:00", "22:00"],
        price: 2300,
        ageRating: "18+",
        type: "now"
    },
    {
        id: 10,
        title: "МАРСИАНИН",
        originalTitle: "The Martian",
        duration: "2сағ 24мин",
        rating: "8.0",
        year: 2015,
        genre: ["Фантастика", "Драма", "Әрекет"],
        badge: "4DX",
        image: "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_.jpg",
        trailerId: "ej3ioOneTy8",
        description: "Марста жалғыз қалған астронавт өмір сүру үшін керемет шешімдер табуы керек.",
        director: "Ридли Скотт",
        cast: ["Мэтт Дэймон", "Джессика Честейн", "Кристен Уиг"],
        showtimes: ["15:00", "19:00", "23:00"],
        price: 2600,
        ageRating: "12+",
        type: "now"
    }
];

// СКОРО НА ЭКРАНАХ
const COMING_SOON = [
    {
        id: 11,
        title: "ХИЩНИК: НОВАЯ ДОБЫЧА",
        originalTitle: "Prey",
        duration: "1сағ 40мин",
        rating: "7.2",
        year: 2025,
        genre: ["Әрекет", "Фантастика", "Триллер"],
        badge: "",
        image: "assets/predator.jpg",
        trailerId: "wZ7LytagKlc",
        description: "Жаңа хищник жауынгерлерді аулау үшін басқа планетаға келеді.",
        director: "Дэн Трахтенберг",
        cast: ["Эмбер Мидфандер", "Дэйн Дильего"],
        releaseDate: "15 Наурыз 2025",
        type: "soon"
    },
    {
        id: 12,
        title: "MINECRAFT: ФИЛЬМ",
        originalTitle: "Minecraft: The Movie",
        duration: "2сағ 00мин",
        rating: "7.5",
        year: 2025,
        genre: ["Фантастика", "Әрекет", "Мультфильм"],
        badge: "3D",
        image: "assets/minecraft.jpg",
        trailerId: "7TavVZMewpY",
        description: "Стив пен Алекс жаңа әлемде шынайы болу үшін күресуге тырысады.",
        director: "Питер Соллетт",
        cast: ["Джейсон Момоа", "Эмма Майерс"],
        releaseDate: "4 Сәуір 2025",
        type: "soon"
    },
    {
        id: 13,
        title: "Бизнес по-Казахский",
        originalTitle: "Business in Kazakhstan",
        duration: "1сағ 55мин",
        rating: "7.8",
        year: 2025,
        genre: ["Комедия", "Драма", "Әлемдік"],
        badge: "",
        image: "assets/busines.jpg",
        trailerId: "dQw4w9WgXcQ",
        description: "Казахские бизнесы открываются во всем мире, сталкиваясь с культурными различиями и забавными ситуациями.",
        director: "Әлішер Үстемов",
        cast: ["Берік Айтжанов", "Самал Еслямова"],
        releaseDate: "20 Наурыз 2025",
        type: "soon"
    },
    {
        id: 14,
        title: "МАРСИАНИН 2",
        originalTitle: "The Martian 2",
        duration: "2сағ 30мин",
        rating: "8.1",
        year: 2025,
        genre: ["Фантастика", "Драма", "Әрекет"],
        badge: "IMAX",
        image: "assets/marsianin.jpg",
        trailerId: "Ue4PCI0NamI",
        description: "Марк Уотни Марсқа қайта оралады, бірақ жаңа қауіптер оны күтеді.",
        director: "Ридли Скотт",
        cast: ["Мэтт Дэймон", "Джессика Честейн"],
        releaseDate: "10 Мамыр 2025",
        type: "soon"
    }
];

// Данные кинотеатров
const CINEMAS = [
    {
        id: 1,
        name: "SPACE CINEMA GALAXY",
        city: "Астана",
        address: "Дүниежүзілік көшесі, 15",
        features: ["IMAX", "4DX", "Dolby Atmos", "VR Zone", "Premium Lounge"],
        image: "https://via.placeholder.com/400x250/1A2A3A/00E5E8?text=SPACE+GALAXY"
    },
    {
        id: 2,
        name: "SPACE CINEMA NEBULA",
        city: "Алматы",
        address: "Абай даңғылы, 32",
        features: ["IMAX", "4DX", "ScreenX", "Kids Zone"],
        image: "https://via.placeholder.com/400x250/1A2A3A/8A2BE2?text=SPACE+NEBULA"
    },
    {
        id: 3,
        name: "SPACE CINEMA ORBIT",
        city: "Шымкент",
        address: "Тауелсіздік даңғылы, 45",
        features: ["Dolby Atmos", "3D", "VIP Halls"],
        image: "https://via.placeholder.com/400x250/1A2A3A/FF6B35?text=SPACE+ORBIT"
    }
];

const GENRES = [
    "Аниме", "Биография", "Боевик", "Военный", "Детектив", 
    "Детский", "Для взрослых", "Документальный", "Драма", 
    "История", "Комедия", "Короткометражка", "Криминал", 
    "Мелодрама", "Музыка", "Мультфильм", "Мюзикл", 
    "Приключения", "Семейный", "Триллер", "Ужасы", "Фантастика"
];

// Глобальные переменные
let currentSlide = 0;
let slideInterval;
let selectedSeats = [];
let currentUser = null;

// ====================
// ОСНОВНЫЕ ФУНКЦИИ
// ====================

// Уведомления
function showNotification(message, type = 'info') {
    const oldNotification = document.querySelector('.notification');
    if (oldNotification) {
        oldNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 5000);
}

// Плавная прокрутка
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 SPACE CINEMA - Ғарыштық кино сайты іске қосылды!');
    
    // Проверяем авторизацию
    const userData = localStorage.getItem('spaceUser');
    if (userData) {
        currentUser = JSON.parse(userData);
        updateUserInterface();
    }
    
    // Инициализация компонентов
    initSlider();
    initMovies();
    initCinemas();
    initModals();
    initSearch();
    initMobileMenu();
    initSmoothScroll();
    initQuickBooking();
    initShowtimes();
    initGenres();
    initComingSoon();
});

// ====================
// СЛАЙДЕР ГЕРОЯ
// ====================
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if (slides.length === 0) return;
    
    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }
    
    function prevSlide() {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
    }
    
    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = n;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, CONFIG.autoSlideInterval);
    }
    
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }
    
    // События для кнопок
    if (prevBtn) prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });
    
    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });
    
    // События для точек
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            stopAutoSlide();
            startAutoSlide();
        });
    });
    
    // Пауза при наведении
    const slider = document.querySelector('.hero-slider');
    if (slider) {
        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);
    }
    
    // Запуск слайдера
    startAutoSlide();
}

// ====================
// ФИЛЬМЫ
// ====================
function initMovies() {
    const moviesContainer = document.querySelector('.movies-grid');
    if (!moviesContainer) return;
    
    // Скрываем статические фильмы
    const staticMovies = moviesContainer.querySelectorAll('.movie-card:not([data-dynamic])');
    staticMovies.forEach(movie => {
        movie.style.display = 'none';
    });
    
    // Добавляем фильмы
    const currentMovies = MOVIES.filter(movie => movie.type === 'now');
    currentMovies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        moviesContainer.innerHTML += movieCard;
    });
    
    addMovieEventListeners();
}

function createMovieCard(movie) {
    const genres = movie.genre.map(g => `<span>${g}</span>`).join('');
    
    return `
        <div class="movie-card" data-dynamic="true">
            <div class="movie-poster">
                <img src="${movie.image}" alt="${movie.title}" 
                     onerror="this.onerror=null; this.src='https://via.placeholder.com/300x450/0A0E17/00E5E8?text=${encodeURIComponent(movie.title)}';">
                ${movie.badge ? `<div class="movie-badge">${movie.badge}</div>` : ''}
                <div class="movie-overlay">
                    <button class="btn-quick-view" data-movie="${movie.id}">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <div class="movie-meta">
                    <span><i class="fas fa-clock"></i> ${movie.duration}</span>
                    <span><i class="fas fa-star"></i> ${movie.rating}/10</span>
                </div>
                <div class="movie-genre">
                    ${genres}
                </div>
                <button class="btn-buy" data-movie="${movie.id}">
                    <i class="fas fa-ticket-alt"></i> БИЛЕТ САТЫП АЛУ
                </button>
            </div>
        </div>
    `;
}

function addMovieEventListeners() {
    document.querySelectorAll('.btn-buy[data-movie]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const movieId = this.getAttribute('data-movie');
            const movie = MOVIES.find(m => m.id == movieId);
            
            if (movie) {
                showBookingModal(movie);
            }
        });
    });
    
    document.querySelectorAll('.btn-quick-view[data-movie]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const movieId = this.getAttribute('data-movie');
            const movie = MOVIES.find(m => m.id == movieId);
            
            if (movie) {
                showMovieQuickView(movie);
            }
        });
    });
}

// Быстрый просмотр фильма
function showMovieQuickView(movie) {
    const modal = document.createElement('div');
    modal.className = 'modal quick-view-modal';
    modal.id = 'quickViewModal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal">&times;</button>
            <div class="quick-view-content">
                <div class="quick-view-left">
                    <img src="${movie.image}" alt="${movie.title}"
                         onerror="this.onerror=null; this.src='https://via.placeholder.com/300x450/0A0E17/00E5E8?text=${encodeURIComponent(movie.title)}';">
                    <div class="movie-badge">${movie.badge}</div>
                </div>
                <div class="quick-view-right">
                    <h2>${movie.title}</h2>
                    <div class="movie-details">
                        <div class="detail-item">
                            <i class="fas fa-clock"></i>
                            <span>${movie.duration}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-star"></i>
                            <span>${movie.rating}/10</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-tag"></i>
                            <span>${movie.genre.join(', ')}</span>
                        </div>
                    </div>
                    <p class="movie-description">${movie.description}</p>
                    
                    <div class="showtimes">
                        <h3><i class="fas fa-clock"></i> Сеанс уақыттары</h3>
                        <div class="time-slots">
                            ${movie.showtimes.map(time => `
                                <button class="time-slot" data-time="${time}">
                                    ${time}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="quick-view-actions">
                        <button class="btn-trailer" onclick="showTrailer('${movie.trailerId}')">
                            <i class="fas fa-play"></i> Трейлер
                        </button>
                        <button class="btn-booking" onclick="showBookingModalById(${movie.id})">
                            <i class="fas fa-ticket-alt"></i> Брондау
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function showTrailer(trailerId) {
    const modal = document.getElementById('trailerModal');
    if (modal) {
        const container = document.getElementById('trailerContainer');
        container.innerHTML = `
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/${trailerId}" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>
        `;
        modal.style.display = 'flex';
    }
}

function showBookingModalById(movieId) {
    const movie = MOVIES.find(m => m.id == movieId);
    if (movie) {
        const quickViewModal = document.getElementById('quickViewModal');
        if (quickViewModal) quickViewModal.remove();
        showBookingModal(movie);
    }
}

// ====================
// КИНОТЕАТРЫ
// ====================
function initCinemas() {
    const cinemasContainer = document.querySelector('.cinemas-grid');
    if (!cinemasContainer) return;
    
    // Очищаем только если есть карточки
    const existingCards = cinemasContainer.querySelectorAll('.cinema-card');
    if (existingCards.length === 0) {
        CINEMAS.forEach(cinema => {
            const cinemaCard = createCinemaCard(cinema);
            cinemasContainer.innerHTML += cinemaCard;
        });
    }
    
    document.querySelectorAll('.btn-schedule').forEach(btn => {
        btn.addEventListener('click', function() {
            const cinemaCard = this.closest('.cinema-card');
            const cinemaName = cinemaCard.querySelector('h3').textContent;
            alert(`📅 ${cinemaName} кинотеатрының кестесі жақында қолжетімді болады!`);
        });
    });
}

function createCinemaCard(cinema) {
    const features = cinema.features.map(f => `<span class="feature-tag">${f}</span>`).join('');
    
    return `
        <div class="cinema-card">
            <div class="cinema-image">
                <img src="${cinema.image}" alt="${cinema.name}">
            </div>
            <div class="cinema-info">
                <h3>${cinema.name}</h3>
                <p class="cinema-address">
                    <i class="fas fa-location-dot"></i> ${cinema.city}, ${cinema.address}
                </p>
                <div class="cinema-features">
                    ${features}
                </div>
                <div class="cinema-actions">
                    <button class="btn-schedule">
                        <i class="fas fa-calendar"></i> Кесте
                    </button>
                    <button class="btn-directions">
                        <i class="fas fa-route"></i> Жол
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ====================
// БЫСТРОЕ БРОНИРОВАНИЕ
// ====================
function initQuickBooking() {
    const form = document.getElementById('quickBookingForm');
    const movieSelect = document.getElementById('quickMovie');
    const cinemaSelect = document.getElementById('quickCinema');
    const dateInput = document.getElementById('quickDate');
    const timeSelect = document.getElementById('quickTime');
    
    if (movieSelect) {
        movieSelect.innerHTML = '<option value="">Фильм таңдаңыз</option>';
        MOVIES.forEach(movie => {
            const option = document.createElement('option');
            option.value = movie.id;
            option.textContent = `${movie.title} (${movie.year})`;
            movieSelect.appendChild(option);
        });
    }
    
    if (cinemaSelect) {
        cinemaSelect.innerHTML = '<option value="">Кинотеатр таңдаңыз</option>';
        CINEMAS.forEach(cinema => {
            const option = document.createElement('option');
            option.value = cinema.id;
            option.textContent = `${cinema.name} - ${cinema.city}`;
            cinemaSelect.appendChild(option);
        });
    }
    
    if (timeSelect) {
        timeSelect.innerHTML = '<option value="">Уақыт таңдаңыз</option>';
        const times = ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '18:00', '19:00', '20:00', '22:00', '23:00'];
        times.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        });
    }
    
    if (dateInput) {
        const today = new Date();
        dateInput.min = today.toISOString().split('T')[0];
        
        const maxDate = new Date();
        maxDate.setDate(today.getDate() + 7);
        dateInput.max = maxDate.toISOString().split('T')[0];
        
        dateInput.value = today.toISOString().split('T')[0];
    }
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const movieId = movieSelect.value;
            const cinemaId = cinemaSelect.value;
            const date = dateInput.value;
            const time = timeSelect.value;
            
            if (!movieId || !cinemaId || !date || !time) {
                showNotification('Барлық өрістерді толтырыңыз!', 'error');
                return;
            }
            
            const movie = MOVIES.find(m => m.id == movieId);
            const cinema = CINEMAS.find(c => c.id == cinemaId);
            
            if (!movie || !cinema) {
                showNotification('Қате пайда болды', 'error');
                return;
            }
            
            const showtime = {
                id: Date.now(),
                movie: movie,
                cinema: cinema,
                date: formatDate(date),
                time: time,
                hall: getRandomHall(),
                price: movie.price
            };
            
            localStorage.setItem('selectedShowtime', JSON.stringify(showtime));
            showSeatSelectionForMovie(movie, showtime);
        });
    }
}

function getRandomHall() {
    const halls = ['A', 'B', 'C', 'D'];
    return halls[Math.floor(Math.random() * halls.length)];
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return date.toLocaleDateString('kk-KZ', options);
}

// ====================
// ВЫБОР МЕСТ
// ====================
function showSeatSelectionForMovie(movie, showtime) {
    const modal = document.createElement('div');
    modal.className = 'modal seat-selection-modal';
    modal.id = 'seatSelectionModal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal">&times;</button>
            <h2><i class="fas fa-chair"></i> ОРЫН ТАНДАУ</h2>
            
            <div class="showtime-info">
                <div class="movie-mini-info">
                    <img src="${movie.image}" alt="${movie.title}" width="60"
                         onerror="this.onerror=null; this.src='https://via.placeholder.com/60x90/0A0E17/00E5E8?text=MOVIE';">
                    <div>
                        <h4>${movie.title}</h4>
                        <p>${showtime.cinema.name}</p>
                        <p>${showtime.date} | ${showtime.time} | ${showtime.hall} залы</p>
                    </div>
                </div>
            </div>
            
            <div class="screen">🎬 ЭКРАН 🎬</div>
            <div class="seats-map" id="seatsMap">
                ${generateSeatsMap()}
            </div>
            
            <div class="seat-selection-summary">
                <div class="selected-seats-info">
                    <h4>Таңдалған орындар:</h4>
                    <div id="selectedSeatsList"></div>
                    <div class="total-price">
                        Барлығы: <span id="totalSeatsPrice">0</span> ₸
                    </div>
                </div>
                
                <div class="seat-actions">
                    <button class="btn-clear-seats" onclick="clearSelectedSeats()">
                        <i class="fas fa-trash"></i> Тазалау
                    </button>
                    <button class="btn-confirm-seats" onclick="confirmSeatSelection()">
                        <i class="fas fa-check"></i> Растау (${selectedSeats.length} орын)
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
    
    initSeatsSelection();
}

function generateSeatsMap() {
    let html = '<div class="seats-container">';
    
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    
    rows.forEach(row => {
        html += `<div class="seat-row" data-row="${row}">`;
        
        for (let seat = 1; seat <= 12; seat++) {
            const seatId = `${row}${seat}`;
            const isBooked = Math.random() < 0.3;
            const isPremium = row <= 'C';
            const price = isPremium ? 3500 : 2500;
            
            html += `
                <div class="seat ${isBooked ? 'booked' : 'available'} ${isPremium ? 'premium' : 'standard'}"
                     data-seat="${seatId}"
                     data-price="${price}"
                     data-row="${row}"
                     data-number="${seat}"
                     onclick="${!isBooked ? `toggleSeatSelection('${seatId}', ${price})` : ''}">
                    ${seat}
                </div>
            `;
        }
        
        html += '</div>';
    });
    
    html += '</div>';
    return html;
}

function toggleSeatSelection(seatId, price) {
    const seatElement = document.querySelector(`[data-seat="${seatId}"]`);
    const index = selectedSeats.findIndex(s => s.id === seatId);
    
    if (index === -1) {
        selectedSeats.push({
            id: seatId,
            price: price,
            row: seatElement.getAttribute('data-row'),
            number: seatElement.getAttribute('data-number')
        });
        seatElement.classList.add('selected');
    } else {
        selectedSeats.splice(index, 1);
        seatElement.classList.remove('selected');
    }
    
    updateSeatsSummary();
}

function updateSeatsSummary() {
    const listElement = document.getElementById('selectedSeatsList');
    const priceElement = document.getElementById('totalSeatsPrice');
    const confirmBtn = document.querySelector('.btn-confirm-seats');
    
    if (listElement && priceElement && confirmBtn) {
        if (selectedSeats.length > 0) {
            listElement.innerHTML = selectedSeats.map(seat => 
                `<span class="seat-badge">${seat.id}</span>`
            ).join('');
        } else {
            listElement.innerHTML = '<p class="no-seats">Орын таңдалмаған</p>';
        }
        
        const total = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
        priceElement.textContent = total.toLocaleString();
        
        confirmBtn.textContent = `Растау (${selectedSeats.length} орын)`;
        confirmBtn.disabled = selectedSeats.length === 0;
    }
}

function clearSelectedSeats() {
    selectedSeats.forEach(seat => {
        const seatElement = document.querySelector(`[data-seat="${seat.id}"]`);
        if (seatElement) {
            seatElement.classList.remove('selected');
        }
    });
    
    selectedSeats = [];
    updateSeatsSummary();
}

function confirmSeatSelection() {
    if (selectedSeats.length === 0) {
        showNotification('Кемінде бір орын таңдаңыз!', 'error');
        return;
    }
    
    const showtimeData = localStorage.getItem('selectedShowtime');
    if (!showtimeData) {
        showNotification('Сеанс таңдалмаған', 'error');
        return;
    }
    
    const showtime = JSON.parse(showtimeData);
    
    const booking = {
        id: 'BK' + Date.now(),
        movie: showtime.movie,
        cinema: showtime.cinema,
        date: showtime.date,
        time: showtime.time,
        hall: showtime.hall,
        seats: selectedSeats,
        total: selectedSeats.reduce((sum, seat) => sum + seat.price, 0),
        status: 'pending',
        createdAt: new Date().toISOString()
    };
    
    saveBooking(booking);
    showPaymentPage(booking);
    
    const seatModal = document.getElementById('seatSelectionModal');
    if (seatModal) seatModal.remove();
}

function saveBooking(booking) {
    let bookings = JSON.parse(localStorage.getItem('userBookings')) || [];
    bookings.push(booking);
    localStorage.setItem('userBookings', JSON.stringify(bookings));
    localStorage.setItem('lastBooking', JSON.stringify(booking));
}

// ====================
// ПЛАТЕЖИ
// ====================
function showPaymentPage(booking) {
    const modal = document.createElement('div');
    modal.className = 'modal payment-modal';
    modal.id = 'paymentModal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal">&times;</button>
            <h2><i class="fas fa-credit-card"></i> ТӨЛЕМ</h2>
            
            <div class="booking-summary-payment">
                <div class="summary-item">
                    <span>Брон нөмірі:</span>
                    <span class="booking-id">${booking.id}</span>
                </div>
                <div class="summary-item">
                    <span>Фильм:</span>
                    <span>${booking.movie.title}</span>
                </div>
                <div class="summary-item">
                    <span>Орындар:</span>
                    <span>${booking.seats.map(s => s.id).join(', ')}</span>
                </div>
                <div class="summary-item total">
                    <span>Төлем сомасы:</span>
                    <span class="total-amount">${booking.total.toLocaleString()} ₸</span>
                </div>
            </div>
            
            <div class="payment-methods">
                <h3>Төлем әдісін таңдаңыз:</h3>
                <div class="method-options">
                    <label class="method-option">
                        <input type="radio" name="paymentMethod" value="card" checked>
                        <div class="method-content">
                            <i class="fas fa-credit-card"></i>
                            <span>Банк картасы</span>
                        </div>
                    </label>
                    
                    <label class="method-option">
                        <input type="radio" name="paymentMethod" value="kaspi">
                        <div class="method-content">
                            <i class="fas fa-mobile-alt"></i>
                            <span>Kaspi QR</span>
                        </div>
                    </label>
                    
                    <label class="method-option">
                        <input type="radio" name="paymentMethod" value="cash">
                        <div class="method-content">
                            <i class="fas fa-money-bill-wave"></i>
                            <span>Қолма-қол ақша</span>
                        </div>
                    </label>
                </div>
            </div>
            
            <div class="card-details" id="cardDetails">
                <div class="form-group">
                    <label>Карта нөмірі</label>
                    <input type="text" placeholder="0000 0000 0000 0000" maxlength="19">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Мерзімі</label>
                        <input type="text" placeholder="MM/YY">
                    </div>
                    <div class="form-group">
                        <label>CVV</label>
                        <input type="password" placeholder="123" maxlength="3">
                    </div>
                </div>
            </div>
            
            <div class="payment-actions">
                <button class="btn-pay" onclick="processPayment('${booking.id}')">
                    <i class="fas fa-lock"></i> ${booking.total.toLocaleString()} ₸ ТӨЛЕУ
                </button>
                <button class="btn-cancel-payment" onclick="cancelPayment()">
                    Бас тарту
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const cardDetails = document.getElementById('cardDetails');
            if (this.value === 'card') {
                cardDetails.style.display = 'block';
            } else {
                cardDetails.style.display = 'none';
            }
        });
    });
}

function processPayment(bookingId) {
    showNotification('Төлем өңделуде...', 'info');
    
    setTimeout(() => {
        let bookings = JSON.parse(localStorage.getItem('userBookings')) || [];
        const bookingIndex = bookings.findIndex(b => b.id === bookingId);
        
        if (bookingIndex !== -1) {
            bookings[bookingIndex].status = 'confirmed';
            bookings[bookingIndex].paidAt = new Date().toISOString();
            localStorage.setItem('userBookings', JSON.stringify(bookings));
            
            const paymentModal = document.getElementById('paymentModal');
            if (paymentModal) paymentModal.remove();
            
            showBookingConfirmation(bookings[bookingIndex]);
        }
    }, 2000);
}

function cancelPayment() {
    const paymentModal = document.getElementById('paymentModal');
    if (paymentModal) paymentModal.remove();
    showNotification('Төлем бас тартылды', 'warning');
}

// ====================
// ПОДТВЕРЖДЕНИЕ БРОНИРОВАНИЯ
// ====================
function showBookingConfirmation(booking) {
    const modal = document.createElement('div');
    modal.className = 'modal confirmation-modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="confirmation-header">
                <i class="fas fa-check-circle"></i>
                <h2>БРОНДАУ СӘТТІ!</h2>
            </div>
            
            <div class="confirmation-details">
                <div class="detail-item">
                    <strong>Брон нөмірі:</strong>
                    <span class="booking-id">${booking.id}</span>
                </div>
                <div class="detail-item">
                    <strong>Фильм:</strong>
                    <span>${booking.movie.title}</span>
                </div>
                <div class="detail-item">
                    <strong>Кинотеатр:</strong>
                    <span>${booking.cinema.name}</span>
                </div>
                <div class="detail-item">
                    <strong>Күн және уақыт:</strong>
                    <span>${booking.date} ${booking.time}</span>
                </div>
                <div class="detail-item">
                    <strong>Орындар:</strong>
                    <span>${booking.seats.map(s => s.id).join(', ')}</span>
                </div>
                <div class="detail-item">
                    <strong>Жалпы сома:</strong>
                    <span class="total-amount">${booking.total.toLocaleString()} ₸</span>
                </div>
            </div>
            
            <div class="confirmation-qr">
                <div class="qr-code">
                    <i class="fas fa-qrcode"></i>
                    <p>Кинотеатрға кіргенде<br>QR-кодты көрсетіңіз</p>
                </div>
            </div>
            
            <div class="confirmation-actions">
                <button class="btn-download-ticket" onclick="downloadTicket('${booking.id}')">
                    <i class="fas fa-download"></i> БИЛЕТТІ ЖҮКТЕУ
                </button>
                <button class="btn-close-confirmation" onclick="this.closest('.modal').remove()">
                    ТАМАМ
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function downloadTicket(bookingId) {
    showNotification('Билет жүктелуде...', 'info');
    
    setTimeout(() => {
        showNotification('Билет сәтті жүктелді! 📥', 'success');
        
        const lastBooking = localStorage.getItem('lastBooking');
        let bookingData;
        if (lastBooking) {
            bookingData = JSON.parse(lastBooking);
        }
        
        const ticketContent = `
            🎟️ SPACE CINEMA БИЛЕТИ 🎟️
            ===========================
            Брон №: ${bookingId}
            Фильм: ${bookingData?.movie?.title || '-'}
            Уақыт: ${bookingData?.date || '-'} ${bookingData?.time || '-'}
            Орындар: ${bookingData?.seats?.map(s => s.id).join(', ') || '-'}
            ===========================
            🚀 ҒАРЫШТЫҚ КИНО ТӘЖІРИБЕСІ 🚀
        `;
        
        const blob = new Blob([ticketContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ticket-${bookingId}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 1000);
}

// ====================
// СЕАНСЫ
// ====================
let currentShowtimeDate = new Date();

function initShowtimes() {
    const cinemaTabsContainer = document.querySelector('.cinema-tabs');
    if (!cinemaTabsContainer) return;
    
    cinemaTabsContainer.innerHTML = '';
    
    CINEMAS.forEach((cinema, index) => {
        const tab = document.createElement('button');
        tab.className = `cinema-tab ${index === 0 ? 'active' : ''}`;
        tab.textContent = cinema.name;
        tab.setAttribute('data-cinema', cinema.id);
        cinemaTabsContainer.appendChild(tab);
    });
    
    cinemaTabsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('cinema-tab')) {
            document.querySelectorAll('.cinema-tab').forEach(t => {
                t.classList.remove('active');
            });
            
            e.target.classList.add('active');
            const cinemaId = e.target.getAttribute('data-cinema');
            loadShowtimesForCinema(cinemaId);
        }
    });
    
    updateShowtimeDateDisplay();
    loadShowtimesForCinema(CINEMAS[0].id);
}

function changeShowtimeDate(days) {
    currentShowtimeDate.setDate(currentShowtimeDate.getDate() + days);
    updateShowtimeDateDisplay();
    loadShowtimesForCinema(getActiveCinemaId());
}

function updateShowtimeDateDisplay() {
    const dateElement = document.getElementById('currentShowtimeDate');
    if (!dateElement) return;
    
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    
    if (currentShowtimeDate.toDateString() === today.toDateString()) {
        dateElement.textContent = 'Бүгін';
    } else if (currentShowtimeDate.toDateString() === tomorrow.toDateString()) {
        dateElement.textContent = 'Ертең';
    } else {
        const options = { weekday: 'long', day: 'numeric', month: 'long' };
        dateElement.textContent = currentShowtimeDate.toLocaleDateString('kk-KZ', options);
    }
}

function getActiveCinemaId() {
    const activeTab = document.querySelector('.cinema-tab.active');
    return activeTab ? activeTab.getAttribute('data-cinema') : CINEMAS[0].id;
}

function loadShowtimesForCinema(cinemaId) {
    const container = document.getElementById('showtimesContainer');
    if (!container) return;
    
    const cinema = CINEMAS.find(c => c.id == cinemaId);
    if (!cinema) return;
    
    container.innerHTML = '';
    
    MOVIES.forEach(movie => {
        const showtimesCard = createShowtimesCard(movie, cinema);
        container.innerHTML += showtimesCard;
    });
}

function createShowtimesCard(movie, cinema) {
    const halls = ['IMAX', '4DX', 'Standard', 'VIP'];
    const times = ['10:00', '12:30', '15:00', '17:30', '20:00', '22:30'];
    
    let hallsHTML = '';
    
    halls.forEach(hall => {
        const hallTimes = getRandomTimes(times, 2, 4);
        const isPremium = hall === 'IMAX' || hall === '4DX' || hall === 'VIP';
        
        hallsHTML += `
            <div class="hall-showtimes">
                <div class="hall-title">
                    <i class="fas fa-door-closed"></i>
                    ${hall} залы
                    ${isPremium ? '<span class="premium-badge">PREMIUM</span>' : ''}
                </div>
                <div class="time-slots-grid">
                    ${hallTimes.map(time => {
                        const isBooked = Math.random() < 0.2;
                        const price = isPremium ? 3500 : movie.price;
                        
                        return `
                            <button class="time-slot-btn ${isBooked ? 'booked' : ''} ${isPremium ? 'premium' : ''}"
                                    data-time="${time}"
                                    data-hall="${hall}"
                                    data-price="${price}"
                                    ${isBooked ? 'disabled title="Брондалған"' : `title="${price} ₸"`}>
                                <i class="fas fa-clock"></i>
                                ${time}
                                ${isPremium ? '<i class="fas fa-crown"></i>' : ''}
                            </button>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    });
    
    return `
        <div class="movie-showtimes-card">
            <div class="movie-showtimes-poster">
                <img src="${movie.image}" alt="${movie.title}"
                     onerror="this.onerror=null; this.src='https://via.placeholder.com/200x300/0A0E17/00E5E8?text=MOVIE';">
                ${movie.badge ? `<div class="movie-badge">${movie.badge}</div>` : ''}
            </div>
            
            <div class="movie-showtimes-info">
                <h3>${movie.title}</h3>
                <div class="movie-showtimes-meta">
                    <span><i class="fas fa-clock"></i> ${movie.duration}</span>
                    <span><i class="fas fa-star"></i> ${movie.rating}/10</span>
                    <span><i class="fas fa-film"></i> ${movie.genre.join(', ')}</span>
                    <span><i class="fas fa-user"></i> ${movie.ageRating}</span>
                </div>
                
                <div class="showtime-halls">
                    ${hallsHTML}
                </div>
            </div>
        </div>
    `;
}

function getRandomTimes(timesArray, min, max) {
    const count = Math.floor(Math.random() * (max - min + 1)) + min;
    const shuffled = [...timesArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function quickBookMovie(movie, cinema, time, hall, price) {
    const showtime = {
        movie: movie,
        cinema: cinema,
        date: formatDate(currentShowtimeDate.toISOString().split('T')[0]),
        time: time,
        hall: hall,
        price: parseInt(price)
    };
    
    localStorage.setItem('selectedShowtime', JSON.stringify(showtime));
    showSeatSelectionForMovie(movie, showtime);
}

// ====================
// ЖАНРЫ
// ====================
function initGenres() {
    const genresContainer = document.querySelector('.genres-filter');
    if (!genresContainer) return;
    
    // Проверяем, есть ли уже кнопки кроме "Барлығы"
    const existingButtons = genresContainer.querySelectorAll('.genre-btn');
    if (existingButtons.length > 1) return;
    
    // Добавляем популярные жанры
    const popularGenres = GENRES.slice(0, 8);
    popularGenres.forEach(genre => {
        const btn = document.createElement('button');
        btn.className = 'genre-btn';
        btn.textContent = genre;
        btn.setAttribute('data-genre', genre.toLowerCase());
        genresContainer.appendChild(btn);
    });
    
    // Добавляем обработчики
    genresContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('genre-btn')) {
            document.querySelectorAll('.genre-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            e.target.classList.add('active');
            const genre = e.target.getAttribute('data-genre');
            filterMoviesByGenre(genre);
        }
    });
}

function filterMoviesByGenre(genre) {
    const moviesContainer = document.querySelector('.movies-grid');
    if (!moviesContainer) return;
    
    const movieCards = moviesContainer.querySelectorAll('.movie-card[data-dynamic]');
    
    if (genre === 'all') {
        movieCards.forEach(card => {
            card.style.display = 'block';
        });
        return;
    }
    
    movieCards.forEach(card => {
        const movieId = card.querySelector('.btn-buy')?.getAttribute('data-movie');
        if (!movieId) return;
        
        const movie = MOVIES.find(m => m.id == movieId);
        if (movie) {
            const hasGenre = movie.genre.some(g => 
                g.toLowerCase().includes(genre.toLowerCase())
            );
            
            card.style.display = hasGenre ? 'block' : 'none';
        }
    });
}

// ====================
// СКОРО В КИНО
// ====================
function initComingSoon() {
    const container = document.getElementById('comingSoonGrid');
    if (!container) return;
    
    container.innerHTML = '';
    
    COMING_SOON.forEach(movie => {
        const movieCard = createComingSoonCard(movie);
        container.innerHTML += movieCard;
    });
    
    document.querySelectorAll('.btn-coming-soon').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const movieId = this.getAttribute('data-movie');
            const movie = COMING_SOON.find(m => m.id == movieId);
            
            if (movie) {
                alert(`🎬 "${movie.title}" жақында көрсетіледі!`);
            }
        });
    });
}

function createComingSoonCard(movie) {
    return `
        <div class="movie-card">
            <div class="movie-poster">
                <img src="${movie.image}" alt="${movie.title}"
                     onerror="this.onerror=null; this.src='https://via.placeholder.com/300x450/0A0E17/8A2BE2?text=COMING+SOON';">
                <div class="movie-badge">ЖАҚЫНДА</div>
            </div>
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <div class="movie-meta">
                    <span><i class="fas fa-clock"></i> ${movie.duration}</span>
                    <span><i class="fas fa-star"></i> ${movie.rating}/10</span>
                </div>
                <div class="movie-genre">
                    ${movie.genre.map(g => `<span>${g}</span>`).join('')}
                </div>
                <p class="release-date">
                    <i class="fas fa-calendar"></i> ${movie.releaseDate}
                </p>
                <button class="btn-buy btn-coming-soon" data-movie="${movie.id}">
                    <i class="fas fa-bell"></i> ЕСКЕРТУ ОРНАТУ
                </button>
            </div>
        </div>
    `;
}

// ====================
// МОДАЛЬНЫЕ ОКНА
// ====================
function initModals() {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const showRegisterBtn = document.getElementById('showRegister');
    const showLoginBtn = document.getElementById('showLogin');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', showAuthModal);
    }
    
    if (showRegisterBtn) {
        showRegisterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.style.display = 'none';
            registerModal.style.display = 'flex';
        });
    }
    
    if (showLoginBtn) {
        showLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            registerModal.style.display = 'none';
            loginModal.style.display = 'flex';
        });
    }
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (email && password) {
                currentUser = {
                    id: 1,
                    name: email.split('@')[0],
                    email: email,
                    phone: '+7 (777) 123-45-67'
                };
                
                localStorage.setItem('spaceUser', JSON.stringify(currentUser));
                showNotification('Сәтті кірдіңіз! 🚀', 'success');
                loginModal.style.display = 'none';
                updateUserInterface();
            } else {
                showNotification('Электрондық пошта мен құпия сөзді толтырыңыз', 'error');
            }
        });
    }
    
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelectorAll('input[type="password"]')[0].value;
            const confirmPassword = this.querySelectorAll('input[type="password"]')[1].value;
            
            if (!name || !email || !password || !confirmPassword) {
                showNotification('Барлық өрістерді толтырыңыз', 'error');
                return;
            }
            
            if (password !== confirmPassword) {
                showNotification('Құпия сөздер сәйкес келмейді', 'error');
                return;
            }
            
            currentUser = {
                id: Date.now(),
                name: name,
                email: email,
                phone: ''
            };
            
            localStorage.setItem('spaceUser', JSON.stringify(currentUser));
            showNotification('Тіркелу сәтті аяқталды! 🎉', 'success');
            registerModal.style.display = 'none';
            updateUserInterface();
        });
    }
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
        
        if (e.target.classList.contains('close-modal')) {
            e.target.closest('.modal').style.display = 'none';
        }
    });
}

function showAuthModal() {
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
        loginModal.style.display = 'flex';
    }
}

function updateUserInterface() {
    const loginBtn = document.querySelector('.btn-login');
    const ticketsBtn = document.querySelector('.btn-tickets');
    
    if (currentUser && loginBtn) {
        loginBtn.innerHTML = `
            <i class="fas fa-user-check"></i>
            <span>${currentUser.name}</span>
        `;
        
        if (ticketsBtn) {
            ticketsBtn.style.display = 'flex';
        }
    }
}

// ====================
// ПОИСК
// ====================
function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const closeSearchBtn = document.getElementById('closeSearchBtn');
    const searchBar = document.getElementById('searchBar');
    
    if (searchBtn && searchBar) {
        searchBtn.addEventListener('click', () => {
            searchBar.style.display = 'block';
            searchBar.querySelector('input').focus();
        });
    }
    
    if (closeSearchBtn && searchBar) {
        closeSearchBtn.addEventListener('click', () => {
            searchBar.style.display = 'none';
        });
    }
    
    const searchInput = searchBar ? searchBar.querySelector('input') : null;
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            
            if (query.length > 2) {
                performSearch(query);
            }
        });
    }
}

function performSearch(query) {
    const foundMovies = MOVIES.filter(movie => 
        movie.title.toLowerCase().includes(query) ||
        movie.genre.some(g => g.toLowerCase().includes(query)) ||
        movie.description.toLowerCase().includes(query)
    );
    
    if (foundMovies.length > 0) {
        showSearchResults(foundMovies);
    }
}

function showSearchResults(movies) {
    const searchBar = document.getElementById('searchBar');
    let resultsDropdown = searchBar.querySelector('.search-results');
    
    if (!resultsDropdown) {
        resultsDropdown = document.createElement('div');
        resultsDropdown.className = 'search-results';
        searchBar.appendChild(resultsDropdown);
    }
    
    resultsDropdown.innerHTML = movies.map(movie => `
        <div class="search-result-item" onclick="selectSearchResult(${movie.id})">
            <img src="${movie.image}" alt="${movie.title}"
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/60x90/0A0E17/00E5E8?text=MOVIE';">
            <div class="result-info">
                <h4>${movie.title}</h4>
                <p>${movie.genre.join(', ')} • ${movie.duration}</p>
            </div>
        </div>
    `).join('');
    
    resultsDropdown.style.display = 'block';
}

function selectSearchResult(movieId) {
    const movie = MOVIES.find(m => m.id == movieId);
    if (movie) {
        document.getElementById('searchBar').style.display = 'none';
        showMovieQuickView(movie);
    }
}

// ====================
// МОБИЛЬНОЕ МЕНЮ
// ====================
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            mobileMenuBtn.innerHTML = navMenu.classList.contains('show') ? 
                '<i class="fas fa-times"></i>' : 
                '<i class="fas fa-bars"></i>';
        });
    }
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
}

// ====================
// БРОНИРОВАНИЕ МОДАЛЬНОЕ ОКНО
// ====================
function showBookingModal(movie) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'bookingModal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal">&times;</button>
            <h2><i class="fas fa-ticket-alt"></i> "${movie.title}" БРОНДАУ</h2>
            
            <div class="booking-details">
                <div class="movie-preview">
                    <img src="${movie.image}" alt="${movie.title}" width="100"
                         onerror="this.onerror=null; this.src='https://via.placeholder.com/100x150/0A0E17/00E5E8?text=MOVIE';">
                    <div>
                        <h4>${movie.title}</h4>
                        <p><i class="fas fa-clock"></i> ${movie.duration}</p>
                        <p><i class="fas fa-user"></i> ${movie.ageRating}</p>
                    </div>
                </div>
                
                <div class="booking-form">
                    <div class="form-group">
                        <label><i class="fas fa-map-marker-alt"></i> Кинотеатр</label>
                        <select id="bookingCinema">
                            <option value="">Кинотеатр таңдаңыз</option>
                            ${CINEMAS.map(cinema => 
                                `<option value="${cinema.id}">${cinema.name} - ${cinema.city}</option>`
                            ).join('')}
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label><i class="fas fa-calendar"></i> Күн</label>
                        <input type="date" id="bookingDate">
                    </div>
                    
                    <div class="form-group">
                        <label><i class="fas fa-clock"></i> Уақыт</label>
                        <select id="bookingTime">
                            <option value="">Уақыт таңдаңыз</option>
                            ${movie.showtimes.map(time => 
                                `<option value="${time}">${time}</option>`
                            ).join('')}
                        </select>
                    </div>
                    
                    <button class="btn-modal" onclick="continueToSeats(${movie.id})">
                        <i class="fas fa-arrow-right"></i> ОРЫН ТАНДАУ
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    const dateInput = modal.querySelector('#bookingDate');
    if (dateInput) {
        const today = new Date();
        dateInput.min = today.toISOString().split('T')[0];
        dateInput.value = today.toISOString().split('T')[0];
    }
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function continueToSeats(movieId) {
    const movie = MOVIES.find(m => m.id == movieId);
    if (!movie) return;
    
    const cinemaId = document.getElementById('bookingCinema').value;
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;
    
    if (!cinemaId || !date || !time) {
        showNotification('Барлық өрістерді толтырыңыз!', 'error');
        return;
    }
    
    const cinema = CINEMAS.find(c => c.id == cinemaId);
    
    const showtime = {
        movie: movie,
        cinema: cinema,
        date: formatDate(date),
        time: time,
        hall: getRandomHall(),
        price: movie.price
    };
    
    localStorage.setItem('selectedShowtime', JSON.stringify(showtime));
    
    const bookingModal = document.getElementById('bookingModal');
    if (bookingModal) bookingModal.remove();
    
    showSeatSelectionForMovie(movie, showtime);
}

// ====================
// АКЦИИ
// ====================
function activateOffer(offerType) {
    const offers = {
        'monday': 'ШЕКСІЗ ДҮЙСЕНБІ',
        'student': 'СТУДЕНТТЕРГЕ 30%',
        'morning': 'ТАҢЕРТЕҢГІ СЕАНС'
    };
    
    if (!currentUser) {
        showNotification('Акцияны қолдану үшін тіркеліңіз!', 'warning');
        showAuthModal();
        return;
    }
    
    const userOffers = JSON.parse(localStorage.getItem('userOffers')) || [];
    userOffers.push({
        type: offerType,
        name: offers[offerType],
        activatedAt: new Date().toISOString()
    });
    localStorage.setItem('userOffers', JSON.stringify(userOffers));
    
    showNotification(`"${offers[offerType]}" акциясы сәтті қосылды! 🎉`, 'success');
}

// ====================
// ИНИЦИАЛИЗАЦИЯ СЕАНСОВ И ВЫБОРА МЕСТ
// ====================
function initSeatsSelection() {
    updateSeatsSummary();
}

// Добавляем обработку кликов на места
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('booked')) {
        const seatId = e.target.getAttribute('data-seat');
        const price = parseInt(e.target.getAttribute('data-price'));
        
        if (seatId && price) {
            toggleSeatSelection(seatId, price);
        }
    }
});

// Инициализируем дату для быстрого бронирования
window.addEventListener('load', function() {
    const quickDate = document.getElementById('quickDate');
    if (quickDate) {
        const today = new Date();
        quickDate.min = today.toISOString().split('T')[0];
        quickDate.value = today.toISOString().split('T')[0];
    }
});

console.log('SPACE CINEMA JS загружен успешно!');