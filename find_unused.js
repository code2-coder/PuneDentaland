const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const uiDir = path.join(srcDir, 'components', 'ui');

const getAllFiles = (dirPath, arrayOfFiles) => {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

const allSrcFiles = getAllFiles(srcDir);
const allSrcContents = allSrcFiles.filter(f => f.endsWith('.jsx') || f.endsWith('.js') || f.endsWith('.tsx')).map(f => fs.readFileSync(f, 'utf8')).join('\n');

const uiFiles = fs.readdirSync(uiDir).filter(f => f.endsWith('.jsx') || f.endsWith('.js'));

const unusedUi = [];
uiFiles.forEach(file => {
  const componentName = file.replace('.jsx', '').replace('.js', '');
  // check if imported
  if (!allSrcContents.includes(`components/ui/${componentName}`) && !allSrcContents.includes(`ui/${componentName}`)) {
    unusedUi.push(file);
  }
});

console.log("Unused UI Components:");
console.log(unusedUi);

// Let's check dependencies
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
const deps = Object.keys(pkg.dependencies || {});
const unusedDeps = [];
deps.forEach(dep => {
  if (!allSrcContents.includes(dep) && dep !== 'lucide-react' && !dep.includes('radix-ui') && !dep.includes('react-router') && !dep.includes('tailwindcss')) {
    // Basic check, might have false positives. Let's do a more careful check later
  }
});

