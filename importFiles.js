const { resolve } = require("path");
import path from "path";
import url from "url";
var fs = require("fs");

const dirname = path.dirname(url.fileURLToPath(import.meta.url));
const pagesPath = path.resolve(dirname, "./pages");
var files = fs.readdirSync(pagesPath);

export default customFiles = () => {
  let obj = {};
  files.forEach(
    fileName =>
      (obj[fileName] = resolve(__dirname, `pages/${fileName}/index.html`))
  );
  return obj;
};
