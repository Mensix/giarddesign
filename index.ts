import gsap from 'gsap'

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

const photoPrevious = document.querySelector('#photo-previous') as HTMLButtonElement
const photoNext = document.querySelector('#photo-next') as HTMLButtonElement
const photos = [
  document.querySelector('#photo-0') as HTMLImageElement,
  document.querySelector('#photo-1') as HTMLImageElement,
  document.querySelector('#photo-2') as HTMLImageElement,
]
let photoOrder = [0, 1, 2]

function animatePhotos(index0: number, index1: number, index2: number, reverse = false) {
  const tl = gsap.timeline()

  if (reverse) {
    tl.fromTo(photos[index0], { left: '-100%', zIndex: -3 }, { zIndex: -3, left: '100%', duration: 0 })
    tl.fromTo(photos[index1], { left: '0' }, { left: '-100%', duration: 0, zIndex: -1 })
    tl.fromTo(photos[index2], { left: '100%', zIndex: -2 }, { left: '0', duration: 0, zIndex: -1 })
  }
  else {
    tl.fromTo(photos[index0], { left: '-100%', zIndex: -2 }, { left: '0', duration: 0, zIndex: -2 })
    tl.fromTo(photos[index1], { left: '0' }, { left: '100%', duration: 0, zIndex: -1 })
    tl.fromTo(photos[index2], { left: '100%', zIndex: -3 }, { left: '-100%', duration: 0, zIndex: -3 })
  }
}

photoPrevious.addEventListener('click', () => {
  // Start: 0 1 2
  if (photoOrder[0] === 0 && photoOrder[1] === 1 && photoOrder[2] === 2) {
    /* 1 2 0 */
    animatePhotos(0, 1, 2, true)
    // photoIndex = 0
    photoOrder = [1, 2, 0]
  }
  else if (photoOrder[0] === 1 && photoOrder[1] === 2 && photoOrder[2] === 0) {
    /* 2 0 1 */
    animatePhotos(1, 2, 0, true)
    // photoIndex = 1
    photoOrder = [2, 0, 1]
  }
  else if (photoOrder[0] === 2 && photoOrder[1] === 0 && photoOrder[2] === 1) {
    /* 0 1 2 */
    animatePhotos(2, 0, 1, true)
    photoOrder = [0, 1, 2]
  }
})

photoNext.addEventListener('click', () => {
  // Start: 0 1 2
  if (photoOrder[0] === 0 && photoOrder[1] === 1 && photoOrder[2] === 2) {
    /* 2 0 1 */
    animatePhotos(0, 1, 2)
    photoOrder = [2, 0, 1]
  }
  else if (photoOrder[0] === 2 && photoOrder[1] === 0 && photoOrder[2] === 1) {
    /* 1 2 0 */
    animatePhotos(2, 0, 1)
    photoOrder = [1, 2, 0]
  }
  else if (photoOrder[0] === 1 && photoOrder[1] === 2 && photoOrder[2] === 0) {
    /* 0 1 2 */
    animatePhotos(1, 2, 0)
    photoOrder = [0, 1, 2]
  }
})

window.onclick = (event) => {
  if (!(event.target as HTMLElement).matches('#offer-dropdown-button'))
    dropdown?.classList.add('hidden')
}
