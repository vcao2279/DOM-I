const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//create a NodeList of nav_items, then convert it to array
let nav_items = Array.from(document.querySelectorAll("nav a"));

//assign values to each nav_item using forEach loop.
nav_items.forEach((element, index) => {
  element.innerHTML = Object.values(siteContent.nav)[index];
})

//CTA text and image
document.querySelector(".cta-text h1").innerHTML = siteContent.cta.h1;
document.querySelector(".cta-text button").innerHTML = siteContent.cta.button;
document.querySelector("#cta-img").src = siteContent.cta['img-src'];

//Top content
document.querySelectorAll(".top-content h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
document.querySelectorAll(".top-content h4")[1].innerHTML = siteContent["main-content"]["about-h4"];
document.querySelectorAll(".top-content p")[0].innerHTML = siteContent["main-content"]["features-content"];
document.querySelectorAll(".top-content p")[1].innerHTML = siteContent["main-content"]["about-content"];

//Middle image
document.querySelector("#middle-img").src = siteContent["main-content"]["middle-img-src"];

//Bottom content
document.querySelectorAll(".bottom-content h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
document.querySelectorAll(".bottom-content h4")[1].innerHTML = siteContent["main-content"]["product-h4"];
document.querySelectorAll(".bottom-content h4")[2].innerHTML = siteContent["main-content"]["vision-h4"];

document.querySelectorAll(".bottom-content p")[0].innerHTML = siteContent["main-content"]["services-content"];
document.querySelectorAll(".bottom-content p")[1].innerHTML = siteContent["main-content"]["product-content"];
document.querySelectorAll(".bottom-content p")[2].innerHTML = siteContent["main-content"]["vision-content"];

//Contact
document.querySelector(".contact h4").innerHTML = siteContent.contact["contact-h4"];

for (let i=1; i<=3; i++){
  document.querySelectorAll(".contact p")[i-1].innerHTML = Object.values(siteContent["contact"])[i];
}

//Footer
document.querySelector("footer p").innerHTML = siteContent.footer.copyright;

//New a
const a1 = document.createElement('a');
const a2 = document.createElement('a');
const nav = document.querySelector('nav');

nav.prepend(a1);
nav.appendChild(a2);

nav.firstChild.innerHTML = "Home";
nav.lastChild.innerHTML = "Exit";

//Change color
nav_a = document.querySelectorAll('nav a');
for (let i=0; i<nav_a.length; i++) {
  nav_a[i].style.color = 'green';
}