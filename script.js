import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
const supabase = createClient(
  "https://gxfhplrwkalsiirczdea.supabase.co",
  "sb_publishable_XaigQ9yBb4pljdIWysP2nQ_vB3-NK2X",
);
const { data, error } = await supabase.auth.getUser();

console.log(data);
console.log(error);

let viewer = document.querySelector(".viewer");
let btnAll = document.querySelector(".btnAll");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn = document.querySelectorAll(".btn");

let isAleadyXbtn = document.querySelector(".isAleadyXbtn");
let isAleadyObtn = document.querySelector(".isAleadyObtn");

let btnAllContent = document.querySelector(".btnAllContent");
let btn1Content = document.querySelector(".btn1Content");
let btn2Content = document.querySelector(".btn2Content");
let btn3Content = document.querySelector(".btn3Content");
let btn4Content = document.querySelector(".btn4Content");

let toLoginPage = document.querySelector(".loginBtn");
let toRegisterPage = document.querySelector(".registerBtn");
let toAddPage = document.querySelector(".addBtn");
let logoutBtn = document.querySelector(".signoutIcon");

let startPage = document.querySelector(".startPage");
let registerPage = document.querySelector(".registerPage");
let loginPage = document.querySelector(".loginPage");
let mainPage = document.querySelector(".mainPage");
let addPage = document.querySelector(".addPage");

let pages = ["startPage", "registerPage", "loginPage", "mainPage", "addPage"];
let page = pages[0];
console.log(page);

function render(page) {
  page = pages[page];
  console.log(page);
  startPage.classList.add("none");
  registerPage.classList.add("none");
  loginPage.classList.add("none");
  mainPage.classList.add("none");
  addPage.classList.add("none");

  switch (page) {
    case "startPage":
      startPage.classList.remove("none");
      console.log("clears");
      document.body.classList.remove(".bodyMain");
      document.body.classList.add("bodyForm");
      break;
    case "registerPage":
      registerPage.classList.remove("none");
      console.log("clearr");
      document.body.classList.remove(".bodyMain");
      document.body.classList.add("bodyForm");
      break;
    case "loginPage":
      loginPage.classList.remove("none");
      console.log("clearl");
      document.body.classList.remove(".bodyMain");
      document.body.classList.add("bodyForm");
      break;
    case "mainPage":
      mainPage.classList.remove("none");
      console.log("clearm");
      document.body.classList.remove("bodyForm");
      document.body.classList.add(".bodyMain");
      readTickets();
      readNick();
      break;
    case "addPage":
      addPage.classList.remove("none");
      document.body.classList.remove(".bodyMain");
      document.body.classList.add("bodyForm");
      console.log("cleara");
      break;
  }
}

toLoginPage.addEventListener("click", () => {
  render(2);
});
toRegisterPage.addEventListener("click", () => {
  render(1);
});
toAddPage.addEventListener("click", () => {
  render(4);
});

isAleadyXbtn.addEventListener("click", () => {
  render(1);
});
isAleadyObtn.addEventListener("click", () => {
  render(2);
});

let title = document.querySelector(".text");
let icon = document.querySelector(".icon");
let titles = ["sport", "classic", "concert", "travel", "all"];
let titlesKr = ["스포츠", "클래식", "콘서트", "교통", "전체"];
let iconTitles = [
  "baseball-bat-ball",
  "music",
  "microphone-lines",
  "plane",
  "bars",
];

let btnAllName = document.querySelector(".btnAllName");
let btn1Name = document.querySelector(".btn1Name");
let btn2Name = document.querySelector(".btn2Name");
let btn3Name = document.querySelector(".btn3Name");
let btn4Name = document.querySelector(".btn4Name");
let btnName = [btn1Name, btn2Name, btn3Name, btn4Name, btnAllName];

function btnClick(num, content) {
  if (num === 5) {
    viewer.classList.remove("btn1", "btn2", "btn3", "btn4");
    viewer.classList.add("btnAll");
  } else {
    viewer.classList.remove("btnAll", "btn1", "btn2", "btn3", "btn4");
    viewer.classList.add("btn" + num);
  }
  icon.innerHTML = `<i class="fa-solid fa-${content} fa-2xl"></i>`;
  title.innerHTML = `<h1>${titlesKr[num - 1]}</h1>`;
  // console.log(icon);
}
function btnHover(name, num) {
  console.log(btnName[num - 1]);
  btnName[num - 1].classList.remove("none");
}
function btnHoverOut(name, num) {
  console.log(btnName[num - 1]);
  btnName[num - 1].classList.add("none");
}
function removeNone(h1Name) {
  h1Name.classList.remove("none");
}
function addNone(h1Name) {
  h1Name.classList.add("none");
}

