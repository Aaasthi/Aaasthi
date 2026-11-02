CREATE TABLE "Lead" (
 "id" TEXT NOT NULL, "name" TEXT, "email" TEXT NOT NULL, "phone" TEXT,
 "message" TEXT NOT NULL, "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Service" (
 "id" TEXT NOT NULL, "title" TEXT NOT NULL, "description" TEXT NOT NULL,
 "icon" TEXT, "orderIndex" INTEGER, CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "BlogPost" (
 "id" TEXT NOT NULL, "title" TEXT NOT NULL, "slug" TEXT NOT NULL,
 "content" TEXT NOT NULL, "featuredImage" TEXT,
 "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT "BlogPost_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "BlogPost_slug_key" ON "BlogPost"("slug");
