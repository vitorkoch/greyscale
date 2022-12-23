import fs from 'fs';
import path from 'path';
import Jimp from 'jimp';

const main = async () => {
  const inputFolder = './input';
  const outputFolder = './output';
  const files = await fs.promises.readdir(inputFolder);

  for (const file of files) {
    const inputPath = path.join(inputFolder, file);
    const outputPath = path.join(outputFolder, file);

    if (file !== '.gitkeep') {
      console.log(`Converting ${file}`);
      const image = await Jimp.read(inputPath);
      image.greyscale().write(outputPath);
    }
  }
  const separator = '=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-='

  console.log(separator)
  console.log(`        Finished!(●'◡'●)`)
  console.log(separator)
};
main()
  .catch((err) => console.error(err));
