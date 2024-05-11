# Simple sign up Next app

## Functionality

- Form validation
- Docker containeraization (can be built and launched with Docker)
- Can be built in SSR or SSG mode, using env variables (instruction below)

## Stack

Next.js, React, react hook form, Tailwind, Typescript, clsx, cva (class variance authority), Docker

## Docker

- To build image of app based on SSR use command: docker build -f ./docker/ssr/Dockerfile -t signup-app-nextjs:latest .
- To build image of app based on SSG use command: docker build -f ./docker/ssg/Dockerfile -t signup-app-nextjs:latest .

- To run image use command: docker run -p 3000:3000 signup-app-nextjs:latest

And application will be available on 3000 port.