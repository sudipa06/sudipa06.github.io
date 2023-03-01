const Projects = [
  
  
  {
    name:"Clone of Adorama.com",
    about:"Online shopping for Electronics from a great selection of Accessories, Video, Lighting & Studio, Binoculars & Scopes, Video Surveillance etc",
    img:"https://i.postimg.cc/q7dChq6z/adorama-sc.png",
    gitrepo:"https://github.com/prashantxi786/TechoMania",
    tech_stack:" REACT  |  CHAKRA UI",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link:"https://techomania.vercel.app/",
    project_type: "Team Project",
    category: ["all", "frontend"],
  },
  {
    name:"Clone of Lovoda.com",
    about:"LOVODA is a women's fashion brand for the newest & trending fashion accessories and online shop that offered high quality products at an affordable price. ",
    img:"https://i.postimg.cc/Y98TQky8/lovoda-sc.png",
    gitrepo:"https://github.com/sudipa06/Lovoda-Clone",
    tech_stack: "HTML | CSS | JAVASCRIPT",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link:"https://golden-granita-b3ce4c.netlify.app/",
    project_type:"Individual Project",
    category: ["all", "frontend"],

  },
  {
    name:"Clone of 1800flowers.com",
    // about:"E-commerce website,specially for occasions like birthday,sympathy,wedding anniversay,funeral service etc.",
    about:"E-commerce website, for occasions like birthday, wedding annivery, funeral service etc. Product range include flowers, bouquets, cakes, gifts.",
    img:"https://i.postimg.cc/VNGRSYyp/IMG-20230228-WA0000.jpg",
    gitrepo:"https://github.com/swati082001/bBlooms-1800Flowers-clone",
    tech_stack:" REACT | REDUX | NODE JS | EXPRESS JS | MONGODB | CHAKRA UI ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link:"https://bblooms.vercel.app/",
    project_type: "Team Project",
    category: ["all","backend"],
  },
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
    project_link: "https://sparkling-dango-eac506.netlify.app/",
    project_type: "Individual Project",
    category: ["all", "html", "frontend"],
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
    <div style="height:460px"  class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name">${pro.name}</h3>
      <h4 class="project-name project__about">${pro.about}</h4>
      <div class="navigate_ar">
      <a href=${pro.project_link} target="_blank" title="Demo" class="see-project" style="background-color:--skin-color:#37b182"><i class="fas fa-eye"></i></a>
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
