import './sass/main.scss';
import _ from 'lodash';
import { errorAlert, warningAlert } from './js/errors';
import PixabayApiService from './js/apiService';
import imageCard from './templates/image-card.hbs';

const renderRef = document.querySelector('.js-render');
const inputRef = document.querySelector('.search-form');
const loadMoreBtnRefRef = document.querySelector('.load-more_button');
const serchBtnRef = document.querySelector('.search_button');

serchBtnRef.addEventListener('submit', onSearch);
// loadMoreBtnRefRef.addEventListener('click', onLoadMore);

const PixabayApi = new PixabayApiService();
console.log(PixabayApi);

function onSearch(evt) {
  evt.preventDefault();

  if (evt.currentTarget.elements.query.value.trim() === '') {
    console.log('Empty query string');
  }

  PixabayApi.query = evt.currentTarget.elements.query.value.trim();

  loadMoreBtnRef.show();
  loadMoreBtnRef.disable();

  PixabayApi.resetPage();

  PixabayApi.fetchArticles().then(items => {
    console.log('Clear container');

    if (items.length === 0) {
      loadMoreBtnRef.hide();
      console.log('Not found');
    }

    // loadMoreBtnRef.enable();
  });
}

function renderImage(images) {
  const cardMarkup = imageCard(images);
  renderRef.innerHTML = cardMarkup;
}
