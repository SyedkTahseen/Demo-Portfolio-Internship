Syed Khizr Tahseen's Portfolio Website
=====================================

Overview
--------
This is a personal portfolio website for Syed Khizr Tahseen, a B.Tech Information Technology student at PTU and an aspiring Full-Stack Web Developer. The website showcases my skills, projects, and contact information, designed with a modern and responsive layout to provide an engaging user experience.

<p align="center">
  <a href="https://syedktahseen.github.io/portfolio/" target="_blank">
    <img src="https://img.shields.io/badge/🚀_View_Demo-0A66C2?style=for-the-badge&logo=github&logoColor=white&labelColor=101010&color=007ACC" alt="View Demo Button" style="height: 40px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);">
  </a>
</p>

Features
--------
- Responsive Design: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices.
- Hero Section: Displays a profile image, introduction, and social links (Resume, LinkedIn, GitHub) with a typing animation for the subtitle.
- Skills Section: Highlights technical skills in languages, web development, and databases.
- Projects Section: Showcases a highlighted project with details, technologies used, and links to a live demo and GitHub repository.
- Contact Section: Provides contact information (email, phone, location) and a functional contact form that submits data to a Google Apps Script endpoint for processing.
- Animations: Includes fade-in animations for sections and a typing effect for the hero subtitle.
- Navigation: Fixed header with a responsive hamburger menu for mobile devices.

Technologies Used
-----------------
- HTML5: For the structure of the webpage.
- CSS3: For styling, including responsive design and animations.
- JavaScript: For interactivity, such as the typing animation, fade-in effects, hamburger menu toggle, and contact form submission handling.
- Font Awesome: For icons used in the skills, contact, and footer sections.
- Google Fonts: Poppins font for a modern typography style.
- External Libraries:
  - Font Awesome CDN: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css
  - Google Fonts: Poppins (https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap)
- Google Apps Script: For handling contact form submissions (endpoint: https://script.google.com/macros/s/AKfycbzRYnkijR3cM7mhhIRayTkKecm0vuqmTZ3vTdTsRf7tLpBsvp4HfxYWgUFfbIB3RJ37eg/exec).

Setup Instructions
------------------
1. Clone the Repository:
   ```
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```
2. Open the Project:
   - No additional setup is required since this is a static website.
   - Open the index.html file in a web browser to view the website locally:
     ```
     open index.html
     ```
   - Alternatively, use a local development server (e.g., VS Code Live Server extension) for a better development experience.
3. Contact Form:
   - For Contact Form i have added link with the google sheets when ever you try to contact me with the form then i can get the details of you in google sheets.
4. Customize Content:
   - Update the profile image in index.html by replacing the src attribute of the .hero-image with your own image URL or local file path.
   - Modify the contact information in the #contact section to reflect your details.
   - Update the project details in the #projects section with your own project information and links.
   - Adjust the links in .hero-btns (Resume, LinkedIn, GitHub) and footer social links with your actual URLs.
5. Deploy (Optional):
   - Deploy the website to GitHub Pages, Netlify, or any other static hosting service by uploading the project files.
   - Ensure all external resources (Font Awesome, Google Fonts, images) are accessible.

File Structure
--------------
```
portfolio-website/
├── imgs/
│   ├── background.jpeg
│   ├── profile.jpg
│   └── project.png
├── index.html        # Main HTML file
├── style.css         # CSS styles for the website
├── script.js         # JavaScript for interactivity, animations, and form submission
└── README.md         # Project documentation
```

Usage
-----
- Navigate through the sections (Home, Skills, Project, Contact) using the header navigation.
- On mobile devices, click the hamburger menu to access the navigation links.
- Use the contact form to send messages. The form submits data (name, email, message) to the Google Apps Script endpoint, with feedback provided via alerts for success or failure.
- Click the project buttons to view a live demo or GitHub repository of the showcased project.

Troubleshooting
---------------
- Profile Image Not Loading: Ensure the src URL in .hero-image is valid and accessible. Replace it with a local image (e.g., from the imgs folder) if needed.
- Animations Not Working: Check if script.js is correctly linked in index.html and there are no console errors. Verify that the browser supports the animations (modern browsers recommended).
- External Resources Not Loading: Ensure an active internet connection to load Font Awesome and Google Fonts CDNs. Alternatively, download and host these resources locally.
- Responsive Issues: Test on multiple devices and screen sizes. Adjust the media queries in style.css if needed.
- Form Submission Issues: Verify the Google Apps Script endpoint is correctly deployed and accessible. Check the browser console for errors and Google Apps Script logs for issues.

Future Improvements
-------------------
- Add a backend to handle the contact form submissions (e.g., using PHP or Node.js) as an alternative to Google Apps Script.
- Include more projects in the projects section with a carousel or grid layout.
- Add dark mode support for better accessibility.
- Implement lazy loading for images to improve performance.

Note: What Was the Most Interesting or Challenging Part of This Task?
--------------------------------------------------------------------
The most challenging part of this task was troubleshooting the visibility issues in the hero section of the portfolio website. Initially, the profile image and buttons (Resume, LinkedIn, GitHub) were not rendering on the page despite the text being visible. This required a deep dive into the CSS to identify potential conflicts with the fade-in animation, z-index stacking, and opacity settings. Adjusting the background brightness of the hero section was also interesting, as it involved fine-tuning the gradient overlay to balance aesthetics with content readability, ensuring the design remained visually appealing while making the foreground elements stand out. Integrating the contact form with the Google Apps Script endpoint was another engaging challenge, requiring me to set up the script, handle JSON data, and ensure proper client-side feedback, which enhanced the website's interactivity.

---
Built with 💙 by Syed Khizr Tahseen
Generated on: Friday, June 20, 2025, 10:11 PM IST
