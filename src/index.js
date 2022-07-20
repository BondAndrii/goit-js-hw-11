// Завдання:
// 1. настроїти HTTP-запит на бекенд на Піксабей
// 2. налаштувати вивід по 40 картинок за раз
// 3. зробити функцію, що буде додавати в HTML прийдешні картинки
// 4. налаштувати кнопку Load More
// 5. зчитати введене в інпут
// ------Далі по бажанню--------
// 1. Застосувати бібліотеку simplelightbox
// 2. Прокручування сторінки

import loader from './loadImages';
import Notiflix, { Notify } from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import addToGallery from "./addGallery";

const galeryRef = document.querySelector(".gallery");
const searchForm = document.querySelector("#search-form");
const loadMoreBtn = document.querySelector(".load-more");
const lightbox = new SimpleLightbox(".gallery a");
loadMoreBtn.classList.add('is-hiden');

// console.log(galeryRef);
searchForm.addEventListener('submit', loadImages);
loadMoreBtn.addEventListener('click', loadMore);
async function loadMore() {
    console.log("Page= ", loader.page);
    try
    {
        const answer = await loader.fetchImages();
        galeryRef.innerHTML += addToGallery(answer.hits);
        lightbox.refresh()
        console.log(answer);
        console.log(answer.hits);
        if (!answer.total) {
            Notify.failure("Sorry, there are no images matching your search query. Please try again.")
            return
        }
        if (loader.page === 2) {
            Notify.success(`Hooray! We found ${answer.totalHits} images.`)
        } else {
            const { height: cardHeight } = document
  .querySelector(".gallery")
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * 1.6,
  behavior: "smooth",
});
        }
        loadMoreBtn.classList.remove('is-hiden');
        if (loader.page > Math.floor(answer.totalHits / 40) + 1) {
            loadMoreBtn.classList.add('is-hiden');
            Notify.info("We're sorry, but you've reached the end of search results.");
        }       
    }
    catch(error) {
        Notify.failure(error)        
    }
}
async function  loadImages(event) {
    event.preventDefault();
    const findWorld = searchForm.searchQuery.value.trim();
    loader.world = findWorld;
    loader.page = 1;
    galeryRef.innerHTML = "";
    loadMore()
    // console.log("findWorld", findWorld);
    // console.log("searchForm", searchForm);
   
    // console.log("Page= ", loader.page);
    // const answer = await loader.fetchImages();
    // // if (answer.totalHits > 40) {
    // //     loadMoreBtn.disabled = false;
    // // }
    // console.log(answer);
}
