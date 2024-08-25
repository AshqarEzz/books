// Initialize views and downloads counts
let bookStats = {
    '3 Array-Based Sequences.pdf': { views: 0, downloads: 0 }
    // Add more books similarly if needed
};

// Language translation data
const translations = {
    en: {
        welcomeMessage: "Welcome to My Website!",
        introText: "Hello! I am [Your Name], a passionate reader and writer. Here you'll find a collection of books that I recommend. Feel free to download or view them directly!",
        bookCollectionTitle: "My Book Collection",
        bookTitle1: "3 Array-Based Sequences",
        bookAuthor1: "Author: [Author Name]",
    },
    ar: {
        welcomeMessage: "مرحبًا بكم في موقعي!",
        introText: "مرحبًا! أنا [اسمك]، قارئ وكاتب شغوف. ستجد هنا مجموعة من الكتب التي أوصي بها. لا تتردد في تنزيلها أو مشاهدتها مباشرة!",
        bookCollectionTitle: "مكتبتي",
        bookTitle1: "تسلسلات قائمة على المصفوفة",
        bookAuthor1: "المؤلف: [اسم المؤلف]",
    }
};

// Current language state
let currentLanguage = 'en';

// Function to switch between languages
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    updateLanguage();
}

function updateLanguage() {
    document.getElementById('welcome-message').textContent = translations[currentLanguage].welcomeMessage;
    document.getElementById('owner-intro').textContent = translations[currentLanguage].introText;
    document.getElementById('book-collection-title').textContent = translations[currentLanguage].bookCollectionTitle;
    document.getElementById('book-title-1').textContent = translations[currentLanguage].bookTitle1;
    document.getElementById('book-author-1').textContent = translations[currentLanguage].bookAuthor1;

    // Apply right-to-left text alignment if the language is Arabic
    if (currentLanguage === 'ar') {
        document.body.style.direction = 'rtl';
    } else {
        document.body.style.direction = 'ltr';
    }
}

function viewBook(filename) {
    // Increment the view count
    bookStats[filename].views += 1;
    document.getElementById(`${filename.split('.')[0].replace(/ /g, '-')}-views`).textContent = bookStats[filename].views;

    // Open the PDF in a new tab
    const viewWindow = window.open(`./${filename}`, '_blank');
    viewWindow.focus();
}

function downloadBook(filename) {
    // Increment the download count
    bookStats[filename].downloads += 1;
    document.getElementById(`${filename.split('.')[0].replace(/ /g, '-')}-downloads`).textContent = bookStats[filename].downloads;

    // Download the PDF in a new tab
    const downloadWindow = window.open(`./${filename}`, '_blank');
    downloadWindow.focus();
}

// Initialize the site with the default language
updateLanguage();
