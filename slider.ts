function handlePhotoSlider(photos: NodeListOf<HTMLImageElement>, currentPhoto: number, next: boolean) {
  currentPhoto = (next) ? (currentPhoto === photos.length - 1) ? 0 : currentPhoto + 1 : (currentPhoto === 0) ? photos.length - 1 : currentPhoto - 1
  photos.forEach((photo, index) => {
    photo.style.transform = `translateX(${(index - currentPhoto) * 100}%)`
    if (index - currentPhoto === 0)
      photo.style.visibility = 'visible'
  })
  currentPhoto = currentPhoto % photos.length
  return currentPhoto
}

const photos = document.querySelectorAll('#photo-0, #photo-1, #photo-2') as NodeListOf<HTMLImageElement>
let currentPhoto = 0

photos.forEach((photo, index) => {
  photo.style.transform = `translateX(${index * 100}%)`
})

const photoPrevious = document.querySelector('#photo-previous') as HTMLButtonElement
photoPrevious.addEventListener('click', () => {
  currentPhoto = handlePhotoSlider(photos, currentPhoto, false)
})

const photoNext = document.querySelector('#photo-next') as HTMLButtonElement
photoNext.addEventListener('click', () => {
  currentPhoto = handlePhotoSlider(photos, currentPhoto, true)
})
