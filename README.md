# Valentine's Day Interactive Proposal App

A beautiful, interactive Valentine's Day proposal app built with React, TypeScript, and Tailwind CSS. Features swipeable memory cards, animated UI elements, and a fun interactive proposal screen.

## Features

- 🎴 Swipeable memory cards with beautiful animations
- 💝 Interactive proposal screen
- 😄 Moving "No" button with custom messages
- 🎨 Customizable colors and themes
- 📱 Fully responsive design
- 🎥 Support for images and videos in cards

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone [your-repo-url]
cd valentine-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Customization

### Modifying Memory Cards

Edit the `memories` array in `src/App.tsx`. Each card follows this structure:

```typescript
{
  id: number,
  title: "Your Title",
  description: "Your Description",
  color: "#HexColor",
  content?: React.ReactNode // Optional for images/videos
}
```

### Changing Messages

Modify the `messages` array in `src/App.tsx` to customize the messages shown when hovering over the "No" button.

### Styling

- Colors: Update the color scheme in `tailwind.config.js`
- Animations: Modify animations in `src/App.css`
- Layout: Adjust the layout in component files

### Adding Media

To add images or videos to cards:

1. Place your media files in `src/assets/`
2. Import them in `App.tsx`
3. Add them to the card's `content` property

## Project Structure

```
src/
├── components/
│   ├── cards/        # Card deck component
│   └── ...
├── assets/           # Images, videos, etc.
├── App.tsx          # Main application
├── App.css          # Main styles
└── index.css        # Global styles
```

## Built With

- React + TypeScript
- Tailwind CSS
- Framer Motion
- Vite

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with love for Valentine's Day
- Inspired by creative proposal ideas
- Thanks to the React and Tailwind CSS communities
