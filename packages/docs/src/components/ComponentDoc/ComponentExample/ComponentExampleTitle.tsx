import ComponentDocContext from "../ComponentDocContext";
import React, { useContext } from "react";
import { Container, Heading } from "growth-ui-react";

const ComponentExampleTitle = () => {
  const { description, id, title } = useContext(ComponentDocContext);

  return (
    <Container id={id}>
      {title && <Heading as="h3">{title}</Heading>}
      {description && <p>{description}</p>}
    </Container>
  );
};

export default ComponentExampleTitle;
