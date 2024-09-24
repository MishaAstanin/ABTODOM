FROM nginx:alpine

# Установка рабочей директории
WORKDIR /usr/share/nginx/html

# Копирование статических файлов в контейнер
COPY ./image/* /usr/share/nginx/html/
COPY ./JS/* /usr/share/nginx/html/

# Копирование HTML файлы
COPY aboutUs.html catalog.html gallery.html index.html profile.html registration.html reviews.html /usr/share/nginx/html/

# Копирование CSS файл
COPY style.css /usr/share/nginx/html/

# Настройка переменных окружения
ENV NGINX_HOSTNAME=$HOSTNAME
ENV NGINX_PORT=80

# Запуск Nginx
CMD ["nginx", "-g", "daemon off;"]
