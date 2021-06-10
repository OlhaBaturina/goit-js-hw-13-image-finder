import { warningAlert } from './notice';

const API_KEY = '21973303-2099b25a108053c1f3c237a34';
const URL = 'https://pixabay.com/api';

export default class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImage() {
    return fetch(
      `${URL}/?q=${this.searchQuery}&page=${this.page}&per_page=12&image_type=photo&orientation=horizontal&key=${API_KEY}`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(warningAlert('Please enter a valid request'));
      })
      .then(data => {
        this.page += 1;
        if (data.hits.length === 0) {
          return warningAlert('Please enter a valid request');
        }
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
