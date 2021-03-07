
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  switch (data.license) {
    case 'Apache License 2.0':
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'GNU General Public License v3.0':
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'MIT':
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'BSD 2-Clause Simplified License':
      licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case 'BSD 3-Clause New or Revised License':
      licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'Boost Software License 1.0':
      licenseBadge = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case 'Creative Commons Zero v1.0 Universal':
      licenseBadge = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case 'Eclipse Public License 2.0':
      licenseBadge = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      break;
    case 'GNU Affero General Public License v3.0':
      licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case 'GNU Lesser General Public License v2.1':
      licenseBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
      break;
    case 'Mozilla Public License 2.0':
      licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case 'The Unlicense':
      licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      break;
    case 'None':
      licenseBadge = ``;
      break;
    default:
  }
  return `
# ${data.title}\n
${licenseBadge}\n
## Description\n
${data.description}\n
## Table of Contents (Optional)\n
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)\n
## Installation\n
${data.installation}\n
## Usage\n
${data.usage}\n
## Credits\n
${data.credits}\n
## License\n
${data.license}\n
## Contributing\n
${data.contributing}\n
## Tests\n
${data.tests}\n
## Questions\n
If you have any questions about the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}). You can find more of my work at [${data.github}](https://github.com/${data.github}/)`;
}

module.exports = generateMarkdown;
