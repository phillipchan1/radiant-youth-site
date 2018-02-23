/*jslint node: true */

'use strict';
var express = require('express');
var parser = require('body-parser');
const path = require('path');
var SparkPost = require('sparkpost');
var client = new SparkPost('c09515d353ca88a498fc30485f6e900b4f062bc7');

// create instance of the server to variable app
var app = express();

// get method for parsing body
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

// serve client files
app.use(express.static('dist'));

var router = express.Router();

router.post('/contact-us', function (req, res, next) {
    var returnEmail = req.body.contactName + ' <' + req.body.contactEmail + '>';

    client.transmissions.send({
        content: {
            from: {
                "name": req.body.contactName,
                "email": "admin@matchify.us",
            },
            "reply_to": returnEmail,
            subject: 'New Contact Form Submission',
            html: `
				<div>
					<h2>New form submission from Radiant Youth Site!</h2>
					<p>
						Email: ${req.body.contactEmail} <br/>
						Subject: ${req.body.contactSubject} <br />
						Message: ${req.body.contactMessage} <br />
					</p>
				</div>
			`,
            headers: {
                reply_to: returnEmail
            }
        },
        recipients: [
            { address: 'ben@epicentrechurch.org' }
            // { address: 'phillipchan1@gmail.com' }
        ]
    })
        .then(data => {
            console.log('Woohoo! You just sent your first mailing!');
            console.log(data);
            res.status(200).send('Submission Successful');
        })
        .catch(err => {
            console.log('Whoops! Something went wrong');
            console.log(err);
        });
});

app.use('/api', router);

// direct all other routes to client-side app
app.all('/*', function (req, res) {
    res
        .status(200)
        .set(
            {
                'content-type': 'text/html; charset=utf-8'
            }
        )
        .sendFile(process.cwd() + '/dist/index.html');
});

// have our app listen on port 3000
app.listen(process.env.PORT || 3000, function () {
    console.log('Service on running on 3000');
});