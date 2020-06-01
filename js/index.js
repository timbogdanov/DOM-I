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
    "copyright" : "Copyright Great Idea! 2020"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

const logo = document.getElementById('logo-img');
logo.src = siteContent["nav"]["img-src"];

const ctaImage = document.getElementById('cta-img');
ctaImage.src = siteContent["cta"]["img-src"];

const middleImage = document.getElementById('middle-img');
middleImage.src = siteContent["main-content"]["middle-img-src"];


// TASK 2

const button = document.querySelector('.cta-text button');
button.textContent = 'Get Started';

const domIsAwesome = document.querySelector('.cta-text h1');
domIsAwesome.textContent = `DOM IS AWESOME`;

const navItem1 = document.querySelector('nav a:nth-of-type(1)');
navItem1.textContent = siteContent["nav"]["nav-item-1"];

const navItem2 = document.querySelector('nav a:nth-of-type(2)');
navItem2.textContent = siteContent["nav"]["nav-item-2"];

const navItem3 = document.querySelector('nav a:nth-of-type(3)');
navItem3.textContent = siteContent["nav"]["nav-item-3"];

const navItem4 = document.querySelector('nav a:nth-of-type(4)');
navItem4.textContent = siteContent["nav"]["nav-item-4"];

const navItem5 = document.querySelector('nav a:nth-of-type(5)');
navItem5.textContent = siteContent["nav"]["nav-item-5"];

const navItem6 = document.querySelector('nav a:nth-of-type(6)');
navItem6.textContent = siteContent["nav"]["nav-item-6"];


const featuresH4 = document.querySelector('.top-content .text-content h4');
featuresH4.textContent = siteContent['main-content']['features-h4'];

const featuresP = document.querySelector('.top-content .text-content p');
featuresP.textContent = siteContent['main-content']['features-content'];

const aboutH4 = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
aboutH4.textContent = siteContent['main-content']['about-h4'];;

const aboutP = document.querySelector('.top-content .text-content:nth-of-type(2) p');
aboutP.textContent = siteContent['main-content']['about-content'];;