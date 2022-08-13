const logInfos = () => {
  console.log("\x1b[36m", 'It will generate (E.g for path src/features/user and folders user-form, user-list, user-details): ');
  console.log(' File: src/features/user/index.ts With all imports exports');
  console.log(' After that you can import like: import { UserForm, UserList, UserDetails } from "src/features/user"');
  console.log(' Instead of import UserForm from "src/features/user/user-form etc..."');
  console.log('\x1b[33m', 'If index.ts exists it will be overwritten', "\x1b[37m");
}


// Reset = "\x1b[0m"
// Bright = "\x1b[1m"
// Dim = "\x1b[2m"
// Underscore = "\x1b[4m"
// Blink = "\x1b[5m"
// Reverse = "\x1b[7m"
// Hidden = "\x1b[8m"

// FgBlack = "\x1b[30m"
// FgRed = "\x1b[31m"
// FgGreen = "\x1b[32m"
// FgYellow = "\x1b[33m"
// FgBlue = "\x1b[34m"
// FgMagenta = "\x1b[35m"
// FgCyan = "\x1b[36m"
// FgWhite = "\x1b[37m"

// BgBlack = "\x1b[40m"
// BgRed = "\x1b[41m"
// BgGreen = "\x1b[42m"
// BgYellow = "\x1b[43m"
// BgBlue = "\x1b[44m"
// BgMagenta = "\x1b[45m"
// BgCyan = "\x1b[46m"
// BgWhite = "\x1b[47m"

const camelize = (str) => {
  let arr = str.split('-');
  let capital = arr.map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item.toLowerCase());
  let capitalString = capital.join("");

  return capitalString.charAt(0).toUpperCase() + capitalString.slice(1);
}

const folderInNotKebabCase = (name) => {
  const isNameIsKebabCase = name.split('').every(letter => {
    if (letter === '-') return true
    return letter !== letter.toUpperCase()
  })

  if(isNameIsKebabCase) {
    return camelize(name)
  }

  return name
}


module.exports = {
  logInfos,
  camelize,
  folderInNotKebabCase
}
