import type { BlogPost } from "$lib/types";
import { getBlogPosts } from "$lib/utils";
import type { PageLoad } from "./$types";

type PageData = {
    blogPosts: BlogPost[];
};

export const load: PageLoad<PageData> = async () => {
    const [blogPosts] = await Promise.all([getBlogPosts()]);

    return {
        blogPosts,
    } satisfies PageData;
};
