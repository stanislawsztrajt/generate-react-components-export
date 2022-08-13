#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');
const helpers = require('./helpers')

// sorry about the code
const createReactComponentExport = async () => {
  console.log("\x1b[32m", 'Generate React Components Export CLI', "\x1b[37m");
  
  helpers.logInfos()

  const { path } = await inquirer.prompt([
    {
      name: 'path',
      message: 'Path of components: ',
      default: './'
    }
  ])

  fs.readdir(path, (err, folders) => {
    if(err) console.log('Wrong path!');
    
    folders = folders.filter(folder => folder !== 'index.ts' && folder !== 'index.js')
    const indexContent = `${folders.map(folder => {
  return `import ${helpers.folderInNotKebabCase(folder)} from './${folder}'`
}).join('\n')}

export { ${folders.map(folder => helpers.folderInNotKebabCase(folder)).join(', ')} }
    `

    fs.writeFileSync(`${path}/index.ts`, indexContent)
  });

  // set green color
  console.log("\x1b[32m", 'Created!');
  // back to white color
  console.log("\x1b[37m");
}

createReactComponentExport()