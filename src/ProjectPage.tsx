import { Link, useLocation, useParams } from "react-router-dom";
import { recentWorkProjects } from "./projectsData";

export default function ProjectPage() {
  const { slug } = useParams();
  const location = useLocation();

  const projectFromState = (location.state as { project?: (typeof recentWorkProjects)[number] } | null)?.project;

  const project =
    projectFromState ||
    recentWorkProjects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F7F5F0] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-[#111827]">Project not found</h1>

          <Link
            to="/"
            className="mt-6 inline-flex rounded-full bg-[#0A6A56] px-6 py-3 text-sm font-semibold text-white"
          >
            Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            className="mb-8 inline-flex rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-semibold text-[#111827]"
          >
            ← Back to Home
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C9A227]">
                {project.category}
              </p>

              <h1 className="mt-5 text-4xl font-bold leading-[0.95] tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <div className="mt-7 h-[2px] w-14 bg-[#C9A227]"></div>

              <p className="mt-8 text-lg leading-8 text-[#6B7280]">
                {project.fullDescription}
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}