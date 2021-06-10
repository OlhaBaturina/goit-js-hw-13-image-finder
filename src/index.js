import './sass/main.scss';
import _ from 'lodash';
import { errorAlert, warningAlert } from './js/notice';
import PixabayApiService from './js/apiService';
import imageCard from './templates/image-card.hbs';

const renderRef = document.querySelector('.js-render');
const inputRef = document.querySelector('.search-form');
const loadMoreBtnRefRef = document.querySelector('.load-more_button');
const serchBtnRef = document.querySelector('.search_button');

const newPixabayApi = new PixabayApiService();

inputRef.addEventListener('submit', onSearch);
loadMoreBtnRefRef.addEventListener('click', onLoadMore);

function onSearch(evt) {
  evt.preventDefault();
  clearImagesMarkur();
  newPixabayApi.query = evt.currentTarget.elements.query.value;

  newPixabayApi.resetPage();
  newPixabayApi.fetchImage().then(renderImageMarkup);
}

function onLoadMore() {
  newPixabayApi.fetchImage().then(renderImageMarkup);
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
