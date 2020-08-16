[![pipeline status](https://gitlab.com/design-project-group-c/ockham-backend/badges/master/pipeline.svg)](https://gitlab.com/design-project-group-c/ockham-backend/-/commits/master)
[![coverage report](https://gitlab.com/design-project-group-c/ockham-backend/badges/master/coverage.svg)](https://gitlab.com/design-project-group-c/ockham-backend/-/commits/master)

# Ockham Backend

This project is the backend of the new website of [H.V. Ockham](https://www.hv-ockham.nl/).

## Requirements

- PHP 7.2 or up

- [Composer](https://getcomposer.org/)

- It is assumed that the requirements mentioned above are in your PATH.

## Install

- Download all dependencies: `composer install`

- Copy and change the example env file: `cp env.example .env`

- Migrate all undone migration: `php artisan migrate`

- Run the web application: `php -S localhost:8000 -t public`

## Testing

To run all tests, run `composer test`.

## Docs

To generate documentation, use the command `php artisan apidoc:generate`. The docs can be accessed at `/docs/`.

## Building the docker image

To build the Docker image, run the following command:

```bash
docker build -t <image tag> .
```

## Where goes what

- Controllers: `App\Http\Controllers`

- Models: `App\Entities`

- Routes: `routes/web.php`

- Migrations (don't add them yourself, only generate them): `database/migrations`

- Exceptions: `App\Exceptions`

- Policies: `App\Policies`

## Helpful Lumen commands

- Create a migration: `php artisan make:migration`

- Create an admin user for testing: `php artisan admin:create`

## Contributors

<table>
    <tr>
        <td align="center"><a href="https://gitlab.com/Matthiti"><img src="https://gitlab.com/uploads/-/system/user/avatar/3211486/avatar.png" width="100px;" alt=""/><br/><sub><b>Matthijs Roelink</b></sub></a></td>
        <td align="center"><a href="https://gitlab.com/shatz.dan"><img src="https://secure.gravatar.com/avatar/5dd197015955776328de49e84e55cdbb?s=800&d=identicon" width="100px;" alt=""/><br/><sub><b>Daniels Šatcs</b></sub></a></td>
        <td align="center"><a href="https://gitlab.com/meritonii1998"><img src="https://secure.gravatar.com/avatar/f2b522af6b516c7b8bcb9efdaf16c94d?s=180&d=identicon" width="100px;" alt=""/><br/><sub><b>Meriton Xhymshiti</b></sub></a></td>
        <td align="center"><a href="https://gitlab.com/s.s.a.bandi"><img src="https://secure.gravatar.com/avatar/1642a5b74a08c06786b09a9df52702c0?s=180&d=identicon" width="100px;" alt=""/><br/><sub><b>Sri Saai Akhheel Bandi</b></sub></a></td>
    </tr>
</table>
