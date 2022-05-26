import { body } from 'express-validator';
import { validationResult } from 'express-validator';

export const validateSignIn = 
[
    body('username','username must be 5+ characters.').exists().isLength({ min:5, max:15 }),

    body('password','password is not valid').exists().isLength({ min: 8, max: 16 }),

    (req, res, next) => {
        const errors = validationResult(req);
        
        if(!errors.isEmpty())
        {
            return res.status(400).json({ errors: errors.array() })
        }
        next();
    }
]

export const validateSignUp = 
[
    body('fullname','Enter valid fullname ').exists(),

    body('username','username must be 5+ characters.').exists().isLength({ min: 5, max: 15 }),

    body('password','password is not valid').exists().isLength({ min: 8, max: 16 }),

    (req, res, next) => {
        const errors = validationResult(req);

        if(!errors.isEmpty())
        {
            return res.status(400).json({ errors: errors.array() })
        }
        next();
    }    
]