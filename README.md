Proejct DevopsBackend

DESCRIPTION

- This is a simple API backend that fetches data from a database about SHL (Swedish Hockey League) teams and players. If the database is empty, it will automatically seed data into it.
- The project also includes a CI/CD workflow that automatically tests the application, creates a Docker image, pushes it to Docker Hub, and notifies Render.com to auto-deploy the updated image.
- The project is the backend part to suply my frontend project with data: https://github.com/MartinHDesign/frontend

FEATURES

- Fetch teams with: https://<hostpage>/teams
- Fetch players from a speficifik team: https://<hostpage>/players/{teamId}

TECH STACK

- Node.js
- Express.js
- TypeScript
- Docker
- Jest (for testing)
- Github Actions (for CI/CD)

REQUIREMENTS

- Github account
- Docker account
- Render.com account
- Node.js (Download from official Node.js webpage)

INSTALLATION
To run the entire project

- 1.0 Clone repository

- 1.2 Build image: docker build -t <docker-username>/<application-name> .

  - 1.2.1 Push image: docker push <docker-username>/<application-name>

- 1.3 Create new Web service from existing image(The image you pushed to hub.docker) on Render.com

  - 1.3.1 Add environment variables to your web service
    Environment variables required:
    - DB_HOST
    - DB_NAME
    - DB_PASSWORD
    - DB_PORT
    - DB_USERNAME
    - EXPRESS_PORT

- 1.4 Add secrets to the repository in your github Actions secrets
  Required secrets:

  - DOCKER_PASSWORD
  - DOCKER_USERNAME
  - RENDER_HOOK_LATEST (Deploy hook provided by render.com)

- 2.0 Every push to the main branch will automatically build and deploy the updated Docker image to Render.com.
