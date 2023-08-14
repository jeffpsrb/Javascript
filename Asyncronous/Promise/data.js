// Simpan API key Anda di sini
const apiKey = '997f0e41acf249f9ae502274124a1d09';

const searchInput = document.getElementById('searchInput');
const newsContainer = document.getElementById('newsContainer');

searchInput.addEventListener('keyup', function(event) {
    const searchTerm = event.target.value;
    fetchNews(searchTerm);
});

async function fetchNews(searchTerm) {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`);
        const data = await response.json();

        if (data.articles.length > 0) {
            const newsItems = data.articles.map(article => createNewsItem(article)).join('');
            newsContainer.innerHTML = newsItems;
        } else {
            newsContainer.innerHTML = '<p>Tidak ada berita yang ditemukan.</p>';
        }
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

function createNewsItem(article) {
    return `
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.description}</p>
                <a href="${article.url}" target="_blank" class="btn btn-primary">Baca Selengkapnya</a>
            </div>
        </div>
    `;
}
