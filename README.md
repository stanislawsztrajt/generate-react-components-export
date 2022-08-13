<h1 align="center">Welcome to generate-react-components-export-cli 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/stanislawsztrajt/generate-react-components-export-cli#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Quickly create a react components export with command line

### 🏠 [Homepage](https://github.com/stanislawsztrajt/generate-react-components-export-cli)

## Install

```sh
npm i -g generate-react-components-export-cli
```

## Usage

```sh
grcecli
```

After that the application will ask in which path it should create the file index.ts and that's all (the application will create correctly only export folders)

It will generate (E.g for path src/features/user and folders user-form, user-list, user-details): <br />
File: src/features/user/index.ts With all imports exports') <br />
After that you can import like: import { UserForm, UserList, UserDetails } from "src/features/user <br />
Instead of import UserForm from "src/features/user/user-form etc... <br />
If index.ts exists it will be overwritten

## Author

👤 **Stanisław Sztrajt**

* Github: [@stanislawsztrajt](https://github.com/stanislawsztrajt)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/stanislawsztrajt/generate-react-components-export-cli/issues). 

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_