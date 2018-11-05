const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET all feedback that has been submitted, populate with data from the feedback database
router.get('/', (req, res) => {
    // Find all feedback and return it
    pool.query('SELECT * FROM feedback ORDER BY id DESC;').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error);
        res.sendStatus(500);  
    });
})

// POST new feedback
router.post('/', async (req, res) => {
    let feedbackObj = req.body;
    console.log(feedbackObj);
    let sqlText = `INSERT into "feedback" (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText, [feedbackObj.feeling, feedbackObj.understanding, feedbackObj.support, feedbackObj.comments])
        .then((response) => {
            console.log(response);
            res.send(feedbackObj);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })

});

// DELETE feedback
router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM "feedback" WHERE id=$1', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /feedback', error);
        res.sendStatus(500);
    })
});

module.exports = router;