export type Project = {
    title: string;
    date: string;
    tags: string[];
    description: string;
    url: string;
    popupDelay?: number;
};

export type Skill = {
    name: string;
    icon: string;
};

export type TimelineEntry = {
    title: string;
    subtitle: string;
    date: string;
    description: string;
    bullets: string[];
};

export type BlogPost = TimelineEntry & {
    published: boolean;
    slug: string;
};
