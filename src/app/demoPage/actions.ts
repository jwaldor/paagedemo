"use server";

interface DemoPageContent {
  title: string;
  whatWeDo: string;
  productDemo: {
    title: string;
    description: string;
  };
}

export async function getDemoPageContent(
  pageId: string
): Promise<DemoPageContent> {
  // In a real application, you'd fetch this from a database
  const contents: Record<string, DemoPageContent> = {
    "1": {
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
      title: "Cloud Infrastructure",
      whatWeDo:
        "Our cloud infrastructure solutions enable businesses to build scalable and reliable systems. We offer comprehensive cloud migration strategies and ongoing support to ensure smooth operations.",
      productDemo: {
        title: "Cloud Platform Demo",
        description:
          "See how our cloud infrastructure can provide the reliability and scalability your business needs.",
      },
    },
    // Add more pages as needed
  };

  return (
    contents[pageId] || {
      title: "Welcome",
      whatWeDo:
        "Explore our range of solutions designed to help your business grow.",
      productDemo: {
        title: "Overview Demo",
        description:
          "Discover how our solutions can help transform your business.",
      },
    }
  );
}
