import handlePhotoSlider from './slider'

const photosDialog = document.querySelector<HTMLDialogElement>('#photos-dialog')!
const photosClose = document.querySelector<HTMLButtonElement>('#photos-close')!
const photosMasonry = document.querySelectorAll<HTMLImageElement>('#photo-4-clickable, #photo-5-clickable, #photo-6-clickable, #photo-7-clickable, #photo-8-clickable, #photo-9-clickable, #photo-10-clickable, #photo-11-clickable, #photo-12-clickable')
const photos = document.querySelectorAll<HTMLImageElement>('#photo-4, #photo-5, #photo-6, #photo-7, #photo-8, #photo-9, #photo-10, #photo-11, #photo-12')

let currentPhoto = 0

function showPhotoDialog(photo: HTMLImageElement) {
  currentPhoto = Number.parseInt(photo.id.split('-')[1]) - 4
  photosDialog.showModal()
  document.body.style.overflow = 'hidden'

  photos.forEach((photo, index) => {
    photo.style.transform = `translateX(${(index - currentPhoto) * 100}%)`
    if (index - currentPhoto === 0)
      photo.style.visibility = 'visible'
  })
}

function handlePhotoPrevious() {
  currentPhoto = handlePhotoSlider(photos, currentPhoto, false)
}

function handlePhotoNext() {
  currentPhoto = handlePhotoSlider(photos, currentPhoto, true)
}

function closePhotoDialog() {
  photosDialog.close()
  document.body.style.overflow = ''
}

photosMasonry.forEach((photo) => {
  photo.addEventListener('click', () => {
    showPhotoDialog(photo)
  })
})

const photoPrevious = document.querySelector<HTMLButtonElement>('#photo-previous2')!
photoPrevious.addEventListener('click', handlePhotoPrevious)

const photoNext = document.querySelector<HTMLButtonElement>('#photo-next2')!
photoNext.addEventListener('click', handlePhotoNext)

photosClose.addEventListener('click', closePhotoDialog)