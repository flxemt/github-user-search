import { useState } from 'react'

export default function Search(props) {
  const [search, setSearch] = useState('')

  function handleChange(event) {
    setSearch(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    props.fetchUser(search)
  }

  return (
    <form
      className="mt-9 py-2 pl-4 pr-2 bg-snow-white dark:shadow-none dark:bg-dark-blue h-[60px] flex gap-2 rounded-md shadow-card md:py-[0.625rem] md:pr-[0.625rem] md:pl-8 md:h-[69px] md:gap-6"
      onSubmit={handleSubmit}
    >
      <img src="/icon-search.svg" alt="Search" className="self-center" />
      <input
        type="text"
        className="bg-transparent outline-none text-h4 placeholder:text-blue dark:placeholder:text-white w-full md:flex-1 md:text-[1.125rem]"
        placeholder="Search GitHub username…"
        value={search}
        onChange={handleChange}
      />
      {props.error && (
        <span className="self-center text-red shrink-0 text-[0.6875rem] md:text-body">
          {props.error.message === '404' ? 'No results' : `Error ${props.error.message}`}
        </span>
      )}
      <button className="bg-primary rounded-sm font-bold px-4 text-[0.875rem] text-white hover:bg-primary-hover md:text-h3 md:px-6">
        Search
      </button>
    </form>
  )
}
