import Context from "../Context";
import React, { MouseEvent, ReactNode, useContext } from "react";
import Router from "next/router";
import { availableLanguages, growthUIRepoURL } from "../../utils";
import {
  Checkbox,
  Container,
  Dropdown,
  DropdownItemProps,
  Grid,
  Icon,
  Spacer,
} from "@growth-ui/react";

type Props = {
  children?: ReactNode;
};

const iconStyle = {
  cursor: "pointer",
  width: "30px",
  height: "30px",
};

const Navbar = ({ children }: Props) => {
  const { darkMode, setDarkMode } = useContext(Context);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleAddItem = (_: MouseEvent, { value }: DropdownItemProps) => {
    const { asPath, push } = Router;

    push(asPath, asPath, { locale: value as string });
  };

  return (
    <Container
      as="nav"
      fluid
      shadow
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        backdropFilter: "blur(2.5px)",
        zIndex: 1,
      }}
    >
      <Grid style={{ padding: "0.5rem" }}>
        <Grid.Row verticalAlign="middle" horizontalAlign="space-between">
          <Grid.Col>{children}</Grid.Col>
          <Grid.Col>
            <Grid.Row verticalAlign="middle">
              <Grid.Col>
                <Spacer size={15} />
              </Grid.Col>
              <Grid.Col>
                <Grid.Row verticalAlign="middle">
                  <Icon name="language" width={20} />
                  <Spacer size={5} />
                  <Dropdown
                    icon={null}
                    simple
                    space
                    defaultValue={availableLanguages[0].language}
                    options={availableLanguages.map(({ language, locale }) => ({
                      value: locale,
                      text: language,
                    }))}
                    onAddItem={handleAddItem}
                  />
                </Grid.Row>
              </Grid.Col>
              <Grid.Col>
                <Spacer size={10} />
              </Grid.Col>
              <Grid.Col>
                <Checkbox toggle checked={darkMode} onChange={handleToggle}>
                  <Icon name={darkMode ? "sun" : "partly sunny"} />
                </Checkbox>
              </Grid.Col>
              <Grid.Col>
                <Spacer size={10} />
              </Grid.Col>
              <Grid.Col>
                <a href={growthUIRepoURL} target="_blank" rel="noreferrer">
                  <Icon name="github" style={iconStyle} />
                </a>
              </Grid.Col>
              {/* <Grid.Col>
                <Spacer size={15} />
              </Grid.Col>
              <Grid.Col only={["tablet", "laptop", "computer", "widescreen"]}>
                <ComponentSearch
                  trigger={
                    <Paragraph>
                      {`${t("search")}  ${getOperatingSystem() === "Mac" ? "⌘K" : "Ctrl K"}`}
                    </Paragraph>
                  }
                />
              </Grid.Col> */}
              <Grid.Col>
                <Spacer size={10} />
              </Grid.Col>
            </Grid.Row>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Navbar;
