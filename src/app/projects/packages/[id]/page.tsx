import ProjectDetails from "@/components/projects/ProjectDetails";
import { packages } from "@/data/projects";

export function generateStaticParams() {
    return packages.map((project) => ({
        id: project.id.toString(),
    }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
    const { id } = await params;
    const project = packages.find((p) => p.id === Number(id));
    return {
        title: project ? `${project.name} - Project Details` : "Project Not Found",
        description: project ? project.about : "",
    };
}

const ProjectPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    const project = packages.find((p) => p.id === Number(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <ProjectDetails
            projectType="package"
            {...project}
        />
    );
};

export const revalidate = 0;
export default ProjectPage;
