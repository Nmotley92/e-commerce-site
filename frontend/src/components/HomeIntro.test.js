import React from 'react';
import { render } from '@testing-library/react';
import HomeIntro from './HomeIntro';

describe('HomeIntro', () => {
  it('should render the intro text', () => {
    const { getByText } = render(<HomeIntro />);
    expect(getByText('TO SUCCEED')).toBeInTheDocument();
    expect(getByText('YOU MUST READ')).toBeInTheDocument();
    expect(getByText('Explore new worlds from authors')).toBeInTheDocument();
  });

  it('should render the book images', () => {
    const { getAllByAltText } = render(<HomeIntro />);
    const bookImages = getAllByAltText(/book/i);
    expect(bookImages).toHaveLength(3);
  });
});
