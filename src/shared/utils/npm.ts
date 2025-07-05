import fetch from "node-fetch";

export async function fetchLatestVersion(packageName: string): Promise<string | null> {
  try {
    const res = await fetch(`https://registry.npmjs.org/${packageName}/latest`);
    if (!res.ok) return null;

    const data: any = await res.json();
    return typeof data.version === "string" ? data.version : null;
  } catch (err) {
    console.error(`Erro ao buscar ${packageName}:`, err);
    return null;
  }
}
