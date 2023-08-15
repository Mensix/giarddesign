const dropdownButton = document.querySelector('#offer-dropdown-button') as HTMLButtonElement
const dropdown = document.querySelector('#offer-dropdown') as HTMLUListElement

dropdownButton.addEventListener('click', () => {
  if (dropdown?.classList.contains('hidden'))
    dropdown?.classList.remove('hidden')
  else
    dropdown?.classList.add('hidden')
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

const photoNext = document.querySelector('#photo-next') as HTMLButtonElement
const photos = document.querySelectorAll('#photo-0, #photo-1, #photo-2') as NodeListOf<HTMLImageElement>
photos.forEach((photo, index) => {
  photo.style.transform = `translateX(${index * 100}%)`
  if (index > 0)
    photo.style.zIndex = '-1'
})

let currentPhoto = 0
photoNext.addEventListener('click', () => {
  if (currentPhoto === photos.length - 1)
    currentPhoto = 0
  else
    currentPhoto++

  photos.forEach((photo, index) => {
    photo.style.transform = `translateX(${(index - currentPhoto) * 100}%)`
  })
  currentPhoto = currentPhoto % photos.length
})

window.onclick = (event) => {
  if (!(event.target as HTMLElement).matches('#offer-dropdown-button'))
    dropdown?.classList.add('hidden')
}
