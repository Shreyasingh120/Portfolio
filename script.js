var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'Web Developer', 'UI and UX Designer'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });

  function toggleMenu() {
    const navList = document.querySelector('#right ul');
    navList.classList.toggle('active');
  }
  const toggleBtn = document.querySelector('.menu-toggle');
const navList = document.querySelector('#right ul');

toggleBtn.addEventListener('click', function (e) {
  e.stopPropagation(); 
  navList.classList.toggle('active');
});

document.addEventListener('click', function (e) {
  if (!navList.contains(e.target)) {
    navList.classList.remove('active');
  }
});

navList.addEventListener('click', function (e) {
  e.stopPropagation();
});

const portfolioData = [
    {
      title: "Hungry-Heaven",
      description: "A Online Food Ordering System with a user-friendly interface.",
      image: "images/hungry.png",
      link: "https://github.com/Shreyasingh120/Hungry-Heaven"
    },
    {
      title: "Portfolio Website",
      description: "This personal website to showcase my work and journey.",
      image: "images/project2.png",
      link: "https://github.com/project2-link"
    },
    {
      title: "Styling",
      description: "An online website created for window shopping.",
      image: "images/project3.png",
      link: "https://github.com/Shreyasingh120/Frontend---Styling-Project"
    },
    
  ];
  
  // Function to generate portfolio sections
  function generatePortfolioSections(data) {
    const portfolioContainer = document.querySelector(".portfolio--section--container");
  
    data.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("portfolio--section--card");
  
      card.innerHTML = `
        <div class="portfolio--section--img">
          <img src="${item.image}" alt="${item.title}" />
        </div>
        <div class="portfolio--section--card--content">
          <h3 class="portfolio--section--title">${item.title}</h3>
          <p class="text-md">${item.description}</p>
          <p class="text-sm portfolio--link">
            <a href="${item.link}" target="_blank" rel="noopener noreferrer">
              Visit on GitHub
            </a>
          </p>
        </div>
      `;
  
      portfolioContainer.appendChild(card);
    });
  }
  
  // Call the function to generate portfolio sections
  generatePortfolioSections(portfolioData);