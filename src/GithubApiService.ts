import fetch from 'node-fetch';
import User from './User';
import Repo from './Repo';

export default class GithubApiService {
  getUserInfo(userName: string) {
    return (async function () {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();
      const user = new User(data);
      return user;
    })();
  }

  getRepos(userName: string) {
    return (async function () {
      const res = await fetch(`https://api.github.com/users/${userName}/repos`);
      const data = await res.json();
      const repos = data.map((repo) => new Repo(repo));
      return repos;
    })();
  }
}
