# Lacoste L.12.12

Lacoste L.12.12 is a school project in order to practice front-end developpment.

Link : [Netlify](https://usher-elaine-66547.netlify.com/)

1. [Technologies](#technologies)
2. [Installation](#installation)
3. [Developpment](#developpment)
    1. [Gulp](#gulp)
        1. [Developpment Environnment](#developpment-environnment)
        2. [Production Environnment](#production-environnment)
        3. [SCSS Standards](#scss-standards)
    2. [Github](#github)
        1. [Commit syntax](#commit-syntax)
4. [Contributors](#contributors)

# Technologies

This project uses a number of open source projects to work properly:

* [node.js] - Dependency to yarn
* [Yarn] - Dependency manager
* [Gulp] - the streaming build system
* [SCSS] - Styling pre-processor

# Installation

Lacoste L.12.12 requires [Node.js](https://nodejs.org/) v4+ to run.
Install the dependencies and devDependencies and start the server.

```sh
$ cd hetic-p2020-07
$ yarn install
$ gulp default
```

For production environments...

```sh
$ yarn install --production
$ yarn build
```


# Developpment

## Gulp

### Developpment Environnment
Gulp is already setup to watch and deploy assets (except images, they are only deployed). This include a small server available at localhost:3000 by default.
To start it, type in a terminal 

```sh
$ gulp default
```

### Production
To start it in production mode (without server and with image optimisation), type :
```sh
$ yarn build
```

### SCSS Standards
This project is using the BEM (Block, Element, Modifier) standard for styling class naming.

# Github

## Commit Syntax

The commit must be preceded by the correct gitmoji, available in [this guide](https://gitmoji.carloscuesta.me/).


# Contributors
 * [Lucie](https://github.com/LucieChabaud1312) : Project Manager, Designer
 * [Anna](https://github.com/AnnaBmnn) : Front Developper (Product page)
 * [Antoine](https://github.com/MinDBreaK) : Front Developper (Homepage)
 * [Victor](https://github.com/germainvictor) : Front Developper (Animations)
 * [Octave](https://github.com/githubmakesmecry) : Front Developper (Canvas animation)
 * [Lina]() : Content redactor




[//]: # (References : )

   [node.js]: <http://nodejs.org>
   [Gulp]: <http://gulpjs.com>
   [SCSS]: <http://sass-lang.com>
   [Yarn]: <https://yarnpkg.com>
