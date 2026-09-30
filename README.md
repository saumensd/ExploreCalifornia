# ExploreCalifornia

A beginner-friendly California travel web app built with HTML, CSS, and JavaScript. Discover destinations and practice building useful travel features one step at a time.

Suggested GitHub About description: `A beginner-friendly California travel app for discovering destinations and planning trips.`

## What works now

- Responsive destination cards with four sample California places.
- Search by destination name, city, or category.
- A clear empty-result message and accessible search label.

The destination descriptions are sample editorial content. This starter does not provide live opening hours, prices, weather, bookings, or route information.

## Suggested features

| Priority | Feature | Learning goal |
| --- | --- | --- |
| Next | Category filter: city, beach, nature | Array filtering and form controls |
| Next | Destination details panel | Events and DOM updates |
| Next | Favorites saved in localStorage | Browser storage and JSON |
| Later | A simple day-by-day itinerary | State management |
| Later | Official visitor links and licensed photos | Content quality and image accessibility |
| Later | Map links, then optional weather API | URLs, asynchronous requests, and error handling |

Start with local data. A backend, login, payment system, and API keys are unnecessary for the first version. Do not commit secrets; any code sent to the browser is public.

## Project structure

```text
ExploreCalifornia/
  index.html                     # Page layout and search control
  src/
    app.js                       # Connect search, data, and rendering
    components/
      destinationCard.js         # Reusable destination card
    data/
      destinations.js            # Local sample destination records
    styles/
      main.css                   # Responsive styles
  public/
    images/
      README.md                  # Image and attribution guidance
  docs/
    implementation-tasks.md       # First tasks and completion checks
  .gitignore
  README.md
```

## Setup

Prerequisites: Git, a modern browser, and Python 3 for a local web server. A code editor such as VS Code is helpful.

```bash
git clone https://github.com/saumensd/ExploreCalifornia.git
cd ExploreCalifornia
python3 -m http.server 8000
```

On Windows, use `py -m http.server 8000` if `python3` is unavailable. Open http://localhost:8000 in your browser. Stop the server with Ctrl+C. If port 8000 is busy, try 8001 and open the matching URL.

Serve the project root, where `index.html` lives. Do not open the HTML directly with `file://`: JavaScript module imports require an HTTP server. There is no npm install or build step.

## First implementation tasks

1. Run the app, search for `beach`, and try a search with no matches.
2. Add two destinations in `src/data/destinations.js`, each with a unique ID.
3. Add a category dropdown that works together with the text search.
4. Add a details panel with a close button and keyboard support.
5. Add favorites using localStorage, including handling unavailable or invalid stored data.

See [the task checklist](docs/implementation-tasks.md) for acceptance checks.

## Make your first change

```bash
git switch -c feature/category-filter
# Edit files and check the app in your browser.
git add src/app.js index.html
git commit -m "Add destination category filter"
git push -u origin feature/category-filter
```

Open a pull request on GitHub to compare your change with `main`. Authentication may be required when pushing.

## Manual checks before committing

- All four starter destinations appear on initial load.
- `SAN` finds San Francisco, San Diego, and Santa Cruz; `beach` finds Santa Cruz.
- A nonsense search shows the empty message; clearing search restores all cards.
- At a narrow screen width, cards stack without horizontal scrolling.
- Search works using the keyboard, and the browser console has no errors.

## Deployment and license

This static app can later be hosted on GitHub Pages. Deployment is not configured in this starter. No license has been chosen yet; add a LICENSE file after deciding how others may reuse the project.
