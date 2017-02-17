# Gabie

Gabie is a lightweight boilerplate using Webpack 2 and BrowserSync.
Included is [Bulma](http://bulma.io/) as the CSS framework which is highly cosumizable. jQuery is also included.
If you wanna know more about Bulma and the way to customize it, click on the link above.

### Setup
* Either clone this repo or download it.
* After you've downloaded launch your console and run `npm install`.
    * Use google to learn about NodeJS and NPM if you are not familiar with it.
* Edit the `project_name` field in `project-settings.json` with your desired project name. You can also leave it as is while developing and change later.
* After install run `npm start` to start developing. 
    * When webpack is done compiling the files it'll open you browser and you'll get a message if everything worked.
* When you are ready to build your project type `npm run build` in your console and you'll get a folder name `build`.

### Regarding Bulma customization
The project is using SASS(SCSS) so developers who's not using SASS(SCSS) can write normal CSS as they're used to. Although I highly recommend learning SASS(SCSS) because it's awesome!

If you want to overwrite variables remember to write them in a SCSS syntax and not SASS. So use `;` and `{}` instead if only indentation as Bulma originally does.

### More info comming