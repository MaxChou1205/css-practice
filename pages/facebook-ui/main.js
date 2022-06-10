import "./style.scss";

const btnPlus = document.querySelector("#btnPlus");
const btnMessenger = document.querySelector("#btnMessenger");
const btnNotify = document.querySelector("#btnNotify");
const btnMore = document.querySelector("#btnMore");

const panels = document.querySelectorAll(".popover-panel");

window.addEventListener("click", e => {
  panels.forEach(p => {
    p.classList.remove("opacity-1");
    p.classList.add("opacity-0");
    p.classList.add("invisible");
  });
});

const openPanel = (index, e) => {
  e.stopPropagation();

  panels.forEach((p, idx) => {
    if (idx === index) {
      p.classList.remove("opacity-0");
      p.classList.remove("invisible");
      p.classList.add("opacity-1");
    } else if (p.classList.contains("opacity-1")) {
      p.classList.remove("opacity-1");
      p.classList.add("opacity-0");
      p.classList.add("invisible");
    }
  });
};

btnPlus.addEventListener("click", openPanel.bind(null, 0));
btnMessenger.addEventListener("click", openPanel.bind(null, 1));
btnNotify.addEventListener("click", openPanel.bind(null, 2));
btnMore.addEventListener("click", openPanel.bind(null, 3));

const leftSide = document.querySelector("#leftSide");

const renderLeftSide = (val, imgUrl) => {
  return `<div
    class="flex items-center p-2 rounded-lg cursor-pointer hover:bg-fb-active"
  >
    <div class="w-8 h-8 mr-4 rounded-full overflow-hidden">
      <img src="${imgUrl}" />
    </div>
    <div class="text-white">${val}</div>
  </div>`;
};

const items = [
  { val: "Max", imgUrl: "https://bruce-fe-fb.web.app/image/avator.png" },
  {
    val: "活動",
    imgUrl: "https://bruce-fe-fb.web.app/image/left/activity.svg"
  },
  {
    val: "天氣",
    imgUrl: "https://bruce-fe-fb.web.app/image/left/cloudy.png"
  },
  {
    val: "災害應變中心",
    imgUrl: "https://bruce-fe-fb.web.app/image/left/dynamic.svg"
  },
  {
    val: "病毒應變中心",
    imgUrl: "https://bruce-fe-fb.web.app/image/left/facemask.svg"
  },
  {
    val: "社團",
    imgUrl: "https://bruce-fe-fb.web.app/image/left/friend.svg"
  },
  {
    val: "企業管理平台",
    imgUrl: "https://bruce-fe-fb.web.app/image/left/job.png"
  },
  {
    val: "Messenger",
    imgUrl: "https://bruce-fe-fb.web.app/image/left/messenger.svg"
  },
  {
    val: "廣告動態",
    imgUrl: "https://bruce-fe-fb.web.app/image/left/pay.png"
  },
  {
    val: "朋友名單",
    imgUrl: "https://bruce-fe-fb.web.app/image/left/sale.png"
  },
  { val: "最愛", imgUrl: "https://bruce-fe-fb.web.app/image/left/star.svg" },
  {
    val: "Marketplace",
    imgUrl: "https://bruce-fe-fb.web.app/image/left/store.svg"
  },
  {
    val: "Max",
    imgUrl: "https://bruce-fe-fb.web.app/image/left/watchingTv.svg"
  }
];

let leftsideStr = "";
items.forEach(item => {
  leftsideStr += renderLeftSide(item.val, item.imgUrl);
});

leftSide.innerHTML = leftsideStr;

// 右側選單
const rightSide = document.querySelector("#rightSide");
const rightSideItem = document.querySelector("#rightSideItem");

for (let i = 0; i < 10; i++) {
  let clone = rightSideItem.cloneNode(true);
  clone.id = "rightSideItem" + i;
  rightSide.appendChild(clone);
}

// 限時動態
const storyList = document.querySelector("#storyList");
const storyItem = document.querySelector("#storyItem");

for (let i = 0; i < 6; i++) {
  let clone = storyItem.cloneNode(true);
  storyList.appendChild(clone);
}
