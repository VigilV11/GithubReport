"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(repos) {
        this.repoName = repos.name;
        this.description = repos.description;
        this.url = repos.html_url;
        this.size = repos.size;
        this.forkCount = repos.forks;
    }
    return Repo;
}());
exports.default = Repo;
