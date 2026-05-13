# OKAFOR VICTOR SOMTO - Portfolio Website

## 👨‍💼 Overview

A stunning, fully responsive portfolio website showcasing the work, skills, and services of **OKAFOR VICTOR SOMTO** - a Full Stack Developer, Freelancer, Gamer, and Streamer based in Nigeria.

**Company/Organization:** BLACKSUN

## ✨ Features

### Frontend
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive UI**: Smooth animations and transitions throughout
- **Dynamic Background**: Scanning effect with neon fog for a futuristic look
- **Color Scheme**: Deep blue, black, purple with neon green and gold accents
- **Typography**: Multiple modern fonts (Audiowide, Orbitron, Space Mono, Poppins) for visual variety
- **Interactive Elements**:
  - Animated profile card with hover effects
  - Glowing social media links
  - Skill progress bars with animations
  - Hobby cards with interactive hover states
  - Custom cursor effects
  - Particle effects on button clicks

### Sections

1. **Navigation Bar**
   - Fixed top navigation with smooth scrolling
   - Active link highlighting
   - Company branding

2. **Hero Section**
   - Animated profile card
   - Personal information display
   - Contact details
   - Call-to-action buttons
   - Scroll indicator

3. **About Section**
   - Personal bio
   - Profile image placeholder
   - Education details
   - Link to Google search

4. **Skills Section**
   - Technical skills with progress bars
   - Personal skills tags
   - Hobbies and interests showcase
   - Interactive skill cards

5. **Contact Section**
   - Multiple contact methods (Email, Phone)
   - Social media links
   - Contact form modal
   - Direct integration with email

6. **Footer**
   - Copyright information
   - Company branding

## 🎨 Design Highlights

### Colors
- **Primary**: Deep Blue (#0f1c3f)
- **Secondary**: Black/Purple (#1a1f3a)
- **Accent**: Purple (#6b3fe0)
- **Neon Green**: #00ff88
- **Neon Gold**: #ffd700
- **Neon Purple**: #d946ef

### Animations
- Background scanning effect
- Neon fog floating animation
- Card float and border glow effects
- Title pulse animation
- Skill progress bar fill
- Particle effects on interaction
- Custom cursor with interactive states

## 📱 Contact Information

- **Name**: OKAFOR VICTOR SOMTO
- **Email**: victor4all2015@gmail.com
- **Phone**: 08122911210 / 07049861175
- **Company**: BLACKSUN
- **Education**: B.Cs Physics (2018-2023)
- **University**: Federal University of Petroleum Resources Effurun, Warri

## 🔗 Social Links

- GitHub: https://github.com/Linxvicky2049
- Instagram: https://www.instagram.com
- TikTok: https://www.tiktok.com
- LinkedIn: https://www.linkedin.com
- Telegram: https://t.me

## 🛠 Tech Stack

### Frontend
- HTML5
- CSS3 (with animations and gradients)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts

### Backend
- Node.js
- Express.js
- Nodemailer
- CORS
- Dotenv

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Linxvicky2049/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your email configuration:
   ```
   EMAIL_SERVICE=gmail
   EMAIL_USER=victor4all2015@gmail.com
   EMAIL_PASSWORD=your_app_password_here
   PORT=3000
   ```

4. **Start the server**
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🔧 Email Configuration (Gmail)

1. Enable 2-Factor Authentication in your Google Account
2. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Select Mail and Windows Computer
4. Copy the generated 16-character password
5. Paste it in the `.env` file as `EMAIL_PASSWORD`

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # Styling and animations
├── script.js           # Frontend interactivity
├── server.js           # Backend server
├── package.json        # Dependencies
├── .env.example        # Environment variables template
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## 🚀 API Endpoints

### GET Endpoints

- `GET /` - Serve main portfolio page
- `GET /api/health` - Health check
- `GET /api/portfolio` - Get full portfolio data
- `GET /api/contact-info` - Get contact information

### POST Endpoints

- `POST /api/contact` - Submit contact form
  - Required fields: `name`, `email`, `subject`, `message`
  - Sends email and returns success/error response

## 🎮 Interactive Features

### Cursor Effects
- Custom cursor with interactive states
- Changes color on hover over buttons and links

### Keyboard Navigation
- Arrow Down: Scroll to next section
- Arrow Up: Scroll to previous section

### Contact Methods
- Email link: Opens default email client
- Phone links: Opens phone dialer
- Contact form: Opens modal for message composition
- Social links: Opens in new tabs with glow effects

## 🏆 Skills Displayed

### Technical Skills
- Web Development
- Frontend (HTML, CSS, JavaScript)
- Backend (Node.js, Express, Python)
- Databases (MongoDB, SQL)
- UI/UX Design
- API Development

### Personal Skills
- Problem Solving
- Team Collaboration
- Communication
- Time Management
- Adaptability
- Leadership
- Creativity
- Attention to Detail

### Hobbies
- Gaming
- Streaming
- Freelancing
- Innovation

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔐 Security

- CORS enabled for cross-origin requests
- Email validation on contact form
- Environment variables for sensitive data
- Input sanitization

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Heroku
```bash
npm install -g heroku
heroku create
git push heroku main
```

### DigitalOcean
1. Create a Node.js droplet
2. Clone repository
3. Install dependencies
4. Set up environment variables
5. Start server with PM2

## 📄 License

MIT License - Feel free to use this portfolio as a template for your own!

## 👨‍💻 Author

**OKAFOR VICTOR SOMTO**
- Email: victor4all2015@gmail.com
- GitHub: [@Linxvicky2049](https://github.com/Linxvicky2049)
- Organization: BLACKSUN

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Modern CSS animations and effects inspiration

## 📞 Support

For questions or support, please reach out via:
- Email: victor4all2015@gmail.com
- Phone: 08122911210 or 07049861175

---

**Made with ❤️ and code by OKAFOR VICTOR SOMTO | BLACKSUN**