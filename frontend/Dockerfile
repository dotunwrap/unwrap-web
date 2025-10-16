FROM oven/bun:1.3.0-alpine AS base
WORKDIR /usr/src/app

FROM base AS deps
WORKDIR /tmp/dev
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM base AS builder
COPY --from=deps /tmp/dev/node_modules ./node_modules
COPY . .
RUN bun run build

FROM base AS dev
ENV NODE_ENV=development
COPY --from=deps /tmp/dev/node_modules ./node_modules
COPY . .
EXPOSE 5127
CMD ["bun", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5127"]

FROM nginx:alpine AS prod
ENV NODE_ENV=production
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/site.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
