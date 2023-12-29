const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const modeSwitch = body.querySelector(".toggle-switch");
const sideMenu = body.querySelector("tside");
const menuBtn = body.querySelector(".menu-btn");
const closeBtn = body.querySelector("#close-btn");
const sidebarItems = document.querySelectorAll('.sidebar-item');
const sectionElements = document.querySelectorAll('.section-element');



modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

   if(body.classList.contains("dark")){
    // modeText.innerText ="dark mode"
    localStorage.setItem("dark", "enabled");

   }
   
   else{
    // modeText.innerText ="light Mode"
    localStorage.removeItem("dark");

   }

  
});

   
    function maintainDarkMode(){
        if(localStorage.getItem("dark")==="enabled"){
            body.classList.add("dark");
        }
        
    }
    document.addEventListener("DOMContentLoaded", function(){
        maintainDarkMode();
    });



menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = 'none';
})

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const sections = document.querySelectorAll('.section-element');

    function removeActiveClasses() {
        sidebarItems.forEach(item => {
            item.classList.remove('active');
        });
    }

    function activateSidebarItem() {
        let currentSection = "";
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach(section => {
            if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                currentSection = section.getAttribute('id');
            }
        });

        if (currentSection) {
            removeActiveClasses();
            const activeItem = document.querySelector(`.sidebar-item[href*=${currentSection}]`);
            if (activeItem) {
                activeItem.classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', activateSidebarItem);
});


// Call the windowScroll function to initialize the scroll event listener

// window.addEventListener("scroll", () => {
//     if (window.scrollY > bottomContainerE1.offsetTop - navbarE1.offsetHeight - 20)
//     {
//         navbarE1.classList.add("active");
//     }
//     else {
//         navbarE1.classList.remove("active");
//     }

// });
