build:
	docker build -t inmemories-crm .
run: 
	docker run -d -p 3001:3001 -e PORT=3001 --rm --name inmemories-crm-container
stop:
	docker stop inmemories-crm-container