const showMore = document.querySelector<HTMLButtonElement>('#show-more')!
const masonry = document.querySelector<HTMLDivElement>('#masonry')!
const overlay = document.querySelector<HTMLDivElement>('#overlay')!
let isExpanded = false

function toggleExpanded() {
  const photoElements = document.querySelectorAll<HTMLElement>('#photo-8-clickable, #photo-9-clickable, #photo-10-clickable, #photo-11-clickable, #photo-12-clickable')
  const showMoreText = isExpanded ? 'Rozwiń' : 'Zwiń'
  const showMoreSvgPath = isExpanded ? 'M19.5 8.25l-7.5 7.5-7.5-7.5' : 'M4.5 15.75l7.5-7.5 7.5 7.5'
  const overlayClassesToRemove = isExpanded ? ['bg-gradient-to-b', 'from-transparent', 'to-[#DCC1AB]', 'z-0'] : ['z-[1]']
  const overlayClassesToAdd = isExpanded ? ['z-0'] : ['bg-gradient-to-b', 'from-transparent', 'to-[#DCC1AB]', 'z-[1]']
  const photoClassesToAdd = isExpanded ? ['hidden'] : ['flex']
  const photoClassesToRemove = isExpanded ? ['flex'] : ['hidden']
  const paddingBottom = isExpanded ? '' : '8rem'

  photoElements.forEach((element) => {
    element.classList.remove(...photoClassesToRemove)
    element.classList.add(...photoClassesToAdd)
  })

  showMore.style.bottom = isExpanded ? '' : '3rem'
  overlay.classList.remove(...overlayClassesToRemove)
  overlay.classList.add(...overlayClassesToAdd)
  showMore.innerHTML = `${showMoreText}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="${showMoreSvgPath}" />
    </svg>`
  masonry.style.paddingBottom = paddingBottom

  isExpanded = !isExpanded
}

showMore.addEventListener('click', toggleExpanded)
