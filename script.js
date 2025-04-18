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
    description: "An Online Food Ordering System with a user-friendly interface that allows customers to browse menus, select food items, and place orders seamlessly",
    image: "images/hungry.png",
    githubLink: "https://github.com/Shreyasingh120/Hungry-Heaven",
    deployedLink: "https://hungry-heaven-six.vercel.app/" 
  },
  {
    title: "Tic-Tac-Toe",
    description: "The interface is clean and responsive, ensuring smooth gameplay on both desktop and mobile devices.",
    image: "images/tic-tac.png",
    githubLink: "https://github.com/Shreyasingh120/Tic-Tac-Toe-Game",
    deployedLink: "https://tic-tac-toe-game-azure-chi.vercel.app/" 
  },
  {
    title: "Styling",
    description: "The Styling E-Commerce Website is a modern, responsive online store interface designed to deliver a seamless shopping experience.",
    image: "images/styling.png",
    githubLink: "https://github.com/Shreyasingh120/Frontend---Styling-Project",
    deployedLink: "https://frontend-styling-project.vercel.app"
  },
    
  ];
  

  function generatePortfolioSections(data) {
    const portfolioContainer = document.querySelector(".portfolio--section--container");

    data.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("portfolio--section--card");

        card.innerHTML = `
            <div class="portfolio--section--img">
                <a href="${item.deployedLink}" target="_blank" rel="noopener noreferrer">
                    <img src="${item.image}" alt="${item.title}" />
                </a>
            </div>
            <div class="portfolio--section--card--content">
                <h3 class="portfolio--section--title">${item.title}</h3>
                <p class="text-md">${item.description}</p>
                <p class="text-sm portfolio--link">
                    <a href="${item.githubLink}" target="_blank" rel="noopener noreferrer">
                        Visit on GitHub
                    </a>
                </p>
            </div>
        `;

        portfolioContainer.appendChild(card);
    });
}


generatePortfolioSections(portfolioData);