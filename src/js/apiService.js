import { errorAlert } from './errors';

let pageOfSet = 1;

export default function fetchImage(searchQuery) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageOfSet}&per_page=12&key=21973303-2099b25a108053c1f3c237a34`,
  ).then(response => response.json());
}
