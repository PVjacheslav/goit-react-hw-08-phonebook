import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.p`
  font-weight: 700;
  color: #2450DB;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 4px solid #2450DB;
  color: #2450DB;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px;

  &:hover {
    background-color: #b9bcd3;
  }
`;