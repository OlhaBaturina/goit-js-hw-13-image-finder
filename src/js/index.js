import '../css/style.css';
import _ from 'lodash';
import { errorAlert, warningAlert } from './errors';
import fetchCountries from './apiService';
import imageCard from '../templates/image-card.hbs';
import inputMarkup from '../templates/input.hbs';
import galleryMarkup from '../templates/gallery.hbs';

const renderRef = document.querySelector('.js-render');
const inputRef = document.querySelector('[data-input="searchQuery"]');

inputRef.addEventListener('input', _.debounce(onSearch, 1000));

// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение (смотри пункт 'дополнительно')
// likes - количество лайков
// views - количество просмотров
// comments - количество комментариев
// downloads - количество загрузок
