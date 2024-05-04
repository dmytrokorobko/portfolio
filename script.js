//variables

const clickedColor = "#8A2BE2";

//initialization

const btnResume = document.getElementById("btnResume");
btnResume.addEventListener('click', btnHandler);

const btnProjects = document.getElementById("btnProjects");
btnProjects.addEventListener('click', btnHandler);

const btnBlog = document.getElementById("btnBlog");
btnBlog.addEventListener('click', btnHandler);

const btnContacts = document.getElementById("btnContacts");
btnContacts.addEventListener('click', btnHandler);

const btnArray = [btnResume, btnProjects, btnBlog, btnContacts];

const header = document.getElementsByTagName("header")[0];

const faceImg = document.getElementById("face");
faceImg.addEventListener('click', goToMain);

const pageMain = document.getElementsByTagName("main")[0];

const pageResume = document.getElementById("resume");

const pageProjects = document.getElementById("projects");

const pageBlog = document.getElementById("blog");

const pageContacts = document.getElementById("contacts");

const messageArea = document.getElementById("message");
messageArea.addEventListener('keyup', letterCounter);

const messageCount = document.getElementById("message-count");
const maxMessageCount = messageCount.innerHTML;

//functions

//get age between dates
function getMyAge() {
   const bd = "1985/03/01";
   return new Date(new Date() - new Date(bd)).getFullYear() - 1970;
}

//clicked buttons handlers
function btnHandler(e) {
   const btn = e.target.parentNode;   
   btnChange(btn);
}

//toggle selected btn color
function btnChange(btn) {
   btnOff(btnArray, btn);
   //toggle color
   if (btn.getAttribute('style') != null && btn.getAttribute('style').indexOf('color:') != -1) {  
      btnStylesToNone(btn);    
      stylesToNone();
   } else {
      btn.style.color = clickedColor;
      btn.style.boxShadow = "0 0 5px 5px " + clickedColor;
      changeFaceSize();
      header.style.height = 'auto';
      if (window.getComputedStyle(header).getPropertyValue('flex-direction') == "row") 
         header.style.alignContent = "start";
      else 
         header.style.justifyContent = "start";

      //show page
      pageMain.style.display = 'block';
      document.getElementById((btn.getAttribute('id')).substring(3).toLowerCase()).style.display = 'block';
   }
}

function changeFaceSize() {
   const faceSize = window.getComputedStyle(faceImg);
   const w = faceSize.getPropertyValue('width');
   const w1 = w.substring(0, w.length - 2);
   const h = faceSize.getPropertyValue('height');
   const h1 = h.substring(0, w.length - 2);
   faceImg.style.width = w1 / 2 + "px";
   faceImg.style.height = h1 / 2 + "px";
}

//untoggle all buttons
function btnOff(btnArray, btnClicked) {
   btnArray.forEach(btn => {
      if (btn != btnClicked && btn.getAttribute('style') != null && btn.getAttribute('style').indexOf('color:') != -1) {
         btnStylesToNone(btn);
      }   
   });
   stylesToNone();
}

function allBtnOff(btnArray) {
   btnArray.forEach(btn => {
      btnStylesToNone(btn);
   });
   stylesToNone();
}

function btnStylesToNone(btn) {
   btn.style = 'none';
}

function stylesToNone() {   
   header.style = 'none';
   faceImg.style = 'none';
   pageMain.style = 'none';
   pageResume.style = 'none';
   pageProjects.style = 'none';
   pageBlog.style = 'none';
   pageContacts.style = 'none';
}

function goToMain() {
   allBtnOff(btnArray);
}

function sendForm() {
   alert("This website isn't connected to server logic");
}

function letterCounter() {
   messageCount.innerHTML = maxMessageCount - messageArea.value.length;
}

//execution

const descr = document.getElementById("page-descr");
descr.innerHTML = `I'm ${getMyAge()} y.o. full stack web developer from Boston, MA`;