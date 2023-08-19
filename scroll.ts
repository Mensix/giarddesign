(document.querySelectorAll('a[href^="#"]') as NodeListOf<HTMLAnchorElement>).forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    // eslint-disable-next-line @typescript-eslint/no-invalid-this
    document.querySelector(this.getAttribute('href')!)!.scrollIntoView({
      behavior: 'smooth',
    })
  })
})
