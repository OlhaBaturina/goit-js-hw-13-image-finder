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
  renderRef.innerHTML = '';
  if (searchQuery === '') {
    return errorAlert('Empty request, enter your search data');
  }
  fetchImage(searchQuery).then(renderImage).catch(console.error);
}

function renderImage(images) {
  const cardMarkup = imageCard(images);
  renderRef.innerHTML = cardMarkup;
}

// function renderGalery(images) {
//   const cardMarkup = galleryMarkup(images);
//   renderRef.innerHTML = cardMarkup;
// }

// function markup(arrayCountries) {
//   if (arrayCountries.length === 1) {
//     renderImage(arrayCountries);
//   }

//   if (arrayCountries.length > 1 && arrayCountries.length <= 10) {
//     warningAlert('Please enter a more precise query');
//     renderCountriesList(arrayCountries);
//   }

//   if (arrayCountries.length > 10) {
//     renderRef.innerHTML = '';
//     warningAlert('Too many matches found. Please enter a more specific query!');
//   }
// }
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение (смотри пункт 'дополнительно')
// likes - количество лайков
// views - количество просмотров
// comments - количество комментариев
// downloads - количество загрузок
