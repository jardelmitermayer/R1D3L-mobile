
# FRONTEND do Sistema R1D3L

---
## Requirements

For development, you will only need Node.js, Expo and React-Native installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

### Expo

- ### Install expo on windows

    Go to the terminal and run the command: npm install -g expo-cli

- ### Install expo on Android

    Go to https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR and install Expo

- ### Install expo on iOS

    Go to https://apps.apple.com/br/app/expo-client/id982107779 and install Expo    
---
## Install

    $ git clone https://github.com/jardelmitermayer/R1D3L-mobile.git
    $ cd R1D3L-mobile
    $ npm install

## Running the project

    $ expo start
    or
    $ npm start

After, you can scan the QR code with your camera and open the app with the expo or press "w" and run the app in the browser or, with an emulator open, press "a" to run the system on the emulator  

## Simple build for production

    $ npm build
