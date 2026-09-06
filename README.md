# Fleet X Logistics — Premium GitHub Pages Website

This is the completely redesigned **premium** version.

## What is different from the previous design

- New "dispatch command center" hero instead of a standard logistics hero section
- Animated network / routing background
- Interactive premium dispatch console illustration
- Bento-style service command center
- Drag/swipe equipment rail with custom truck line art
- Sticky workflow storytelling section
- Full editorial office-photo section using your real uploaded office image
- Premium dark / electric-blue visual system
- Mouse spotlight interactions
- Fully mobile responsive
- No framework and no build step — ideal for GitHub Pages

## Before publishing

Open `script.js` and change:

```js
email: "dispatch@yourcompany.com"
```

to your real dispatch/business email.

## Publish on GitHub Pages

1. Extract this ZIP.
2. Create a new GitHub repository.
3. Upload **everything inside this folder** to the repository root:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `.nojekyll`
   - `assets/`
4. Commit.
5. Go to **Settings → Pages**.
6. Under **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/(root)`
7. Save.

The site uses only relative file paths, so it works on project-style GitHub Pages URLs.

## Note about the contact form

GitHub Pages is static hosting. The included contact form opens the user's default email app using `mailto:`. If you later want messages to be saved in a database, emailed automatically, or sent to WhatsApp without opening the user's mail app, you will need a backend/service such as ASP.NET Core, Formspree, EmailJS, etc.
