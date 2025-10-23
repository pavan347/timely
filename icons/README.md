# Icon Files

This folder contains the extension icons. Currently, SVG files are provided as placeholders.

## Creating PNG Icons

To create proper PNG icons from the SVG files, you can:

1. **Use an online converter**: 
   - Visit https://svgtopng.com/ or https://cloudconvert.com/svg-to-png
   - Upload icon128.svg
   - Download as PNG at sizes: 16px, 48px, and 128px
   - Save as icon16.png, icon48.png, and icon128.png

2. **Use a graphics editor**:
   - Open icon128.svg in a program like Inkscape, Adobe Illustrator, or Figma
   - Export as PNG at the required sizes

3. **Use command line** (if you have ImageMagick installed):
   ```bash
   magick convert -background none icon128.svg -resize 16x16 icon16.png
   magick convert -background none icon128.svg -resize 48x48 icon48.png
   magick convert -background none icon128.svg -resize 128x128 icon128.png
   ```

For now, you can load the extension with just the SVG file, but Chrome may show a warning. Converting to PNG will remove the warning.
