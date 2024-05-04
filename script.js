function getMyAge() {
   const bd = "1985/03/01";
   return new Date(new Date() - new Date(bd)).getFullYear() - 1970;
}

const descr = document.getElementById("page-descr");
descr.innerHTML = `I'm ${getMyAge()} y.o. full stack web developer from Boston, MA`;