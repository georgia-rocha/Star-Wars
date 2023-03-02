import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import testData from '../../cypress/mocks/testData';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

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
  it('testa se o input do type text para fltar planetas por nome é rendezado', () => {
    render(<App />);
    const inputFilterName = screen.getByTestId('name-filter');
    expect(inputFilterName).toBeInTheDocument();
  });
  it('testa se o select column é rendezado', async () => {
    act(() => {
      render(<App />);
    })
      const labelColumn = screen.getByText(/coluna/i)
      const selectColumn = screen.getByRole('combobox', { name: /coluna/i });
      expect(labelColumn).toBeInTheDocument();
      expect(selectColumn).toBeInTheDocument();
      await waitFor(() => {
        const linePlanets = screen.getAllByRole('row');
        expect(linePlanets.length).toBe(11);
      })
      const inputFilterName = screen.getByRole('textbox');
      userEvent.type(inputFilterName, 'oo');
      await waitFor(() => {
        const linePlanets = screen.getAllByRole('row');
        expect(linePlanets.length).toBe(3);
      })
  });
});
