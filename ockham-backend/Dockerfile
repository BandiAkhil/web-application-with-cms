FROM php:7.4-fpm-alpine

RUN apk update && apk add \
    git \
    curl \
    curl-dev \
    postgresql-dev \
    oniguruma-dev \
    libzip-dev

RUN docker-php-ext-install pgsql pdo_pgsql zip curl

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set working directory
WORKDIR /var/www

COPY composer.json composer.lock ./

RUN composer install --no-dev

COPY . .

RUN php artisan apidoc:generate

RUN chown -R www-data:www-data .

EXPOSE 9000
