import type { BlogPost } from "$lib/types";

export const getJsonIfOk = async <T>(
    fetchFn: (path: string) => Promise<Response>,
    path: string,
): Promise<T> => {
    const response = await fetchFn(path);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${path}`);
    }
    return (await response.json()) as T;
};

export const getBlogPosts = (): Promise<BlogPost[]> => {
    let posts: BlogPost[] = [];
    const paths = import.meta.glob("/src/blog-posts/*.md", { eager: true });

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split("/").at(-1)?.replace(".md", "");

        if (!file || typeof file !== "object" || !("metadata" in file) || !slug) {
            continue;
        }

        posts.push({ ...(file.metadata as Omit<BlogPost, "slug">), slug } satisfies BlogPost);
    }

    return Promise.resolve(
        posts.sort((f, s) => new Date(s.date).getTime() - new Date(f.date).getTime()),
    );
};
