// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "AGPL v3":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"

    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

    case "GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"

    case "LGPL v3":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"

    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

    case "MPL 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}

  ${renderLicenseBadge}

  ## Description
  ${data.description}
    
  ## Table of Contents
    
  - [Installation](#Installation)
  - [License](#License)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Testing](#Testing)
  - [Questions](#Questions)
 
  ## Usage
  ${data.usage}

  ## Installation
  ${data.install}
    
  ## License
    
  This is licensed as under the [${license}](${renderLicenseLink(license)})
    
  ## Contributing
  ${data.contributions}
    
  ## Testing
  ${data.testing}
    
  ## Questions
    
  Any further questions can be directed to me via my [GitHub](https://github.com/${data.github}/), or [email](${data.email}) if it is a more pressing matter.
`;
}

module.exports = generateMarkdown;