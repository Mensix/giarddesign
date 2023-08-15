const dropdownButton = document.querySelector('#offer-dropdown-button') as HTMLButtonElement
const dropdown = document.querySelector('#offer-dropdown') as HTMLUListElement

dropdownButton.addEventListener('click', () => {
  dropdown?.classList.toggle('hidden')
})

const searchInput = document.querySelector('#search-input') as HTMLInputElement

searchInput.addEventListener('input', () => {
  if (searchInput.value.length > 0) {
    searchInput.classList.add('pl-12', 'pr-4')
    searchInput.classList.remove('focus:pl-12', 'focus:pr-4')
  }
  else {
    searchInput.classList.remove('pl-12', 'pr-4')
    searchInput.classList.add('focus:pl-12', 'focus:pr-4')
  }
})

const photos = document.querySelectorAll('#photo-0, #photo-1, #photo-2') as NodeListOf<HTMLImageElement>
let currentPhoto = 0

photos.forEach((photo, index) => {
  photo.style.transform = `translateX(${index * 100}%)`
  if (index > 0)
    photo.style.zIndex = '-1'
})

const photoPrevious = document.querySelector('#photo-previous') as HTMLButtonElement
photoPrevious.addEventListener('click', () => {
  currentPhoto = (currentPhoto === 0) ? photos.length - 1 : currentPhoto - 1
  photos.forEach((photo, index) => {
    photo.style.transform = `translateX(${(index - currentPhoto) * 100}%)`
  })
  currentPhoto = currentPhoto % photos.length
})

const photoNext = document.querySelector('#photo-next') as HTMLButtonElement
photoNext.addEventListener('click', () => {
  currentPhoto = (currentPhoto === photos.length - 1) ? 0 : currentPhoto + 1
  photos.forEach((photo, index) => {
    photo.style.transform = `translateX(${(index - currentPhoto) * 100}%)`
  })
  currentPhoto = currentPhoto % photos.length
})

window.onclick = (event) => {
  if (!(event.target as HTMLElement).matches('#offer-dropdown-button'))
    dropdown?.classList.add('hidden')
}
