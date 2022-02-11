import * as path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const pathObj = path.parse(__filename);



// console.log(pathObj);
console.log(path.posix);