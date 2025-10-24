dev:
  docker compose --profile dev up --watch

prod:
  docker compose --profile prod up

build:
  cd ./frontend && bun install --frozen-lockfile && bun run build
  cd ./backend && go mod download && go build -o ./bin/unwrap-web-api ./api
