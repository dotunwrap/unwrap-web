FROM nginx:alpine
RUN rm -f /etc/nginx/conf.d/default.conf
COPY infrastructure/nginx/proxy.conf /etc/nginx/conf.d/site.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
