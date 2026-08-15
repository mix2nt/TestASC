(function () {
  var form = document.getElementById('signupForm');
  var emailInput = document.getElementById('emailInput');
  var formNote = document.getElementById('formNote');
  var modalOverlay = document.getElementById('modalOverlay');
  var modalClose = document.getElementById('modalClose');
  var modalOkBtn = document.getElementById('modalOkBtn');
  var modalText = document.getElementById('modalText');
  var openModalBtn = document.getElementById('openModalBtn');
  var ctaBtn = document.getElementById('ctaBtn');

  var defaultNote = formNote.textContent;

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function showModal(message) {
    if (message) modalText.textContent = message;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function hideModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = emailInput.value.trim();

    if (!isValidEmail(email)) {
      emailInput.classList.add('error');
      formNote.textContent = '올바른 이메일 주소를 입력해주세요.';
      formNote.classList.add('error-text');
      emailInput.focus();
      return;
    }

    emailInput.classList.remove('error');
    formNote.classList.remove('error-text');
    formNote.textContent = defaultNote;

    showModal(email + ' 주소로 안내 메일을 보내드릴게요.');
    form.reset();
  });

  emailInput.addEventListener('input', function () {
    if (emailInput.classList.contains('error')) {
      emailInput.classList.remove('error');
      formNote.classList.remove('error-text');
      formNote.textContent = defaultNote;
    }
  });

  openModalBtn.addEventListener('click', function () {
    emailInput.focus();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  ctaBtn.addEventListener('click', function () {
    emailInput.focus();
    document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' });
  });

  modalClose.addEventListener('click', hideModal);
  modalOkBtn.addEventListener('click', hideModal);
  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) hideModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') hideModal();
  });

  var header = document.querySelector('.header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
})();
