import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Column1 = styled.div`
  flex: 0 1 200px;
  height: 99vh;
  position: -webkit-sticky;
  position: sticky;
  top: 10px;
`;

const Column2 = styled.div`
  flex: 0 1 700px;
  margin-bottom: 50px;
`;

const Layout = ({ column1, column2 }) => (
  <Wrapper>
    {column1 && <Column1>{column1}</Column1>}
    {column2 && <Column2>{column2}</Column2>}
  </Wrapper>
);

Layout.defaultProps = {
  column1: null,
  column2: null,
};

Layout.propTypes = {
  column1: PropTypes.node,
  column2: PropTypes.node,
};

export default Layout;
