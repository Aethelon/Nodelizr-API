export function getPackageJson({
  author,
  description,
  version,
  libraries
}: {
  author: string;
  description: string;
  version: string;
  libraries: string[];
}) {
  return {
    name: description.toLowerCase().replace(/\s+/g, "-"),
    version,
    description,
    author,
    main: "src/index.js",
    scripts: {
      start: "node src/index.js"
    },
    dependencies: Object.fromEntries(libraries.map(lib => [lib, "*"]))
  };
}
