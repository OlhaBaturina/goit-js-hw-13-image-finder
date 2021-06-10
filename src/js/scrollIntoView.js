const gallery = document.getElementById('gallery');

const scroll = gallery.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
  inline: 'nearest',
});

export default scroll;
