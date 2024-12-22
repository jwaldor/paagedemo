"use server";

interface DemoPageContent {
  title: string;
  whatWeDo: string;
  productDemo: {
    title: string;
    description: string;
  };
}

interface ProtectedDemoPage extends DemoPageContent {
  password: string;
}

export async function getDemoPageContent(
  pageId: string,
  password?: string
): Promise<DemoPageContent | null> {
  // In a real application, you'd fetch this from a database
  const contents: Record<string, ProtectedDemoPage> = {
    "1": {
      password: "enterprise123", // In production, use proper encryption
      title: "Enterprise Solutions",
      whatWeDo:
        "We provide cutting-edge enterprise solutions that help businesses scale their operations efficiently. Our platform integrates seamlessly with existing systems while providing robust security and performance.",
      productDemo: {
        title: "Enterprise Platform Demo",
        description:
          "Experience how our enterprise platform can transform your business operations with seamless integration and powerful features.",
      },
    },
    "2": {
      password: "cloud123", // In production, use proper encryption
      title: "Cloud Infrastructure",
      whatWeDo:
        "Our cloud infrastructure solutions enable businesses to build scalable and reliable systems. We offer comprehensive cloud migration strategies and ongoing support to ensure smooth operations.",
      productDemo: {
        title: "Cloud Platform Demo",
        description:
          "See how our cloud infrastructure can provide the reliability and scalability your business needs.",
      },
    },
  };

  const page = contents[pageId];

  if (!page) {
    return {
      title: "Welcome",
      whatWeDo:
        "Explore our range of solutions designed to help your business grow.",
      productDemo: {
        title: "Overview Demo",
        description:
          "Discover how our solutions can help transform your business.",
      },
    };
  }

  if (!password || password !== page.password) {
    return null;
  }

  // Remove password before returning the content
  const { password: _, ...pageContent } = page;
  return pageContent;
}
export async function checkPassword(formData: FormData) {
  const password = formData.get("password") as string;
  // Redirect to the same page with password as query param
  const url = new URL(window.location.href);
  url.searchParams.set("password", password);
  window.location.href = url.toString();
}
