import http from './httpService';

export function getAllBooks() {
  return http.get('https://obscure-retreat-35072.herokuapp.com/api/books');
}

export function saveBook(title, authors, description, image, link) {
  const object = {
    title: title,
    authors: authors,
    description: description,
    image: image,
    link: link,
  };
  return http.post(
    'https://obscure-retreat-35072.herokuapp.com/api/books',
    object
  );
}

export function getBookById(id) {
  return http.get(
    `https://obscure-retreat-35072.herokuapp.com/api/books/${id}`
  );
}

export function deleteBookById(id) {
  return http.delete(
    `https://obscure-retreat-35072.herokuapp.com/api/books/${id}`
  );
}
