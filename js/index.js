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
const a1 = document.querySelector('body > div.container > header > nav > a:nth-child(1)') ;
a1.textContent='Services';

const a2 = document.querySelector('body > div.container > header > nav > a:nth-child(2)') ;
a2.textContent='Product';

const a3 = document.querySelector('body > div.container > header > nav > a:nth-child(3)') ;
a3.textContent='Vision';

const a4 = document.querySelector('body > div.container > header > nav > a:nth-child(4)') ;
a4.textContent='Features';

const a5 = document.querySelector('body > div.container > header > nav > a:nth-child(5)') ;
a5.textContent='About';

const a6 = document.querySelector('body > div.container > header > nav > a:nth-child(6)') ;
a5.textContent='Contact';

const logo= document.querySelector('#logo-img').src='./img/logo.png';

const h1= document.querySelector('body > div.container > section.cta > div > h1');
h1.textContent='DOM Is Awesome';

const button = document.querySelector('body > div.container > section.cta > div > button');
button.textContent='Get Started';

const snipt_img=document.querySelector('#cta-img').src='./img/header-img.png';

const feature_4=document.querySelector('body > div.container > section.main-content > div.top-content > div:nth-child(1) > h4');
feature_4.textContent='Features';

const feature_content=document.querySelector('body > div.container > section.main-content > div.top-content > div:nth-child(1) > p');
feature_content.textContent='Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const about= document.querySelector('body > div.container > section.main-content > div.top-content > div:nth-child(2) > h4');
about.textContent='about';

const about_4= document.querySelector('body > div.container > section.main-content > div.top-content > div:nth-child(2) > p');
about_4.textContent='About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const mid_img =document.querySelector('#middle-img').src='./img/mid-page.jpg';

const services= document.querySelector('body > div.container > section.main-content > div.bottom-content > div:nth-child(1) > h4');
services.textContent='services';

const services_4=document.querySelector('body > div.container > section.main-content > div.bottom-content > div:nth-child(1) > p');
services_4.textContent='Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const product= document.querySelector('body > div.container > section.main-content > div.bottom-content > div:nth-child(2) > h4');
product.textContent='product';

const product_content= document.querySelector('body > div.container > section.main-content > div.bottom-content > div:nth-child(2) > p');
product_content.textContent='Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const vision=document.querySelector('body > div.container > section.main-content > div.bottom-content > div:nth-child(3) > h4');
vision.textContent='vision';

const vision_content=document.querySelector('body > div.container > section.main-content > div.bottom-content > div:nth-child(3) > p');
vision_content.textContent='Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const contact=document.querySelector('body > div.container > section.contact > h4');
contact.textContent='Contact';
const address=document.querySelector('body > div.container > section.contact > p:nth-child(2)');
address.textContent='123 Way 456 Street Somewhere, USA';
const phone=document.querySelector('body > div.container > section.contact > p:nth-child(3)');
phone.textContent='1 (888) 888-8888';
const email=document.querySelector('body > div.container > section.contact >  p:nth-child(4)');
email.textContent='sales@greatidea.io';

const footer=document.querySelector('body > div.container > footer > p');
footer.textContent='Copyright Great Idea! 2020';
