
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Demo Pages</h1>
      <ul className="list-disc pl-5">
        <li>
          <Link href="/demoPage?pageId=1" className="text-blue-500 hover:underline">
            Demo Page 1
          </Link>
        </li>
        <li>
          <Link href="/demoPage?pageId=2" className="text-blue-500 hover:underline">
            Demo Page 2
          </Link>
        </li>
        <li>
          <Link href="/demoPage?pageId=3" className="text-blue-500 hover:underline">
            Demo Page 3
          </Link>
        </li>
      </ul>
    </div>
  )
}

