import { useState } from 'react'
import './SearchInput.css'

interface SearchInputProps {
	title: string;
  onSetText: (text: string) => void;
}

const CODE_ENTER = 'Enter';

const SearchInput = ({ title, onSetText }: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState('')

  const handleInputChange = (value: string) => {
    setSearchValue(value);
  }

	const handleKeyUp = (value: string) => {
		setSearchValue(value);
		onSetText(value);
	}

  return (
    <div className="search">
      <h1>{title}</h1>
      <input
				className="search-input"
				type="text"
				placeholder="Buscar un libro"
				value={searchValue}
				onKeyUp={(event) => {
					if(event.key === CODE_ENTER) {
						handleKeyUp((event.target as HTMLInputElement).value);
					}
				}}
				onChange={(event) => handleInputChange(event.target.value)} />
      <button className="search-button" onClick={() => onSetText(searchValue)}>Buscar</button>
    </div>
  )
}

export default SearchInput
