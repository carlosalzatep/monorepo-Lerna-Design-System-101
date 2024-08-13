# @bypgd.dsp/core

## Overview
**Publicis Design System Package** is a monorepo containing various packages that form the core of the Publicis Design System. This repository is managed using Lerna and Husky.

## Installation
To install the dependencies, run:
```
bash
npm install
````
## Scripts
Here are the available scripts for this project:

clean: Cleans the project by removing node_modules and running the clean scripts in each package.
```npm run clean```

build: Builds the project by running the build scripts in each package.
```npm run build```

lint: Lints the project by running the lint scripts in each package.
```npm run lint```

lint:fix: Fixes linting issues by running the lint:fix scripts in each package.
```npm run lint:fix```

format: Formats the code by running the format scripts in each package.
```npm run format```

format:fix: Fixes formatting issues by running the format:fix scripts in each package.
```npm run format:fix```

prepare: Installs Husky hooks.
```npm run prepare```

precommit: Runs precommit scripts in each package.
```npm run precommit```

## Requirements
Node.js version 20.16.0 or higher.

## Packages
This monorepo contains the following packages located in the packages directory:

/assets
/components
/tokens
(Add more packages as needed)

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

Feel free to customize this README further to suit your project's needs! If you have any other questions or need more help, just let me know. 😊