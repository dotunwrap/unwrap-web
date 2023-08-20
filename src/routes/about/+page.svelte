<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import JumpDown from "$lib/components/JumpDown.svelte";
    import PageSection from "$lib/components/PageSection.svelte";
    import FadeIn from "$lib/components/FadeIn.svelte";
</script>

<div class="flex flex-col [&>*]:max-w-5xl [&>*]:py-16">
    <PageSection class="flex flex-col min-h-screen justify-center items-center text-center">
        <FadeIn>
            <h2 class="text-4xl"><span class="text-blue font-bold">Garrett Simpson</span>, also known as <span class="text-blue font-bold">.unwrap</span>, is a full stack web engineer based in Ocala, FL.</h2>
        </FadeIn>
        <JumpDown anchor="#experience" />
    </PageSection>
    
    <PageSection id="experience" class="flex flex-col justify-center items-center [&>*]:my-3">
        <h2 class="text-3xl font-bold text-blue">Experience</h2>

        <div class="flex flex-col [&>*]:m-3">
            <FadeIn>
                <Card title="Full Stack Engineer" subtitle="Punchmark (2021 - Present)" description="Punchmark is a SaaS platform providing an end-to-end e-commerce solution for the jewelry industry." bullets={[
                    "Spearhead frontend and backend development for an industry-leading e-commerce platform, leveraging PHP, JavaScript (React/jQuery), and Sass.",
                    "Collaborate closely within a tight-knit team of three engineers to oversee end-to-end management of a comprehensive platform, spanning engineering, DevOps, security, database administration, and sysadmin responsibilities.",
                    "Demonstrate adaptability in a small team environment and a commitment to working flexible schedules to ensure deadlines are consistently met.",
                    "Oversee company-wide DevOps operations on AWS, orchestrating cloud deployments through Ansible.",
                    "Architect in-house REST APIs and seamlessly integrate vendor APIs, enhancing platform functionality.",
                    "Drive Scrum team collaboration, conducting regular code reviews, and ensuring agile project delivery.",
                    "Demonstrate a strong commitment to weekly deployments, ensuring consistent platform updates."
                ]} />
            </FadeIn>
        </div>

        <JumpDown anchor="#education" />
    </PageSection>

    <PageSection id="education" class="flex flex-col justify-center items-center [&>*]:my-3">
        <h2 class="text-3xl font-bold text-blue">Education</h2>

        <div class="flex flex-col [&>*]:m-3">
            <FadeIn>
                <Card title="Associate of Applied Science (Cybersecurity)" subtitle="Rowan Cabarrus Community College (2016 - 2021)" description="" bullets={[
                    "Completed over fifty credits of coursework spanning IT, cybersecurity, and computer science.",
                    "Gained a comprehensive understanding of software engineering principles, containerized full stack web apps, RESTful APIs, image decryption, network security, and reverse engineering.",
                    "Acquired hands-on experience in red and blue team penetration testing methodologies."
                ]} />
            </FadeIn>
        </div>
    </PageSection>
</div>