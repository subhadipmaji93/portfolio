
/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active');
        })
        target.classList.add('filters__active');

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay: 500})
sr.reveal(`.profile__profession`, {delay: 600})
sr.reveal(`.profile__social`, {delay: 700})
sr.reveal(`.profile__info-group`, {interval: 100, delay: 700})
sr.reveal(`.profile__buttons`, {delay: 800})
sr.reveal(`.filters__content`, {delay: 900})
sr.reveal(`.filters`, {delay: 1000})



/*======================= Random Color Setter=========================*/
      colorOptions = [
        { hue:207, sat:90, lig:61 },
        { hue:146, sat:59, lig:51 },
        { hue:356, sat:66, lig:75 },
        { hue:174, sat:63, lig:62 },
        { hue:260, sat:73, lig:46 },
        { hue:331, sat:73, lig:55 }
    ]
    
    let setColor = colorOptions[Math.floor(Math.random()*colorOptions.length)];
    let colorValue = `hsl(${setColor.hue},${setColor.sat}%,${setColor.lig}%)`;
    
    let profileBorder = document.querySelector(".profile__border");
    let profilePerfil = document.querySelector(".profile__perfil");
    let button = document.querySelector(".button");
    let projectsCard = document.querySelectorAll(".projects__card");
    let profileSocialLinks = document.querySelectorAll(".profile__social-link");
    let skillsData = document.querySelectorAll(".skills__data");
    let filtersButton = document.querySelectorAll(".filters__button");
    let projects = filtersButton[0];
    let skills = filtersButton[1];
    
    profileBorder.style.borderColor = colorValue;
    profilePerfil.style.background = colorValue;
    button.setAttribute('style', `background-color: ${colorValue};box-shadow: 0 8px 24px hsla(${setColor.hue}, ${setColor.sat}%, ${setColor.lig}%, .25)`);
    
    for (let item of projectsCard){
        item.lastElementChild.style.background =  `linear-gradient(180deg, hsla(${setColor.hue}, 24%, 40%, .3) 0%, hsla(${setColor.hue}, 24%, 4%, 1) 95%)`;
        item.lastElementChild.firstElementChild.children[2].style.backgroundColor = colorValue;
    }
    profileSocialLinks.forEach(item=>{item.style.color = colorValue});
    skillsData.forEach(item=>{item.firstElementChild.style.color = colorValue});

    filtersButton.forEach(item=>{
        if(item.classList.contains('filter-tab-active')) item.style.border = `1px solid ${colorValue}`;
    });

    projects.addEventListener("click", ()=>{
        skills.style.border = 'none';
        projects.style.border = `1px solid ${colorValue}`;
    });

    skills.addEventListener("click", ()=>{
        projects.style.border = 'none';
        skills.style.border = `1px solid ${colorValue}`;
    })
    

/*===================Number Increasing=======================*/
 
let profileInfoNumbers = document.querySelectorAll(".profile__info-number");
profileInfoNumbers.forEach(item=>{
    let endNumber = parseInt(item.dataset.num);

    function incNbrRec(i, endNbr, elt) {
        if (i <= endNbr) {
          elt.innerHTML = i;
          setTimeout(function() {//Delay a bit before calling the function again.
            incNbrRec(i + 1, endNbr, elt);
          }, 100);
        }
      }

    setTimeout(()=>incNbrRec(0, endNumber, item), 1500);
});