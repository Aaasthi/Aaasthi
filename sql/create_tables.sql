-- SQL to create tables for PostgreSQL (run if not using Prisma migrations)
CREATE TABLE IF NOT EXISTS "Lead" (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  "createdAt" timestamp with time zone DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "Service" (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon text,
  "orderIndex" integer
);

CREATE TABLE IF NOT EXISTS "BlogPost" (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  "featuredImage" text,
  "createdAt" timestamp with time zone DEFAULT now()
);
