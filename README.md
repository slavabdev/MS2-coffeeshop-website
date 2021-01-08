<h1 align="center">Holybean coffee company</h1>

<div align="center">

[View the project here.](https://slavabdev.github.io/MS2-coffeeshop-website/)
</div>

<h2 align="center"><a href="https://ibb.co/4TKCCVC"><img src="https://i.ibb.co/6PrGGWG/website-screenshot.png" alt="website-screenshot" border="0"></a><h2 align="center">


### Legend:
This is a website of **Holybean Coffee Company**  – coffee company network with 3 coffee shops across the county Cork (Ireland). Website consists of three pages **Homepage, Locations and Subscribe** and supposed to be clear and user-friendly as well as responsive for different types of devices.

### Disclaimer 
Holybean coffee company does not exist and was created by the developer for the particular project. All the contact details, addresses, services and offers are not true.    

### Core audience of the website (CA):
-	People who love to have a cup of coffee or/and sandwich in Cork, Blackrock or Little Island.
-   People who search for a specialty coffee in Cork, Blackrock or Little Island.
-   People across the Ireland who wants to get a freshly roasted coffee delivery right to their home.
 
### Website business goals
* Build Holybean brand awareness among the CA representatives.
* Attract CA to the Holybean coffee shops.
* Provide clear information in a convenient form about the company and it's coffee shops locations, menu and promotions. 
* Promote new coffee shop in the Little Island.
* Attract new customers to the "coffee subscription" service.

## UX
### User stories:
- As a **new visitor**, I want to understand what this website about and what its purpose. 
- As a **new visitor**, I want to easily navigate the site to get a content what I need;
- As a **new visitor**, I want to see a website, which works properly on my device;
- As a **new visitor**, I want to see a fully-filled website with up-to-date information;
- As a **new visitor** of a coffee shop site, I want to see short content blocks with nice and relevant pictures;
- As a **new visitor**, I want to see a modern website with a pleasant colour palette.

- As an **interested visitor** of a coffee shop site, I want to easily find clear information about its locations;
- As an **interested visitor** of a coffee shop site, I want to easily find clear information about its special offers;
- As an **interested visitor** of a coffee shop site, I want to see all links are working properly.
- As an **interested visitor** in "coffee subscription" service, I want to get clear information how it works and how can I apply;
- As an **interested visitor**, I want to easily find out how to contact with coffee shops, take a look to the the menu, book a table or order a delivery;

### Design
- Color Scheme:
  - As a basis coffee [Color palette](https://colorpalettes.net/color-palette-3751/) was taken. But the accent were made on brown, milky,beige and dark grey (for font) colours. These colours were chosen because they associate with coffee theme and are pleasing to the eye.
- Typorgaphy:
  - There are two main fonts used in the website Montserrat and Lato – convenient and frequently used in web design. Some of the most popular fonts in Google Fonts.
  - The Montserrat font (with Sans Serif in case of fallback) is predominately used for navigation bar and all the buttons, headings and subheadings on the website. 
  - The Lato font (with Sans Serif in case of fallback) used text and the main text of the sections. 
### Wireframe
  - [View the website wireframe.](https://drive.google.com/drive/folders/12UOnEAKZP5YEfr_APOKrw8rKQdTS74_O?usp=sharing)
### Features
The website features are:
- **Navigation bar**
  - Website has a responsive navigation bar with a logo placing on the top-left and menu items on the top-right. When browsing the website from mobile devices, menu item list becoming a toggle-button with a full-screen drop-down list. 
  - For user’s convenient navigation, navigation bar has a fixed position. 
  - **Footer**
  - Footer includes social media icons with *hover effect* and active links to the particular pages. Considering the fact that Holybean coffee shop doesn't exists, social media links lead to the developer personal social media pages. 
  Also there is a copyright text below the icons.
- **Website summary**
  - Website consist of 3 pages: [Home](https://slavabdev.github.io/MS2-coffeeshop-website/index.html), [Locations](https://slavabdev.github.io/MS2-coffeeshop-website/locations.html) and [Subscribe](https://slavabdev.github.io/MS2-coffeeshop-website/subscribe.html).
  - For user’s comfortable navigation, every section inside the pages has a large and perceptible heading and pleasant picture. 
  - During the scrolling a website page for blocks of content slide-in effect applied.  This feature applied to all the pages of the website.

- **HOME PAGE**
- Besides navigation bar and footer **Home page** consists of **5 sections**: 
1. Carousel. There are three slides in carousel. Every slide includes heading and button for convenient navigation between sections and pages. 
    - For a smooth transition between sections on the same page smooth scroll feature is applied.
2. About.
    - The about section is made to be concisely and responsive.  There are a thematic photo and a short text.
3. Promo.
    - A promo section includes a thematic picture (picture does not display on mobile devices deliberately, so as not to overload the page) and the content part with short text description and form.
    - If the user enters his details (name and email) and push the Submit button, he will get an email with promocode. To be sure that form is submitted successfully, the user will see a corresponding alert at the page.
4. Locations
    - The Location section is made to be concisely and responsive.  There are a thematic photo and a short text with a button that leads to the Locations page.
5. Subscription section
    - The Subscription section is made to be concisely and responsive. There are a short text with a button that leads to Subscription page.
    - On desktop devices subscription section background image has a fixed position, which allows to create a parallax effect. For mobile devices hero-image is seen static, to avoid mobile cross-browser displaying problems. 
  
- **LOCATIONS PAGE**
- Locations page can be devided by 2 sections:
1. According to the legend, Holybean has 3 coffee shops. 
    - On the Locations page, every coffee shop has a  block with information with Name, address and contacts. There is also a "Show on map" button at the bottom of each block.
2. Google map.
    - Maps have been added to the site for easy access to coffee shops locations.
    - Every place has its own marker on the map.
    - By clicking a "Show on map" button, map brings to a particular marker.
    - By clicking on the marker, Inform window with a short text appears.
    - User can get directions by clicking a corresponding link inside the inform window.  

- **SUBSCRIBE PAGE**
- Subscribe page includes 3 sections:
1. The Subscribe details section is made to be concisely and responsive. There are a thematic photo and a short text. 
    - There is also a "Choose your subscription" button. But to avoid the site overload with content "Choose your subscription" toggle button is displayed only on mobile devices. (It toggle down Subscribe options section) 
2. Subscribe options section laid out in 3 small blocks which displayed permanently on large screens. Each block includes a short description of options and button on the bottom.
    - Depending on which button user presses, the text with his choice will be placed in the text area of ​​the form (he can also add to the placed content any text he wants). This feature is supposed to make it easier for the user to fill out the form.
3. Subscription form will allow the user who interested in a coffee subscription to leave his details for further communications.
    - Filled form with user details goes to Holybean email via EmailJS.

### Things to implement in future
- Add an online store page (With abilities to buy coffee and order delivery).

## Technologies used
- **Languages Used:**
  - [HTML5](https://en.wikipedia.org/wiki/HTML5)
  - [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
  - [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- **Frameworks, Libraries & Programs Used:**
1.	[Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
     - Bootstrap was used to assist with the responsiveness and styling of the website.
2.  [Google Fonts](https://fonts.google.com/):
    - Google fonts were used to import the “Open Sans” and “Montserrat” fonts into the style.css file which are used on the website.
3.	[Font Awesome](https://fontawesome.com/): 
     - Font Awesome was used to add icons to locations page and footer of the website.
4.	[jQuery](https://jquery.com/):
    - jQuery used to make the navigation bar responsive and to add event listeners.
    [EmailJS](https://www.emailjs.com/):
    - Used to Get and Send emails from/to the users.
5.	[AOS](https://michalsnik.github.io/aos/):
    - Animate on scroll library (AOS) used to create a slide effect while scrolling the website pages.   
6.	[Git](https://git-scm.com/):
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
7.	[GitHub](https://github.com/):
    - GitHub is used to store the projects code after being pushed from Git. 
8.	[jsDelivr](https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll/dist/):
    - jsDelivr was also used for the smooth scroll in JavaScript. 
9.	[Corel draw](https://www.coreldraw.com/):
     - Corel draw was used to resize images and editing photos for the website.
10.	[Balsamiq](https://balsamiq.com/):
    - Balsamiq was used to create the wireframe.
11.	[GitPod](https://gitpod.io/):
    - GitPod was used as an IDE to develop a project. A project was built on a gitpod template of the Code institute.

### Testing
The W3C Markup Validator and W3C CSS Validator Services were used in the project to ensure there were no syntax errors.
* [W3C Markup Validator](https://validator.w3.org/nu/).
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/). 

### Manual testing of all elements and their functionality.

- **NAVIGATION BAR**:
    - Hover over the logo and navbar items and verify that colour is changed.
    - Click on the logo to make sure that it links to the homepage.
    - Click all the navbar items to verify that they work and lead the user to correct pages.
    - Change the screen size from desktop to tablet and from tablet to mobile to make sure that the navigation bar switches from the inline menu to burger dropdown menu. Check all menu items to verify that they are on the correct place and burger animation works well.
    - Confirm that the navigation bar 
- **FOOTER**:
    - Hover over each social media icon and make sure that colour change expected.
    - Click on each icon to confirm that link opens in a separate tab.
    - Play with the window width to verify that the footer is responsive and looks good for different screen sizes
    - Confirm that footer code is the same on all HTML pages.
- **HOME PAGE**
    - Open the page in different browsers and scroll it down to make sure that slide in effect is working. 
-Carousel
    - Click on the arrows to verify that carousel works correctly and all slides are displayed accurately.
    - Hover over the buttons to make sure that they change the colour.
    - Click the buttons to verify that they link with the correct sections/pages
    - Expand and reduce a screen size to verify that slider looks good on different screen widths. 
- About section
    - Expand and reduce a screen size to verify that this section looks good on different screen widths. 
- Promo section
    - Confirm that all content is visible for desktop.
    - Confirm that photo is hiding for tablet and smaller devices. 
    - Expand and reduce a screen size to verify that section looks good on different screen widths. 
    - Verify that form cannot be submitted without filling of all the required lines.
    - Test the form to verify that user will get a promo code in his email
    - Verify that form will be automatically cleaned after submission
[Promo form test results](https://drive.google.com/file/d/1ULbFkERKyo6H8aIDAPeT-1nxv_caBcW6/view?usp=sharing)
- Locations section
    - Confirm that all content is visible
    - Hover over the button to verify that it changes its colour;
    - Click the button to make sure that it links with the correct page
    - Expand and reduce a screen size to verify that section looks good on different screen widths. 
- Subscribe section
    - Confirm that all content is visible
    - Hover over the button to verify that it changes its colour;
    - Click the button to make sure that it links with the correct page
    - Expand and reduce a screen size to verify that section looks good on different screen widths. 
    - Reduce the width of the window to confirm that the fixed background change to a static.
- **LOCATIONS PAGE**
    - Confirm that all content and Google Map are visible
    - Expand and reduce a screen size to verify that the page looks good on different screen widths. 
- Coffee shops description
    - Hover over the buttons and links to verify that they change its colour;
    - Click the button to make sure that it will zoom- in a correct map marker
    - Click the menu links and make sure that the menu file opens in the new tab.
    - Click the phone link to make sure that it will be opened by the internal phone agent
    - Click the email link to make sure that it will be opened by the internal email agent
- Map
    - Make sure that all markers are on the map
    - Click on every marker to verify that info-window will appear
    - Check that info window has a correct content.
    - Check all the links, including the get direction links inside the info window and verify that they work correctly.
- **SUBSCRIPTION**
- About 
    - Confirm that all content (except button) is visible in the desktop
    - Confirm that button will appear for tablet or devices with smaller screen widths. 
    - Hover over the button to verify that it changes its colour;
    - Click the button to make sure that it links with the correct section.
    - Expand and reduce a screen size to verify that section looks good on different screen widths. 
- Subscription options
    - Confirm that all content is visible in the desktop
    - Hover over the buttons to verify that it changes its colour;
    - Make sure that content will be hidden for tablet or smaller devices.
    - Verify that on a tablet or smaller devices this section can be toggled by the button from About section 
    - Click any button in the subscription options section  to make sure that they add a text to the text area of the form
    - Expand and reduce a screen size to verify that section looks good on different screen widths. 
- Form
    - Verify that form cannot be submitted without filling of all the required lines.
    - Test the form to verify that users request will be delivered to the Holybean email address.
    - Verify that form will be automatically cleaned after submission
    - Expand and reduce a screen size to verify that section looks good on different screen widths. 
    - Reduce the width of the window to confirm that the fixed background change to static.
    [Subscription form test results](https://drive.google.com/file/d/1pUIHtMiAhEF0IwY0bc_pRDE3G3ZanZI2/view?usp=sharing)


**Testing User Stories from User Experience (UX) Section**
- As a **new visitor**, I want to understand what this website about and what its purpose. 
    - Upon entering the site, the user sees the company logo on the navigation bar and a slider with themed images of coffee and the key information of the company. When scrolling down the home page, the user gets all the basic information about the company.
- As a **new visitor**, I want to easily navigate the site to get a content what I need;
    - The website has a clear and understandable, responsive and fixed navigation bar, which allow to user navigate the pages and sections easily.
    - User can navigate the website using navigation bar as well as buttons located on pages. 
- As a **new visitor**, I want to see a website, which works properly on my device;
    - Website is made fully responsive, so it’s convenient to browse on a desktop, laptop, tablet and mobile devices. 
    - Website works stably with different browsers as well.
- As a **new visitor**, I want to see a fully-filled website with up-to-date information;
    - All information, including description, locations, services, contact details and internal/external files are relevant and up-to-date.
- As a **new visitor** of a coffee shop site, I want to see short content blocks with nice and relevant pictures;
    - The content blocks designed to be short and clear so as not to take up users time.
- As a **new visitor**, I want to see a modern website with a pleasant colour palette.
    - The website (including the buttons, forms and content) is made in the one style and using pleasant coffee colour palette.
- As an **interested visitor** of a coffee shop site, I want to easily find clear information about its locations;
    - There are three different ways to get to the location page - navbar, slider and location section on the Home page.
    - On the location page user can pick any Holybean coffeeshop and zoom it in on the map, by clicking the "Show on map" button. Moreover, user can get a direction to a particular Holybean coffee shop by clicking a link inside the info window, which appears when the user clicks on a marker on the map.
    - User can easily navigate between the locations using the map inside the locations page. 
- As an **interested visitor** of a coffee shop site, I want to easily find clear information about its special offers;
    - User can easily find the actual information about the acting promo on the main page slider and in the promo section of the main page. 
    - Also the information about the promo is waiting for the user in location page (in the coffee shop block and in marker info window). 
- As an **interested visitor** of a coffee shop site, I want to see all links are working properly.
    - All buttons, forms and links were tested for many times and worked perfect.
- As an **interested visitor** in "coffee subscription" service, I want to get clear information on how it works and how can I apply;
    - User can get to the coffee subscription page using the navigation bar, slider and the bottom section of the main page.  
    - The subscription page is made clear and all section are arranged in the logical order. This gives the ability to the user calmly get familiar with all the conditions and submit an application.
- As an **interested visitor**, I want to easily find out how to contact with coffee shops, take a look at the menu, book a table or order a delivery;
    - All the contact details are located on the location page. Because the user will intuitively look for this information there.
    - To get rid of a user from typing manually, phone number and email are made as links. The menu is decorated as the link either and opens in a new tab.


### Further testing
- The website was tested on the following browsers:
    * Google Chrome;
    * Opera;
    * Mozilla Firefox; 
    * Microsoft Edge; 
    * Safari.
- To be sure that website is responsive, it was viewed on such devices as desktops, laptops, tablet (Samsung galaxy tab A), and mobile (Iphone 6, IPhone X, IPhone XS Max, IPhone11 PRO MAX, Samsung Galaxy S10) .
- All buttons, forms and links have been tested several times to make sure they work correctly.
- Friends and family members reviewed the website from their devices to make sure that website is displaying well and all functions are working properly. 
### Known Bugs
- At the current moment, if the user clicks on different subscription options buttons (subscription page) for many times, it causes to a page "freezing". To eliminate this user has to put a cursor and click at any place of the form lines or refresh the page. 
## Deployment
This project was developed using the GitPod, committed to Git and pushed to GitHub.
### GitHub Pages
To deploy the project to GitHub Pages the following steps were taken:
1.	Log in to GitHub and go to the [slavabdev](https://github.com/slavabdev?tab=repositories) GitHub Repository.
2.	From the list if existing repositories select the **slavabdev/MS2-coffeeshop-website**.
3.	At the top-right side of the Repository section, click on "Settings" Button.
4.	Scroll down to the "GitHub Pages" section.
5.	Under "Source", click the dropdown menu and change it from "None" to «Master Branch".
6.	The page will be automatically refreshed.
7.	Scroll back down to the "GitHub Pages" and retrieve a link of a published site.
### Forking the GitHub Repository
A forking the GitHub Repository is used for copying of the original depository to  GitHub account. It allows viewing or making changes in the project without affecting the original repository. It can be done using the following steps: 
1.	Log in to GitHub and go to the GitHub Repository.
2.	At the top-right of the page, just below the GitHub navigation bar, the "Fork" Button is located.
3.	Click the “Fork” button and get a copy of the original repository to a GitHub account. 
### Run project locally
1.	Log in to GitHub and locate the GitHub Repository.
2.	Click a “Code” dropdown button, which located just under the “Settings”.
3.	To clone the repository using HTTPS, copy the link with clone URL.
4.	Open Git Bash in your local IDE.
5.	Change the current working directory to the location where you want the cloned directory to be made.
6.	Type git clone, and then paste the URL you copied before.
```console
git clone https://github.com/SLAVABDEV/REPOSITORY
```
7.	Press Enter. Your local clone will be created.
```console
$ git clone https://github.com/SLAVABDEV/MS2-coffeeshop-website
> Cloning into `Spoon-Knife`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click the [link](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository) for getting more information about “*clone*” option
## Credits
### Code
- Code for the smooth scrolling (JS) was taken from  [Chris Ferdinandi GitHub page.](https://github.com/cferdinandi/smooth-scroll)
- Code for hiding a mobile menu after clicking on a link (JS) [Kirill Dubov GitHub page.](https://gist.github.com/KirillUnited/d71fd542c3d1c59ad00fee4f50a49c1f/revisions)
- Code snippet for my projects *hover effect* was taken and revised from [bbbootstrap.com.](https://bbbootstrap.com/snippets/simple-image-overlay-hover-effect-38877551)
- [Bootstrap 4](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library mainly used to  make responsive website.
- [Css-tricks](https://css-tricks.com/), [W3school](https://www.w3schools.com/), [MDN Web Docs](https://developer.mozilla.org/) and [Stack overflow](https://stackoverflow.com/): These resources were used to find coding hints and solutions. 
- [AOS](https://michalsnik.github.io/aos/):
This library was used to create a slide effect while scrolling the website pages.   

### Content
- All content was written by the developer.
### Media
- All images were taken from [Freepik](https://www.freepik.com/photos/background) and [unplush](https://unsplash.com).
- photos were made by @Tyler Nix, @Nathan Dumlao, @Wherda Arsianto, @Jonas Jacobsson, @Monika Dhita Adiati and @Danielle MacInnes
### README
- Code institute README.
### Acknowledgements
- Friends and family for helpful feedback.
- My Mentor Oluwafemi Medale for support and useful feedback.
- Code Institute for teaching me how to make coding magic.
