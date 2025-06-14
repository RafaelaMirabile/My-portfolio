export default function Projects() {
  return (
    <main className="mx-auto border-2 border-blue-500 border-solid w-full mx-auto">
      <h1 className="text-4xl font-bold">Our Projects</h1>
      <p className="mt-4 text-lg">Here are some of the projects we have worked on.</p>
      <ul className="mt-6 space-y-4">
        <li className="bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-semibold">Project One</h2>
          <p className="mt-2">Description of project one.</p>
        </li>
        <li className="bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-semibold">Project Two</h2>
          <p className="mt-2">Description of project two.</p>
        </li>
        <li className="bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-semibold">Project Three</h2>
          <p className="mt-2">Description of project three.</p>
        </li>
      </ul>
    </main>
  );
}
