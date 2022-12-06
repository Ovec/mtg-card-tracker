import './SearchContainer.css';
import SearchButton from './SearchButton';


const SearchContainer = () => {
    return (
        <div className="container">
            <SearchButton />
            <p>There are no cards in your portfolio.</p>
        </div>
    );
};

export default SearchContainer;
