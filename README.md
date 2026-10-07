# Ruma Digital World

A two-page, responsive personal marketing website for a Global AI Convergence university student. Built with plain HTML, CSS, and JavaScript.

## Pages
- `index.html` — Home, personal introduction, slogan, and featured Tetris project.
- `about.html` — About, skills, project showcase, travel and culture interests, and contact form.

## Features
- Soft pink and cream visual theme
- Custom AI-generated student portrait on the home page, plus an SVG illustration asset
- English/Korean language toggle
- Responsive mobile navigation
- Smooth reveal animations with reduced-motion accessibility support
- Tetris-inspired project visuals
- Contact form that prepares an email using the visitor's email application
- No framework or build step required

## Run locally
Open `index.html` in a browser, or use VS Code Live Server for a local development server.

## Publish with GitHub and Vercel
1. Create a GitHub repository, for example `ruma-digital-world`.
2. Upload all files and folders in this project to the repository root. Keep the `assets` folder in place.
3. Sign in to Vercel and choose **Add New → Project**.
4. Import your GitHub repository.
5. For a static HTML project, leave the framework preset as **Other** and do not set a build command. The output/root directory should be the repository root.
6. Deploy. Vercel will provide a public URL you can share on Padlet.

## Contact form note
The form uses `mailto:` and opens the visitor's default email app with the form details filled in. It does not send or store messages directly on the site. For a form that submits without an email app, connect a form service or add a backend.

## Personalization
- Update the email in `about.html` and `script.js` if it changes.
- Add your GitHub profile and the live Tetris demo link when they are ready.
- The project is described as a learning project; update this wording as your experience grows.


Homepage portrait: the homepage now uses `assets/ruma-real-photo.png`, the real photo supplied by Ruma, instead of the AI-generated portrait. Keep the `assets` folder when uploading the website.
