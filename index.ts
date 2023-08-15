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
const photos = [
  document.querySelector('#photo-0') as HTMLImageElement,
  document.querySelector('#photo-1') as HTMLImageElement,
  document.querySelector('#photo-2') as HTMLImageElement,
]
let photoIndex = 1

photoNext.addEventListener('click', () => {
  if (photoIndex === 1) {
    /* 2 0 1 */
    photos[0].classList.add('left-0')
    photos[0].classList.remove('-left-full', 'top-0', 'z-[-1]')
    photos[1].classList.add('absolute', 'left-full', 'top-0', 'z-[-1]')
    photos[2].classList.remove('left-full')
    photos[2].classList.add('absolute', '-left-full', 'top-0', 'z-[-1]')
    photoIndex = 2
  }
  else if (photoIndex === 2) {
    /* 1 2 0 */
    photos[0].classList.add('absolute', 'left-full', 'z-[-1]')
    photos[0].classList.remove('-left-full', 'top-0')
    photos[1].classList.remove('left-full')
    photos[1].classList.add('absolute', '-left-full', 'top-0', 'z-[-1]')
    photos[2].classList.add('left-0')
    photos[2].classList.remove('-left-full', 'left-full', 'top-0', 'z-[-1]')
    photoIndex = 0
  }
  else if (photoIndex === 0) {
    /* 0 1 2 */
    photos[0].classList.remove('left-full')
    photos[0].classList.add('absolute', '-left-full', 'top-0', 'z-[-1]')
    photos[1].classList.add('left-0')
    photos[1].classList.remove('-left-full', 'top-0', 'z-[-1]')
    photos[2].classList.add('absolute', 'left-full', 'z-[-1]', 'top-0')
    photos[2].classList.remove('-left-full')
    photoIndex = 1
  }
})

window.onclick = (event) => {
  if (!(event.target as HTMLElement).matches('#offer-dropdown-button'))
    dropdown?.classList.add('hidden')
}
