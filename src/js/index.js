import '../css/style.css';
import _ from 'lodash';
import { errorAlert, warningAlert } from './errors';
import fetchImage from './apiService';
import imageCard from '../templates/image-card.hbs';
import galleryMarkup from '../templates/gallery.hbs';

const renderRef = document.querySelector('.js-render');
const inputRef = document.querySelector('.search-form');

inputRef.addEventListener('input', _.debounce(onSearch, 1000));

function onSearch(evt) {
  evt.preventDefault();
  const form = evt.target;
  const searchQuery = form.value.trim();

  console.log(searchQuery);

  fetchImage(searchQuery)
    .then(r => console.log(r))
    .catch(console.error);
}
