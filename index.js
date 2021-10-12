const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const flow = `
start:
	if (!myvar) remember myvar = 0
	say "Hello {{myvar}}"
	remember myvar = myvar + 1
	goto end
`

axios({
	"method": "POST",
	"url": "http://localhost:5000/run",
	"headers": {
		"Content-Type": "application/json"
	},
	"data": {
		"bot": {
			"default_flow": "Default",
			"id": "mybot",
			"flows": [
				{
					"id": "e0a13373-2037-4590-8018-ab14e74b27a1",
					"content": flow,
					"commands": [
						"/default"
					],
					"name": "Default",
					"description": "Default custom flow"
				}
			],
			"updated_at": "2020-05-28T17:57:20.725Z",
			"name": "MySuperBot"
		},
		"event": {
			"metadata": {
				"some": "info",
				"about": "the current user"
			},
			"payload": {
				"content": {
					"text": "Hi there"
				},
				"content_type": "text"
			},
			"request_id": uuidv4(),
			"client": {
				"user_id": "myuser",
				"channel_id": "mychan",
				"bot_id": "mybot"
			}
		}
	}
})
	.then(res => {
		console.log(JSON.stringify(res.data, null, 2));
	})
	.catch(err => {
		console.error(new Error(`${err.response.status}: ${err.response.statusText}`));
	});
