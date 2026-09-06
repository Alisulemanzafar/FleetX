# Fleet X Logistics — GitHub Pages Website

This is a static, responsive dispatching-company website designed to work directly on GitHub Pages.

## Files

- `index.html` — website content
- `styles.css` — all styling and mobile responsiveness
- `script.js` — mobile menu, contact form, small interactions
- `assets/office.webp` — optimized from your uploaded office photo
- `assets/logo.webp` — optimized from your uploaded logo
- `.nojekyll` — keeps GitHub Pages simple

## 1. Change your business email

Open `script.js` and change:

```js
email: "dispatch@yourcompany.com"
```

to your real email address.

## 2. Upload to GitHub

1. Create a new GitHub repository, for example `fleetx-logistics`.
2. Open the repository.
3. Choose **Add file → Upload files**.
4. Upload the **contents inside this folder**:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `.nojekyll`
   - the `assets` folder
5. Commit the files.

## 3. Turn on GitHub Pages

1. Repository → **Settings**
2. Open **Pages**
3. Under **Build and deployment** choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
4. Save.
5. GitHub will show the live website address after deployment.

Because every file uses relative paths, the website works correctly even when the repository name is part of the GitHub Pages URL.

## Notes

GitHub Pages is static hosting, so the contact form is designed to open the visitor's email application instead of requiring a backend server.
