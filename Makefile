

init:
	npm install

clean:
	rm -rf node-modules

watch:
	NODE_ENV=dev webpack -w

serve:
	node server.js
