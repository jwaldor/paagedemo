import { getDemoPageContent } from './actions'
import PasswordForm from './PasswordForm'

export default async function DemoPage({
  searchParams,
}: {
  searchParams: { pageId: string; password?: string }
}) {
  const content = await getDemoPageContent(searchParams.pageId, searchParams.password)
  const showPasswordForm = content === null




  if (showPasswordForm) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PasswordForm
          error={searchParams.password !== undefined}
        />
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Main content section */}
      <section className="mb-20">
        <h2 className="text-4xl font-semibold text-gray-700 mb-8">
          What we do
        </h2>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <p className="text-lg text-gray-600 leading-relaxed">
            {content.whatWeDo}
          </p>
        </div>
      </section>

      {/* Product Demo section */}
      <section>
        <h2 className="text-4xl font-semibold text-gray-700 mb-8">
          Product Demo
        </h2>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-medium text-gray-700 mb-6">
            {content.productDemo.title}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {content.productDemo.description}
          </p>
        </div>
      </section>
    </div>
  )
}

