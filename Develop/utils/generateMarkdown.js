// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string'
let selectedbadge;
let badgeLink;
function renderLicenseBadge(license) {
  if (license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  }else if (license === 'Apache'){
   return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  }else if (license === 'ISC'){
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';
  }else if (license === 'GNU'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  }else if (license === 'BSD'){
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
  }else if (license === 'Boost'){
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]';
  }else if (license === 'Creative Commons'){
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]';
  }else if (license === 'Eclipse'){
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]';
  }else if (license === 'Mozilla'){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
  }else if (license === 'The Unlicense'){
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
  }else{
    return '';
  };

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT'){
    return '(https://opensource.org/licenses/MIT)';
  }else if (license === 'Apache'){
    return '(https://opensource.org/licenses/Apache-2.0)';
  }else if (license === 'ISC'){
    return '(https://opensource.org/licenses/ISC)';
  }else if (license === 'GNU'){
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  }else if (license === 'BSD'){
    return '(https://opensource.org/licenses/BSD-3-Clause)';
  }else if (license === 'Boost'){
    return '(https://www.boost.org/LICENSE_1_0.txt)';
  }else if (license === 'Creative Commons'){
    return '(http://creativecommons.org/publicdomain/zero/1.0/)';
  }else if (license === 'Eclipse'){
    return '(https://opensource.org/licenses/EPL-1.0)';
  }else if (license === 'Mozilla'){
    return'(https://opensource.org/licenses/MPL-2.0)';
  }else if (license === 'The Unlicense'){
    return'(http://unlicense.org/)';
  }else{
    return 'No Associated License';
  };
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(badge) {
//   return ''
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown({data}) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [License](#license)
    5. [Contribution](#contribution)
    6. [Tests](#tests)

  ## Description
      ${data.description}
  
  ## Installation
      ${data.installation}
  
  ## Usage
      ${data.usage}
  
  ## Contribution
      ${data.contribution}
  
  ## License
      ${renderLicenseBadge(data.license)}
      ${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
