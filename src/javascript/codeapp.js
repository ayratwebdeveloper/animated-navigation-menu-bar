const icons = document.querySelector('.icon')
const navigation = document.querySelector('nav')

icons.addEventListener('click', () => {
  icons.classList.toggle('close');
  navigation.classList.toggle('show');
})