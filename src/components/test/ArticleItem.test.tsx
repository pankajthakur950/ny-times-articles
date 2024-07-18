import React from 'react';
import { render } from '@testing-library/react';
import ArticleItem from '../ArticleItem'; // Adjust the path as per your project structure
import { Article } from '../../interfaces/Article';

describe('ArticleItem Component', () => {
  const mockArticle: Article = {
    id: '1',
    title: 'Sample Article',
    abstract: 'This is a sample article abstract.',
    publishedDate: '2024-07-17',
    byline: 'John Doe',
    url:"",
    image: {
      caption:"Article Image",
      metadata: [{
        url: 'https://example.com/image.jpg',
        format: '',
        height: 0,
        width: 0
      }],
    },
  };

  it('renders article item correctly', () => {
    const { getByText, getByAltText } = render(<ArticleItem item={mockArticle} />);

    expect(getByText('Sample Article')).toBeInTheDocument();
    expect(getByText('This is a sample article abstract.')).toBeInTheDocument();
    expect(getByText('2024-07-17')).toBeInTheDocument();

    const articleImage = getByAltText('Article Image');
    expect(articleImage).toBeInTheDocument();
    expect(articleImage).toHaveAttribute('src', 'https://example.com/image.jpg');

    expect(getByText('John Doe')).toBeInTheDocument();
  });

  it('renders fallback content when image URL is not available', () => {
    const articleWithoutImage: Article = { ...mockArticle, image: undefined };
    const { getByText, queryByAltText } = render(<ArticleItem item={articleWithoutImage} />);

    expect(queryByAltText('Article Image')).toBeNull();
    expect(getByText('Sample Article')).toBeInTheDocument();
  });
});
