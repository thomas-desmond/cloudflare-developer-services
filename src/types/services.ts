export interface Service {
  name: string;
  description: string;
  docsUrl: string;
  selector: string;  // CSS selector for elements
  highlightType: 'badge' | 'outline' | 'both';  // How to highlight elements
  badgeText?: string;  // Custom badge text if needed
  badgeConfigs: {
    selector?: string;  // Specific selector for this badge instance
    tooltip: string;   // Tooltip text for this specific instance
    position?: number; // Position for the badge
    badgeText?: string; // Custom badge text for this specific instance
  }[];
}

export const useCases: Service[] = [
  {
    name: "Product Search",
    description: "To create a lightning-fast e-commerce search, you'd use Cloudflare's Vectorize, Workers AI, and KV. Workers AI is used to generate embeddings for the product names and descriptions, Vectorize is used to store and search the embeddings, and KV is used to cache your most frequent searches globally.",
    docsUrl: "https://developers.cloudflare.com/vectorize/",
    selector: ".cf-search",
    highlightType: 'both',
    badgeConfigs: [
      {
        tooltip: "Vector search powered by Vectorize",
        position: 0,
        badgeText: "Vectorize"
      },
      {
        tooltip: "Text embeddings generated with Workers AI",
        position: 1,
        badgeText: "Workers AI"
      },
      {
        tooltip: "Globally cached results from KV",
        position: 2,
        badgeText: "KV"
      }
    ]
  },
  {
    name: "Product Images",
    description: "For optimal product image delivery, Cloudflare Images handles optimization, and global delivery. Images can be resized and optimized for each device, reducing load times while maintaining quality. Combined with R2, for general purpose object storage..",
    docsUrl: "https://developers.cloudflare.com/images/",
    selector: ".cf-image",
    highlightType: 'both',
    badgeConfigs: [
      {
        selector: ".cf-image", 
        tooltip: "Images optimized and delivered by Cloudflare Images",
        position: 0,
        badgeText: "Images"
      },
      {
        selector: ".cf-image",
        tooltip: "Object storage for images",
        position: 1,
        badgeText: "R2"
      }
    ]
  },
  {
    name: "Application Hosting",
    description: "Your application needs a reliable home on the internet. Cloudflare Workers provides fast, secure hosting for your website, delivering your content quickly to customers worldwide.",
    docsUrl: "https://developers.cloudflare.com/pages/",
    selector: ".cf-app-hosting",
    highlightType: 'both',
    badgeConfigs: [
      {
        tooltip: "Hosted and delivered by Cloudflare Pages",
        position: 0,
        badgeText: "Workers"
      }
    ]
  },
  {
    name: "Product Details",
    description: "Product details are served using a combination of D1 for structured data storage and Workers for personalized content assembly. Workers AI can help generate engaging product descriptions.",
    docsUrl: "https://developers.cloudflare.com/workers/",
    selector: ".cf-product-details",
    highlightType: 'both',
    badgeConfigs: [
      {
        tooltip: "Product data stored in D1",
        position: 0,
        badgeText: "D1"
      },
      {
        tooltip: "Personalized content and pricing with Workers",
        position: 1,
        badgeText: "Workers"
      },
      {
        tooltip: "AI-enhanced product descriptions",
        position: 2,
        badgeText: "Workers AI"
      },
    ]
  }
];

export const developerServices: Service[] = [
  {
    name: "Cloudflare Images",
    description: "Global image delivery and optimization. Cloudflare Images can be used to store images and then serve them in the optimal format for the user's device.",
    docsUrl: "https://developers.cloudflare.com/images/",
    selector: ".cf-image",
    highlightType: 'both',
    badgeText: "Cloudflare Images",
    badgeConfigs: [
      {
        selector: ".cf-image",
        tooltip: "Image delivery powered by Cloudflare Images"
      }
    ]
  },
  {
    name: "D1 - Serverless SQL Database",
    description: "Cloudflare D1 is a fast and reliable database designed for structured data storage and management. It organizes essential information in tables for quick access, ensuring a smooth experience when viewing products, reading reviews, or checking order history",
    docsUrl: "https://developers.cloudflare.com/d1/",
    selector: ".cf-d1",
    highlightType: 'both',
    badgeText: "D1",
    badgeConfigs: [
      {
        selector: ".cf-d1",
        tooltip: "Product details stored and pulled in from D1"
      }
    ]
  },
  {
    name: "Workers - Serverless Compute",
    description: "A dynamic site requires actions beyond just displaying information. Features like 'Add to Cart', applying discounts, and searching for products rely on efficient back-end processing. Cloudflare Workers enable these seamless interactions by validating input, applying pricing rules, personalizing content, and routing requests quickly. This edge computing ensures fast processing, making the site feel immediate and responsive.",
    docsUrl: "https://developers.cloudflare.com/workers/",
    selector: ".cf-workers",
    highlightType: 'both',
    badgeText: "Workers",
    badgeConfigs: [
      {
        selector: ".cf-workers",
        tooltip: "Backend processing powered by Workers"
      }
    ]
  },
  {
    name: "Workers AI",
    description: "Inference as a Service with Serverless GPUs. Workers AI can be used to generate product descriptions, and in this case was used to generate product images.",
    docsUrl: "https://developers.cloudflare.com/workers-ai/",
    selector: ".cf-workersai",
    highlightType: 'both',
    badgeText: "Workers AI",
    badgeConfigs: [
      {
        selector: ".cf-workersai.image",
        tooltip: "Image generated with Workers AI"
      },
      {
        selector: ".cf-workersai.description",
        tooltip: "Product description generated with Workers AI"
      }
    ]
  },
  {
    name: "KV - Key-Value Store",
    description: "Cloudflare's global key-value database. Perfect for caching product data, user preferences, and session information. KV provides fast, low-latency access to data across Cloudflare's global network.",
    docsUrl: "https://developers.cloudflare.com/kv/",
    selector: ".cf-kv",
    highlightType: 'both',
    badgeText: "KV",
    badgeConfigs: [
      {
        selector: ".cf-kv",
        tooltip: "Data caching powered by KV"
      }
    ]
  },
  {
    name: "Vectorize",
    description: "Cloudflare's fully managed vector database that enables AI-powered semantic search and retrieval. Vectorize stores product embeddings to power semantic product search, allowing customers to find items using natural language descriptions.",
    docsUrl: "https://developers.cloudflare.com/vectorize/",
    selector: ".cf-vectorize",
    highlightType: 'both',
    badgeText: "Vectorize",
    badgeConfigs: [
      {
        selector: ".cf-vectorize",
        tooltip: "Semantic search powered by Vectorize"
      }
    ]
  }
]; 