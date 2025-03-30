import ProjectDetails from "@/components/projects/ProjectDetails";
import { applications } from "@/data/projects";

export function generateStaticParams() {
    return applications.map((project) => ({
        id: project.id.toString(),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = applications.find((p) => p.id === Number(id));
    return {
        title: project ? `${project.name} - Project Details` : "Project Not Found",
        description: project ? project.about : "",
    };
}

const ProjectPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const project = applications.find((p) => p.id === Number(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    return <ProjectDetails projectType="application" {...project} />;
};

export const revalidate = 0;
export default ProjectPage;
