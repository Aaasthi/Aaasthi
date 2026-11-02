# AAASTHI Docker setup

Source extracted from the original `finserv_full.zip`, which is retained unchanged.
Requires Docker Engine/Desktop with Docker Compose v2.

## Start

```sh
cp .env.example .env
# Edit .env: set separate random POSTGRES_PASSWORD and ADMIN_PASSWORD values.
# Use URL-safe hex passwords, e.g. openssl rand -hex 32.
docker compose up --build -d
docker compose ps
```

Open http://localhost:3000. PostgreSQL remains internal, persists in a named
volume, and is checked for readiness. A one-off migration service initializes
the schema before the web service starts. The web process runs as a non-root user.

```sh
docker compose logs -f web migrate
docker compose down
```

`down` preserves the database. `docker compose down -v` permanently deletes it.
Back up before upgrades: `docker compose exec -T db pg_dump -U aaasthi aaasthi > backup.sql`.
Do not run the initial migration against an existing populated database without
reviewing and baselining its schema first.

## Scope and validation

This is a local development/evaluation setup. The original Next.js 14.0.0 scaffold
and placeholder admin functionality remain; dependency/security updates and real
server-side sessions are required before public deployment. The web port binds
to localhost by default. The admin page does not implement content management.
SMTP delivery is not implemented in the original lead route.

Tailwind's nonexistent ^3.5.0 dependency was replaced with 3.4.17; explicit
TypeScript types and PostCSS configuration were added for container builds.
No package lock existed in the archive: the Dockerfile uses npm install until a
reviewed package-lock.json is committed, then npm ci. Dependency resolution is
therefore not fully reproducible yet.

Docker was unavailable in the authoring environment, so image builds and runtime
checks have not been executed. Review and run this setup before merging.
