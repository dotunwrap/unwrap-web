import type { BlogPost, Project, Skill, TimelineEntry } from "$lib/types";
import { getBlogPosts, getJsonIfOk } from "$lib/utils";
import type { PageLoad } from "./$types";

type PageData = {
    projects: Project[];
    skills: Skill[];
    experience: TimelineEntry[];
    education: TimelineEntry[];
    blogPosts: BlogPost[];
};

export const load: PageLoad<PageData> = async ({ fetch }) => {
    const [projects, skills, experience, education, blogPosts] = await Promise.all([
        getJsonIfOk<Project[]>(fetch, "/data/projects.json"),
        getJsonIfOk<Skill[]>(fetch, "/data/skills.json"),
        getJsonIfOk<TimelineEntry[]>(fetch, "/data/experience.json"),
        getJsonIfOk<TimelineEntry[]>(fetch, "/data/education.json"),
        getBlogPosts(),
    ]);

    return {
        projects,
        skills,
        experience,
        education,
        blogPosts,
    } satisfies PageData;
};
