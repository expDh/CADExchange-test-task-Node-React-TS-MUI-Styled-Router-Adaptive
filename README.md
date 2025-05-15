# Test Assignment for CAD Exchange

## Technologies Used

- Node.js  
- React  
- TypeScript  
- Vite  
- Express  
- React Router  
- MUI (Material UI)  
- Styled Components  
- Responsive layout(Adaptive)

## Project Description

This project was developed as a test assignment for the company **CAD Exchange**.  
It is a single-page application (SPA) that features a contact form built with React(Vite), Material UI,Styled Components .  
Submitted data is sent to a backend server implemented using Express and TypeScript, where it is logged to the console.

After successful submission, the user sees a confirmation message indicating that the data was received by the server.

## Deployment on Render

The project is split into two parts: **frontend (React)** and **backend (Express)**.  
Both are deployed separately using the Render hosting platform.

- Frontend:  
  [https://cadexchange-test-task-node-react-ts-mui-i9un.onrender.com]

- Backend (API):  
  [https://cadexchange-test-task-node-react-ts-mui.onrender.com]

After submitting the form, you will see a success message on the frontend, and the submitted data will appear in the backend console.

## Assignment Requirements

The Task.
Create a simple two-page website that includes a main page, a contact page with a
form, and a basic backend to handle form submissions.
Links for the mockups:
1. Main page
https://download.cadexchanger.com/documents/hiring/frontend/main.svg
2. Contact us page with form
https://download.cadexchanger.com/documents/hiring/frontend/form.svg
3. Contact us page after submission
https://download.cadexchanger.com/documents/hiring/frontend/response.svg
Functional requirements:
1. Elements should be arranged as shown in the mockups (think of them as
wireframes — exact colors, spacing, and styles are up to you; showing off your
CSS skills is encouraged).
2. The pages should be responsive. The mobile layout is up to you; please use
common practices and patterns to create a usable version with minimal effort.
3. Both pages should have a sticky header and a footer
4. On the main page in the first section on the right (see mockups), there should be
an embedded youtube video from the following link:
https://www.youtube.com/watch?v=dQw4w9WgXcQ.
5. All 'Contact Us' buttons should link to the Contact Us page.
6. All fields in the form are required.
7. Upon submission, the form should send input data to the backend.
8. The backend should log the data to the console and reply with: “Thank you for
your interest, {Name},” using the name from the form.
9. After receiving the server response, the Contact Us page should update to show
the message from the response.
10.Any implementation details not specified here or in the mockups are up to you.
Technical requirements:
1. Everything should be written in Typescript.
2. The frontend part should be written using React and a third-party component
library (Ant Design, Material UI, Radix, React Aria, etc.).
3. For styling, use any modern CSS-in-JS library (e.g., Panda CSS, Stitches, Styled
Components).
4. You should use a meta-framework or preconfigured bundler (Astro, Vite, Next).
5. All pages and elements should follow common-sense SEO and accessibility best
practices, with special attention to Core Web Vitals and heading hierarchy.
6. The form must be built using components from a third-party library.
7. Form fields should be customized using CSS (including non-default states such
as "focus").
8. Write a README. Include setup and hosting details, notes on styling, SEO, and
performance choices and any assumptions made.
Additional assignments (these will help you stand out).
● We're looking for developers who are comfortable with CSS, so please
demonstrate a cool, uncommon, or cutting-edge technique and describe it in the
README.
● Implement the tags required for the social media preview of the page (Open
Graph, twitter cards).
Tip 1: Youtube.
The default YouTube embed could and will lower your Largest Contentful Paint score to
an unacceptable level. Look for a facade solution There are third-party libraries for this.
Tip 2: Backend.
For this task, a cloud function should be enough, but you are free to implement a full
server.
Tip 3: Hosting.
Finding free and reliable hosting for a site like this is fairly easy. Options include Netlify,
Azure, AWS, and Yandex Cloud.



