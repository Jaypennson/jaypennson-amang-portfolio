# Jay Pennson Amang - Portfolio Website

A minimal, elegant portfolio website for an Umbraco web developer, inspired by Brittany Chiang's clean design aesthetic with a modern dark theme and split-screen layout.

## 🚀 Features

- **Split-Screen Layout** - Fixed sidebar navigation with scrollable content area
- **Dark Theme** - Professional dark color scheme with teal accents
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Navigation** - Active state indicators and smooth scrolling
- **Minimal & Clean** - Content-focused design without unnecessary distractions
- **Smooth Animations** - Subtle hover effects and card interactions
- **SEO Ready** - Semantic HTML structure
- **Fast Loading** - Optimized CSS and JavaScript

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file with split-screen layout
├── style.css           # Dark theme styling with modern design
├── script.js           # Navigation and interaction JavaScript
└── README.md           # This file
```

## 🎨 Customization Guide

### Personal Information

1. **Update Your Name and Title**
   - Open `index.html`
   - Find the `<aside class="sidebar">` section
   - Update `<h1>` with your name and `<h2>` with your title
   - Customize the `tagline` paragraph

2. **Update About Section**
   - Edit the paragraphs in `<section id="about">` with your story

3. **Customize Experience**
   - Modify the `.experience-item` divs with your work history
   - Update dates, job titles, and descriptions
   - Change tech stack tags to match your skills

4. **Add Your Projects**
   - Update the `.project-card` sections with your actual projects
   - Replace project descriptions and tech stacks
   - Add project images (see below)

5. **Update Contact Information**
   - Edit the social links in the sidebar section
   - Replace example URLs with your actual profiles

### Adding Project Images

To replace the placeholder project images:

1. Create an `images` folder in your portfolio directory
2. Add your project screenshots to this folder (recommended size: 1200x675px)
3. In `index.html`, replace:
   ```html
   <div class="project-image">
     <span>Project</span>
   </div>
   ```
   with:
   ```html
   <img
     src="images/your-project.jpg"
     alt="Project Name"
     class="project-image"
   />
   ```

### Color Scheme

The dark theme colors are defined in CSS custom properties at the top of `style.css`:

```css
:root {
  --slate-900: #0f172a; /* Background */
  --text-primary: #e2e8f0; /* Main text (light) */
  --text-secondary: #94a3b8; /* Body text */
  --text-dim: #64748b; /* Subtle text */
  --accent-color: #5eead4; /* Teal accent */
}
```

Change these values to customize your color scheme while maintaining accessibility.

### Fonts

The site uses **Inter** font from Google Fonts. To change the font:

1. Visit [Google Fonts](https://fonts.google.com/)
2. Select your preferred font
3. Replace the font link in `index.html` `<head>` section
4. Update the `font-family` in `style.css`

## 🌐 Deployment

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Push your portfolio files
3. Go to Settings > Pages
4. Select your main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Create a [Netlify](https://netlify.com) account
2. Drag and drop your portfolio folder
3. Your site will be instantly deployed with a custom URL

### Option 3: Vercel (Free)

1. Create a [Vercel](https://vercel.com) account
2. Import your GitHub repository or upload files
3. Deploy with one click

### Option 4: Traditional Web Hosting

Upload all files to your web hosting service via FTP:

- index.html (must be in root directory)
- style.css
- script.js
- images/ folder (if you added images)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with modern structure
- **CSS3** - Custom properties, Flexbox, and Grid
- **JavaScript (Vanilla)** - Smooth scrolling and navigation
- **Google Fonts** - Inter font family

## 🎯 Design Features

### Split-Screen Layout

- **Left Column**: Sticky sidebar with name, navigation, and social links
- **Right Column**: Scrollable content with sections (About, Experience, Projects)

### Interactive Elements

- **Active Navigation**: Automatically highlights current section while scrolling
- **Hover Effects**: Subtle card interactions and color changes
- **Smooth Scrolling**: Animated transitions between sections
- **Spotlight Effect**: Optional mouse-tracking gradient on desktop

### Responsive Behavior

- **Desktop (1024px+)**: Full split-screen experience
- **Tablet (768px-1024px)**: Stacked layout with hidden navigation
- **Mobile (<768px)**: Optimized single-column layout

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips for Success

### Content Tips

1. **Be Specific** - Use concrete examples and metrics in experience descriptions
2. **Show Impact** - Highlight results and achievements
3. **Keep It Updated** - Regularly add new projects and experience
4. **Proofread** - Check for typos and grammatical errors
5. **Tell Your Story** - Make your About section personal and authentic

### Technical Tips

1. **Optimize Images** - Compress images before uploading (use TinyPNG or similar)
2. **Test Responsiveness** - Check on multiple devices and screen sizes
3. **Add Analytics** - Consider adding Google Analytics to track visitors
4. **Custom Domain** - Get a professional domain name (yourname.com)
5. **Accessibility** - The template follows WCAG guidelines - maintain this standard

### SEO Tips

1. Update meta descriptions in `<head>`
2. Add relevant keywords naturally in your content
3. Use descriptive alt text for images
4. Ensure fast loading times
5. Create a sitemap if you add multiple pages

## 📝 Adding New Sections

Want to add a blog, certifications, or testimonials section? Follow this pattern:

```html
<section id="new-section" class="section">
  <div class="section-header">
    <h3>New Section</h3>
  </div>
  <div class="section-content">
    <!-- Your content here -->
  </div>
</section>
```

Don't forget to add a navigation link in the sidebar:

```html
<a href="#new-section" class="nav-link">
  <span class="nav-indicator"></span>
  <span class="nav-text">New Section</span>
</a>
```

## 🤝 Need Help?

If you need to customize something specific or add new features, consider:

- Searching for CSS/JavaScript tutorials online
- Using browser DevTools to experiment with styles
- Asking in web development communities (Stack Overflow, Reddit r/webdev)

## 📄 License

This portfolio template is free to use and modify for your personal or commercial projects.

## 🎨 Design Credits

Inspired by [Brittany Chiang's portfolio](https://brittanychiang.com/) - a beautiful example of minimal, content-focused web design.

---

**Ready to launch your portfolio?** Start by customizing the content in `index.html`, then deploy to your preferred hosting platform!
