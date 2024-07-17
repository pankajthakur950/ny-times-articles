import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useNavigate } from 'react-router-dom';
import ArticleList from '../ArticleList';
import { useFetchData } from '../../hooks/useFetchData';
import {getArticlesList} from '../../services/articles.service';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../../hooks/useFetchData', () => ({
  useFetchData: jest.fn(),
}));

jest.mock('../../services/articles.service', () => ({
  getArticlesList: jest.fn(),
}));

const mockItems = [
  { id: 1, title: 'Article 1' },
  { id: 2, title: 'Article 2' },
];

describe('ArticleList Component', () => {
  beforeEach(() => {
    (useNavigate as jest.Mock).mockClear();
    (useFetchData as jest.Mock).mockClear();
    (getArticlesList as jest.Mock).mockClear();
  });

  it('renders loading skeleton when data is loading', () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
    });

    render(<ArticleList />);

    const skeltonEls = screen.getByTestId("articles").children;
    expect(skeltonEls.length).toBe(8);
    expect(skeltonEls[0].classList).toContain("skeleton-item");
  });

  it('renders articles when data is fetched1', async () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: mockItems,
      isLoading: false,
      isError: false,
    });

    render(<ArticleList />);

    const articleEls = screen.getByTestId('articles').children;
    expect(articleEls.length).toBe(mockItems.length);
    expect(articleEls[0].classList).toContain("article_item");
  });

  it('navigates to article detail page on article item click', async () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    (useFetchData as jest.Mock).mockReturnValue({
      data: mockItems,
      isLoading: false,
      isError: false,
    });

    render(<ArticleList />);
    
    const articleEls = screen.getByTestId('articles').children;
    userEvent.click(articleEls[0]);

    expect(mockNavigate).toHaveBeenCalledWith('/detail/1', {
      state: { article: mockItems[0] },
    });
  });
});
