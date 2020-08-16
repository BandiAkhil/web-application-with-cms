[![pipeline status](https://gitlab.com/design-project-group-c/ockham-compose/badges/master/pipeline.svg)](https://gitlab.com/design-project-group-c/ockham-backend/-/commits/master)

# Ockham Compose

This repository contains Docker Compose configuration file for the Ockham web application.

## Requirements

- Docker
- Docker Compose

## Build

First, build the overarching nginx container and push it to the registry:

- `docker build -t <IMAGE_NAME> .`
- `docker push <IMAGE_TAG>`

Make sure you are logged in to the registry before pushing.

## Run

It is expected that there are a number of environment variables set for the Docker Compose configuration. These can be found in `.env.example` and need to be copied to `.env` and possibly adjusted:

```bash
cp .env.example .env
```

Next, the `docker-compose.yml` file should be copied to the deployment server, together with the env file mentioned above. These should be in the same directory. Assuming that the images of the frontend and the backend are also in the registry, run the following commands on the deployment server:

```bash
cd /path/to.copied/files
docker-compose up -d
```

## Contributors

<table>
    <tr>
        <td align="center"><a href="https://gitlab.com/Matthiti"><img src="https://gitlab.com/uploads/-/system/user/avatar/3211486/avatar.png" width="100px;" alt=""/><br/><sub><b>Matthijs Roelink</b></sub></a></td>
        <td align="center"><a href="https://gitlab.com/shatz.dan"><img src="https://secure.gravatar.com/avatar/5dd197015955776328de49e84e55cdbb?s=800&d=identicon" width="100px;" alt=""/><br/><sub><b>Daniels Šatcs</b></sub></a></td>
        <td align="center"><a href="https://gitlab.com/meritonii1998"><img src="https://secure.gravatar.com/avatar/f2b522af6b516c7b8bcb9efdaf16c94d?s=180&d=identicon" width="100px;" alt=""/><br/><sub><b>Meriton Xhymshiti</b></sub></a></td>
        <td align="center"><a href="https://gitlab.com/s.s.a.bandi"><img src="https://secure.gravatar.com/avatar/1642a5b74a08c06786b09a9df52702c0?s=180&d=identicon" width="100px;" alt=""/><br/><sub><b>Sri Saai Akhheel Bandi</b></sub></a></td>
    </tr>
</table>