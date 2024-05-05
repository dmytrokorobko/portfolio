//variables

const clickedColor = "#8A2BE2";
let isPageOpened = false;

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

const windowResizing = window;
windowResizing.addEventListener('resize', headerPositioning);

//functions

//get age between dates
function getMyAge() {
   const bd = "1985/03/01";
   return new Date(new Date() - new Date(bd)).getFullYear() - 1970;
}

//clicked buttons handlers
function btnHandler(e) {
   let btn = e.target;   
   if (btn.tagName != 'A') {
      btn = btn.parentNode;
   } 
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
      isPageOpened = true;
      headerPositioning();

      //show page
      if (btn != null && btn.getAttribute('id') != null) {
         pageMain.style.display = 'block';
         document.getElementById((btn.getAttribute('id')).substring(3).toLowerCase()).style.display = 'block';
      } else {
         console.log("Something wrong");
         allBtnOff(btnArray);
      }
   }
}

function headerPositioning() {
   if (isPageOpened) {
      if (window.getComputedStyle(header).getPropertyValue('flex-direction') == "row") {
         header.style.placeContent = "start center";
      }
      else {
         header.style.placeContent = "center start";
      }
   }
}

function changeFaceSize() {
   const faceSize = window.getComputedStyle(faceImg);
   let w = faceSize.getPropertyValue('width');
   w = w.substring(0, w.length - 2);
   w = w / 2;
   let h = faceSize.getPropertyValue('height');
   h = h.substring(0, h.length - 2);
   h = h / 2;
   faceImg.style.width = w + "px";
   faceImg.style.height = h + "px";
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
   isPageOpened = false;
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
descr.innerHTML = `I'm a ${getMyAge()} y.o. full stack web developer from Boston, MA`;