## Docker

- To build image of app base on SSR use command: docker build -f ./docker/ssr/Dockerfile -t signup-app-nextjs:latest .
- To build image of app base on SSG use command: docker build -f ./docker/ssg/Dockerfile -t signup-app-nextjs:latest .

- To run image use command: docker run -p 3000:3000 signup-app-nextjs:latest

And application will be available on 3000 port.