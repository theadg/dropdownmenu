export default function DropDown(dropDownHead, dropDownBody) {
  const dropDownHeader = document.querySelector(dropDownHead);
  const dropDownMenu = document.querySelector(dropDownBody);

  // dropDownHeader.onmouseover = () => dropDownMenu.classList.toggle('show');

  // dropDownMenu.onmouseover = () => dropDownMenu.classList.add('show');
  // dropDownMenu.onmouseleave = () => dropDownMenu.classList.remove('show');

  dropDownHeader.onmouseover = () => {
    dropDownMenu.style.display = 'block';
  };

  dropDownMenu.onmouseover = () => {
    dropDownMenu.style.display = 'block';
  };
  dropDownMenu.onmouseleave = () => {
    dropDownMenu.style.display = 'none';
  };
}
