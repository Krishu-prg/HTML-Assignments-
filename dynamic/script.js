const colorBox = document.getElementById('colorBox');
const colorPicker = document.getElementById('colorPicker');
const resetBtn = document.getElementById('resetBtn');

const defaultColor = 'lightgray';

// Load last color from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('lastColor');
  if (savedColor) {
    colorBox.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }
});

// Change color dynamically
colorPicker.addEventListener('input', () => {
  const selectedColor = colorPicker.value;
  colorBox.style.backgroundColor = selectedColor;
  localStorage.setItem('lastColor', selectedColor);
});

// Reset to default
resetBtn.addEventListener('click', () => {
  colorBox.style.backgroundColor = defaultColor;
  colorPicker.value = '#d3d3d3';
  localStorage.removeItem('lastColor');
});
