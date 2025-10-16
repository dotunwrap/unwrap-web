FROM golang:1.25.2-alpine AS base
WORKDIR /usr/src/app
env PATH="$PATH:/go/bin"
RUN apk add --no-cache bash curl git ca-certificates && update-ca-certificates

FROM base AS deps
WORKDIR /tmp/dev
COPY go.mod go.sum ./
RUN go mod download

FROM base AS builder
COPY --from=deps /go/pkg /go/pkg
COPY . .
RUN go build -o /usr/src/app/bin/unwrap-web-api ./api

FROM base AS dev
RUN go install github.com/air-verse/air@v1.52.3
COPY --from=deps /go/pkg/mod /go/pkg/mod
COPY . .
EXPOSE 8000
CMD ["air"]

FROM alpine:3.20 AS prod
RUN apk add --no-cache ca-certificates && adduser -D -H appuser
COPY --from=builder /usr/src/app/bin/unwrap-web-api /usr/local/bin/unwrap-web-api
USER appuser
EXPOSE 8000
ENTRYPOINT ["/usr/local/bin/unwrap-web-api"]
