import dotenv from 'dotenv';
dotenv.config();
import React, { Component } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearch from './NewsSearch';


jest.mock('../services/newsApi.js', () => ({
  getArticles: () => [{
      author: 'dizzom',
      title: 'hello',
      description: 'what a great',
      url: 'image url'}]
}))

describe('tests the NewsSearch Container', () => {
  it('displays a list of news articles', async () => {
    render(<NewsSearch />);

    screen.getByText('Loading...');

    const input = await screen.findByLabelText('Search for article mentions');
    userEvent.type(input, 'Ford');

    const submitButton = await screen.findByRole('button', {
      name: 'search-articles',
    });
    userEvent.click(submitButton);

    return waitFor(() => {
      const articles = screen.getAllByText('dizzom', { exact: false });
    });
  });
});
