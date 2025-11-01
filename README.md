# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS featuring fluid animations and interactive components.

## Features

- ⚡ Fast and optimized with Vite
- 🎨 Beautiful UI with TailwindCSS
- ✨ Interactive SplashCursor fluid effect
- 📱 Fully responsive design
- 📧 Contact form with EmailJS integration
- 🎭 Smooth animations and transitions

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Then add your EmailJS credentials to the `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

#### How to get EmailJS credentials:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your credentials from the EmailJS dashboard:
   - **Service ID**: Found in the "Email Services" section
   - **Template ID**: Found in the "Email Templates" section
   - **Public Key**: Found in "Account" > "API Keys"

### 4. Run the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## Environment Variables

This project requires the following environment variables:

- `VITE_EMAILJS_SERVICE_ID` - Your EmailJS Service ID
- `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS Template ID
- `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS Public Key

**⚠️ Important:** Never commit your `.env` file to version control! It's already listed in `.gitignore`.

## Technologies Used

- React 18
- Vite
- TailwindCSS
- EmailJS
- React Router (if applicable)

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── Components/
│   │   ├── Sections/
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── Animations/
│   │   └── ...
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
└── package.json
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, feel free to reach out through the contact form on the website.

---

## Original Vite Template Information

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
