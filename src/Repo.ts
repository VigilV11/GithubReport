export default class Repo {
  repoName: string;
  description: string;
  url: string;
  size: number;
  forkCount: number;

  constructor(repos: any) {
    this.repoName = repos.name;
    this.description = repos.description;
    this.url = repos.html_url;
    this.size = repos.size;
    this.forkCount = repos.forks;
  }
}
