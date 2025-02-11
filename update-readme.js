
const fs = require('fs');
const https = require('https');

// GraphQL query to fetch pinned repositories
const query = `
{
  user(login: "Aditya-Nagariya") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          stargazerCount
          forkCount
          primaryLanguage {
            name
            color
          }
        }
      }
    }
  }
}
`;

// Function to make GraphQL request
function makeGitHubRequest() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: '/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Node.js',
        'Authorization': `bearer ${process.env.GITHUB_TOKEN}`
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    });

    req.on('error', reject);
    req.write(JSON.stringify({ query }));
    req.end();
  });
}

// Function to generate repository cards HTML
function generateRepoCards(pinnedRepos) {
  return pinnedRepos.map(repo => {
    const languageColor = repo.primaryLanguage ? repo.primaryLanguage.color : '#000000';
    const languageName = repo.primaryLanguage ? repo.primaryLanguage.name : 'None';
    
    return `
<a href="${repo.url}">
  <div align="center">
    <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=Aditya-Nagariya&repo=${repo.name}&theme=radical" />
  </div>
</a>`;
  }).join('\n');
}

// Main function to update README
async function updateReadme() {
  try {
    // Fetch pinned repositories
    const response = await makeGitHubRequest();
    const pinnedRepos = response.data.user.pinnedItems.nodes;

    // Read current README
    const readmePath = './README.md';
    let readme = fs.readFileSync(readmePath, 'utf8');

    // Generate new repository section
    const repoCards = generateRepoCards(pinnedRepos);
    
    // Replace repository section in README
    const startMarker = '## 📌 Featured Repositories';
    const endMarker = '## 📈 GitHub Stats';
    
    const newSection = `## 📌 Featured Repositories\n\n${repoCards}\n\n`;
    
    const startIndex = readme.indexOf(startMarker);
    const endIndex = readme.indexOf(endMarker);
    
    if (startIndex !== -1 && endIndex !== -1) {
      readme = readme.slice(0, startIndex) + newSection + readme.slice(endIndex);
      fs.writeFileSync(readmePath, readme);
      console.log('README updated successfully!');
    } else {
      console.error('Could not find section markers in README');
    }
  } catch (error) {
    console.error('Error updating README:', error);
    process.exit(1);
  }
}

// Run the update
updateReadme();
