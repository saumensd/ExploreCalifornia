# First implementation tasks

Complete these in order. Make a small feature branch and commit for each task.

## 1. Run and understand the starter
- [ ] Start the HTTP server from the project root.
- [ ] Confirm four cards, search results, and the empty state.
- [ ] Trace the data import, filter function, and card renderer.
Done when: you can explain how typing changes the displayed cards.

## 2. Add two destinations
- [ ] Add unique IDs, names, cities, categories, and short descriptions in the data file.
- [ ] Use the existing category spelling: City, Beach, or Nature.
- [ ] Use official visitor sources for new factual details; record source links if added.
Done when: six cards appear and each new destination is searchable.

## 3. Combine category and text filters
- [ ] Add a labeled select with All, City, Beach, and Nature.
- [ ] Update app.js to apply both selected category and text search.
- [ ] Listen for the select change event.
Done when: selecting Beach and searching Santa shows Santa Cruz; searching Yosemite while Beach is selected shows no results; clearing both restores all cards.

## 4. Show destination details
- [ ] Add a View details button to each card.
- [ ] Show the selected destination in an accessible panel or native dialog.
- [ ] Include a close control, support Escape, and return focus to the opening button.
Done when: two different cards open their own details, and keyboard users can open and close the panel.

## 5. Save favorites
- [ ] Store an array of destination IDs under exploreCaliforniaFavorites.
- [ ] Toggle favorite buttons and expose state with aria-pressed.
- [ ] Restore favorites on load; handle invalid JSON and storage failures gracefully.
Done when: refresh preserves favorites, removing a favorite persists, and bad stored data does not prevent the app from loading.

## Later
Add an itinerary, official visitor links, credited photos, and a deployment guide. Only add APIs after local features work. Confirm current travel information with official sources before presenting it as current.
