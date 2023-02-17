import express from 'express';
let router = express.Router();

import usersRouter from './controllers/users.js';
import postsRouter from './controllers/posts.js';

router.use('/users', usersRouter);
router.use('/posts', postsRouter);

export default router;