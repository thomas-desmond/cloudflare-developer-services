export interface ReferenceArchitecture {
  imagePath: string;
  title: string;
  setupSteps?: {
    icon: string;
    title: string;
    description: string;
  }[];
  runtimeSteps: {
    stepNumber: number;
    title: string;
    description: string;
  }[];
  benefits: string[];
  implementationNotes: string;
}

export interface Service {
  name: string;
  description: string;
  docsUrl?: string;
  selector: string; // CSS selector for elements
  highlightType: "badge" | "outline" | "both"; // How to highlight elements
  badgeText?: string; // Custom badge text if needed
  badgeConfigs: {
    selector?: string; // Specific selector for this badge instance
    tooltip: string; // Tooltip text for this specific instance
    position?: number; // Position for the badge
    badgeText?: string; // Custom badge text for this specific instance
  }[];
  referenceArchitecture?: ReferenceArchitecture;
}

export const useCases: Service[] = [
  {
    name: "Application Hosting",
    description:
      "Your application needs a reliable home on the internet. Cloudflare Workers provides fast, secure hosting for your website, delivering your content quickly to customers worldwide. With support for popular frameworks like Astro, Next.js, React, Vue, Angular, and more.",
    docsUrl: "https://developers.cloudflare.com/workers/frameworks/",
    selector: ".cf-app-hosting",
    highlightType: "both",
    badgeConfigs: [
      {
        tooltip: "Hosted and delivered by Cloudflare Workers",
        position: 0,
        badgeText: "Workers",
      },
    ],
    // referenceArchitecture: {
    //   imagePath: "/app-hosting-ref-arch.png",
    //   title: "Application Hosting Reference Architecture",
    //   setupSteps: [
    //     {
    //       icon: "🔧",
    //       title: "Build Application",
    //       description: "Develop your application using supported frameworks like Astro, Next.js, React, or Vue"
    //     },
    //     {
    //       icon: "📦",
    //       title: "Deploy to Workers",
    //       description: "Deploy your application to Cloudflare Workers with automatic optimization"
    //     },
    //     {
    //       icon: "🌐",
    //       title: "Global Distribution",
    //       description: "Application is automatically distributed across Cloudflare's global edge network"
    //     }
    //   ],
    //   runtimeSteps: [
    //     {
    //       stepNumber: 1,
    //       title: "User Requests Page",
    //       description: "A user visits your website from anywhere in the world"
    //     },
    //     {
    //       stepNumber: 2,
    //       title: "Edge Processing",
    //       description: "Request is routed to the nearest Cloudflare edge location for optimal performance"
    //     },
    //     {
    //       stepNumber: 3,
    //       title: "Workers Execution",
    //       description: "Your application code runs on Cloudflare Workers at the edge"
    //     },
    //     {
    //       stepNumber: 4,
    //       title: "Fast Response",
    //       description: "Optimized content is delivered to the user with minimal latency"
    //     }
    //   ],
    //   benefits: [
    //     "Global edge deployment with 200+ locations worldwide",
    //     "Automatic scaling based on traffic demands",
    //     "Built-in security and DDoS protection",
    //     "Zero cold starts for instant response times",
    //     "Cost-effective pay-per-request pricing"
    //   ],
    //   implementationNotes: "Cloudflare Workers supports many popular frameworks out of the box. The platform automatically handles routing, caching, and optimization, making deployment as simple as a single command."
    // }
  },
  {
    name: "Product Search",
    description:
      "To create a lightning-fast e-commerce search, you'd use Cloudflare's Vectorize, Workers AI, and KV. Workers AI is used to generate embeddings for the product names and descriptions, Vectorize is used to store and search the embeddings, and KV is used to cache your most frequent searches globally.",
    selector: ".cf-search",
    highlightType: "both",
    badgeConfigs: [
      {
        tooltip: "Vector search powered by Vectorize",
        position: 0,
        badgeText: "Vectorize",
      },
      {
        tooltip: "Text embeddings generated with Workers AI",
        position: 1,
        badgeText: "Workers AI",
      },
      {
        tooltip: "Globally cached results from KV",
        position: 2,
        badgeText: "KV",
      },
    ],
    referenceArchitecture: {
      imagePath: "/product-search-ref-arch.png",
      title: "Product Search Reference Architecture",
      setupSteps: [
        {
          icon: "⚡",
          title: "Workers AI generates embeddings",
          description: "for all product names and descriptions in your catalog"
        },
        {
          icon: "📊",
          title: "Vectorize stores these embeddings",
          description: "with references to the original products"
        },
        {
          icon: "🗄️",
          title: "KV stores product metadata",
          description: "for fast retrieval during searches"
        }
      ],
      runtimeSteps: [
        {
          stepNumber: 1,
          title: "User Performs Search",
          description: "The user enters a search query through the application interface, triggering the search workflow."
        },
        {
          stepNumber: 2,
          title: "API Layer (Worker) Handles Request",
          description: "The API layer, built on Workers, receives the search request and orchestrates the following steps."
        },
        {
          stepNumber: 3,
          title: "Workers AI Creates Text Embedding",
          description: "The search term is sent to Workers AI, which generates a vector embedding for the user's query."
        },
        {
          stepNumber: 4,
          title: "Vectorize Compares and Returns Similar Products",
          description: "Vectorize performs a similarity search using the query embedding against the pre-stored product embeddings, returning the most relevant products."
        },
        {
          stepNumber: 5,
          title: "KV Retrieves Full Product Details",
          description: "Using the product IDs from Vectorize results, KV storage quickly retrieves the complete product information for display to the user."
        },
        {
          stepNumber: 6,
          title: "API Layer Returns Results",
          description: "The API layer aggregates the product details and returns the final results to the user."
        }
      ],
      benefits: [
        "Semantic Understanding: Finds products even when search terms don't exactly match product names",
        "Global Performance: Edge deployment ensures low latency worldwide",
        "Scalability: Handles millions of products and searches efficiently",
        "Cost Efficiency: Pay-per-use model with intelligent caching",
        "Real-time Updates: New products can be embedded and indexed immediately"
      ],
      implementationNotes: "The embedding model consistency is crucial - the same Workers AI model must be used for both initial product embedding generation and runtime query embedding to ensure accurate similarity matching. This architecture supports both batch processing for initial setup and real-time processing for new products."
    }
  },
  {
    name: "Product Images",
    description:
      "For optimal product image delivery, Cloudflare Images handles optimization, and global delivery. Images can be resized and optimized for each device, reducing load times while maintaining quality. Combined with R2, for general purpose object storage..",
    docsUrl: "https://developers.cloudflare.com/images/",
    selector: ".cf-image",
    highlightType: "both",
    badgeConfigs: [
      {
        selector: ".cf-image",
        tooltip: "Images optimized and delivered by Cloudflare Images",
        position: 0,
        badgeText: "Images",
      },
      {
        selector: ".cf-image",
        tooltip: "Object storage for images",
        position: 1,
        badgeText: "R2",
      },
    ],
    // referenceArchitecture: {
    //   imagePath: "/product-images-ref-arch.png",
    //   title: "Product Images Reference Architecture",
    //   setupSteps: [
    //     {
    //       icon: "📸",
    //       title: "Upload Original Images",
    //       description: "Store high-quality original images in R2 object storage"
    //     },
    //     {
    //       icon: "🔗",
    //       title: "Configure Image Variants",
    //       description: "Set up Cloudflare Images with different sizes and formats for various use cases"
    //     },
    //     {
    //       icon: "⚡",
    //       title: "Enable Auto-optimization",
    //       description: "Configure automatic format selection (WebP, AVIF) based on browser support"
    //     }
    //   ],
    //   runtimeSteps: [
    //     {
    //       stepNumber: 1,
    //       title: "User Loads Product Page",
    //       description: "User navigates to a product page requiring image display"
    //     },
    //     {
    //       stepNumber: 2,
    //       title: "Request Optimized Image",
    //       description: "Browser requests image with specific dimensions and format preferences"
    //     },
    //     {
    //       stepNumber: 3,
    //       title: "Cloudflare Images Processing",
    //       description: "Cloudflare Images automatically resizes, optimizes format, and applies quality settings based on device and connection"
    //     },
    //     {
    //       stepNumber: 4,
    //       title: "Global CDN Delivery",
    //       description: "Optimized image is cached and served from the nearest edge location for fastest delivery"
    //     }
    //   ],
    //   benefits: [
    //     "Automatic format optimization (WebP, AVIF) based on browser support",
    //     "On-the-fly resizing for any screen size or device",
    //     "Global CDN delivery with edge caching",
    //     "Significant bandwidth savings through compression",
    //     "Lazy loading and progressive enhancement support"
    //   ],
    //   implementationNotes: "Cloudflare Images integrates seamlessly with R2 storage, providing a complete image pipeline. The service automatically handles format conversion, resizing, and optimization, significantly reducing the complexity of image management in e-commerce applications."
    // }
  },
  {
    name: "Product Details",
    description:
      "Product details are served using a combination of D1 for structured data storage and Workers for personalized content assembly. Workers AI can help generate engaging product descriptions.",
    selector: ".cf-product-details",
    highlightType: "both",
    badgeConfigs: [
      {
        tooltip: "Product data stored in D1",
        position: 0,
        badgeText: "D1",
      },
      {
        tooltip: "Personalized content and pricing with Workers",
        position: 1,
        badgeText: "Workers",
      },
      {
        tooltip: "AI-enhanced product descriptions",
        position: 2,
        badgeText: "Workers AI",
      },
    ],
    // referenceArchitecture: {
    //   imagePath: "/product-details-ref-arch.png",
    //   title: "Product Details Reference Architecture",
    //   setupSteps: [
    //     {
    //       icon: "🗃️",
    //       title: "Structure Data in D1",
    //       description: "Organize product information, pricing, and inventory data in D1 database tables"
    //     },
    //     {
    //       icon: "🤖",
    //       title: "Generate AI Descriptions",
    //       description: "Use Workers AI to create engaging, SEO-optimized product descriptions"
    //     },
    //     {
    //       icon: "⚙️",
    //       title: "Configure Personalization Rules",
    //       description: "Set up Workers logic for dynamic pricing, recommendations, and user-specific content"
    //     }
    //   ],
    //   runtimeSteps: [
    //     {
    //       stepNumber: 1,
    //       title: "User Views Product",
    //       description: "User navigates to a specific product detail page"
    //     },
    //     {
    //       stepNumber: 2,
    //       title: "Workers Fetch Base Data",
    //       description: "Cloudflare Workers query D1 database for core product information, pricing, and availability"
    //     },
    //     {
    //       stepNumber: 3,
    //       title: "Personalization Layer",
    //       description: "Workers apply user-specific logic for pricing, recommendations, and content customization based on location, preferences, or purchase history"
    //     },
    //     {
    //       stepNumber: 4,
    //       title: "AI Enhancement",
    //       description: "Workers AI generates or enhances product descriptions, suggests alternatives, or provides personalized recommendations"
    //     }
    //   ],
    //   benefits: [
    //     "Real-time personalization based on user context",
    //     "Fast data retrieval with edge-hosted database queries",
    //     "AI-powered content generation for better engagement",
    //     "Dynamic pricing and inventory management",
    //     "Consistent performance regardless of traffic spikes"
    //   ],
    //   implementationNotes: "This architecture enables highly personalized e-commerce experiences by combining structured data storage with intelligent content generation. The edge-based execution ensures that personalization doesn't compromise performance, while AI capabilities enable dynamic content that adapts to user preferences and market conditions."
    // }
  },
];

