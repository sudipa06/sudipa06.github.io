const skills = [
  {
    name: "HTML",
    icon_url: "https://img.icons8.com/color/50/000000/html-5--v1.png",
    category: ["all", "frontend"],
  },
  {
    name: "CSS",
    icon_url: "https://img.icons8.com/color/50/000000/css3.png",
    category: ["all", "frontend"],
  },
  {
    name: "JavaScript",
    icon_url: "https://img.icons8.com/color/50/000000/javascript--v2.png",
    category: ["all", "frontend"],
  },
  // {
  //   name: "BootStrap",
  //   icon_url: "../images/bootstrap.png",
  //   category: ["all", "frontend"],
  // },
  {
    name: "mongoDB",
    icon_url:
      "data:image/jpeg;base64,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",
    category: ["all", "backend"],
  },
  {
    name: "React",
    icon_url: "https://github.com/vivekgoswami934/ReactProjects/blob/master/images/Portfolio%20images/images/react.jpg?raw=true",
    category: ["all", "frontend"],
  },
  {
    name: "Redux",
    icon_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///92Srx0R7tuPblzRbtxQrpqNbdsObhtO7hvP7n9/P5pNLf59/zp4/Tu6faokNPk3fHBsd/VyumTdMmIZMTHuOKXecvOweV8Ur+5p9vy7vimjdLc0+2sltWafcx+VsC1odmBWsGNbMawm9efhM/e1u6EXsK9rN3Gt+KMacbSxuiQcMjLvuSiiNBlLbWnCGYEAAAOFElEQVR4nO1daXuqPBM+hCyExX23bnWvev7/z3u1fSQDJBBCrJz34v7WKjghk9ln+POnQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgwf8nQt9/NwkvQudrfbtsJg7GzmTTX1+jdxNkFa3TyGUeIRgh5w6EMHEZ7x9b7ybMDlrTDePYyQJzdjiF7yavMsaflCPJ8n6AXK/9b2/k0PFkuwdB6O7fPZLXiafePrBG1v43eXW/Yjrr+1nj+N3UGmBBddf3AOv/a9vYmfAS63tsI/l4N82lMFUyKMJ3IMmniHbfTXUJ9JlsbYQzis+j5XL0uaISFUnb76ZbF7MNySwPu95qftrHh82Phkvsphbp9t9Jtj5aJL072KWj6yzzRX98psmv8ssb6C2Njps6ZIR9XlXuRGeUPLD/whI7KRlDgluuybJPCl0++i1CTRElrRhM51nuTGGbUJze/DfINEcraWV7Ax2Tc58Qq6zWSsOfwAUiT5PY2QoK36DOqv8MKSUbbb/IH4ALEamvAbdwwQLdZZlL4RJxbdXiF4VHsJyB4q/AWWSnF1FYETMo9r1F2auhGvUKBfBb0Ae7wHelL98DWxbXUitCHsUHgxscwRJpzzp9leFDj4gYcdlFMAGa2KavOha88g6E4Ba6qvT30ArAITT188aAT4lV8ixgCThsY3wXwKf8aJE6C+gAMRN0jG8TidsgxyJ5FgAePqkSi5gL08a7WqPOAiJ4gKpYlTPPBrO/APDRV7O4tuJO1JzbrWMmtrCqIpuJk0hq5AsfhSJjXxXvdRObyOvjRW1ic6b64QHi1K1NMqMjmNSrTpQw4Otjfy9ixrKhxHpCnLK61DSAk2PDEBGBArcmHsYHYFIbskGwRF2kaTumCJf3eyUQrnBdLDcRQfTscJW4Ia1Fhh9IUmJHMgim4LXwEoW6Jzc7d/yIpSkuFZF8FT5j/eVWtWf+gx8r/XocROHcM1tW1lmc7BqEFYHkG9i6p3AwLMmuSgDHcG3rnl/xQaxDLEOYkZ61nFEr5gs7GrYahPKydgz/+MJXscb5xhAeKzKJcysg3DFu76aGALrLIkMJ1qdvF6ZC0OQIhWg43U6/StSRtv8+E9/s7cEaEYPyFPo+XDvU5YR7dHPUtupa16XnEVQHdTEQgkZuJZ+8uHgB8VJWT689YcQd2qHTHCISTKWidJSscKPlEqedrT0la4hQhByo7PPPdA0mK50btkBlFbTyvdVbtsiUvp3tyqGTa5V+0MwCLUU6fg8iMCYL/a1kZbRoMrjjfOnv5u3t8drrhHWJqElxjQNjOOv+fsjqaB8dM3c8KoUJIdz1GHMGy/o2CZ2EZ5FNqs2zhbRyfDcJBZv2NarfdgLfaZv5cFOmWP9R7eUyNOrWbDOnOd5h6OatRwHMqdP+qNFWrkVYbJr+LJRJUq29ZPj2dmPtCRFvyBrepiv83kqGtvVg13XeCkv2lGR28tNS7K4S8ri0rKTJAHvO9O3mgZA0khW2dbWFEoiz+ZvbE7t5kTaFxsfBDyhlzLt7jjh3qwkrroV/JYZihRKnQWq1kWe0I5xFnd71uO2vXOZmulDABX8Xb+RVYbXJcn09mTSlWbbzo/H64sqbhb/vLTkCv4VefhJF4j2pmw2i4c5hip5h7rxLQeZ7TzIPOD8/1ZluGJF6JGz0HlZtAWEi/cIlKW2CYhc/Wk+YTAgT/pZCNxDFCOTfOHrxNiLO9XR4p03S7WHf+/+WbQRlaAqhPtsSxh+uIHOO2hT6ww3Lyh2C3tBOA6KJ6thtp7udb7slY7v7Ec0wKwrW1cg1gChDs1+jFe2CzD66n7/CqVexmFyzrTJaywyvYvILPsf8r/Dney/JzAh0PtNd4UiVPrCG2YGjc/wXCJi+qKb3Y5WOFQSvTQx38J1vaBxm8AUXvSwQ2vVSIqd04LwMxt8trWwf/0PUTYB/Wka4TE2g8F6X/D4Gaamy+JUCpp6T3MZyzY0lsP3v1OHP+F9jERN+ZQGTv6O/scRFLFZECXYLlJ6/5EefGCcnMLivYNQFKCQVzoxgH0WO1BZmm4Sj4tovPt3CthEhzea/V0m4Szgq1iUqbIB0EIr/D5IzL+9QXicOI7OrFxNtzA7B8UEE7ST2aobUVEC1Edg0haPEAt0LWMsh/lFb5Zc52CemUlisRQmdxI0TmTQRFbakL8I8Voigb2xxOMEASmqa9CJAGbRb+QdnpyUiHE8WSl83gsEqbKvubQuN3yDdnSb2160YSgnb9CekiAhbqVi+A0Wea0egJioOWGYVIgEFbB0T9Fw4HkM54CxBjpW+9kQjukR+gYcqCffqY5oKIJOJYolD+EUbRxHm46Ujx0T0XpLr1sYVtIP/xxIql3MtQnwOqS7e9uCJydlehDIcJPtcCy1A9RNcFT++gIfOKvOp0HcOkVstoPHTXNYMZFkLqvA5ofZC5k/1B1fQfDxRlBCIile0MvyZvTQnjlWzvzpwwkHFGBh4WoHKeegBy82QZ27ydGqgSh6ugQJzK2UYu+JOObMqnKq1574iTaquL4WHp9I4QkG7kmP+JGQNM4q8R4rCDTXxEeDTKtXgQ3EK8zp0QIbGrGa/J5Gk349VbUOAaSpVNlGoOjf3PIOqBKOTqFphzvPywck1748CXU35owRAuMZInCqqGhx8Vl9zEiLCXJwKCVc06ReMb3ENohkz1TnMyxmLfh2Ey//kN0LRh14Us4eiwgvD0mWxjiKBn/e0RADFWEmJYGjxKAE4g8fBGG3apTx+RTFqkGvKC5fANC8UU63RzBmlDGdEPFwiVCS3aQq0qyhYMh2iEf+qTh/gMmtYugd9GSe3S/OZT5wiw3kVQpIyDUpbEnGIXe1YkUznKyx9gUXFWQBxjbNeJHQhOUqIafvEp0x5EUJFrAdGjBn18Y2ejMO12kBCmbAooR3TZXBYI00wqJbci/WN0sJPQlpumW8LAXylzBp3pbH9w1jam7QMx1pYM4Gt0NqepmpMbCF2vbXWb+a2tBQhtqRklZUSrOVlz5pjyU5gC11y0X15ScymJtMJrk+KNUtlDnKzRC8S7oMFeiW6v0TEXd4emIs4DqqXGJQKGkd3/BewaUqZ7qIR2UDUxD+qV2UxU7gHWhFNaNKUmhcWxvpCT+An8IwvaXJ4qFqhzgMCY7JLFuaIWO261HUPPM+V5k+quFRnD7dASJUMg8QjGw0c/af41g0uTeSSRuMcQh4tm0mOXVgDdfGkGOX42RAjeSV6sSz1oXOY7y9lEctDgyifU3IPh/JmtWJ9uAT8zcumy2Lj2SAEFu+h5qWKVq5Cm2YKRBRyygYHYh/RID707FvSnme5lRk1fF1wVQ/K4PLpQLGH5cduxhOgdP1nXxJsKfzdRM7JIFUWB6MNyj93zxVq+3idLJ8WjVxL1kAYpDsXFSRNfK1+Ve5HqkwS0SLldoACODCImMXBE4OCpZjDS1gLyXd1cafIok28EYOblKrFTpeBxu89pX+p/V9T97vfDmE32BYJxk+4QKMJvWK4m4HVJkJLQZnj4Q+XK4/y1ehaeFViB81qG0W0zKAdQtRwl744zK1ret5/kFggNUqQi7yeSaAmruF+ybzbMPnyMsNp/CAUZRATBrPv7FcdtiYJMzYvyZR3l2rdECKpZ78h5iP56ivkmD3Ddd5gDg2IeKtp9kqFY9I2QMSwmEroJrNWGlFF4tp9fc8uFQ8wnTAP3Bmz8l2RoEPI4jSO1iplohuX3+nVUeQAjCcpdBH0cU2/IzgwrS0GJSCmxVggY2ZranG4TEesqOkCYZDddAg/KCCwVI7bQ+mAlXk9OnxviHH3BUgm6CUS8hHugnQ7oXkJbBcwQ9nojgCo23MKPaFCDHl6AxE3LrdPvBilQpEpzAjxanNGOoNMzBgj41smXOcqE5VhFAWZ03MXC8vsW5Cr9C2fgUDWzlFKAY6zuenxKFzOhsSrvOK4D1SqslpaDzMYKUKu2Vm84mwYDrEKIxThAh2v4pSeYeL0UAOGGK+8bBCO6ySxVRjABQaVB2bskn1/h3Kq3x86kvUhWqF9MJpAjncr9Ac8sUlYWYht9eVDJB/iQVCFAvtuQmRZeUdymIr0Em+rJZ3D4SA72+J7A29ZO16XM1rnxKnh1dp0npilp1URtisSOa3hksu2785WE8m13b+HoQZrzObJORLWXuTdcjLzKRi+jVU72brOJ1Qx9ol4ssKXBb3LaTYa5y8ymqd4wrMXQArl77yf7KZf+1ZcTOrPOr3u4oyYKx2F9LiG7iSPxb/8uGnY8y7K4Zez6zk9fIjZ7Hb2R7I0PcLcZYxyNFkdVvd9pczjqsU9VhCMZPTPgGzEnKHR9CtKbmbra3Gg6SlZKLDcWn2katJ/BsuqP/4GYUvp/nyltQnmHvOc8629WK+37d3Zuf+ZfW5kYn1ee5SZMlICiAdzOf8tFCXe6DGG9w4sfXSI7l4x5XTqquotCoCZasjj7GA0IvNlA9xmS6oe/6cC4qyvomf/12SBmC5eN6Y2GgWl9hFxOpjm2Ae9vtQoyF/f8rUDMVsLkg6WqVZHXHY4FlETtbnm/b5BWP/1k6L8rz51C4hCjwFtapsgeb9x8f1+gF2++KXpu+F1iRhXjB7FxPNWt1MZUsJhn0s0Qmp53mX8q2OiO93dJGCPGasY/QATzhl1++ueQdwk7C0mgSt/ag+OcHfXd8xqDTvj6WJ3OQ8Oh8PgPGpPh/sqZMx6090Bs8djuyvCn9H0d6sJD9qnt7+OxSLC2ce4u27flpfP/m2xPvUi+9nLBg0aNGjQoEGDBg0aNGjQoEGDBg0aNGjQoEEd8T8UoK7Qmn7DPwAAAABJRU5ErkJggg==",
    category: ["all", "frontend"],
  },
  {
    name: "NextJs",
    icon_url: "https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png",
    category: ["all", "frontend"],
  },

  {
    name: "Express",
    icon_url: "https://github.com/vivekgoswami934/ReactProjects/blob/master/images/Portfolio%20images/images/express.jpg?raw=true",
    category: ["all", "backend"],
  },
 
  {
    name: "Chakra UI",
    icon_url: "https://github.com/vivekgoswami934/ReactProjects/blob/master/images/Portfolio%20images/images/chakraUi.jpg?raw=true",
    category: ["all", "frontend"],
  },
  
  {
    name: "Material UI",
    icon_url: "https://github.com/vivekgoswami934/ReactProjects/blob/master/images/Portfolio%20images/images/materialUi.jpg?raw=true",
    category: ["all", "frontend"],
  },
  {
    name: "node",
    icon_url: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
    category: ["all", "backend"],
  },
  
  



  
];


