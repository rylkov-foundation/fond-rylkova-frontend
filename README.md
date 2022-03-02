# fond-rylkova

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```


Перед коммитом 

` npm run prepare
`

#Деплой и билд

1) Клонировать репозиторий

    `git clone git@github.com:rylkov-foundation/fond-rylkova-frontend.git`
2) Создать в корне проекта файл .env и заполнить все его поля
в корне проекта есть файл с примером `.env_example`
3) Установить зависимости командой 

    `npm i`
4) Собрать проект командой 

    `NODE_ENV=production npm run build --clean`
5) Запустить проект командой 
   
    `pm2 start`
6) Добавить автозапуск скрипта командой

    `pm2 startup`
7) Сохранить конфигурацию командой

   ` pm2 save`

#Настройка nginx

Пример конфига nginx:
```
server {
    server_name far.listen-me.ru;
    location / {
                proxy_pass http://localhost:4460;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
    }
    location /api/ {
        rewrite ^/api/?(.*)$ /$1 break;
        proxy_pass http://strapi;
        proxy_http_version 1.1;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Server $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Host $http_host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_pass_request_headers on;
    }
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/far.listen-me.ru/
fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/far.listen-me.ru/
privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by
Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by
Certbot
}
server {
    if ($host = far.listen-me.ru) {
        return 301 https://$host$request_uri;
    } # managed by Certbot
    server_name far.listen-me.ru;
    listen 80;
    return 404; # managed by Certbot
}
```
