function addToGallery (images) {

    const galeryAddImages = images.map(image => 
       
        `<div class="photo-card">
  <img src="${image.webformatURL}" alt="${image.tag}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b><br/>
      <p>${image.likes}</p>
    </p>
    <p class="info-item">
      <b>Views</b><br/>
      <p>${image.views}</p>
    </p>
    <p class="info-item">
      <b>Comments</b><br/>
      <p>${image.comments}</p>
    </p>
    <p class="info-item">
      <b>Downloads</b><br/>
      <p>${image.downloads}</p>
    </p>
  </div>
</div>`).join('');
  console.log( "html", galeryAddImages);
return galeryAddImages
}



export default addToGallery