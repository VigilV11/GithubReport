import GithubApiService from './GithubApiService';

(async function getData() {
  if (process.argv.length < 3) {
    console.error('Please enter the GitHub username as an argument.');
    return;
  }

  const userName = process.argv[2];

  const apiService = new GithubApiService();

  const user = await apiService.getUserInfo(userName);
  const repos = await apiService.getRepos(userName);

  user.repos = repos
    .sort((current, next) => next.forkCount - current.forkCount)
    .slice(0, 5);

  console.log(user);
})();
