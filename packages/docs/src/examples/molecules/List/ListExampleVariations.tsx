import faker from "faker";
import Image from "@growth-ui/native/atoms/Image";
import List from "@growth-ui/native/molecules/List";
import React from "react";
import Spacer from "@growth-ui/native/atoms/Spacer";
import { View } from "react-native";

const ListExampleVariations = () => (
  <>
    <View
      style={{
        maxWidth: 400,
      }}
    >
      <List divided padded ripple={false} verticalAlign="top">
        <List.Item>
          <List.Image src={faker.image.animals()} width={48} height={48} />
          <List.Content>
            <List.Heading>Omicron looks ominous. How bad is it likely to be?</List.Heading>
            <Spacer size={5} />
            <List.Description>
              Virologists will tell you that predicting how a new virus might evolve is a fool’s
              errand. Predicting that it will evolve, though, is money in the bank. The virus that
              causes covid-19, sars-cov-2, is no exception.
            </List.Description>
            <Spacer size={10} />
            <Image src="https://images.pexels.com/photos/331985/pexels-photo-331985.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </List.Content>
        </List.Item>

        <List.Item>
          <List.Content>
            <List.Heading>
              India’s population will start to shrink sooner than expected
            </List.Heading>
            <Spacer size={10} />
            <List.Description>
              For the first time, Indian fertility has fallen below replacement level
            </List.Description>
            <Spacer size={10} />
            <Image
              rounded
              src="https://www.economist.com/img/b/1000/563/90/sites/default/files/images/print-edition/20211204_ASP001_0.jpg"
            />
          </List.Content>
          <List.Image src={faker.image.imageUrl()} width={48} height={48} />
        </List.Item>
      </List>
    </View>
  </>
);

export default ListExampleVariations;
