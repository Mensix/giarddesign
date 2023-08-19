const reveals = document.querySelectorAll<HTMLElement>('#reveal')
const wasFired: boolean[] = []

function animateReveals() {
  const windowHeight = window.innerHeight
  const elementVisible = 25

  reveals.forEach((reveal, i) => {
    const elementTop = reveal.getBoundingClientRect().top

    if (elementTop < windowHeight - elementVisible) {
      if (!wasFired[i]) {
        reveal.classList.add('animate__animated', 'animate__fadeInUp')
        wasFired[i] = true
      }
    }
    else {
      wasFired[i] = false
    }
  })
}

window.addEventListener('scroll', animateReveals)
