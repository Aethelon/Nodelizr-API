import archiver from "archiver";
import { Readable } from "stream";

interface ZipEntry {
  name: string;
  content: string;
}

export function createZip(entries: ZipEntry[]): Readable {
  const archive = archiver("zip", { zlib: { level: 9 } });
  const stream = new Readable({ read() {} });

  archive.on("data", (chunk) => stream.push(chunk));
  archive.on("end", () => stream.push(null));
  archive.on("error", (err) => stream.destroy(err));

  for (const entry of entries) {
    archive.append(entry.content, { name: entry.name });
  }

  archive.finalize();
  return stream;
}
