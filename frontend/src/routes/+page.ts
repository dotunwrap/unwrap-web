import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
    const getJsonIfOk = async (res: Response) => {
        if (!res.ok) throw new Error("Failed to get response");
        return await res.json();
    };

    return {
        projects: await getJsonIfOk(await fetch("/data/projects.json")),
        skills: await getJsonIfOk(await fetch("/data/skills.json")),
        experience: await getJsonIfOk(await fetch("/data/experience.json")),
        education: await getJsonIfOk(await fetch("/data/education.json")),
    };
};
