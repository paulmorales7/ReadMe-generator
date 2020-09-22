function generateMarkdown(data) {
    return (`
  # ${data.title}
  
  # Table of Contents
  
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  # Description
  ![License](https://img.shields.io/badge/License-${data.License}-blue.svg "License Badge")
   - ${data.Description}
  # Installation
  ${data.Installation}
  # Usage
  ${data.Usage}
  # License
  License selected displayed in description. You have selected 
  ${data.License}
  # Contributing
  ${data.Contributing}
  # Tests
  ${data.Tests}
  # Questions
  For any questions please review the project in Github. For any additional questions feel free to contact me.
  - Github: ${data.Github}
  - Email: ${data.Email}
  `);
}

module.exports = generateMarkdown;
