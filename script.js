let menu=document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
var swiper = new Swiper(".home-slider", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});



const projects = [
    { title: "Smart villa And Home Automation", image: "./assets/project1.jpg" },
    { title: "Residential Project", image: "./assets/project2.jpg" },
    { title: "Luxury - High end Villas", image: "./assets/project3.jpg" },
    { title: "Interiors And Decor", image: "./assets/project4.jpg" },
    { title: "Interiors And Decor", image: "./assets/project5.jpg" },
    { title: "Eco-Friendly Paints", image: "./assets/project6.jpg" },
    { title: "Elegant Villas", image: "./assets/project7.jpg" },
    { title: "Traditional Villas", image: "./assets/project8.jpg" },
    { title: "Green concrete", image: "./assets/project9.jpg" },
    { title: "Green concrete", image: "./assets/project10.jpg" },
    { title: "Mountain View Villas ", image: "./assets/project11.jpg" },
    { title: "Industrial Projects", image: "./assets/project12.jpg" },
    { title: "Decor Work", image: "./assets/project13.jpg" },
    { title: "Interiors", image: "./assets/project14.jpg" },
    { title: "High End Villa", image: "./assets/project16.jpg" },
    { title: "Luxury Beach Villas", image: "./assets/project17.jpg" },
  ];

  let currentIndex = 0;
  const projectsPerLoad = 3;
  const projectListEl = document.getElementById("projectList");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  function renderProjects() {
    const nextProjects = projects.slice(currentIndex, currentIndex + projectsPerLoad);
    nextProjects.forEach(project => {
      const box = document.createElement("div");
      box.className = "box";
      box.innerHTML = `
        <div class="image">
            <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="content">
            <h3>${project.title}</h3>
        </div>
      `;
      projectListEl.appendChild(box);
    });

    currentIndex += projectsPerLoad;

    // Hide button if all projects are loaded
    if (currentIndex >= projects.length) {
      loadMoreBtn.style.display = "none";
    }
  }

  // Initial load
  renderProjects();

  // Load more on button click
  loadMoreBtn.addEventListener("click", renderProjects);