// 접속 하자마자
btnClick(5, iconTitles[4]);
viewerShow("btnAll");

btnAll.addEventListener("click", () => {
  btnClick(5, iconTitles[4]);
  viewerShow("btnAll");
});
btn1.addEventListener("click", () => {
  btnClick(1, iconTitles[0]);
  viewerShow("btn1");
});
btn2.addEventListener("click", () => {
  btnClick(2, iconTitles[1]);
  viewerShow("btn2");
});
btn3.addEventListener("click", () => {
  btnClick(3, iconTitles[2]);
  viewerShow("btn3");
});
btn4.addEventListener("click", () => {
  btnClick(4, iconTitles[3]);
  viewerShow("btn4");
});

btnAll.addEventListener("mouseenter", () => btnHover(btnAll, 5));
btn1.addEventListener("mouseenter", () => btnHover(btn1, 1));
btn2.addEventListener("mouseenter", () => btnHover(btn2, 2));
btn3.addEventListener("mouseenter", () => btnHover(btn3, 3));
btn4.addEventListener("mouseenter", () => btnHover(btn4, 4));

btnAll.addEventListener("mouseleave", () => btnHoverOut(btnAll, 5));
btn1.addEventListener("mouseleave", () => btnHoverOut(btn1, 1));
btn2.addEventListener("mouseleave", () => btnHoverOut(btn2, 2));
btn3.addEventListener("mouseleave", () => btnHoverOut(btn3, 3));
btn4.addEventListener("mouseleave", () => btnHoverOut(btn4, 4));

function viewerShow(page) {
  switch (page) {
    case "btnAll":
      btnAllContent.classList.remove("none");
      btn1Content.classList.add("none");
      btn2Content.classList.add("none");
      btn3Content.classList.add("none");
      btn4Content.classList.add("none");
      break;
    case "btn1":
      btnAllContent.classList.add("none");
      btn1Content.classList.remove("none");
      btn2Content.classList.add("none");
      btn3Content.classList.add("none");
      btn4Content.classList.add("none");
      break;
    case "btn2":
      btnAllContent.classList.add("none");
      btn1Content.classList.add("none");
      btn2Content.classList.remove("none");
      btn3Content.classList.add("none");
      btn4Content.classList.add("none");
      break;
    case "btn3":
      btnAllContent.classList.add("none");
      btn1Content.classList.add("none");
      btn2Content.classList.add("none");
      btn3Content.classList.remove("none");
      btn4Content.classList.add("none");
      break;
    case "btn4":
      btnAllContent.classList.add("none");
      btn1Content.classList.add("none");
      btn2Content.classList.add("none");
      btn3Content.classList.add("none");
      btn4Content.classList.remove("none");
      break;
  }
}

let toStartBtn1 = document.querySelector(".toStartBtn1");
let toStartBtn2 = document.querySelector(".toStartBtn2");
toStartBtn1.addEventListener("click", () => {
  render(0);
  signUp.reset();
});
toStartBtn2.addEventListener("click", () => {
  render(0);
  signIn.reset();
});

let signUp = document.getElementById("signUp");
signUp.addEventListener("submit", async (event) => {
  event.preventDefault();

  console.log("submit");

  const email = document.getElementById("signUpId").value;
  const password = document.getElementById("signUpPw").value;
  const nickname = document.getElementById("signUpNick").value;
  console.log(nickname);

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        nickname,
      },
    },
  });

  if (error == null) {
    console.log("clear");
    const { data, error } = await signUp(email, password, nickname);

    if (!error) {
      alert("가입 되었습니다.");
      signUp.reset();
      render(0);
    } else {
      alert("retry");
    }

    console.log(data, error);
  }
});

let signIn = document.getElementById("signIn");
signIn.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("submit");

  const email = document.getElementById("signInId").value;
  const password = document.getElementById("signInPw").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (!error) {
    alert("로그인 되었습니다.");
    signIn.reset();
  } else {
    alert("retry");
  }

  console.log(data, error);
});

