# Netflix Clone - Frontend Only

A modern Netflix clone built with Next.js 14, TypeScript, and Tailwind CSS. This is a **frontend-only** version that uses mock data and beautiful Unsplash images to demonstrate the UI/UX without requiring any API keys or backend services.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Movie Browsing**: Horizontal scrollable rows with different categories
- **Hero Banner**: Dynamic featured movie banner
- **Movie Modal**: Detailed movie preview with play buttons
- **Login Page**: Authentication UI (demo only)
- **Mock Movie Data**: No API required - works out of the box
- **Modern UI**: Netflix-inspired dark theme
- **Beautiful Images**: High-quality movie images from Unsplash

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Images**: Unsplash (no API key required)
- **Icons**: React Icons
- **Data**: Mock data (frontend-only)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

- **Home Page**: Browse different movie categories with mock data
- **Movie Cards**: Click on any movie to view details in a modal
- **Navigation**: Use the navbar to navigate (demo links)
- **Login**: Visit `/login` for the authentication page
- **Responsive**: Works perfectly on mobile, tablet, and desktop

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── login/          # Login page
├── components/         # Reusable UI components
│   ├── Banner.tsx      # Hero banner
│   ├── Modal.tsx       # Movie detail modal
│   ├── MovieCard.tsx   # Individual movie card
│   ├── Navbar.tsx      # Navigation bar
│   └── Row.tsx         # Movie row container
├── constants/          # Type definitions
│   └── api.ts          # Movie interface
├── data/               # Mock data
│   └── mockMovies.ts   # Movie mock data
├── hooks/              # Custom React hooks
│   └── useMockMovies.ts # Mock data hook
└── utils/              # Utility functions
    └── helpers.ts      # Helper functions
```

## 🎨 Components

### Navbar
- Sticky navigation with Netflix branding
- Responsive menu items
- User profile section

### Banner
- Dynamic hero section with random featured movie
- Play and More Info buttons
- Gradient overlay for text readability

### Row
- Horizontal scrollable movie container
- Left/right navigation arrows
- Category titles

### MovieCard
- Movie thumbnail with hover effects
- Responsive sizing
- Click handler for modal

### Modal
- Full movie details overlay
- Play button and action buttons
- Backdrop image with gradient

## 🔧 Customization

### Adding New Movies
Edit `src/data/mockMovies.ts` to add more movies:

```typescript
export const newMovies: Movie[] = [
  {
    id: 999,
    title: "Your Movie Title",
    backdrop_path: "https://images.unsplash.com/photo-your-image",
    poster_path: "https://images.unsplash.com/photo-your-poster",
    overview: "Your movie description...",
    // ... other properties
  }
];
```

### Styling
Modify `tailwind.config.ts` for custom colors and themes:

```typescript
theme: {
  extend: {
    colors: {
      netflix: {
        red: '#E50914',
        black: '#141414',
        // Add your custom colors
      }
    }
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically (no environment variables needed!)

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- GitHub Pages (with static export)

## ✨ Why Frontend-Only?

- **No API Keys Required**: Works immediately without setup
- **No Rate Limits**: Mock data means unlimited usage
- **Fast Development**: Focus on UI/UX without backend concerns
- **Easy Deployment**: Deploy anywhere without environment variables
- **Perfect for Learning**: Great for understanding React/Next.js concepts

## 🎬 Movie Categories

The app includes these pre-built categories:
- Trending Now
- Top Rated
- Action Thrillers
- Comedies
- Scary Movies
- Romance Movies
- Documentaries

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is for educational purposes only. Netflix is a trademark of Netflix, Inc.

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com/) for beautiful movie images
- [Netflix](https://netflix.com) for design inspiration
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework#   n e t f l i x - c l o n e 