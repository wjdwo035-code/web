/* 모바일 메뉴와 아직 연결되지 않은 문의 양식 안내 */
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-nav');
  const form = document.querySelector('#inquiry-form');
  const notice = document.querySelector('#form-notice');

  const closeMenu = (returnFocus = false) => {
    if (!toggle || !navigation) return;
    navigation.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', '메뉴 열기');
    if (returnFocus) toggle.focus();
  };

  if (toggle && navigation) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu();
      } else {
        navigation.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', '메뉴 닫기');
      }
    });

    navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeMenu()));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
    });
  }

  if (form && notice) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      notice.textContent = '현재는 문의 접수 경로를 연결하는 중입니다. 전송되지는 않았습니다.';
    });
  }
})();
