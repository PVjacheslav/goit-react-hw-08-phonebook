import { NavLink } from "react-router-dom";
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2450DB;
  font-size: 20px;

  &:hover {
    color: #ffffff;
  }
`;