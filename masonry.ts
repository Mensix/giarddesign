import handlePhotoSlider from './slider'

let currentPhoto = 0
const photosDialog = document.querySelector('#photos-dialog') as HTMLDialogElement
const photosMasonry = document.querySelectorAll('#photo-4-clickable, #photo-5-clickable, #photo-6-clickable, #photo-7-clickable, #photo-8-clickable, #photo-9-clickable, #photo-10-clickable, #photo-11-clickable, #photo-12-clickable') as NodeListOf<HTMLImageElement>
const photos = document.querySelectorAll('#photo-4, #photo-5, #photo-6, #photo-7, #photo-8, #photo-9, #photo-10, #photo-11, #photo-12') as NodeListOf<HTMLImageElement>

photosMasonry.forEach((photo) => {
  photo.addEventListener('click', () => {
    currentPhoto = Number.parseInt(photo.id.split('-')[1]) - 4
    photosDialog.showModal()
    document.body.style.overflow = 'hidden'

    photos.forEach((photo, index) => {
      photo.style.transform = `translateX(${(index - currentPhoto) * 100}%)`
      if (index - currentPhoto === 0)
        photo.style.visibility = 'visible'
    })
  })
})

const photoPrevious = document.querySelector('#photo-previous2') as HTMLButtonElement
photoPrevious.addEventListener('click', () => {
  currentPhoto = handlePhotoSlider(photos, currentPhoto, false)
})

const photoNext = document.querySelector('#photo-next2') as HTMLButtonElement
photoNext.addEventListener('click', () => {
  currentPhoto = handlePhotoSlider(photos, currentPhoto, true)
})
