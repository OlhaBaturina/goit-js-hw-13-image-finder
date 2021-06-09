export default class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImage() {
    const API_KEY = '21973303-2099b25a108053c1f3c237a34';
    const URL = `https://pixabay.com/api/?q=${this.searchQuery}&page=${this.page}&per_page=12&image_type=photo&orientation=horizontal&key=${API_KEY}`;

    return fetch(URL)
      .then(response => response.json())
      .then(data => {
        this.page += 1;
        console.log(data);
        console.log(data.hits);
        return data.hits;
      });
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
