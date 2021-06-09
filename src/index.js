import './sass/main.scss';
import _ from 'lodash';
import { errorAlert, warningAlert } from './js/errors';
import PixabayApiService from './js/apiService';
import imageCard from './templates/image-card.hbs';

const renderRef = document.querySelector('.js-render');
const inputRef = document.querySelector('.search-form');
const loadMoreBtnRefRef = document.querySelector('.load-more_button');
const serchBtnRef = document.querySelector('.search_button');

const newPixabayApi = new PixabayApiService();

inputRef.addEventListener('submit', onSearch);
loadMoreBtnRefRef.addEventListener('click', onLoadMore);

let searchQuery = '';

function onSearch(evt) {
  evt.preventDefault();

  searchQuery = evt.currentTarget.elements.query.value;
  console.log(searchQuery);

  newPixabayApi.fetchImage(searchQuery);
}

function onLoadMore() {
  newPixabayApi.fetchImage(searchQuery);
}
