import { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import BlogList from "@/templates/blog/blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description: "Dicas e estratégias para impulsionar seus negócios.",
  robots: "index, follow",
  openGraph: {
    title: "Blog",
    description: "Dicas e estratégias para impulsionar seus negócios.",
    url: "https://site-set-landing-page-blog-3uu1.vercel.app/",
    siteName: "Site.Set",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://site-set-landing-page-blog-3uu1.vercel.app/og-image.jpg",
        width: 880,
        height: 600,
        alt: "Site.Set",
      },
    ],
  },
};

export default function BlogListPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <>
      <BlogList posts={sortedPosts} />
    </>
  );
}
