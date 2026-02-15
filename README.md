# MathQuest Bellmore

**A DECA Community Awareness Project (CAP)** — Free, standards-aligned math curriculum and interactive learning tools for K–6 students at the Bellmore Public Library.

## About

MathQuest Bellmore is a student-led initiative designed to address the gap in accessible, quality math education for elementary students in the Bellmore, NY community. The project provides:

- **Standards-aligned curriculum** for Kindergarten through 6th Grade (aligned to Common Core and NYS standards)
- **5 interactive math games** built directly into the browser — no downloads or accounts needed
- **Free in-person tutoring** registration at the Bellmore Memorial Library
- **Community resources** including library information and directions

## DECA CAP Connection

This website serves as the primary deliverable of a **DECA Community Awareness Project (CAP)**, one of DECA's Project Management Events. The project follows DECA's project management framework:

1. **Initiate** — Identified the need for free math resources via community research
2. **Plan** — Designed a website + in-person tutoring dual approach
3. **Execute** — Built the platform with 40+ topics and 5 interactive games
4. **Monitor** — Tracking engagement, registrations, and student feedback
5. **Close** — Evaluating impact and preparing competition presentation

## Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, Grid, Flexbox, responsive design
- **Vanilla JavaScript** — All interactivity, games, and dynamic content
- **Google Fonts** — DM Serif Display + Source Sans 3
- **Google Maps Embed** — Library location

No build tools, frameworks, or dependencies required. Pure static files.

## Project Structure

```
├── index.html      # Main website (all sections)
├── style.css       # All styles
├── app.js          # All JavaScript (data, games, interactivity)
└── README.md       # This file
```

## Running Locally

1. Clone or download the repository
2. Open `index.html` in any modern browser
3. That's it — no build step, no server required

For local development with live reload:
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (npx)
npx serve .
```

## Deploying to GitHub Pages

1. Push all files to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch** → select `main` branch, `/ (root)` folder
4. Click **Save**
5. Your site will be live at `https://<username>.github.io/<repo-name>/`

## Website Sections

| Section | Description |
|---------|-------------|
| **Curriculum** | K–6 grade cards → topic lists → full lesson pages with concepts, examples, and practice problems |
| **Practice & Play** | 5 interactive games: Mental Math Challenge, Multiplication Sprint, Fraction Match, Number Line Adventure, Pattern Finder |
| **Our Mission** | About the project, DECA CAP framework, team info, community impact goals |
| **Join Sessions** | Registration form for free in-person tutoring at the library |
| **Visit Us** | Embedded Google Map, library address, hours, accessibility info |

## Games

1. **Mental Math Challenge** — 2-minute timed quiz with configurable operation and difficulty
2. **Multiplication Sprint** — 20 flash-card facts, timed per question
3. **Fraction Match** — Memory-style matching of equivalent fractions
4. **Number Line Adventure** — Click to place numbers/decimals on a number line
5. **Pattern Finder** — Identify the rule and fill in missing sequence numbers

## Accessibility

- Semantic HTML5 elements
- Alt text on all images
- Keyboard navigable elements
- Sufficient color contrast (WCAG AA)
- Responsive design (mobile, tablet, desktop)
- Aria labels on interactive elements

## License

This project was created for educational and competition purposes as part of a DECA Community Awareness Project.

---

*Built with care by DECA student leaders for the Bellmore community.*
