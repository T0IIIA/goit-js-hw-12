import axios from 'axios';
export { getImages, perPage };

//----------------------------------
const perPage = 15;

async function getImages(imageName, page) {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: '44085737-801aedd726c9c1496368a8656',
        q: imageName,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage
      })

    const url = await axios(`${BASE_URL}?${params}`);
    return url.data;
}
