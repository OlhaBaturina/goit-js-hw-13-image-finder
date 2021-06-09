export default class PixabayApiService {
  constructor() {}
  fetchImage(searchQuery) {
    console.log(this);
    // const API_KEY = '21973303-2099b25a108053c1f3c237a34';
    const URL = `https://pixabay.com/api/?q=${searchQuery}&page=1&per_page=12&image_type=photo&orientation=horizontal&key=21973303-2099b25a108053c1f3c237a34`;

    return fetch(URL)
      .then(response => response.json())
      .then(console.log);
  }
}
