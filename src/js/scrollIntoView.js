const gallery = document.getElementById('gallery');

export default function scroll() {
  gallery.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}
