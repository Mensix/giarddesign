const dropdownButton = document.querySelector('#offer-dropdown-button') as HTMLButtonElement
const dropdown = document.querySelector('#offer-dropdown') as HTMLUListElement

dropdownButton.addEventListener('click', () => {
  dropdown?.classList.toggle('hidden')
})

window.onclick = (event) => {
  if (!(event.target as HTMLElement).matches('#offer-dropdown-button'))
    dropdown?.classList.add('hidden')
}
