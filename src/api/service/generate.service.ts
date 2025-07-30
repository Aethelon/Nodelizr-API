import { getPackageJson } from "../../api/data/generate.template.js";
import { GeneratePayload } from "../../api/dto/generate.dto.js";
import { createZip } from "../../shared/utils/zip.js";

function getLicenseText(license: string, author: string) {
  const year = new Date().getFullYear();
  switch (license) {
    case "MIT":
      return `MIT License

Copyright (c) ${year} ${author}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;
    case "Apache-2.0":
      return `Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

Copyright (c) ${year} ${author}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
`;
    case "GPL-3.0":
      return `GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright (c) ${year} ${author}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
`;
    default:
      return `All rights reserved.`;
  }
}

export async function generateProject(payload: GeneratePayload) {
  const entries = [
    {
      name: "package.json",
      content: JSON.stringify(getPackageJson(payload), null, 2),
    },
    {
      name: "src/index.js",
      content: `// Entry point for your Nodelizr project
require('dotenv').config && require('dotenv').config();

console.log('Welcome to your Nodelizr project!');
console.log('Environment:', process.env.NODE_ENV || 'development');
`,
    },
    {
      name: "README.md",
      content: `# ${payload.description || "Generated via Nodelizr"}

This project was generated with [Nodelizr](https://github.com/Aethelon/Nodelizr-API).

## Getting Started

1. Install dependencies:

   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

2. Configure environment variables (optional):

   Copy the .env.example file to .env and adjust as needed.

3. Run the project:

   \`\`\`bash
   npm start
   \`\`\`

## License

This project is licensed under the ${payload.license || "MIT"} license.

---

Automatically generated. Customize as needed!
`,
    },
    {
      name: ".env.example",
      content: `# Example environment variables
NODE_ENV=development
PORT=3000
`,
    },
    {
      name: ".gitignore",
      content: `node_modules
.env
dist
package-lock.json
yarn.lock
`,
    },
    {
      name: "public/.gitkeep",
      content: "",
    },
    {
      name: "LICENSE",
      content: getLicenseText(
        payload.license || "MIT",
        payload.author || "Your Name"
      ),
    },
  ];

  return createZip(entries);
}
