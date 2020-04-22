# Green Thumb 🌱
<p align="center"><img src="src/assets/illustrations/readme-img.png" alt="Green Thumb" width="430"></p>
<p align="center">&laquo;<b>Green Thumb is an app builded to help you find a new green friend</b>&raquo;</p>

This project was part of Red Ventures frontend test. The challenge consists in building an application that consume an API by filtering some plant preferences, like amount of sunlight and watering the plant needs and if it is toxic or not for animals. When the result is filtered, the application offer a form for buying the chosen green friend. It validates user's name and email, then collect it.

There wasn't tooling limitations, so it was builded with React, following functional componentization approach, and for styling, the application used Styled-Components.

You can access the application on the following link: http://greenthumb.netlify.app/

### Layout

The layout was designed by Red Ventures and provided for the test development. The provided file was used on Figma for checking spacing, size and colors information. Some icons and illustrations was exported from Figma as well.

### Installing

For running the project on development mode, you just need a LTS node version installed, like v12+, and a package manager, like Yarn. If you haven't it yet, you can follow [Yarn installation guide](https://classic.yarnpkg.com/pt-BR/docs/install/), on their official page. Optionally you can use NPM as well.

With node and the package manager installed, run the command below. It will clone the project on current folder, download all the project dependencies and, in a few minutes, the project will open on your default browser.

```shell
git clone https://github.com/bolognini/green-thumb.git
cd green-thumb
yarn && yarn start
```

## Built With

* [create-react-app](https://github.com/facebook/create-react-app) - Most popular React boilerplate
* [Styled Components](https://styled-components.com/) - CSS in JS library
* [Husky](https://github.com/typicode/husky) - Git Hooks lib
* [ESLint](https://eslint.org/) - JavaScript Linter
* [Stylelint](http://stylelint.io/) - CSS Linter
* [Netlify](https://www.netlify.com/) - For CI/CD and deployment
* [Flaticon](https://www.flaticon.com/br/icone-gratis/plantar_628324?term=plant&page=2&position=36) - For README icon