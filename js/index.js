const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

// write your code here
const html= document.querySelector('html');
const prevBody= document.body.cloneNode(true);
const Button= document.createElement('button');
Button.textContent="click me "
document.body.appendChild(Button);
Button.addEventListener('click',function(){
  html.replaceChild(prevBody,document.body)
})
//nav
const navs= document.getElementsByClassName('anchor');
for(i=0;i<navs.length;i++){
  navs[i].textContent=siteContent.nav['nav-item-' + (i+1)];
}
const logo= document.querySelector('#logo-img').src=siteContent.nav['img-src'];

const h1= document.querySelector('body > div.container > section.cta > div > h1');
h1.textContent= siteContent.cta.h1;
const button = document.querySelector('body > div.container > section.cta > div > button');
button.textContent=siteContent.cta.button;

const snipt_img=document.querySelector('#cta-img').src=siteContent.cta['img-src'];
//mainContent
const feature_4=document.querySelector('body > div.container > section.main-content > div.top-content > div:nth-child(1) > h4');
feature_4.textContent=siteContent["main-content"]["features-h4"];

const feature_content=document.querySelector('body > div.container > section.main-content > div.top-content > div:nth-child(1) > p');
feature_content.textContent=siteContent["main-content"]["features-content"];

const about= document.querySelector('body > div.container > section.main-content > div.top-content > div:nth-child(2) > h4');
about.textContent=siteContent["main-content"]["about-h4"];

const about_4= document.querySelector('body > div.container > section.main-content > div.top-content > div:nth-child(2) > p');
about_4.textContent=siteContent["main-content"]["about-content"];

const mid_img =document.querySelector('#middle-img').src=siteContent["main-content"]["middle-img-src"];

const services= document.querySelector('body > div.container > section.main-content > div.bottom-content > div:nth-child(1) > h4');
services.textContent=siteContent["main-content"]["services-h4"];

const services_4=document.querySelector('body > div.container > section.main-content > div.bottom-content > div:nth-child(1) > p');
services_4.textContent=siteContent["main-content"]["services-content"];

const product= document.querySelector('body > div.container > section.main-content > div.bottom-content > div:nth-child(2) > h4');
product.textContent=siteContent["main-content"]["product-h4"];

const product_content= document.querySelector('body > div.container > section.main-content > div.bottom-content > div:nth-child(2) > p');
product_content.textContent=siteContent["main-content"]["product-content"];

const vision=document.querySelector('body > div.container > section.main-content > div.bottom-content > div:nth-child(3) > h4');
vision.textContent=siteContent["main-content"]["vision-h4"];

const vision_content=document.querySelector('body > div.container > section.main-content > div.bottom-content > div:nth-child(3) > p');
vision_content.textContent=siteContent["main-content"]["vision-content"];

const contact=document.querySelector('body > div.container > section.contact > h4');
contact.textContent=siteContent.contact["contact-h4"];
const address=document.querySelector('body > div.container > section.contact > p:nth-child(2)');
address.textContent=siteContent.contact.address;
const phone=document.querySelector('body > div.container > section.contact > p:nth-child(3)');
phone.textContent=siteContent.contact.address;
const email=document.querySelector('body > div.container > section.contact >  p:nth-child(4)');
email.textContent=siteContent.contact.email;
//footer
const footer=document.querySelector('body > div.container > footer > p');
footer.textContent=siteContent.footer.copyright;



