# bookinginfo
Toxic Flood Waters booking calendar, show data, and album page.

## Pages
- `index.html` — booking calendar and band bio
- `show-data.html` — detailed metrics for each show
- `hello.html` — Hello album page with promotional listening and platform links

`album.html` redirects to `hello.html` for compatibility with the previous URL.

## Album links
The album page includes placeholder URLs for SoundCloud, Spotify, YouTube, and Apple Music. Replace them in `hello.html` with the final destination links. Track names and individual SoundCloud URLs can also be updated there.

## Local preview
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.
