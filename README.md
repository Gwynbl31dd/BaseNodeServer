

# FakeRest

FakeRest is a simple nodejs server using express, to expose the incoming HTTP request

## Usage

add your request to 'routes/index.js'

```javascript
'use strict';
/*
 * This function expose the route (Can be redirected to a controller)
 */
module.exports = function(app) {
	
	//Index page
	app.get('/',function(req, res) {
		 res.render('index.ejs');
	});
	
	//Your function GET
	app.get('/test',function(req, res) {
		 res.json({ message: 'this is a message' });
	});
	
	//Your function POST
	app.post('/test',function(req, res) {
		 res.status(200).json({ message: 'another message' });
	});
};
```

The start the server

```sh
cd <path>/FakeRest/
node app.js
```

You can now watch the requests.

go to http://127.0.0.1:3000 from your browser.



## Developing

contact apaulin@cisco.com

### Tools

* ejs
* express
* http
# BaseNodeServer
