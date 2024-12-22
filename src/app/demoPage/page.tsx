import { getDemoPageContent } from './actions'

export default async function DemoPage({
  searchParams,
}: {
  searchParams: { pageId: string }
}) {
  const { pageId } = await searchParams
  const content = await getDemoPageContent(pageId)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4"></h1>
      <div className="bg-white shadow-md rounded p-4">
        <p>{content}</p>
      </div>
    </div>
  )
}