supabase.auth.onAuthStateChange((event, session) => {
  console.log(event);

  if (session) {
    render(3);
    console.log("sclear");
  } else {
    render(0);
  }
});

let category = ["sport", "classic", "concert", "travel"];
let addCategory = document.getElementById("addCategory");
let CategoryIcon = document.getElementById("addIcon");
let IconActive = document.querySelector(".selectIconBtn");
let selectedIcon = "";
let iconReset = document.getElementById("iconReset");

iconReset.addEventListener("click", () => {
  IconActive.classList.remove("active");
  CategoryIcon.classList.add("none");
  IconActive.innerHTML = /* html */ `
      <i class="fa-regular fa-square-plus fa-2xl"></i>
    `;
  IconActive.style.backgroundColor = "White";
  CategoryIcon.innerHTML = "카테고리를 선택해주세요.";
  addCategory.value = "";
});

IconActive.addEventListener("click", () => {
  console.log("click");
  if (IconActive.classList.contains("active")) {
    IconActive.classList.remove("active");
    CategoryIcon.classList.add("none");
    IconActive.innerHTML = /* html */ `
      <i class="fa-regular fa-square-plus fa-2xl"></i>
    `;
    IconActive.style.backgroundColor = "White";
  } else {
    IconActive.classList.add("active");
    CategoryIcon.classList.remove("none");
    IconActive.innerHTML = /* html */ `
      <i class="fa-regular fa-square-minus fa-2xl"></i>
    `;
    IconActive.style.backgroundColor = "White";
  }
});

window.iconClicked = function (iconName) {
  IconActive.innerHTML = "";
  IconActive.innerHTML = /* html */ `
    <i class="fa-solid fa-${iconName} fa-2xl activeIcon" style="color: white;"></i>
  `;
  if (iconName === "default") {
    IconActive.innerHTML = /* html */ `
      <i class="fa-regular fa-square-plus fa-2xl"></i>
    `;
    IconActive.style.backgroundColor = "White";
    CategoryIcon.classList.add("none");
  } else {
    IconActive.style.backgroundColor = "seagreen";
  }
  selectedIcon = iconName;
};

CategoryIcon.innerHTML = "카테고리를 선택해주세요.";

function categoryValue() {
  switch (addCategory.value) {
    case "default":
      CategoryIcon.innerHTML = "";
      CategoryIcon.innerHTML = "카테고리를 선택해주세요.";
      iconClicked("default");
      break;
    case "sport":
      CategoryIcon.innerHTML = "";
      CategoryIcon.innerHTML = /* html */ `
      <div class="icon-p">
        <i class="fa-solid fa-baseball fa-xl " style="color: white;" onClick="iconClicked('baseball'); "></i>
      </div>
      <div class="icon-p">
        <i class="fa-solid fa-basketball fa-xl" style="color: white;" onClick="iconClicked('basketball'); "></i>
      </div>
      <div class="icon-p">
        <i class="fa-solid fa-volleyball fa-xl" style="color: white;" onClick="iconClicked('volleyball'); "></i>
      </div>
      <div class="icon-p">
        <i class="fa-solid fa-futbol fa-xl" style="color: white;" onClick="iconClicked('futbol'); "></i>
      </div>
            `;
      break;
    case "classic":
      CategoryIcon.innerHTML = "";
      CategoryIcon.innerHTML = /* html */ `
      <div class="icon-p">
        <i class="fa-solid fa-music fa-xl" style="color: white;" onClick="iconClicked('music'); "></i>
      </div>`;
      break;
    case "concert":
      CategoryIcon.innerHTML = "";
      CategoryIcon.innerHTML = /* html */ `
      <div class="icon-p">
        <i class="fa-solid fa-microphone fa-xl" style="color: white;" onClick="iconClicked('microphone'); "></i>
      </div>`;
      break;
    case "travel":
      CategoryIcon.innerHTML = "";
      CategoryIcon.innerHTML = /* html */ `
      <div class="icon-p">
        <i class="fa-solid fa-bus fa-xl" style="color: white;" onClick="iconClicked('bus'); "></i>
      </div>
      <div class="icon-p">
        <i class="fa-solid fa-train fa-xl" style="color: white;" onClick="iconClicked('train'); "></i>  
      </div>
      <div class="icon-p">
        <i class="fa-solid fa-plane fa-xl" style="color: white;" onClick="iconClicked('plane'); "></i>
      </div>
      <div class="icon-p">
        <i class="fa-solid fa-ship fa-xl" style="color: white;" onClick="iconClicked('ship'); "></i>
      </div>`;
      break;
  }
}

