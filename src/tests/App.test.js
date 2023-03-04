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
  it('testa se as opções de filtros são renderizados na tela', async () => {
    render(<App />)
    const labelColumn = screen.getByText(/coluna/i)
    const selectColumn = screen.getByRole('combobox', { name: /coluna/i });
    const selectOperator = screen.getByTestId('comparison-filter');
    const inputNumber = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');
    const buttonRemoveAllFilter = screen.getByTestId('button-remove-filters');

    expect(labelColumn).toBeInTheDocument();
    expect(selectColumn).toBeInTheDocument();
    expect(selectOperator).toBeInTheDocument();
    expect(inputNumber).toBeInTheDocument();
    expect(buttonFilter).toBeInTheDocument();
    expect(buttonRemoveAllFilter).toBeInTheDocument();
    
    await waitFor(() => {
      const linePlanets = screen.getAllByRole('row');
      expect(linePlanets.length).toBe(11);
    });

    //Testa se é possível fazer um filtro por nome e se a tabela atualiza removendo o nome
    
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

    //Testa se é possível fazer um filtro pelas opções de filtros

    userEvent.selectOptions(selectColumn, 'rotation_period');
    userEvent.selectOptions(selectOperator, 'igual a');
    userEvent.type(inputNumber, '23');
    userEvent.click(buttonFilter);

    await waitFor(async () => {
      const linePlanets = screen.getAllByRole('row');
      expect(linePlanets.length).toBe(4);

      const filter = screen.getByTestId('filter');
      expect(filter).toBeInTheDocument();

      const btnFilter = screen.getByRole('button', { name: 'x' });
      expect(btnFilter).toBeInTheDocument();
      userEvent.click(btnFilter);

      expect(filter).not.toBeInTheDocument();
    });

 

    //Testa o button de remover todos os filtros

    userEvent.selectOptions(selectColumn, 'orbital_period');
    userEvent.selectOptions(selectOperator, 'menor que');
    userEvent.type(inputNumber, '350');
    userEvent.click(buttonFilter);

    await waitFor(() => {
      const linePlanets = screen.getAllByRole('row');
      expect(linePlanets.length).toBe(11);
    });

    userEvent.click(buttonRemoveAllFilter);
    await waitFor(() => {
      const linePlanets = screen.getAllByRole('row');
      expect(linePlanets.length).toBe(11);
    });


  });

 
});
