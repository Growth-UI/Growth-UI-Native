import Context from "../Context";
import Link from "next/link";
import React, { FC, useContext, useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { components } from "../../utils";
import { useRouter } from "next/router";
import {
  Anchor,
  Collapse,
  Grid,
  IconButton,
  List,
  Sidebar,
  SidebarProps,
  Spacer,
  Heading,
  Image,
} from "@growth-ui/react";

const headingStyle = {
  width: "fit-content",
  margin: 0,
};

const collapsedItemStyle = {
  paddingLeft: "47px",
};

const getBasePathname = (pathname: string) => pathname.split("/")[1];
const getSubPathname = (pathname: string) => pathname.split("/")[2];

const VerticalSidebar: FC<SidebarProps> = (props) => {
  const { asPath, push } = useRouter();
  const { t } = useTranslation();
  const { darkMode } = useContext(Context);

  const [activeItem, setActiveItem] = useState(getBasePathname(asPath));
  const [activeSubItem, setActiveSubItem] = useState(getSubPathname(asPath));

  useEffect(() => {
    setActiveSubItem(getSubPathname(asPath));
  }, [asPath]);

  const handleClickItem = (item: string) => {
    if (activeItem === item) {
      setActiveItem("");
    } else {
      setActiveItem(item);
    }
  };

  const renderMenuItemsByType = () =>
    components.map((component) => (
      <List.Item
        key={component}
        active={activeItem === "components" && activeSubItem === component}
        style={collapsedItemStyle}
        onClick={() => push(`/components/${component}`)}
      >
        <List.Content>{t(`examples:${component}.heading`)}</List.Content>
      </List.Item>
    ));

  return (
    <Sidebar {...props}>
      <List padded selection hoverColor="blue-50" verticalAlign="middle">
        <List.Item style={{ boxShadow: "0 1px 2px 0 rgb(34 36 38 / 15%)", padding: "1.05rem" }}>
          <Image avatar lazy={false} size="mini" src="/images/logo.png" />
          &nbsp;&nbsp;
          <strong>Growth UI Native</strong>&nbsp;&nbsp;
        </List.Item>
        <List.Item onClick={() => handleClickItem("getting-started")}>
          <Grid.Row horizontalAlign="space-between" verticalAlign="middle">
            <div>
              <Grid.Row verticalAlign="middle">
                <IconButton color="primary" name="newspaper" size={18} />
                <Spacer inline axis="horizontal" size={8} />
                <Heading as="h4" style={headingStyle}>
                  {t("common:gettingStarted")}
                </Heading>
              </Grid.Row>
            </div>
            <Spacer inline axis="horizontal" size={60} />
            <IconButton
              color="primary"
              name="chevron down"
              flipped={activeItem === "getting-started"}
              size={18}
            />
          </Grid.Row>
        </List.Item>
        <Collapse expanded={activeItem === "getting-started"}>
          <List padded selection hoverColor="green-50" verticalAlign="middle">
            <List.Item
              active={activeItem === "getting-started" && activeSubItem === "introduction"}
              style={collapsedItemStyle}
            >
              <List.Content>
                <Link href="/getting-started/introduction">
                  <Anchor>{t("common:introduction")}</Anchor>
                </Link>
              </List.Content>
            </List.Item>
            <List.Item
              active={activeItem === "getting-started" && activeSubItem === "support"}
              style={collapsedItemStyle}
            >
              <List.Content>
                <Link href="/getting-started/support">
                  <Anchor>{t("common:support")}</Anchor>
                </Link>
              </List.Content>
            </List.Item>
          </List>
        </Collapse>
        <List.Item onClick={() => handleClickItem("components")}>
          <Grid.Row horizontalAlign="space-between" verticalAlign="middle">
            <div>
              <Grid.Row verticalAlign="middle">
                <IconButton color="primary" name="react logo" size={18} />
                <Spacer inline axis="horizontal" size={8} />
                <Heading as="h4" style={headingStyle}>
                  {t("common:components")}
                </Heading>
              </Grid.Row>
            </div>
            <Spacer inline axis="horizontal" size={60} />
            <IconButton
              color="primary"
              name="chevron down"
              flipped={activeItem === "components"}
              size={18}
            />
          </Grid.Row>
        </List.Item>
        <Collapse expanded={activeItem === "components"}>
          <List
            padded
            selection
            hoverColor={darkMode ? "gray-500" : "green-50"}
            verticalAlign="middle"
          >
            {renderMenuItemsByType()}
          </List>
        </Collapse>
      </List>
    </Sidebar>
  );
};

export default VerticalSidebar;
