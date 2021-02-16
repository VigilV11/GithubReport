import Repo from './Repo';

export default class User {
  loginName: string;
  fullName: string;
  repoCount: number;
  followerCount: number;
  repos?: Repo[];

  constructor(userResponse: any) {
    this.loginName = userResponse.login;
    this.fullName = userResponse.name;
    this.repoCount = userResponse.public_repos;
    this.followerCount = userResponse.followers;
  }
}
