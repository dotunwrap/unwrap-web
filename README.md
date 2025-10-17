<div align="center">
    <h1 align="center">Gabby's Portfolio Site :3</h1>
    <p>This is the monorepo for <a href="https://dotunwrap.dev">my personal portfolio website</a>.</p>
    <a href="https://github.com/dotunwrap/unwrap-web/actions/workflows/frontend-ci.yml"><img src="https://github.com/dotunwrap/unwrap-web/actions/workflows/frontend-ci.yml/badge.svg" alt="Frontend / CI"></a>
    <a href="https://github.com/dotunwrap/unwrap-web/actions/workflows/backend-ci.yml"><img src="https://github.com/dotunwrap/unwrap-web/actions/workflows/backend-ci.yml/badge.svg" alt="backend / CI"></a>
</div>

## Table of Contents

- [Frontend](#frontend)
- [Backend](#backend)
- [Building](#building)
    - [Prerequisites](#prerequisites)
    - [Production Environment](#production-environment)
    - [Development Environment](#development-environment)

## [Frontend](/frontend)

The frontend is written using the following:
- Svelte 5
- SvelteKit 2
- TailwindCSS 4
- TypeScript

The site is currently deployed on GitHub Pages using a [CD action](/.github/workflows/frontend-cd.yml).

## [Backend](/backend)

The backend is written in Go using Gin. It's currently undeployed and unused, but sitting here waiting for a moment where I might need some endpoints or DB interaction.

## [Infrastructure](/infrastructure)

WIP

## Building

The build process is fully containerized using Docker and Docker Compose.

The repo also ships with [just](https://github.com/casey/just) recipes to make life a little easier.

### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Go](https://go.dev/)
- [Bun](https://bun.sh/)
- [just](https://github.com/casey/just) (optional)

### Production Environment

To build the production containers, run:

```sh
just prod
```

or, if you do not have just:

```sh
docker compose --profile prod up
```

### Development Environment

To build the development containers, run:

```sh
just dev
```

or, if you do not have just:

```sh
docker compose --profile dev up
```