let tools= [
  {
    name: "VS Code",
    icon_url: "https://w7.pngwing.com/pngs/905/947/png-transparent-microsoft-visual-studio-code-alt-macos-bigsur-icon-thumbnail.png",
    category: ["all", "frontend"],
},
{
  name: "GitHub",
  icon_url: "https://w7.pngwing.com/pngs/182/979/png-transparent-github-repository-commit-version-control-github-angle-rectangle-logo-thumbnail.png",
  category: ["all", "frontend"],
},
{
    name: "Vercel",
    icon_url: "data:image/png;base64,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",
    category: ["all"],
  },
  {
    name: "Chakra UI",
    icon_url: "https://github.com/vivekgoswami934/ReactProjects/blob/master/images/Portfolio%20images/images/chakraUi.jpg?raw=true",
    category: ["all", "frontend"],
  },
  {
    name: "Postman",
    icon_url: "https://github.com/vivekgoswami934/ReactProjects/blob/master/images/Portfolio%20images/images/postman.png?raw=true",
    category: ["all", "backend"],
  },
  {
    name: "Thunder Client",
    icon_url: "https://d4.alternativeto.net/nN2-THJrgYk010UDHRym4uCwF8sfckprDu1APEdrqwg/rs:fill:280:280:0/g:ce:0:0/YWJzOi8vZGlzdC9pY29ucy90aHVuZGVyLWNsaWVudF8yMTMzMjYucG5n.png",
    category: ["all", "backend"],
  }
]


