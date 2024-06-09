import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImages } from './js/pixabay-api.js';
import { imageTamplate } from './js/render-functions.js';

const searchForm = document.querySelector('.search-form');
const imageGallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more');

//--------------------- MAIN ---------------------

let imageName = '';
let page = 0;
let perPage = 0;
let lastInputName = '';

searchForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    imageName = searchForm.inputSearch.value.trim();
    showLoader();

    if (!imageName) {
        return;
    }
    if (lastInputName !== imageName) {
        page = 0;
    }

    imageGallery.innerHTML = '';

    getImages(imageName, (page+=1))
    .then(data => {
        if (data.hits.length === 0) {
            imageGallery.innerHTML = '';
            loadMoreBtnHide();
            return iziToast.error({ ...mainParams, ...errorParams });
        }

        const markup = imageTamplate(data.hits);

        imageGallery.insertAdjacentHTML('afterbegin', markup);
        lightbox.refresh();
        perPage = data.hits.length;
        loadMoreBtnShow();
    })
    .catch(error => {
        iziToast.error({ ...mainParams, message: error.message });
    })
    .finally(() => {
        hideLoader();
        lastInputName = imageName;
    });

    return event.target.reset();
}

//---------------------Load More Button-----------------------

loadMore.addEventListener('click', onLoadMore)

async function onLoadMore() {
    loadMoreBtnHide();
    showLoaderForBtn();

    try {
        const data = await getImages(imageName, (page += 1));
        const markup = imageTamplate(data.hits);
        perPage += data.hits.length;

        if (perPage >= data.totalHits) {
            return iziToast.info({ ...mainParams, ...infoParams });
            hideLoader();
        }

        imageGallery.insertAdjacentHTML('beforeend', markup);
        lightbox.refresh();

        loadMoreBtnShow();

        const card = document.querySelector(".gallery-item");
        const cardHeight = card.getBoundingClientRect().height * 2;
        window.scrollBy({
            left: 0,
            top: cardHeight,
            behavior: "smooth",
        })

    } catch(error) {
        alert(error.message)
    } finally {
        hideLoader();
    }
}

//---------

function loadMoreBtnShow() {
    loadMore.style.display = 'block';
}
function loadMoreBtnHide() {
    loadMore.style.display = 'none';
}

//---------------------Loader-----------------------


function showLoader() {
    loader.style.position = 'absolute';
    loader.style.display = 'inline-block';
}
function showLoaderForBtn() {
    loader.style.position = 'relative';
    loader.style.display = 'inline-block';
}
function hideLoader() {
    loader.style.display = 'none';
}

//------------------iziToast params----------------

const mainParams = {
    position: 'topRight',
    timeout: 1800,
    maxWidth: 300,
    progressBar: false,
}
const errorParams = {
    icon: 'none',
    message: 'Sorry, there are no images matching your search query. Please try again!',
}
const infoParams = {
    message: 'We are sorry, but you have reached the end of search results.',
}

//------------------Simple Light box----------------

let lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250, captionsData: "alt" });