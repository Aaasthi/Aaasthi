export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  // For MVP show placeholder content; admin will manage real posts
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{slug.replace('-', ' ')}</h1>
      <p className="mt-4">This is a placeholder post for {slug}.</p>
    </main>
  )
}
