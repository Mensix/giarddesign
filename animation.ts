window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('#reveal')
  const wasFired = []
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight
    const elementTop = reveals[i].getBoundingClientRect().top
    const elementVisible = 25
    if (elementTop < windowHeight - elementVisible) {
      if (!wasFired[i]) {
        reveals[i].classList.add('animate__animated', 'animate__fadeInUp')
        wasFired[i] = true
      }
    }
    else {
      wasFired[i] = false
    }
  }
})
