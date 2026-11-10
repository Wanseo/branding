import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header class="site-header">
  <nav class="site-nav" aria-label="Main navigation">
    <a class="site-nav-link is-active" href="#works" aria-current="page">WORKS</a>
    <a class="site-nav-link" href="#journal">JOURNAL</a>
    <a class="site-nav-link" href="#contact">CONTACT</a>
  </nav>
</header>
`

const navigationLinks = document.querySelectorAll<HTMLAnchorElement>('.site-nav-link')

function updateNavigation() {
  const selected = ['#works', '#journal', '#contact'].includes(window.location.hash)
    ? window.location.hash
    : '#works'

  navigationLinks.forEach((link) => {
    const active = link.hash === selected
    link.classList.toggle('is-active', active)
    if (active) link.setAttribute('aria-current', 'page')
    else link.removeAttribute('aria-current')
  })
}

window.addEventListener('hashchange', updateNavigation)
updateNavigation()
