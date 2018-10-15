function slideInText(event) {
  event.preventDefault();
  switch (event.target.classList[0]) {
    case 'p-1':
      document.getElementsByClassName('p-description')[0].classList.add('show-text');
      break;
    case 'p-2':
      document.getElementsByClassName('p-description')[1].classList.add('show-text');
      break;
    case 'p-3':
      document.getElementsByClassName('p-description')[2].classList.add('show-text');
      break;
    default:
  }
}

function hideText(event) {
  event.preventDefault();
  switch (event.target.classList[0]) {
    case 'p-1':
      document.getElementsByClassName('p-description')[0].classList.remove('show-text');
      break;
    case 'p-2':
      document.getElementsByClassName('p-description')[1].classList.remove('show-text');
      break;
    case 'p-3':
      document.getElementsByClassName('p-description')[2].classList.remove('show-text');
      break;
    default:
  }
}
