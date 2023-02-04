const searchEl = document.getElementById("search");
const bl_container = document.getElementById("bl_container");
const bl_containersearch = document.getElementById("bl_containersearch");
const allranking = 5;

const form = document.getElementById("form");
const colors = {
  backgroundall: "#F5F5F5",
  //backgroundcard: '#F5F5F5'
};

let bldata = [
  {
    name: "Yoichi Isagi",
    nickname: "Isagi",
    surname: "Yoichi",
    pic: "https://i.pinimg.com/564x/0c/d0/2b/0cd02b9535bb2d549e2ec8aeb54d3e10.jpg",
    weapon: "Spatial Awareness",
    team: "Bastard München",
  },

  {
    name: "Meguru Bachira",
    nickname: "Bachira",
    surname: "Meguru",
    pic: "https://i.pinimg.com/564x/2e/59/0f/2e590fe76e0bc3ff27fc521c0238cf53.jpg",
    weapon: "Dribbling",
    team: "FC Barcha",
  },
  {
    name: "Hyoma Chigiri",
    nickname: "Chigiri",
    surname: "Hyoma",
    pic: "https://i.pinimg.com/564x/8d/b2/13/8db213205142866fafb1484546bbacde.jpg",
    weapon: "Speed",
    team: "Manshine City",
  },
  {
    name: "Seishiro Nagi",
    nickname: "Nagi",
    surname: "Seishiro",
    pic: "https://i.pinimg.com/564x/dd/b3/10/ddb310abe3721e25e72a835e5c4aab0f.jpg",
    weapon: "Ball Control",
    team: "Manshine City",
  },
  {
    name: "Reo Mikage",
    nickname: "Mikage",
    surname: "Reo",
    pic: "https://i.pinimg.com/564x/de/46/f1/de46f1cb956e67d9ff3589c9675f65a3.jpg",
    weapon: "Copycat",
    team: "Manshine City",
  },
];

let searchbl = [{}];

searchEl.addEventListener("input", (word) => {
  //fetchapi(word.target.value);
  //if (word.target.value && word.key === "Enter"){
  console.log(word.target.value);
  sortblcard(word);
  console.log("finsh");
  //}
});

//console.log(bldata[0].name);

//loop ทุกตัวใน data และส่งไป create
const getblcard = () => {
  for (let i = 0; i < bldata.length; i++) {
    //console.log(bldata[i]);
    createblcard(bldata, i);
  }
};

const sortblcard = (word) => {
  let searchbl = bldata.filter(
    (item) =>
      item.name.toLowerCase() === word.target.value.toLowerCase() ||
      item.nickname.toLowerCase() === word.target.value.toLowerCase() ||
      item.surname.toLowerCase() === word.target.value.toLowerCase() ||
      item.team.toLowerCase() === word.target.value.toLowerCase()
  );

  console.log(searchbl);
  console.log(bldata);

  if (searchbl.length <= 0) {
    removebl();
    getblcard();
  } else {
    //bl_container.style.display = "none";
    removebl();
    for (let i = 0; i < searchbl.length; i++) {
      createblcard(searchbl, i);
    }
  }
};

//remove โดยให้ bl_container diplay = none

//เอาทุกตัวใน class bl ออก ?
const removebl = () => {
  let blELs = document.querySelectorAll(".blclass");
  blELs.forEach((rem) => {
    rem.remove();
  });
};

var createblcard = (forbldata, id) => {
  //console.log(blchar);
  //bl_container.style.display = "flex";
  var blEl = document.createElement("div");
  blEl.classList.add("blclass");
  var name = forbldata[id].name;
  var weapon = forbldata[id].weapon;
  var team = forbldata[id].team;
  var color = colors.backgroundall;

  blEl.style.backgroundColor = color;

  var linkimage = forbldata[id].pic;

  var blInnerhtml = `
    <div class="img-container">
        <img src= "${linkimage}"  />
    </div>
    <div class="info">
         <span class="number"> # ${id + 1} </span>
        <h3 class="name">${name}</h3>
        <h5 class="type"> Weapon : ${weapon}</h5>
        <h5 class="type"> Team : ${team} </h5>
    </div>
`;
  blEl.innerHTML = blInnerhtml;

  bl_container.appendChild(blEl);
};

getblcard();
