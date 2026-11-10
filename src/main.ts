import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header class="site-header">
  <nav class="site-nav" aria-label="Main navigation">
    <a class="site-nav-link is-active" href="#works" aria-current="page">WORKS</a>
    <a class="site-nav-link" href="#journal">JOURNAL</a>
    <a class="site-nav-link" href="#contact">CONTACT</a>
  </nav>
</header>
<main id="works" class="works-grid" aria-label="작업 목록">
  ${Array.from({ length: 3 }, (_, index) => `
    <article class="work-card" aria-label="작업 ${index + 1} 이미지 준비 중">
      <div class="work-placeholder">
        <span class="work-number">${String(index + 1).padStart(2, '0')}</span>
      </div>
    </article>
  `).join('')}
</main>
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
