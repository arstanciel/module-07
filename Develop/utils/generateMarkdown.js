// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
      case 'MIT':
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0':
          return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'GPL 3.0':
          return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      case 'BSD 3':
          return '[![License: BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      default:
          return ''; 
  }
  
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    switch (license) {
      case 'MIT':
        return 'https://opensource.org/licenses/MIT';
      case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';
      case 'GPL 3.0':
        return 'https://www.gnu.org/licenses/gpl-3.0';
      case 'BSD 3':
        return 'https://opensource.org/licenses/BSD-3-Clause';
      default:
        return '';
    }
  }

  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty strin[]
  function renderLicenseSection(license) {
    if (license) {
      return `## License
  This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.`;
    } else {
      return '';
    }
  }

  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    const badge = renderLicenseBadge(data.license);
    const licenseSection = renderLicenseSection(data.license);
    return `# Project Title: ${data.title}
    
  ## BADGES
  ${badge}
  
  ## Table of Contents
  [Description](#description)
  [Motivation](#motivation)
  [Problem Solve](#problem-solve)
  [Installation](#installation)
  [Usage](#usage)
  [Tests](#tests)
  [Collaborators](#collab)
  [GitHub Username](#github-username)
  [Contact Email Address](#contact-email-address)
  [License](#license)

  ## DESCRIPTION
  ${data.description}

  ### Motivation: What was motivated you for this Project?
  ${data.motivation}

  ### Problem-Solve: What problems does your project solve?
  ${data.problemsolve}

  ### INSTALLATION 
  To install this project, clone the repository and run the following command:
  ${data.installation}

  ## USAGE 
  After Installation run 
  ${data.usage}

  ##CONTRIBUTING 
  ${data.constribution}

  ## Tests
  To ensure that the generator functions correctly run
  ${data.tests}

  ## QUESTIONS

  ### COLLABORATORS
  collaborators include:
  ${data.collab}

  ### Github Username
  [${data.githubUsername}](https://github.com/${data.githubUsername})

  ### Contact Email AddressÍ
  [${data.email}](mailto:${data.email})

  ## This application is covered under:
  ${licenseSection}
    Í    
  `;
  }
  
  export default generateMarkdown;
  