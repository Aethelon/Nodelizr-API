export async function fetchLatestVersion(
  pkgName: string
): Promise<string | null> {
  const { default: fetch } = await import("node-fetch");
  try {
    const res = await fetch(`https://registry.npmjs.org/${pkgName}/latest`);
    if (!res.ok) return null;
    const data = (await res.json()) as { version?: string };
    return data.version ?? null;
  } catch {
    return null;
  }
}

export async function fetchPackageInfoByName(
  pkgName: string
): Promise<{ name: string; version: string; description?: string } | null> {
  const { default: fetch } = await import("node-fetch");
  try {
    const res = await fetch(`https://registry.npmjs.org/${pkgName}`);
    if (!res.ok) return null;
    const pkg = (await res.json()) as {
      name: string;
      description?: string;
      "dist-tags"?: { latest: string };
    };
    return {
      name: pkg.name,
      version: pkg["dist-tags"]?.latest ?? "",
      description: pkg.description,
    };
  } catch {
    return null;
  }
}
