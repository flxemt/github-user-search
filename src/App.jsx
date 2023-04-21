import { useEffect, useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import UserCard from './components/UserCard'
import Spinner from './components/Spinner'

function App() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchUser(search) {
    try {
      setIsLoading(true)
      setUser(null)
      setError(null)
      const res = await fetch(`https://api.github.com/users/${search}`)
      const data = await res.json()
      if (!res.ok) throw new Error(res.status)
      setUser(data)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchUser('octocat')
  }, [])

  return (
    <main className="w-full md:max-w-[573px] lg:max-w-[730px] mx-auto my-8 md:my-[8.75rem] xl:max-w-[730px] xl:my-36">
      <Header />
      <Search fetchUser={fetchUser} error={error} />
      {isLoading && <Spinner />}
      {user && <UserCard user={user} />}
    </main>
  )
}

export default App
