export default function({store, redirect}) {
  if(!store.getters['login/hasToken']) {
    redirect('/login?message=login')
  }
}
