"use server";

export async function getDemoPageContent(pageId: string): Promise<string> {
  // Simulate an API call or database query
  // await new Promise(resolve => setTimeout(resolve, 1000))

  // In a real application, you'd fetch data based on the pageId
  return `This is the content for demo page ${pageId}`;
}
