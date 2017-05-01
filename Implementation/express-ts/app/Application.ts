// Import everything from express and assign it to the express variable.
import * as express from 'express';

// Import MainController from controllers entry point.
import {MainController} from './controllers/MainController';

// Create a new express application instance.
const app: express.Application = express();

// The port the express app will listen on.
const port: number = process.env.PORT || 3000;

// Mount the MainController at the "/" route.
app.use('/', MainController);

// Serve the application at the given port.
app.listen(port, () => {

    // Success callback.
    console.log(`[success] Listening at http://localhost:${port}`);
});