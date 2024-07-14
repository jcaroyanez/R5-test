import {render, fireEvent, screen} from '@testing-library/react';
import SearchInput from './';

describe('SearchInput component test suite', () => {
	it('should render component render correct title', () => {
		const title = 'test title';
		const onSearch = jest.fn();

		render(<SearchInput title={title} onSetText={onSearch} />);

		const titleElement  = screen.getByText(/test title/);

		expect(titleElement).toBeInTheDocument();
	});

	it('shoould typing and pressing the button then call fuction for set value', () => {
		const title = 'test title';

		const onSearch = jest.fn();

		render(<SearchInput title={title} onSetText={onSearch} />);

		const button = screen.getByText('Buscar');
		const input = screen.getByPlaceholderText(/Buscar/i);

		fireEvent.change(input, { target: { value: 'javascript' } });
		fireEvent.click(button);

		expect(onSearch).toBeCalled();
		expect(onSearch).toHaveBeenCalledWith('javascript');
	});
});
