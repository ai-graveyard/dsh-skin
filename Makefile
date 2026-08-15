SHELL := /bin/bash
.SHELLFLAGS := -eu -o pipefail -c
.ONESHELL:
.DEFAULT_GOAL := help

IMAGE := ai-graveyard/dsh-skin
VERSION := latest
PRUNE_LABEL := com.ai-graveyard.project=dsh-skin
APP_PORT ?= 8092
export APP_PORT

.PHONY: dev build start stop restart logs deploy help

dev:
	pnpm dev

build:
	docker build -t "$(IMAGE):$(VERSION)" .

start:
	docker compose up -d --wait --wait-timeout 90

stop:
	docker compose down

restart:
	docker compose up -d --wait --wait-timeout 90

logs:
	docker compose logs -f

deploy:
	echo "Pulling the latest main branch..."
	git pull --ff-only origin main
	echo "Building and starting $(IMAGE):$(VERSION) on port $(APP_PORT)..."
	if ! docker compose up -d --build --wait --wait-timeout 90; then
		docker compose ps || true
		docker compose logs --tail=200 dsh-skin || true
		exit 1
	fi
	docker image prune -f --filter "label=$(PRUNE_LABEL)"
	docker compose ps

help:
	echo "Targets:"
	echo "  make dev      - Start the local Next.js development server"
	echo "  make build    - Build the production Docker image"
	echo "  make start    - Start the container on APP_PORT (default: 8092)"
	echo "  make stop     - Stop and remove the container"
	echo "  make restart  - Recreate the container and wait for health"
	echo "  make logs     - Follow container logs"
	echo "  make deploy   - Pull main, build, start, verify, and prune project images"
