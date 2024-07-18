import React from 'react';
import { render } from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import ArticleDetail from '../ArticleDetail';
import { Article } from '../../interfaces/Article';

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn(),
  }));

describe('ArticleDetail Component', () => {
    beforeEach(() => {
        (useLocation as jest.Mock).mockClear();
      });
    const mockArticle: Article = {
        id: '1',
        title: 'Sample Article',
        abstract: 'This is a sample article abstract.',
        publishedDate: '2024-07-17',
        byline: 'John Doe',
        url: 'https://example.com/article',
        image: {
            caption: "Article Image",
            metadata: [{
                url: 'https://example.com/image1.jpg',
                format: '',
                height: 0,
                width: 0
            },
            {
                url: 'https://example.com/image2.jpg',
                format: '',
                height: 0,
                width: 0
            },
            {
                url: 'https://example.com/image3.jpg',
                format: '',
                height: 0,
                width: 0
            }],
        },
        organizationFacets: ['Organization A', 'Organization B'],
    };

    it('renders article details correctly', () => {
        const location = { state: { article: mockArticle } };
        (useLocation as jest.Mock).mockReturnValue(location);

        const { getByText, getByAltText } = render(<ArticleDetail/>);

        expect(getByText('Sample Article')).toBeInTheDocument();
        expect(getByText('This is a sample article abstract.')).toBeInTheDocument();
        expect(getByText('2024-07-17')).toBeInTheDocument();
        expect(getByText('John Doe')).toBeInTheDocument();
        expect(getByText('Read Full Article')).toBeInTheDocument();
        expect(getByAltText('Article Image')).toBeInTheDocument();
        expect(getByAltText('Article Image')).toHaveAttribute('src', 'https://example.com/image3.jpg');

        expect(getByText('Related Organizations')).toBeInTheDocument();
        expect(getByText('Organization A')).toBeInTheDocument();
        expect(getByText('Organization B')).toBeInTheDocument();
    });

    it('renders fallback content when article data is missing', () => {
        const location = { state: { article: { id: '2' } as Article } };
        (useLocation as jest.Mock).mockReturnValue(location);

        const { getByText, queryByText } = render(<ArticleDetail/>);

        expect(queryByText('Sample Article')).toBeNull();
        expect(getByText('Article Details')).toBeInTheDocument();
    });
});
