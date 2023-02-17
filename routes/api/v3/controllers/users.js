import express from 'express';
var router = express.Router();

import getURLPreview from '../utils/urlPreviews.js';

router.get('/myIdentity', async (req, res, next) => {
    if(req.session.isAuthenticated) {
        res.json({
            status: "loggedin",
            userInfo: {
                name: req.session.name,
                username: req.session.username
            }
        });
    } else {
        res.json({status: "loggedout"});
    }
});

export default router;