import List from "@growth-ui/native/molecules/List";
import React, { useState } from "react";

const ListExampleActive = () => {
  const [activeItem, setActiveItem] = useState("Dog");

  const handlePress = (item: string) => setActiveItem(item);

  return (
    <List relaxed>
      <List.Item active={activeItem === "Dog"} text="Dog" onPress={() => handlePress("Dog")} />
      <List.Item active={activeItem === "Cat"} text="Cat" onPress={() => handlePress("Cat")} />
      <List.Item active={activeItem === "Pig"} text="Pig" onPress={() => handlePress("Pig")} />
    </List>
  );
};

export default ListExampleActive;
