import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 40px;
  justify-content: center;
`;

export const Item = styled.li`
  flex-basis: 250px;
  background-color: var(--bg);
  box-shadow: var(--main-shadow);
`;

export const Img = styled.img`
  margin-bottom: 8px;
  border-radius: 4px;
  min-height: 375px;
`;

export const Name = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Character = styled.p`
  margin-bottom: 8px;
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
