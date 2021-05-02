# Demonstration of the website

![MenuDemoGif](https://github.com/AntonyXXu/MenuExercise_CM/blob/main/assets/MenuDemo.gif)

# Work / Project Examples

- Travel Website <br/>
  Deployed at https://travelsite-antony.herokuapp.com/ <br/>
  This is a school project I had worked on during my software development courses. As someone who felt confident in my abilities and was quick to grasp working with Node.js and integrating REST requests, I took a leadership role for my team to provide guidance and advice for implementation of various features such as user login, dynamic rendering from databases, and updating items within the database. While I was mainly responsible for the back-end functionalities, I had also developed the pages for the various package locations, creating, and purchasing packages. Additionally, I had helped some of my peers who were having troubles with creating pages based on database objects to better understand how dynamically rendering objects work within HTML, and how to pass object parameters within JavaScript to the templates. Overall, I had created the following features within the site:

  - Models and Schemas of locations, packages, purchases, and offices
  - Routing within the website, including GET/POST requests to create new users, reviews, packages, logins, and remove various reviews.
  - Home Page, User Account Page, and all Packages Page views

- Portfolio Website: <br/>
  Deployed at https://antonyxxu.github.io/ <br/>
  As I had been wanting to learn React, I thought it would be a perfect opportunity to create a portfolio website as a personal project. After doing various tutorials, I began creating my portfolio project with create-react-app. First, I had built most of the HTML elements and page contents within various page components, then began applying my new learnings in React. First, I began with simple linking of the pages, then began to apply hooks and internal properties to update components within the page, such as toggling gifs, hiding resume content, and filtering portfolio items based on a general project-type (similar to how the menu-items for the coding exercise were filtered, but only filtered data would be rendered).

  - After deploying onto GitHub Pages, I noticed that singe page applications do not work well on refresh of the page. I adjusted an online solution to cater it specifically for my project, where I can redirect error pages to the relevant single page link while also being able to redirect the user to external pages (such as github links).
  - Modals were also something I had thought to implement for my website using React. For each portfolio item, I created an individual detailed component page that would be opened upon clicking the portfolio button. With the Modal, it is automatically rendered based on the array of projects I had created. Also, I added various modal options that allowed for closing of the modal after the user clicks outside of the window.
  - Seeing various websites with animations, I was inspired to create basic animations in React as well. Using React-Spring, I was able to apply both states and hooks with animations for all page transitions, as well as animate hiding the resume page, and ultimately create slide-down modals for my portfolio projects page.

- Past Work Projects </br>
  Details at https://antonyxxu.github.io/portfolio</br>
  At my past role as a process engineer, I had spearheaded multiple projects to enhance business team operations. Although some of these projects are not software related, I believe they demonstrated my critical thinking, leadership, and teamwork skills. The primary example was working on a cooling water maintenance project, where I had developed and implemented a project from start to finish to capture $1.5M/year of savings. I had the idea to avoid rental cooling towers during maintenance after hearing about its cost from colleagues. First, I had performed some detailed analysis via Python and SeeQ to confirm if there was an opportunity. After the analysis, I had presented a case for action to various utilities subject matter experts to discuss a potential design, feasibility, and various risks associated with the proposal. With the risks identified and input provided, I worked with cooling vendors to design a feasible system and contacted safety/risk specialists to perform a Safety Study. With the design approved, I gathered a cross-functional team of maintenance, mechanical engineers, and operations to procure, construct, and operate the newly created bypass system.

  Admittedly, the new project did not initially work as intended - due to the systems being over 50 years old, there were some physical restrictions within various underground pipes (which we did not know at the time), resulting in only ~80% of work being able to be done. As the problem became evident during initial testing, I began detailed troubleshooting with other engineers. I revamped design assumptions, recalculated hydraulic requirements, and validated my findings with senior process engineers to confirm the piping issue. Then, I pulled relevant instrumentation resources and mechanical resources to brainstorm an idea to alleviate the existing piping issues. Through implementing the solutions together (a combination of spare pumps, level changes, and operational changes), we were able to successfully overcome the issue and allow for 100% of the work to complete.

# Inspiration

- Image Search and NLTK<br/>
  Recently, when I was browsing a few E-commerce websites, I had found a couple of them had some very interesting features. The two main features included being able to take a photo of a product, and the website would be able to direct you to the product in the photo immediately! This function was both very intriguing from a technical, and a business perspective. The implementation appears fairly difficult, but being able to build it within a website application would allow customers to be able to directly search for the product and its reviews through a simple photo. The function would also appear fairly interesting to customers who want to try out the new technology. The other feature was to be able to input a search item/word, and the website would show in a subwindow the relevant wikipedia page. This function likely applies machine learning and natural language processing to take the searched word and return its wiki page, and drove me to search more about how to implement the feature. After searching, it appears both functions use some Google API to be able to pull the relevant data, and display it on the webpage. For my current project, I am hoping to create a website capable of incorporating some of these two features within the website.

- GhostRacer and Wurd <br/>
  Code can be found at https://github.com/AntonyXXu/GhostRacer-Game and https://github.com/AntonyXXu/Wurd_Text_Editor <br/>
  As a process engineer transitioning into the tech industry, I felt it would be important to understand object-oriented programming and data structures/algorithms beyond what a bootcamp can offer to better improve my technical skills. Although the technology itself was not very abstract, I was more inspired by learning and upskilling my programming abilities to be able to create more efficient programs and projects. In parallel with taking a full-time software program, I had borrowed various friends' university notes and had leveraged a friend's UCLA C++ course resource to learn about DSA. For the course, I had found two projects the professor provided - one to create a "GhostRacer" game, and another to a text editor "Wurd". Seeing these two projects as a perfect opportunity to practice my object-oriented programing and data structure implementation skills, I decided to try and create these two projects. I thought it was very satisfying to apply recent learnings to create a game, create undo functions, and implement a trie for spell check and spelling suggestions. The professor created the GUI for both projects, but I had created the logic and algorithms for each program to work.

  - For GhostRacer, I had created an abstract Actor/object class, with its multiple derived classes (such as pedestrians, cars, goodies) that each have their own virtual 'action' function. The game world file I created uses a linked list to maintain all of the actors within the world and call its 'action' function during each frame to move each actor.
  - For Wurd, I used a linked list to maintain all of the lines within the editor. Then, pushing all edits to a stack and checking the edit type, I was able to create a function that allowed for batching of various actions (such that undo reverts a word typed as opposed to individual letters). Lastly, I implemented a trie (prefix tree) to create a spell check and spelling suggestion feature within the editor, that checks the current word and provides spelling suggestions based on a loaded dictionary.

- Reviews functions within websites <br/>
  After I had worked with my classmates to build the travel website, and as I had further developed my web development skills through my portfolio website, I had thought of ways to improve the travel website and implement more features as a learning opportunity. As I was browsing some shopping websites, I had noticed the review features that are tied to each product. While conceptually the review is not difficult to implement, seeing it in practice inspired me to add review functions within the travel website after the project was completed. Specifically, I was curious as to how the database for reviews are implemented and how they are rendered within the relevant pages. Ultimately, it drove me to decide that placing the schema within each package would likely be most efficient, as it would result in reduced computations from directly going into the specific package database as opposed to all reviews for all packages.

# Focus

- For this internship, I would like to be a part of building a professional website from start to finish, including design, implementation, deployment, and debugging of the website.
  - Specifically, I would like to focus on back-end applications, linking with databases, potentially applying third party API to create new features for the web-application product that I am working on, and connecting the functionality with the front-end user interface of the website.
  - I am also interested in deployment - I have taken some courses on AWS and cloud computing, but have not had as much experience in applying the various concepts. With respect to deployment, my primary experience is on Azure and Heroku-app, and it would be a great opportunity to learn in more detail about deployment processes.
  - That said, I would still like to work on front-end applications as a full-stack developer, and improve my design skills. I think that especially working with such a diverse team of artists and developers, it'll be a great experience to learn better about aesthetics and creating attractive web-pages and applications.
- In addition to looking forward to building a feasible product for business use, I am also looking forward to the internship providing me with valuable knowledge and learn more about software best practices, development of project code, and working on a software project at an outstanding company. As a junior developer, all of the following will be incredibly valuable for me to develop into a more well-rounded software developer and engineer.
  - While I've worked within a professional setting and in industry, I do not have much experience working within a professional tech work setting. I believe this internship will provide me with an improved understanding of the agile work environment in software development, and improve my conceptual understanding of agile work processes to something more experience based.
  - In addition, I believe it would be a great experience to work with knowledgeable senior developers at Critical Mass, and pick their brain on how they come up with programming ideas and the application of various tools they use. Similarly, seeing the approach seniors take towards debugging and solving technical issues is something else I look forward to.

# Code Challenge

## 2021 Internship Menu Exercise

## Specifications:

Tackle the following steps to create a menu for a "Fancy Italian Restaurant".

## 1. Sorting

- In `index.js`, loop over `menuItems` and categorize them into sections based on each items assigned `type`
- Sort the items in each category by their `menuOrder`

## 2. Rendering

- Render the sorted results into the appropriate container with `index.html`
- Format any prices. For example, 8.5 becomes \$8.50
- Render the "spicy" icon next to any menu items where `spicy` is `true`

## 3. Styling

- Add some "italian menu" styling to boost your stores sales. Use Google Images if you need inspiration.

## 4. BONUS: Filtering

- Add a checkbox to toggle spicy options. When the checkbox is checked, the spicy options should be visible. It should be checked by default.
