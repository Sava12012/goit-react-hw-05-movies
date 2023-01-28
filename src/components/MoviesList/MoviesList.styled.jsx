import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MovieItem = styled.li`
  flex-basis: calc((100% - 120px) / 5);
  max-height: 100%;
  min-height: 390px;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--bg);
  box-shadow: var(--main-shadow);
`;

export const MovieLink = styled(Link)`
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &:hover p {
    transition: all 500ms ease-in-out;
    color: var(--accent);
    font-size: 16px;
  }
`;

export const MovieImg = styled.img`
  transition: all 200ms ease-in-out;
`;

export const MovieName = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  height: 100%;
  padding: 10px 10px;
  font-weight: 500;
  font-size: 14px;
  transition: all 200ms ease-in-out;
  align-items: center;
`;
