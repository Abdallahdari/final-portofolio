import { SingleProject } from "@/app/_lib/data";

export default async function page({ params }: { params: { id: string } }) {
  const project = await SingleProject(params.id);
  console.log(project);
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center mt-10 mb-5">
          {project.Topic}
        </h1>
        <div className="max-w-2xl mx-auto px-4"></div>
      </div>
    </>
  );
}
