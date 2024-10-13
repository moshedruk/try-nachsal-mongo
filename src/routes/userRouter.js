const router = require('express').Router();
const {register,
    getProfile,
    setSetting} = require('../controllers/userController')


/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Register a new user
 *     description: This endpoint allows registering a new user by providing the required details.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user_name
 *               - password
 *               - role
 *               - area
 *               - units
 *             properties:
 *               user_name:
 *                 type: string
 *                 description: The username of the new user
 *                 example: yosef
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: 12345
 *               role:
 *                 type: string
 *                 description: User's role in the system
 *                 enum: [commander, solders]
 *                 example: solders
 *               area:
 *                 type: string
 *                 description: The area the user is responsible for
 *                 enum: [center, north, south, east]
 *                 example: center
 *               units:
 *                 type: array
 *                 items:
 *                   type: number
 *                 description: List of units the user is affiliated with
 *                 example: [8200, 81]
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request - missing or invalid data
 */
router.post('/register',register)

router.get('/profile',getProfile)

router.patch('/setting',setSetting)





module.exports =  router 