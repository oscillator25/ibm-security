/**
 * @file Filter panel search tests.
 * @copyright IBM Security 2020 - 2021
 */

import { act, render, wait } from '@testing-library/react';
import React from 'react';

import renderWithinLandmark from '../../../../../config/jest/helpers/renderWithinLandmark';

import Checkbox from '../../../Checkbox';
import FilterPanelSearch from '../FilterPanelSearch';

const { name } = FilterPanelSearch;

describe(name, () => {
  test('should have no Axe or DAP violations', async () => {
    const { container } = renderWithinLandmark(
      <FilterPanelSearch labelText="search label" />
    );
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('FilterPanelSearch');
  });

  test('adds custom class name', () => {
    const { container } = render(
      <FilterPanelSearch className="custom-class" labelText="search label" />
    );
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  test('renders results content when keyboard focus is added', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <FilterPanelSearch
        labelText="search label"
        placeholder="search placeholder"
      >
        <div data-testid="result-content" />
      </FilterPanelSearch>
    );

    getByPlaceholderText('search placeholder').focus();
    expect(getByTestId('result-content')).toBeVisible();
  });

  test('does not render results content when keyboard focus is removed', async () => {
    const { queryByTestId, getByPlaceholderText } = render(
      <FilterPanelSearch
        labelText="search label"
        placeholder="search placeholder"
      >
        <div data-testid="result-content" />
      </FilterPanelSearch>
    );

    const searchInput = getByPlaceholderText('search placeholder');
    searchInput.focus();
    searchInput.blur();

    await wait(() =>
      expect(queryByTestId('result-content')).not.toBeInTheDocument()
    );
  });

  test('does not remove results content when keyboard focus transfers to results', () => {
    jest.useFakeTimers();
    const { getByTestId, getByPlaceholderText, container } = render(
      <FilterPanelSearch
        labelText="search label"
        placeholder="search placeholder"
      >
        <div data-testid="result-content">
          <Checkbox labelText="checkbox" id="checkbox" />
        </div>
      </FilterPanelSearch>
    );

    const searchInput = getByPlaceholderText('search placeholder');
    searchInput.focus();
    container.querySelector('#checkbox').focus();

    // Speed timeout timer up to make assertion
    act(() => {
      jest.runAllTimers();
    });
    expect(getByTestId('result-content')).toBeVisible();
  });

  test('adds additional props to the search', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(
        <FilterPanelSearch data-testid={dataTestId} labelText={name} />
      ).getByTestId(dataTestId)
    ).toBeInTheDocument();
  });
});
