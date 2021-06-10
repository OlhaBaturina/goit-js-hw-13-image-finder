import './sass/main.scss';
import _ from 'lodash';
import { errorAlert, warningAlert } from './js/notice';
import PixabayApiService from './js/apiService';
import scroll from './js/scrollIntoView';
import LoadMoreBtn from './js/load-more-btn';
import imageCard from './templates/image-card.hbs';

const renderRef = document.querySelector('.js-render');
const inputRef = document.querySelector('.search-form');

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});
const newPixabayApi = new PixabayApiService();

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
  scroll();
}

function clearImagesMarkur() {
  renderRef.innerHTML = '';
}
