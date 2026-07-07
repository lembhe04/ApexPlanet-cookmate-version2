# CookMate

A recipe discovery web app built as part of a 45-day web development internship.

CookMate is developed **version by version** using only **HTML**, **CSS**, and **JavaScript** — no frameworks, no APIs, and no external libraries beyond Google Fonts.

---



### Version 2 — UI Polish & Form Validation *(Current)*

**Status:** Complete

Builds on all Version 1 features with improved layout, styling, and a validated contact form.

#### Features Added

- Refined fully responsive layout across all sections
- Mobile navigation with hamburger toggle and slide-down menu
- Improved typography (line-height, heading letter-spacing)
- Improved spacing and visual hierarchy
- Contact form with JavaScript validation
- Smooth scrolling navigation between sections
- Hover animations on recipe cards, buttons, and nav links
- Enhanced button styles with focus states

#### Contact Form Validation

| Field   | Rule                                      |
|---------|-------------------------------------------|
| Name    | Required                                  |
| Email   | Required and must be a valid email format |
| Message | Required                                  |

Validation errors appear inline below each field. On successful submission, a demo success alert is shown and the form resets. No data is sent to a server.

#### Behavior

| Element        | Action                                              |
|----------------|-----------------------------------------------------|
| Search button  | Shows alert: *"Recipe search will be available in the next version."* |
| Recipe cards   | Static display — no click or filter behavior        |
| Contact form   | Client-side validation; demo success alert on valid submit |
| Mobile nav     | Toggle open/close; closes when a nav link is clicked |
| Nav links      | Smooth scroll to section anchors                    |

#### Files Modified

- `index.html` — contact form error elements, version label
- `css/style.css` — typography, spacing, buttons, hover effects, error styles
- `js/main.js` — contact form validation functions

---



## License

Built for educational purposes as part of the ApexPlanet internship program.