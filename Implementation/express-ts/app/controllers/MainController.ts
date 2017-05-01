// Import only what we need from express.
import {Router, Request, Response} from 'express';

// Assign router to the express.Router() instance.
const router: Router = Router();

router.get('/', (request: Request, response: Response) => {
    response.send('Hello World!');
});

router.get('/:name', (request: Request, response: Response) => {

    // Extract the name from the request parameters.
    let {name} = request.params;

    // Greet the given name.
    response.send(`Hello, ${name}!`);
});

// Export the express.Router() instance to be used by app.ts.
export const MainController: Router = router;