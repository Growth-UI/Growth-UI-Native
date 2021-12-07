import EventListener from "growth-ui-react/addons/EventListener";
import Input from "growth-ui-react/elements/Input";
import List from "growth-ui-react/elements/List";
import Modal from "growth-ui-react/modules/Modal";
import React, { ReactNode, useState } from "react";
import Router from "next/router";
import Spacer from "growth-ui-react/elements/Spacer";
import stringSimilarity from "string-similarity";
import useTranslation from "next-translate/useTranslation";
import { capitalize, components } from "../../utils";

type Props = {
  trigger?: ReactNode;
};

const ComponentSearch = ({ trigger }: Props) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { t } = useTranslation("common");

  const handleKeydown = (event: any) => {
    const { keyCode, metaKey, ctrlKey } = event;

    if ((metaKey || ctrlKey) && keyCode === 75) {
      event.preventDefault();
      event.stopPropagation();
      setOpen(true);
    }
  };

  const handleClickItem = (component: string) => {
    setOpen(false);
    Router.push(`/components/${component}`);
  };

  const renderComponentItem = (component: string) => {
    return (
      <List.Item key={component} onClick={() => handleClickItem(component)}>
        <List.Content>
          <List.Heading>{capitalize(component)}</List.Heading>
        </List.Content>
      </List.Item>
    );
  };

  return (
    <>
      <Modal open={open} trigger={trigger}>
        <Modal.Content>
          <Input
            autoFocus
            basic
            fluid
            adornment
            icon="search"
            placeholder={t("search")}
            size="xl"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Spacer size={30} />
          <List padded selection verticalAlign="middle">
            {components
              .filter((component) => {
                const similarity = stringSimilarity.compareTwoStrings(component, search);

                if (similarity > 0.3) return true;

                return false;
              })
              .map((component) => renderComponentItem(component))}
          </List>
        </Modal.Content>
        <Modal.Actions>Ad</Modal.Actions>
      </Modal>
      <EventListener type="keydown" listener={handleKeydown} />
    </>
  );
};

export default ComponentSearch;
