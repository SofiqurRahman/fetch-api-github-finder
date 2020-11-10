class Github{
  constructor(){
    this.client_id='09bd4fc25012e5bc3f6e';
    this.client_secret='8a30e35463cbbb5ac71b3acb377b9df313a479c6';
    this.repos_count=5;
    this.repos_sort='created: asc'
  }
  async getUser(user){
    const profileResponse = await  fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile=await profileResponse.json();

    const reposResponse = await  fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repos=await reposResponse.json();
    return{
      profile,
      repos
    }
  }
}