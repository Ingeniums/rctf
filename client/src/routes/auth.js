const redirectUris = ['https://klodd.ctf.ingeniums.club/auth']

const Auth = () => {
  const token = localStorage.token
  const search = new URLSearchParams(window.location.search)

  const state = search.get('state')
  const uri = search.get('redirect_uri')

  if (!token || !state || !uri || !redirectUris.includes(uri)) {
    location = '/login'
  } else {
    location = `${uri}?state=${encodeURIComponent(state)}&token=${encodeURIComponent(token)}`
  }

  return (
    null
  )
}

export default Auth
