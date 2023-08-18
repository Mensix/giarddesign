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

const photosDialog = document.querySelector('#photos-dialog') as HTMLDialogElement
const photos2 = document.querySelectorAll('#photo-100, #photo-101, #photo-102, #photo-103, #photo-104, #photo-105, #photo-106, #photo-107, #photo-108') as NodeListOf<HTMLImageElement>
let currentPhoto2 = 0

photos2.forEach((photo, index) => {
  photo.style.transform = `translateX(${index * 100}%)`
})

const photoPrevious2 = document.querySelector('#photo-previous2') as HTMLButtonElement
photoPrevious2.addEventListener('click', () => {
  currentPhoto2 = handlePhotoSlider(photos2, currentPhoto2, false)
})

const photoNext2 = document.querySelector('#photo-next2') as HTMLButtonElement
photoNext2.addEventListener('click', () => {
  currentPhoto2 = handlePhotoSlider(photos2, currentPhoto2, true)
})
