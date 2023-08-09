const signinForm = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');
const welcomeBlock = document.getElementById('welcome');
const welcomeUserId = document.getElementById('user_id');
const userId = localStorage.getItem('user_id');
if (userId) {
  welcomeUserId.textContent = userId;
  welcomeBlock.classList.add('welcome_active');
}

signinForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(signinForm);

  try {
    const response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      localStorage.setItem('user_id', data.user_id);
      welcomeUserId.textContent = data.user_id;
      welcomeBlock.classList.add('welcome_active');
    } else {
      alert('Неверный логин/пароль');
    }
  } catch (error) {
    console.error('Произошла ошибка при авторизации:', error);
  }
});
