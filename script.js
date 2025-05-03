let menu=document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

const allProjects = [
    { id: 1, name: 'Smart villa And Home Automation' },
    { id: 2, name: 'Residential Project' },
    { id: 3, name: 'Luxury - High end Villas' },
    { id: 4, name: 'Luxury - High end Villas' },
    { id: 5, name: 'Luxury - High end Villas' },
    { id: 6, name: 'Luxury - High end Villas' },
    { id: 7, name: 'Luxury - High end Villas' },
    { id: 8, name: 'Luxury - High end Villas' },
    { id: 9, name: 'Luxury - High end Villas' }
  ];
  
  let currentIndex = 0;
  const projectsPerPage = 3;
  const projectList = document.getElementById("project-list");
  const showMoreBtn = document.getElementById("load-more");
  
  function renderProjects() {
    const nextProjects = allProjects.slice(currentIndex, currentIndex + projectsPerPage);
  
    nextProjects.forEach(project => {
      // Create .box
      const box = document.createElement("div");
      box.className = "box";
  
      // Create .image with img
      const imageDiv = document.createElement("div");
      imageDiv.className = "image";
      const img = document.createElement("img");
      img.src = "./assets/project3.jpg"; // Use a dynamic path if needed
      img.alt = project.name;
      imageDiv.appendChild(img);
  
      // Create .content with h3
      const contentDiv = document.createElement("div");
      contentDiv.className = "content";
      const h3 = document.createElement("h3");
      h3.textContent = project.name;
      contentDiv.appendChild(h3);
  
 
      box.appendChild(imageDiv);
      box.appendChild(contentDiv);
  
      // Append box to the main container
      projectList.appendChild(box);
    });
  
    currentIndex += projectsPerPage;
  
    // Hide button if no more items to show
    if (currentIndex >= allProjects.length) {
      showMoreBtn.style.display = "none";
    }
  }
  
  // Initial render
  renderProjects();
  
  // Button click event
  showMoreBtn.addEventListener("click", renderProjects);

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





