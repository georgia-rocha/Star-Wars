import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import testData from '../../cypress/mocks/testData';
import userEvent from '@testing-library/user-event';

describe('Testando a page Home', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData) 
    });
  })
  it('testando se o titulo da page é renderizado', () => {
    render(<App />);
    const title = screen.getByText('Projeto Star Wars - Trybe' );
    expect(title).toBeInTheDocument();
  });
  it('testa se o input do type text para filtrar planetas por nome é rendezado', async () => {
    render(<App />);
    const searchFilterName = screen.getByRole('textbox');
    expect(searchFilterName).toBeInTheDocument();
    
  });
  it('testa se o select column é rendezado', async () => {
    render(<App />)
    const labelColumn = screen.getByText(/coluna/i)
    const selectColumn = screen.getByRole('combobox', { name: /coluna/i });
    const selectOperator = screen.getByTestId('comparison-filter');
    const inputNumber = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');
    const buttonRemoveAllFilter = screen.getByTestId('button-remove-filters');

    expect(labelColumn).toBeInTheDocument();
    expect(selectColumn).toBeInTheDocument();
    await waitFor(() => {
      const linePlanets = screen.getAllByRole('row');
      expect(linePlanets.length).toBe(11);
    })
    const searchFilterName = screen.getByRole('textbox');
    userEvent.type(searchFilterName, 'oo');
    await waitFor(() => {
      const linePlanets = screen.getAllByRole('row');
      expect(linePlanets.length).toBe(3);
    });
    userEvent.clear(searchFilterName);
    await waitFor(() => {
      const linePlanets = screen.getAllByRole('row');
      expect(linePlanets.length).toBe(11);
    });
    userEvent.selectOptions(selectColumn, 'diameter');
    userEvent.selectOptions(selectOperator, 'menor que');
    userEvent.type(inputNumber, '7200');
    userEvent.click(buttonFilter);
    await waitFor(() => {
      const linePlanets = screen.getAllByRole('row');
      expect(linePlanets.length).toBe(2);
    });
    userEvent.click(buttonRemoveAllFilter);
    await waitFor(() => {
      const linePlanets = screen.getAllByRole('row');
      expect(linePlanets.length).toBe(11);
    });
  });
});
