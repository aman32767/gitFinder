class UI {
  constructor() {
    this.output = document.getElementById('output');
  }

  // show output
  showOutput(user) {
    this.output.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col=md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website: ${user.company}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Bio: ${user.bio}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // show repos
  showRepos(repos) {
    let outputRepo = '';

    repos.forEach(function (repo) {
      outputRepo += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url} target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forms_count}</span> </div>
          </div>
        </div>
      `;
    });

    // output repos
    document.getElementById('repos').innerHTML = outputRepo;
  }

  // show alert
  showAlert(message, className) {
    // clear any remaining alerts
    this.clearAlert();
    // create div
    const div = document.createElement('div');
    // add class
    div.className = className;
    // add text
    div.appendChild(document.createTextNode(message));
    // get parrent
    const container = document.querySelector('.inputContainer');
    // get search box
    const search = document.querySelector('.search');
    // insert alert
    container.insertBefore(div, search);

    // timeout after 3 secsonds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  //  clear output
  clearOutput() {
    this.output.innerHTML = '';
  }
}