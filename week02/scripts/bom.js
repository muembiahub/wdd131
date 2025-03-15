const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
  if (input.value.trim() === '') {
    console.log('Input is empty, doing nothing.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = input.value;

  deleteButton.textContent = 'delete';
  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
  });

  li.appendChild(deleteButton);
  list.appendChild(li);

  input.value = '';
});