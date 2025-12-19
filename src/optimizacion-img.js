const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "img/original";
const outputDir = "img/optimizadas";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const images = fs.readdirSync(inputDir);

images.forEach(image => {
  const inputPath = path.join(inputDir, image);
  const name = path.parse(image).name;

  // Versión móvil
  sharp(inputPath)
    .resize(400)
    .toFormat("webp", { quality: 70 })
    .toFile(`${outputDir}/${name}-400.webp`);

  // Versión tablet
  sharp(inputPath)
    .resize(800)
    .toFormat("webp", { quality: 75 })
    .toFile(`${outputDir}/${name}-800.webp`);

  // Versión desktop
  sharp(inputPath)
    .resize(1200)
    .toFormat("webp", { quality: 80 })
    .toFile(`${outputDir}/${name}-1200.webp`);
});
