import { HoverEffect } from "@/components/ui/card-hover-effect";

export const projects = [
    {
      title: "React",
      description:
        "A JavaScript library for building user interfaces with reusable components, enabling the creation of interactive and dynamic web applications.",
      link: "https://reactjs.org",
    },
    {
      title: "Next.js",
      description:
        "A React framework that enables server-side rendering, static site generation, and other performance optimizations for production-ready applications.",
      link: "https://nextjs.org",
    },
    {
      title: "Node.js",
      description:
        "A JavaScript runtime built on Chrome's V8 engine that allows executing JavaScript code outside of a web browser for server-side applications.",
      link: "https://nodejs.org",
    },
    {
      title: "Prisma",
      description:
        "A next-generation ORM that simplifies database workflows with an intuitive data model, automated migrations, and type-safe database queries.",
      link: "https://prisma.io",
    },
    {
      title: "Prisma Accelerate",
      description:
        "A performance optimization layer for Prisma that significantly reduces database query latency and improves API response times.",
      link: "https://prisma.io/accelerate",
    },
    {
      title: "Cloudflare",
      description:
        "A global network service providing content delivery, DDoS protection, and security solutions to enhance website performance and security.",
      link: "https://cloudflare.com",
    },
    {
      title: "Hono",
      description:
        "A lightweight and ultrafast JavaScript framework for building backend services up to 10x faster than traditional Node.js applications.",
      link: "https://hono.dev",
    },
    {
        title: "Figma",
        description:
          "A collaborative interface design tool that enables teams to create, test, and iterate on UI/UX designs in a shared online workspace.",
        link: "https://figma.com",
      },
      {
        title: "Shopify",
        description:
          "A complete commerce platform that lets you start, grow, and manage an online store with customizable templates and powerful e-commerce tools.",
        link: "https://shopify.com",
      },
  ];


export function TechStack() {
  return (
    <div className="max-w-6xl mx-auto px-8 border-0 border-red-500">
      <HoverEffect items={projects} />
    </div>
  );
}

