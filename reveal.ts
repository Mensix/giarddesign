const showMore = document.querySelector('#show-more') as HTMLButtonElement
const masonry = document.querySelector('#masonry') as HTMLDivElement
let isExpanded = false

showMore.addEventListener('click', () => {
  if (!isExpanded) {
    document.querySelectorAll('#photo-8-clickable, #photo-9-clickable, #photo-10-clickable, #photo-11-clickable, #photo-12-clickable')
      .forEach((element) => {
        element.classList.remove('hidden')
        element.classList.add('flex')
      })

    showMore.style.bottom = '3rem'
    document.querySelector('#overlay')?.classList.remove('bg-gradient-to-b', 'from-transparent', 'to-[#DCC1AB]')
    showMore.innerHTML = `Zwiń
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>`
    masonry.style.paddingBottom = '8rem'

    isExpanded = true
  }
  else {
    document.querySelectorAll('#photo-8-clickable, #photo-9-clickable, #photo-10-clickable, #photo-11-clickable, #photo-12-clickable')
      .forEach((element) => {
        element.classList.add('hidden')
        element.classList.remove('flex')
      })

    showMore.style.bottom = ''
    document.querySelector('#overlay')?.classList.add('bg-gradient-to-b', 'from-transparent', 'to-[#DCC1AB]')
    showMore.innerHTML = `Rozwiń
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>`
    masonry.style.paddingBottom = ''

    isExpanded = false
  }
})
