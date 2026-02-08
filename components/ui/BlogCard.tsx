import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { urlForImage } from "@/lib/sanity/image";
import { Card } from "./Card";
import { Calendar, User } from "lucide-react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface BlogCardProps {
    title: string;
    excerpt: string;
    slug: { current: string };
    publishedAt: string;
    author: string;
    featuredImage?: SanityImageSource;
}

export function BlogCard({
    title,
    excerpt,
    slug,
    publishedAt,
    author,
    featuredImage,
}: BlogCardProps) {
    return (
        <Link href={`/blog/${slug.current}`}>
            <Card hover className="h-full flex flex-col overflow-hidden p-0">
                <div className="relative w-full h-48 bg-gray-200">
                    {featuredImage ? (
                        <Image
                            src={urlForImage(featuredImage).width(800).height(500).url()}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                            No Image
                        </div>
                    )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                        <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {publishedAt ? format(new Date(publishedAt), "dd MMM yyyy") : "Unknown Date"}
                        </div>
                        <div className="flex items-center">
                            <User className="w-3 h-3 mr-1" />
                            {author || "Admin"}
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                        {excerpt}
                    </p>
                    <div className="text-primary font-medium text-sm mt-auto">
                        Baca Selengkapnya &rarr;
                    </div>
                </div>
            </Card>
        </Link>
    );
}
