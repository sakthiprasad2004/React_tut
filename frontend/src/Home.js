import Feed from './Feed';
// import { useContext } from 'react'
// import DataContext from './context/DataContext'
import { useStoreState } from 'easy-peasy';
const Home = () => {
    // const {searchResults,fetchError,isLoading }= useContext(DataContext)
    const searchResults = useStoreState((state) => state.searchResults) || []; // Ensure searchResults is an array
    const isLoading = useStoreState((state) => state.isLoading);
    const fetchError = useStoreState((state) => state.fetchError);

    return (
        <main className="Home">
            {isLoading && <p className='statusMsg'>Loading posts...</p>}
            {fetchError && <p className='statusMsg' style={{ color: 'red' }}>{fetchError}</p>}
            {!isLoading && !fetchError && (searchResults.length ? (
                <Feed posts={searchResults} />
            ) : (
                <p className='statusMsg'>No posts to display</p>
            ))}
        </main>
    );
}

export default Home