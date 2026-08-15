SHELL := /bin/bash
.SHELLFLAGS := -eu -o pipefail -c
.ONESHELL:
.DEFAULT_GOAL := help

DEPLOY_DIR ?=

.PHONY: deploy help

deploy:
	test -n "$(DEPLOY_DIR)" || { echo "DEPLOY_DIR is required"; exit 1; }
	case "$(DEPLOY_DIR)" in \
		/*) ;; \
		*) echo "DEPLOY_DIR must be an absolute path"; exit 1 ;; \
	esac
	test "$(DEPLOY_DIR)" != / || { echo "Refusing unsafe DEPLOY_DIR=/"; exit 1; }
	command -v rsync >/dev/null || { echo "rsync is required on the server"; exit 1; }

	echo "Pulling the latest main branch..."
	git pull --ff-only origin main

	echo "Installing dependencies and building the static export..."
	corepack pnpm install --frozen-lockfile
	corepack pnpm run build
	test -f out/index.html || { echo "Static export is missing out/index.html"; exit 1; }

	echo "Publishing out/ to $(DEPLOY_DIR)..."
	if [ -d "$(DEPLOY_DIR)" ] \
		&& [ ! -f "$(DEPLOY_DIR)/.dsh-skin-deploy-root" ] \
		&& [ -n "$$(find "$(DEPLOY_DIR)" -mindepth 1 -maxdepth 1 -print -quit)" ]; then
		echo "Refusing to replace a non-empty directory without .dsh-skin-deploy-root"
		exit 1
	fi
	install -d "$(DEPLOY_DIR)"
	touch "$(DEPLOY_DIR)/.dsh-skin-deploy-root"
	rsync -rlt --delete-delay --exclude .dsh-skin-deploy-root out/ "$(DEPLOY_DIR)/"

help:
	echo "Available targets:"
	echo "  make deploy DEPLOY_DIR=/var/www/dsh-skin  Pull main, build, and publish the static site"
