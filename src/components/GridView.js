// src/components/GridView.js
import React from "react";
import styled from "styled-components";
import Product from "./Product";

import { doorsData } from "../Data/data";

const GridView = () => {
  return (
    <GridViewContainer>
      <div className="products-container">
        {doorsData.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </GridViewContainer>
  );
};

const GridViewContainer = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
