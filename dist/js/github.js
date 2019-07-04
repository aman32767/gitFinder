class Github {
  constructor() {
    this.client_id = '5de4e80f8814559bc73d';
    this.client_secret = 'cac64881244c2ca7ce97657e58828f8043a7ad7b';
    this.respos_count = 5;
    this.repos_sort = 'ceated: asc';
  }

  async getUser(user) {
    const responseProfile = await fetch(
      `https://api.github.com/users/${user}?client_id=${
      this.client_id
      }&client_secret=${this.client_secret}`
    );
    const responseRepo = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.respos_count}&sort=${this.repos_sort}&client_id=${
      this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await responseProfile.json();
    const repos = await responseRepo.json();

    return {
      profile,
      repos
    }
  }
}