addCategory.addEventListener("change", categoryValue);

let add = document.getElementById("add");
add.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("submit");

  const category = addCategory.value;
  const ticketName = document.getElementById("ticketName").value;
  const ticketDate = document.getElementById("datepicker").value;
  const description = document.getElementById("textarea").value;
  console.log({ category, ticketName, ticketDate, description });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user.id);

  const result = await supabase.from("tickets").insert([
    {
      user_id: user.id,
      title: ticketName,
      category: category,
      minicategory: selectedIcon,
      date: ticketDate,
      memo: description,
    },
  ]);
  console.log(result);
  if (!result.error) {
    console.log("clear");
    alert("저장되었습니다.");
    add.reset();
    IconActive.classList.remove("active");
    CategoryIcon.classList.add("none");
    IconActive.innerHTML = /* html */ `
      <i class="fa-regular fa-square-plus fa-2xl"></i>
    `;
    IconActive.style.backgroundColor = "White";
    CategoryIcon.innerHTML = "카테고리를 선택해주세요.";
    addCategory.value = "";
    render(3);
  } else {
    alert("retry");
    console.log(error);
  }
});

async function readTickets() {
  console.log("readTickets 실행");
  btnAllContent.innerHTML = "";
  btn1Content.innerHTML = "";
  btn2Content.innerHTML = "";
  btn3Content.innerHTML = "";
  btn4Content.innerHTML = "";
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: tickets, error } = await supabase
    .from("tickets")
    .select("*")
    .eq("user_id", user.id);

  console.log(tickets, error);

  if (error || !tickets) return;

  const group = tickets.reduce((acc, ticket) => {
    const category = ticket.category;

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(ticket);

    return acc;
  }, {});

  console.log(group);
  function ticketCard(ticketArea, category, minicategory, title, date, memo) {
    ticketArea.innerHTML += /* html */ `
    <div class="ticketCard">
      <div class="ticketIcon">
        <i class="fa-solid fa-${minicategory} fa-4x" style="color: #444444;"></i>
      </div>
       <div class= "ticketInfo">
         <div class="ticketTitle">${title}</div>
         <div class="ticketDate">${date}</div>
         <div class="ticketMemo">${memo}</div>
       </div>
    </div>
        
    `;
  }

  group.all = tickets;

  (group.all || []).forEach((ticket) => {
    console.log(ticket);
    let ticketArea = btnAllContent;
    ticketCard(
      ticketArea,
      ticket.category,
      ticket.minicategory,
      ticket.title,
      ticket.date,
      ticket.memo,
    );
  });

  (group.sport || []).forEach((ticket) => {
    console.log(ticket);
    let ticketArea = btn1Content;
    ticketCard(
      ticketArea,
      ticket.category,
      ticket.minicategory,
      ticket.title,
      ticket.date,
      ticket.memo,
    );
  });

  (group.classic || []).forEach((ticket) => {
    console.log(ticket);
    let ticketArea = btn2Content;
    ticketCard(
      ticketArea,
      ticket.category,
      ticket.minicategory,
      ticket.title,
      ticket.date,
      ticket.memo,
    );
  });
  (group.concert || []).forEach((ticket) => {
    console.log(ticket);
    let ticketArea = btn3Content;
    ticketCard(
      ticketArea,
      ticket.category,
      ticket.minicategory,
      ticket.title,
      ticket.date,
      ticket.memo,
    );
  });
  (group.travel || []).forEach((ticket) => {
    console.log(ticket);
    let ticketArea = btn4Content;
    ticketCard(
      ticketArea,
      ticket.category,
      ticket.minicategory,
      ticket.title,
      ticket.date,
      ticket.memo,
    );
  });
}

logoutBtn.addEventListener("click", async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
    alert("로그아웃 실패");
  } else {
    alert("로그아웃 되었습니다.");
  }
});

let nickShow = document.querySelector(".nicknameShow");

async function readNick() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user);

  nickShow.innerHTML = /* html */ `
<div class="nickFlex">
  <i class="fa-solid fa-circle-user fa-2xl"></i>
  <h1 class="nickNow">${user.user_metadata.nickname}</h1> 
</div>
`;
}
readNick();
