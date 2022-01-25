## About the project

This project was created to practice building a site with Reat.js components. It consumes github user API to present all information on a user.


### Features

- Create a short URL
### Libraries used

- [axios](https://www.npmjs.com/package/axios)
- [bootstrap](https://getbootstrap.com/)

## Cloning the project

After installing git on your computer just run the code

For HTML link
```bash
git clone https://github.com/nordiws/url-shortener.git
```

For SSH link

```bash
git clone git@github.com:nordiws/url-shortener.git
```

## Defining environment variables

Create an ".env" file in the root directory and fill it up with the variables for connecting to your mongoDB database:
```bash
DB_USERNAME = <the authorized username>
DB_PASSWORD = <valid password>
DB_NAME = <database>
PORT = <desired port>
```

## Running the project

CLI into the folder and run any of the next commands:

```bash
npm install
```
Installs all dependencies.

```bash
npm run dev
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```bash
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## License
[MIT](/LICENSE)