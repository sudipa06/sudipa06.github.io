const Projects = [
  // {
  //   name: "Clone of Loseit.com",
  //   about:
  //     "Lose It! is a calorie counter & food diary diet app that helps you stick to your diet and achieve weight loss that fits.",
  //   img: "https://camo.githubusercontent.com/61f2312813ec22ecccd5b4a6897041c60212a81f23e92f09b2a96e5662c0ec2a/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f70726f78792f312a317732305344677a3941346a463342643870483736772e706e67",
  //   gitrepo: "https://github.com/ranjanpalai69/looseit-clone",
  //   tech_stack: "HTML | CSS | JAVASCRIPT",
  //   tech_stackicons: [
  //     `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
  //     `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
  //     `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
  //   ],
  //   project_link: "https://elegant-kheer-5e8fb6.netlify.app/landing%20page2.2/landing.html",
  //   project_type: "Team Project",
  //   category: ["all", "backend"],
  // },
  {
    name: "Clone of BestBuy.com",
    about:
      "An e-commerce website, especially for electronics, computers, appliances, cell phones, video games & more new tech.",
    img: "https://i.postimg.cc/MGx2cD9h/bestbuy-sc.png",
    gitrepo:
      "https://github.com/sudipa06/silent-cars-5141",
    video: "",
    tech_stack: "  REACT  |  CHAKRA UI ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://storied-dolphin-99e215.netlify.app/",
    project_type: "Individual Project",
    category: ["all", "html", "frontend"],
  },

  // {
  //   name: "Clone of Zee5.com",
  //   about:
  //     "Zee5 is an Indian subscription video on-demand and over the top streaming service runned by ZEE Entertainments Enterprises.",
  //   img: "https://miro.medium.com/max/828/1*Xnl2yu56eM87iDKUUybWRQ.png",
  //   gitrepo: "https://github.com/anjalidhanjode28/Zee_clone",
  //   tech_stack: "HTML | CSS | JAVASCRIPT ",
  //   tech_stackicons: [
  //     `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
  //     `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
  //     `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
  //     `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`,
  //   ],
  //   project_link: "https://jocular-pony-971066.netlify.app/",
  //   project_type: "Team Project",
  //   category: ["all", "frontend"],
  // },
  {
    name: "Clone of Loseit.com",
    about:
      "Lose It! is a calorie counter & food diary diet app that helps you stick to your diet and achieve weight loss that fits.",
    img: "https://i.postimg.cc/CKd52wgh/loseit-sc.png",
    gitrepo: "https://github.com/ranjanpalai69/looseit-clone",
    tech_stack: "HTML | CSS | JAVASCRIPT",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://elegant-kheer-5e8fb6.netlify.app/landing%20page2.2/landing.html",
    project_type: "Team Project",
    category: ["all", "frontend"],
  },
 
];

let projects__container = document.getElementById("projects--container");

let all_projects = document.querySelector(".all_projects");

let backend_projects = document.querySelector(".backend_projects");
// let other_projects = document.querySelector(".other_projects");
let frontend_projects = document.querySelector(".frontend_projects");
all_projects.classList.add("active_tech_project");

all_projects.addEventListener("click", () => {
  filterProjects("all");
  all_projects.classList.add("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  backend_projects.classList.remove("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  frontend_projects.classList.remove("active_tech_project");
});
backend_projects.addEventListener("click", () => {
  filterProjects("backend");
  all_projects.classList.remove("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  backend_projects.classList.add("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  frontend_projects.classList.remove("active_tech_project");
});

frontend_projects.addEventListener("click", () => {
  filterProjects("frontend");
  all_projects.classList.remove("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  backend_projects.classList.remove("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  frontend_projects.classList.add("active_tech_project");
});

function filterProjects(basis) {
  let filtered = Projects.filter((el) => {
    return el.category.includes(basis);
  });
  displayProjectData(filtered);
}

function displayProjectData(Projects) {
  projects__container.innerHTML = null;
  Projects.reverse().forEach((pro) => {
    let main = document.createElement("div");
    main.setAttribute("class", "portfolio-item padd-15");
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name">${pro.name}</h3>
      <h4 class="project-name project__about">${pro.about}</h4>
      <div class="navigate_ar">
      <a href=${pro.project_link} target="_blank" title="Demo" class="see-project"><i class="fas fa-eye"></i></a>
      <a href=${pro.gitrepo} target="_blank" title="GitHub Repository" class="github-repo"><i class="fab fa-github"></i></a>
      </div>
      <div class="project_tech_box">
      <span class="TechStacks__text">TechStacks: </span> ${pro.tech_stack} 
      </div>
      
    </div>
  </div>
    `;
    projects__container.append(main);
  });
}

displayProjectData(Projects);
