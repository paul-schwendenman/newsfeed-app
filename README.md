# Getting Started with Paul's React Newsfeed app

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run e2e`

Launches the e2e test runner. I have found playwrite to be a little flaky, but I expect these to pass on my machine. Sometimes I have to step through them in debug mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Details

My code coverage is really low, although this is a simple project. I would like to increase the unit coverage substaintially.

I would also like to play around more with the end-to-end tests. I have found this tool to be much faster than other tools and I've really like messing with it.

The UI matches the Figma pretty well but there are some things that I didn't quite understand what it was suggesting. In real life, those would have become conversations with a designer, but for this I just guessed or skipped the extra bits. I didn't match the colors pixel perfect because I choose to pretend that we had a style guide that I just used. Matching the colors down to the hex could be done but the code would look slightly messier.

There are a few user controls that are suggesting further avaiable functionality, that could be extended next. Personally, I'd probably add the ability to reply to a comment next as nested comments always feels like a fun problem.

While fun, I do feel like the scope of the project is quite large for a work sample and it's hard to figure out what all is best to showcase.
