FROM node:12.16.3 as builder

WORKDIR /home/test

# Install dependecies
RUN npm install -g @angular/cli

# copy all files not listed in .dockerignore
COPY package.json .
COPY package-lock.json .

# before switching to non-root user, change ownership of home
RUN chown -R node:node .

# Install node_modules
RUN yarn

COPY . .

RUN ng config -g cli.packageManager yarn

RUN node --max_old_space_size=8192 node_modules/@angular/cli/bin/ng build --prod --aot --output-hashing=all --progress=false

FROM richarvey/nginx-php-fpm
COPY --from=builder /home/test/dist/kunder-exam-frontend /var/www/html
COPY ./.docker/nginx.conf /etc/nginx/sites-available/default.conf