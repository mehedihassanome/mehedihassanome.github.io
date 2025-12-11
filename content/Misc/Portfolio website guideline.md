# HERO SECTION - DETAILED DEVELOPMENT INSTRUCTIONS

## 📋 SECTION OVERVIEW

**Section Name:** Hero/Introduction Section  
**Position:** Below header navigation, main focal area  
**Purpose:** Name introduction, professional description, call-to-action buttons, and portrait image

---

## 🎯 VISUAL REFERENCE ANALYSIS

### LAYOUT STRUCTURE

```
[Left Side - Text Content]     [Right Side - Portrait Image]
- Large Name Typography        - Professional headshot
- Description paragraph        - Sharp corners
- Two action buttons          - Specific dimensions
```

### CONTAINER SPECIFICATIONS

- **Section width:** Full container width with side padding
- **Content max-width:** Approximately 1200px centered
- **Section padding:** 80px top/bottom, 40px left/right
- **Internal layout:** Two-column flexbox (60% text, 40% image)
- **Gap between columns:** ~80px horizontal spacing

---

## 📝 TYPOGRAPHY SPECIFICATIONS

### PRIMARY HEADING (Name)

- **Text:** "MEHEDI HASSAN" (line 1) + "OME" (line 2)
- **Font family:** Bold sans-serif (Arial Black or similar heavy weight)
- **Font size:** ~48-52px
- **Font weight:** 900 (Black/Heavy)
- **Line height:** 0.9-1.0 (tight spacing)
- **Letter spacing:** Slightly condensed (-0.5px)
- **Color:** Pure black (#000000)
- **Text alignment:** Left aligned
- **Line break:** Manual break after "HASSAN"

### DESCRIPTION PARAGRAPH

- **Text:** Full bio paragraph as shown in image
- **Font family:** Regular sans-serif (Arial or Helvetica)
- **Font size:** 16px
- **Font weight:** 400 (Regular)
- **Line height:** 1.6-1.7
- **Color:** Medium gray (#666666 or #555555)
- **Margin:** 24px top margin from heading
- **Max width:** ~400px to control line length
- **Text alignment:** Left aligned

---

## 🎨 COLOR SPECIFICATIONS

### BACKGROUND

- **Section background:** Pure white (#FFFFFF)
- **No background patterns or gradients in this section**

### TEXT COLORS

- **Primary heading:** Pure black (#000000)
- **Description text:** Medium gray (#666666)
- **Button text:** Black (#000000)
- **Button borders:** Black (#000000)

---

## 🔲 BUTTON SPECIFICATIONS

### BUTTON CONTAINER

- **Layout:** Horizontal flex container
- **Gap between buttons:** 20px
- **Margin:** 32px top margin from description

### INDIVIDUAL BUTTON STYLING

- **Dimensions:** ~120px width x 44px height
- **Border:** 2px solid black (#000000)
- **Background:** Transparent/white
- **Text color:** Black (#000000)
- **Font size:** 14px
- **Font weight:** 500 (Medium)
- **Padding:** 12px 24px
- **Border radius:** 0px (sharp corners)
- **Text alignment:** Center

### BUTTON LABELS

- **Left button:** "Resume"
- **Right button:** "LinkedIn"

### HOVER STATES

- **Background:** Black (#000000)
- **Text color:** White (#FFFFFF)
- **Transition:** 0.3s ease-in-out
- **Border:** Remains black

---

## 🖼️ IMAGE SPECIFICATIONS

### PORTRAIT IMAGE CONTAINER

- **Position:** Right side of hero section
- **Width:** ~280-320px
- **Height:** ~350-400px (maintain aspect ratio)
- **Border radius:** 8-12px (subtle rounded corners)
- **Image fit:** Cover (crop to fill container)

### IMAGE REQUIREMENTS

- **Subject:** Professional headshot of a young man
- **Clothing:** Dark colored shirt/sweater
- **Background:** Neutral/professional background
- **Quality:** High resolution, well-lit
- **Positioning:** Centered in container
- **Alt text:** "Mehedi Hassan Ome - Brand Strategist"

---

## 📐 SPACING & DIMENSIONS

### SECTION SPACING

- **Top padding:** 80px
- **Bottom padding:** 80px
- **Left/right container padding:** 40px

### INTERNAL SPACING

- **Text column width:** 60% of container
- **Image column width:** 40% of container
- **Gap between columns:** 80px
- **Heading margin bottom:** 24px
- **Description margin bottom:** 32px

### RESPONSIVE BREAKPOINTS

- **Desktop (1200px+):** Full two-column layout
- **Tablet (768px-1199px):** Reduce spacing, smaller text
- **Mobile (767px and below):** Stack vertically, center-align

---

## 📱 RESPONSIVE BEHAVIOR

### MOBILE LAYOUT (767px and below)

- **Layout:** Single column, image above text
- **Text alignment:** Center-aligned
- **Image width:** 250px max-width
- **Image margin:** 0 auto 40px auto
- **Heading size:** 36px
- **Section padding:** 60px 20px

### TABLET LAYOUT (768px-1199px)

- **Maintain two-column layout**
- **Reduce gap to 40px**
- **Heading size:** 42px
- **Image width:** 250px

---

## 🎭 VISUAL EFFECTS & INTERACTIONS

### STATIC ELEMENTS

- **No drop shadows on text or containers**
- **Clean, minimal aesthetic**
- **Sharp, geometric button styling**

### INTERACTIVE ELEMENTS

- **Button hover transitions:** 0.3s ease
- **No image hover effects**
- **Links should have subtle hover states**

---

## 🛠️ TECHNICAL IMPLEMENTATION NOTES

### HTML STRUCTURE

```html
<section class="hero-section">
  <div class="container">
    <div class="hero-content">
      <div class="hero-text">
        <h1>MEHEDI HASSAN<br>OME</h1>
        <p>[Full description text]</p>
        <div class="hero-buttons">
          <a href="#" class="btn">Resume</a>
          <a href="#" class="btn">LinkedIn</a>
        </div>
      </div>
      <div class="hero-image">
        <img src="[image-path]" alt="Mehedi Hassan Ome">
      </div>
    </div>
  </div>
</section>
```

### CSS APPROACH

- **Use flexbox for main layout**
- **CSS Grid acceptable alternative**
- **Mobile-first responsive approach**
- **CSS custom properties for colors**

---

## 🎯 LLM PROMPT TEMPLATE

```
Create the hero section for a portfolio website that exactly matches this design:

LAYOUT: Two-column layout with text content (60%) on left, portrait image (40%) on right, 80px gap between columns.

TYPOGRAPHY: 
- Heading "MEHEDI HASSAN" + "OME" in 48px black bold sans-serif with tight line height
- Description paragraph in 16px gray (#666) regular weight with 1.6 line height
- Max text width 400px

BUTTONS: Two rectangular buttons "Resume" and "LinkedIn" with black 2px borders, transparent background, black text. Hover state: black background, white text.

IMAGE: Professional headshot, 300px wide with subtle rounded corners (8px radius).

SPACING: 80px section padding, 24px margin below heading, 32px margin below description.

COLORS: White background, black heading (#000), gray description (#666), black button borders.

Make it pixel-perfect and responsive. On mobile, stack vertically with centered alignment.
```

---

## ✅ QUALITY CHECKLIST

Before considering this section complete, verify:

- [ ] Name typography matches exact weight and spacing
- [ ] Description text color and line height match reference
- [ ] Button dimensions and border styling are identical
- [ ] Image dimensions and border radius match
- [ ] Spacing between all elements is accurate
- [ ] Hover states work as specified
- [ ] Responsive behavior matches requirements
- [ ] Section padding matches overall design
- [ ] Colors match exactly (use color picker to verify)
- [ ] Text breaks in heading occur at correct positions

---

## 📋 ASSETS NEEDED

1. **Professional headshot image** (300x400px minimum resolution)
2. **Font files** if using custom typography
3. **Resume PDF** for button link
4. **LinkedIn profile URL** for button link

---

_Next sections to develop: Quote Section, Projects Showcase, Case Studies_