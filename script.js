import { Octokit } from '@octokit/rest';

(async () => {
  try {
    // Replace with your GitHub token
    const OWNER = 'arkadiy93';
    const REPO = 'test';

    // Initialize Octokit with the GitHub token
    const octokit = new Octokit({});

    // Step 1: Get the latest release
    console.log('Fetching the latest release...');
    const latestRelease = await octokit.repos.listTags({
      owner: OWNER,
      repo: REPO,
    });

    console.log(latestRelease)

   /* const latestTag = latestRelease.data.tag_name;
    console.log(`Latest release tag: ${latestTag}`);

    const { data } = await octokit.repos.listCommits({
      owner: OWNER,
      repo: REPO,
      sha: 'main', // Replace with your default branch if not "main"
    });

    console.log(data);*/
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
})();
