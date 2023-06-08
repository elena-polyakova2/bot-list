//import { Component } from 'react';
import { ChangeEvent } from 'react';
import './search-bar.styles.css';

type SearchBarProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void; //event to receive
}

const SearchBar = ({className, placeholder, onChangeHandler}: SearchBarProps) => 
  (
  <input 
  className={`search-bar ${className}`}
  type='search' 
  placeholder={placeholder}
  onChange={ onChangeHandler } />
);


// class SearchBar extends Component {

//   render() {
//     return (
//       <input 
//       className={`search-bar ${this.props.className}`}
//       type='search' 
//       placeholder={this.props.placeholder}
//       onChange={ this.props.onChangeHandler } />
//     );
//   }
// };

export default SearchBar;