import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  margin: 16px auto;
  border-radius: 4px;
  background-color: #F0F011 ;
  border: 4px solid #2450DB ;
  list-style: none;
`;

export const NoContact = styled.span`
  text-align: center;
  font-size: 20px;
  color: #777777;
  margin-top: 10px;
`;

export const Item = styled.li`
  background-color: #ffffff;
  border: 4px solid #2450DB ;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 4px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px 8px;
  border: 3px solid #2450DB;
  display: flex;
  align-items: center;
`;