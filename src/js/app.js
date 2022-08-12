import { buttonId, textId } from './dom-loader';

var showParagraph = false;

const updateParagraphText = () => {
  if (showParagraph) {
    textId.style.display = 'block';
  } else {
    textId.style.display = 'none';
  }
};

const updateButtonText = () => {
  if (showParagraph) {
    buttonId.innerText = 'Hide text';
  } else {
    buttonId.innerText = 'Show text';
  }
};

const toggleParagraph = () => {
  showParagraph = !showParagraph;
  updateParagraphText();
  updateButtonText();
};

buttonId.addEventListener('click', toggleParagraph);
