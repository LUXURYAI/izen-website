# IZEN Website + Admin Panel

Initial production-ready starter for:
- izenuae.com (Astro + Cloudflare Pages)
- admin.izenuae.com (Sanity Studio)
- English, Russian and Arabic with RTL support
- Product catalogue without categories
- Individual order form
- WhatsApp ordering
- Sanity CMS fields for photos, prices, status, visibility and three-language content

## 1. Frontend local setup
```bash
cd site
npm install
npm run dev
```
The site works immediately with fallback demo products and the supplied photos.

## 2. Create Sanity project
```bash
cd studio
npm install
npx sanity init
```
Create or select a project, use dataset `production`, then replace `REPLACE_WITH_PROJECT_ID` in `sanity.config.ts`.

Run the admin panel:
```bash
npm run dev
```

## 3. Connect frontend to Sanity
Copy `site/.env.example` to `.env` and insert the project ID.

## 4. GitHub
Create one repository and upload the entire `izen-website` folder.

## 5. Cloudflare Pages — main site
- Root directory: `site`
- Build command: `npm run build`
- Output directory: leave empty for Cloudflare adapter / Workers build
- Add environment variables from `.env.example`
- Attach domains: `izenuae.com` and `www.izenuae.com`

## 6. Admin panel
Recommended options:
1. `npm run deploy` from the `studio` folder to Sanity hosting, then map `admin.izenuae.com` by proxy/redirect; or
2. Create a second Cloudflare Pages project with root `studio`, build `npm run build`, output `dist`.

## 7. Product updates
Open the Sanity panel, click Products → Create. Upload photos, add names/descriptions in EN/RU/AR, price, status and publish. The site reads published products automatically.

## Important before launch
- Replace demo prices (currently 0) with approved AED prices.
- Confirm exact dimensions and descriptions.
- Replace the cropped screenshot logo with the original high-resolution logo when available.
- FormSubmit sends a first-time verification email to `izenfze@gmail.com`; approve it once.
- Add Privacy, Terms, Shipping and Returns pages before enabling card payments.

## Brand update
Official slogan: **Handmade. Unique. Made Only Once.**
The supplied high-resolution IZEN logo is included, together with a cropped brand mark and favicon.
