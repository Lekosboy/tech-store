import React from "react";
import { ProductConsumer } from "../context/Context";
export default function HomePage() {
  return (
    <>
      <ProductConsumer>
        {(value) => {
          console.log(value);
          return <h1>Hello from HomePage</h1>;
        }}
      </ProductConsumer>
    </>
  );
}
