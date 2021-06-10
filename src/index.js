import './sass/main.scss';
import _ from 'lodash';
import { errorAlert, warningAlert } from './js/notice';
import PixabayApiService from './js/apiService';
import LoadMoreBtn from './js/load-more-btn';
import imageCard from './templates/image-card.hbs';

const renderRef = document.querySelector('.js-render');
const inputRef = document.querySelector('.search-form');
const serchBtnRef = document.querySelector('.search_button');

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});
const newPixabayApi = new PixabayApiService();

console.log(loadMoreBtn);

inputRef.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchingImages);

function onSearch(evt) {
  evt.preventDefault();
  clearImagesMarkur();
  newPixabayApi.query = evt.currentTarget.elements.query.value;

  newPixabayApi.resetPage();
  fetchingImages();
}

function fetchingImages() {
  loadMoreBtn.disable();
  loadMoreBtn.show();
  newPixabayApi.fetchImage().then(image => {
    renderImageMarkup(image);
    loadMoreBtn.enable();
  });
}

function renderImageMarkup(images) {
  renderRef.insertAdjacentHTML('beforeend', imageCard(images));
}

function clearImagesMarkur() {
  renderRef.innerHTML = '';
}

// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение (смотри пункт 'дополнительно')
// likes - количество лайков
// views - количество просмотров
// comments - количество комментариев
// downloads - количество загрузок
