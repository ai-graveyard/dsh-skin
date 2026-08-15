FROM node:22.19.0-bookworm-slim AS build

ENV PNPM_HOME=/pnpm
ENV PATH="$PNPM_HOME:$PATH"
ENV NEXT_TELEMETRY_DISABLED=1

RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

FROM nginx:1.27-alpine AS runner

LABEL com.ai-graveyard.project=dsh-skin

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=10s --timeout=3s --start-period=5s --retries=6 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
