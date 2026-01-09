import { notFound } from "next/navigation";
import PostPage from "@/templates/blog/post-page";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {};
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://site-set-landing-page-blog-3uu1.vercel.app";
  const postUrl = new URL(`/blog/${slug}`, baseUrl).toString();
  const imageUrl = new URL(post.image, baseUrl).toString();

  return {
    title: post.title,
    description: post.description,
    robots: "index, follow",
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: postUrl,
      images: [
        {
          url: imageUrl,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export const revalidate = 60;

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return <PostPage post={post} />;
}
