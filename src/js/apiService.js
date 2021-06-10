import { warningAlert } from './notice';

const API_KEY = '21973303-2099b25a108053c1f3c237a34';
const BASE_URL = 'https://pixabay.com/api';

export default class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImage() {
    const URL = `${BASE_URL}/?q=${this.searchQuery}&page=${this.page}&per_page=12&image_type=photo&orientation=horizontal&key=${API_KEY}`;

    return fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(warningAlert('Please enter a valid request'));
      })
      .then(({ hits }) => {
        this.page += 1;
        if (hits.length === 0) {
          return warningAlert('Please enter a valid request');
        }
        console.log(hits);
        return hits;
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
