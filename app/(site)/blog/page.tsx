import { Metadata } from "next";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/lib/sanity/client";
import { allBlogPostsQuery } from "@/lib/sanity/queries";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { BlogCard } from "@/components/ui/BlogCard";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
    title: `Blog & Artikel - ${SITE_NAME}`,
    description:
        "Informasi, tips, dan berita seputar minyak jelantah, daur ulang, dan lingkungan hidup.",
};

// Revalidate every hour
export const revalidate = 3600;

export default async function BlogPage() {
    let posts = [];
    try {
        posts = await client.fetch(allBlogPostsQuery);
    } catch (error) {
        console.warn("Failed to fetch blog posts:", error);
        // Fallback or empty state
    }

    return (
        <>
            <Section className="bg-gradient-to-br from-primary to-primary-dark text-white pt-20 pb-16">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="mb-6">Blog & Artikel</h1>
                        <p className="text-xl text-green-50">
                            Berita terbaru, tips, dan wawasan seputar dunia minyak jelantah dan
                            kelestarian lingkungan.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    {posts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post: { _id: string; title: string; excerpt: string; slug: { current: string }; publishedAt: string; author: string; featuredImage?: SanityImageSource }) => (
                                <BlogCard key={post._id} {...post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">
                                Belum ada artikel yang diterbitkan saat ini.
                            </p>
                        </div>
                    )}
                </Container>
            </Section>
        </>
    );
}
