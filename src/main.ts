import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!
const firstWorkImage = `${import.meta.env.BASE_URL}works/heart-handwash-snow-wide.png`

function render() {
  const detail = window.location.hash === '#works/first'
  const selected = window.location.hash === '#journal' || window.location.hash === '#contact'
    ? window.location.hash
    : '#works'

  app.innerHTML = `
    <header class="site-header">
      <nav class="site-nav" aria-label="Main navigation">
        ${[['#works', 'WORKS'], ['#journal', 'JOURNAL'], ['#contact', 'CONTACT']].map(([href, label]) => `
          <a class="site-nav-link${selected === href ? ' is-active' : ''}" href="${href}"${selected === href ? ' aria-current="page"' : ''}>${label}</a>
        `).join('')}
      </nav>
    </header>
    ${detail ? `
      <main class="work-detail" aria-label="첫 번째 작업">
        <img class="work-detail-image" src="${firstWorkImage}" alt="눈 속에 살짝 파묻힌 로고 없는 하트형 핸드워시" width="1254" height="1254" />
      </main>
    ` : `
      <main id="works" class="works-grid" aria-label="작업 목록">
        <a class="work-card work-card-link" href="#works/first" aria-label="첫 번째 작업 보기">
          <div class="work-placeholder"><span class="work-number">01</span></div>
        </a>
        ${[2, 3].map((number) => `
          <article class="work-card" aria-label="작업 ${number} 이미지 준비 중">
            <div class="work-placeholder"><span class="work-number">${String(number).padStart(2, '0')}</span></div>
          </article>
        `).join('')}
      </main>
    `}
  `
}

window.addEventListener('hashchange', () => {
  render()
  window.scrollTo(0, 0)
})
render()