export const developerServices: Service[] = [
  {
    name: "Cloudflare Images",
    description:
      "Global image delivery and optimization. Cloudflare Images can be used to store images and then serve them in the optimal format for the user's device.",
    docsUrl: "https://developers.cloudflare.com/images/",
    selector: ".cf-image",
    highlightType: "both",
    badgeText: "Cloudflare Images",
    badgeConfigs: [
      {
        selector: ".cf-image",
        tooltip: "Image delivery powered by Cloudflare Images",
      },
    ],
  },
  {
    name: "D1 - Serverless SQL Database",
    description:
      "Cloudflare D1 is a fast and reliable database designed for structured data storage and management. It organizes essential information in tables for quick access, ensuring a smooth experience when viewing products, reading reviews, or checking order history",
    docsUrl: "https://developers.cloudflare.com/d1/",
    selector: ".cf-d1",
    highlightType: "both",
    badgeText: "D1",
    badgeConfigs: [
      {
        selector: ".cf-d1",
        tooltip: "Product details stored and pulled in from D1",
      },
    ],
  },
  {
    name: "Workers - Serverless Compute",
    description:
      "A dynamic site requires actions beyond just displaying information. Features like 'Add to Cart', applying discounts, and searching for products rely on efficient back-end processing. Cloudflare Workers enable these seamless interactions by validating input, applying pricing rules, personalizing content, and routing requests quickly. This edge computing ensures fast processing, making the site feel immediate and responsive.",
    docsUrl: "https://developers.cloudflare.com/workers/",
    selector: ".cf-workers",
    highlightType: "both",
    badgeText: "Workers",
    badgeConfigs: [
      {
        selector: ".cf-workers",
        tooltip: "Backend processing powered by Workers",
      },
    ],
  },
  {
    name: "Workers AI",
    description:
      "Inference as a Service with Serverless GPUs. Workers AI can be used to generate product descriptions, and in this case was used to generate product images.",
    docsUrl: "https://developers.cloudflare.com/workers-ai/",
    selector: ".cf-workersai",
    highlightType: "both",
    badgeText: "Workers AI",
    badgeConfigs: [
      {
        selector: ".cf-workersai.image",
        tooltip: "Image generated with Workers AI",
      },
      {
        selector: ".cf-workersai.description",
        tooltip: "Product description generated with Workers AI",
      },
    ],
  },
  {
    name: "KV - Key-Value Store",
    description:
      "Cloudflare's global key-value database. Perfect for caching product data, user preferences, and session information. KV provides fast, low-latency access to data across Cloudflare's global network.",
    docsUrl: "https://developers.cloudflare.com/kv/",
    selector: ".cf-kv",
    highlightType: "both",
    badgeText: "KV",
    badgeConfigs: [
      {
        selector: ".cf-kv",
        tooltip: "Data caching powered by KV",
      },
    ],
  },
  {
    name: "Vectorize",
    description:
      "Cloudflare's fully managed vector database that enables AI-powered semantic search and retrieval. Vectorize stores product embeddings to power semantic product search, allowing customers to find items using natural language descriptions.",
    docsUrl: "https://developers.cloudflare.com/vectorize/",
    selector: ".cf-vectorize",
    highlightType: "both",
    badgeText: "Vectorize",
    badgeConfigs: [
      {
        selector: ".cf-vectorize",
        tooltip: "Semantic search powered by Vectorize",
      },
    ],
  },
];
