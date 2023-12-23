import styles from "./Search.module.scss"

const Search = ({ setSearch,setPageNo }) => {
  const handleSumbit = (e) => {
    e.preventDefault();
    setPageNo(1)
  }
  return (
    <form
      onSubmit={handleSumbit}
      className="d-flex justify-content-center align-content-center gap-4 mb-4"
    >
      <input
        className={styles.input}
        type="text"
        placeholder="Search a character"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-primary fs-5"
      >
        Search
      </button>
    </form>
  )
}

export default Search
