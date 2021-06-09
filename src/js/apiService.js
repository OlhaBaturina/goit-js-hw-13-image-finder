import { errorAlert } from './errors';

export default class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.pageOfSet = 1;
  }
  fetchImage(searchQuery) {
    console.log(this);
    const API_KEY = '21973303-2099b25a108053c1f3c237a34';
    const URL = `https://pixabay.com/api/?q=${this.searchQuery}&page=${this.pageOfSet}&per_page=12&image_type=photo&orientation=horizontal&key=${API_KEY}`;

    return fetch(URL)
      .then(response => response.json())
      .then(({ hits }) => {
        this.pageOfSet += 1;
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

//     const options = {};
//     return fetch(
//       `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageOfSet}&per_page=12&key=21973303-2099b25a108053c1f3c237a34`,
//     ).then(response => response.json());
//   }
// }

// function
