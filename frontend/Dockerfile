FROM oven/bun:1.3.0-alpine AS base
WORKDIR /usr/src/app

FROM base AS deps
WORKDIR /tmp/dev
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM base AS builder
ARG PUBLIC_API_BASE_URL=""
ENV NODE_ENV=production
ENV PUBLIC_API_BASE_URL=${PUBLIC_API_BASE_URL}
COPY --from=deps /tmp/dev/node_modules ./node_modules
COPY . .
RUN bun run build

FROM base AS dev
ARG PUBLIC_API_BASE_URL=""
ENV NODE_ENV=development
ENV PUBLIC_API_BASE_URL=${PUBLIC_API_BASE_URL}
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
