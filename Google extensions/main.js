let logo = document.querySelector(".logo img");
let logoTwo = document.querySelector(".lnXdpd");

logoTwo.srcset = chrome.runtime.getURL("icons/icon128.png");
logo.src = chrome.runtime.getURL("icons/icon128.png");

console.log("hoooo");