function displayTools(tools) {
  mytoolsskills.innerHTML = null;
  tools.forEach((el) => {
    let itemContainer = document.createElement("div");
    itemContainer.setAttribute("class", "service-item padd-15");
    itemContainer.innerHTML = `<div class="service-item-inner">
        <div class="">
          <img src=${el.icon_url} width="48px" height="48px"/>
        </div>
        <h4>${el.name}</h4>
      </div>`;

      mytoolsskills.append(itemContainer);
  });
}

displayTools(tools)









let myTechnicalSkills = document.getElementById("myTechnicalSkills");
let all_filter_btn = document.querySelector(".all_filter_btn");
let frontend_filter_btn = document.querySelector(".frontend_filter_btn");
let backend_filter_btn = document.querySelector(".backend_filter_btn");
all_filter_btn.classList.add("active_tech_skills");
all_filter_btn.addEventListener("click", () => {
  filterSkills("all");
  all_filter_btn.classList.add("active_tech_skills");
  frontend_filter_btn.classList.remove("active_tech_skills");
  backend_filter_btn.classList.remove("active_tech_skills");
});

frontend_filter_btn.addEventListener("click", () => {
  filterSkills("frontend");
  all_filter_btn.classList.remove("active_tech_skills");
  frontend_filter_btn.classList.add("active_tech_skills");
  backend_filter_btn.classList.remove("active_tech_skills");
});
backend_filter_btn.addEventListener("click", () => {
  filterSkills("backend");
  all_filter_btn.classList.remove("active_tech_skills");
  frontend_filter_btn.classList.remove("active_tech_skills");
  backend_filter_btn.classList.add("active_tech_skills");
});

function displaySkills(skills) {
  myTechnicalSkills.innerHTML = null;
  skills.forEach((skill) => {
    let itemContainer = document.createElement("div");
    itemContainer.setAttribute("class", "service-item padd-15");
    itemContainer.innerHTML = `<div class="service-item-inner">
        <div class="">
          <img src=${skill.icon_url} width="48px" height="48px"/>
        </div>
        <h4>${skill.name}</h4>
      </div>`;

    myTechnicalSkills.append(itemContainer);
  });
}

function filterSkills(basis) {
  let filtered = skills.filter((el) => {
    return el.category.includes(basis);
  });
  displaySkills(filtered);
}

displaySkills(skills);
