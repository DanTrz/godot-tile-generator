# Godot Autotile Generator

Turn a small 15-tile Wang tileset into a full 47-tile Blob tileset for Godot.

**Open the tool:** https://dantrz.github.io/godot-tile-generator-webapp/

<img width="911" height="358" alt="GodotTileGeneratorConvertSolid" src="https://github.com/user-attachments/assets/8841c9e8-cfd4-499a-bb60-b722818909f3" />


## Make More Autotile Coverage With Less Drawing

This tool is for anyone who want Godot-ready terrain tiles without hand-building every 47 tile Blob variation.

Draw or prepare a compact 15-tile source sheet that follows the Wang Format, load it into the tool, check that it lines up with the visual "mask template", then export a 47-tile PNG that can be brought into Godot as a terrain/autotile sheet.

## How It Works

1. **Load Texture**  
   Choose your 15-tile source image from your device. PNG and JPG images are supported.

2. **Check the fit**  
   Turn on the **Grid** and **Mask** overlays to confirm your artwork matches the expected tile positions. There are separate masks for TopDown terrain and Platformer, since the tool expects strict format and tile position for each. You can load the "Demo Tiles" to see an example of tiles required. 

3. **Choose the tile size**  
   Select the tile size that matches your artwork: 8, 16, 24, 32, 48, 64, 128, 256, 512, or 1024 pixels.

4. **Create Tiles**  
   Generate the 47-tile Blob output from your source sheet.

5. **Export**  
   Save the finished tileset as a PNG.

## Built-In Visual Helpers

The tool includes preview aids so you can line up your art before exporting:

- **Show Grid** shows the the grid on what is the expected layout and number of columns/rows.
- **TopDown Mask** shows expected pattern for base terrain. Like water, grass, dirt, and similar overhead terrain.
- **Platformer Mask** shows expected pattern for platformer games (side view games)
- **Demo Tiles** let you load example TopDown or Platformer art to see the expected source tiles and pixel position.

## Output

The exported image is a **47-tile Blob tileset** arranged as a **12 column by 4 row** PNG.

After exporting, import the PNG into Godot and use it for your terrain TileSet.

## Quick Tips

- If the output looks offset, turn on the source grid and check that the original sheet is exactly 5 by 3 tiles.
- If corners look wrong, try the mask overlay and adjust the source art so edges meet the guide.
- If the exported image is too small or too large, choose the correct tile size before pressing **Create Tiles**.
- If you are just exploring, enable **Load demo tiles** and switch between **TopDown** and **Platformer** examples. You can find all these files in the "assets" folder at the repo https://github.com/DanTrz/godot-tile-generator-webapp/ 
