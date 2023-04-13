function renderLicenseBadge(license) {
    if (!license) {
      return '';
    }
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  
  function renderLicenseLink(license) {
    if (!license) {
      return '';
    }
    return `[${license}](https://choosealicense.com/licenses/${license}/)`;
  }
  
  function renderLicenseSection(license) {
    if (!license) {
      return '';
    }
    return `## License
  
  This project is licensed under the ${renderLicenseLink(license)} license.`;
  }
  
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}
  
  ${renderLicenseSection(data.license)}
  
  ## Badges
  
  ${renderLicenseBadge(data.license)}
  
  ## Features
  
  ${data.features}
  
  ## How to Contribute
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  `;
  }
  
  module.exports = generateMarkdown;