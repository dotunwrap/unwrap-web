import type { PageLoad } from "./$types";

type Project = {
    title: string;
    date: string;
    tags: string[];
    description: string;
    url: string;
    popupDelay?: number;
};

type Skill = {
    name: string;
    icon: string;
};

type TimelineEntry = {
    title: string;
    subtitle: string;
    date: string;
    description: string;
    bullets: string[];
};

type PageData = {
    projects: Project[];
    skills: Skill[];
    experience: TimelineEntry[];
    education: TimelineEntry[];
};

const getJsonIfOk = async <T>(
    fetchFn: (path: string) => Promise<Response>,
    path: string,
): Promise<T> => {
    const response = await fetchFn(path);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${path}`);
    }
    return (await response.json()) as T;
};

export const load: PageLoad<PageData> = async ({ fetch }) => {
    const [projects, skills, experience, education] = await Promise.all([
        getJsonIfOk<Project[]>(fetch, "/data/projects.json"),
        getJsonIfOk<Skill[]>(fetch, "/data/skills.json"),
        getJsonIfOk<TimelineEntry[]>(fetch, "/data/experience.json"),
        getJsonIfOk<TimelineEntry[]>(fetch, "/data/education.json"),
    ]);

    return {
        projects,
        skills,
        experience,
        education,
    } satisfies PageData;
};
