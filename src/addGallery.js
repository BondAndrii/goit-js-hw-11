function addToGallery (images) {

    const galeryAddImages = images.map(image => 
       
        `<a href="${image.largeImageURL}" class="photo-card">
            <div class="image-place" >
                <img class="image-card" src="${image.webformatURL}" alt="${image.tag}" loading="lazy" />
            </div>  
            <div class="info">
                <p class="info-item">
                  <b>Likes
                  ${image.likes}</b>
                </p>
                <p class="info-item">
                  <b>Views
                  ${image.views}</b>
                </p>
                <p class="info-item">
                  <b>Comments
                  ${image.comments}</b>
                </p>
                <p class="info-item">
                  <b>Downloads
                  ${image.downloads}</b>
                </p>
            </div>
          </a>`).join('');
  // console.log( "html", galeryAddImages);
return galeryAddImages
}
export default addToGallery