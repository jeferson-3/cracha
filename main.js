const LinksSocialMedia = {
  github: 'jeferson-3',
  youtube: 'jeferson',
  facebook: 'Jheff G Batalha',
  instagram: 'jheff_batalha',
  twitter: 'jeferson'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https//${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url =`https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response =>  response.json())
  .then(data=> {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url 
    userImage.src = data.avatar_url
    userLink.textContent = data.login
  })
}

getGitHubProfileInfos()


