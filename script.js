const aboutButton = document.getElementById("aboutButton");
const teachingButton = document.getElementById("teachingButton");
const blogButton = document.getElementById("blogButton");
const mainButton = document.getElementById("mainButton");

const aboutSection = document.getElementById("about");
const teachingSection = document.getElementById("teaching");
const blogSection = document.getElementById("blog");
const mainSection = document.getElementById("main");

const menuButtons = [aboutButton, teachingButton, blogButton, mainButton];
const sectionList = [aboutSection, teachingSection, blogSection, mainSection]

menuButtons.forEach(menuButton => menuButton.addEventListener('click', () => {
  menuButtons.forEach(menuButton => menuButton.classList.remove('border'));
  menuButton.classList.add('border');
  
  sectionList.forEach(section => section.classList.add('hidden'));
  document.getElementById(menuButton.id.replace('Button', '')).classList.remove('hidden')
}))