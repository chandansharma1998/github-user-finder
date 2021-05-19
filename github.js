class GitHub{
  constructor(){
    this.client_id = 'bc6cb587c7a55cb7c4de';
    this.client_secret = 'c60088cd6ded9c4cd6958b062d102d218c737213';

    this.repos_count = 5;
    this.repos_sort = 'created:asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile =await profileResponse.json();
    const repos =await repoResponse.json();

    return { //return object
      profile,
      repos
    }
  }
}