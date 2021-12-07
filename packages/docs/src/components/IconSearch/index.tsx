import copy from "copy-to-clipboard";
import dynamic from "next/dynamic";
import React, { ChangeEvent, useState } from "react";
import stringSimilarity from "string-similarity";
import useTranslation from "next-translate/useTranslation";
import { Grid, Heading, Input, Spacer } from "growth-ui-react";
import { GrowthICONS } from "@growth-ui/native/types";
import { ICONS } from "@growth-ui/native/utils/GUI";

const Icon = dynamic(() => import("@growth-ui/native/atoms/Icon"), { ssr: false });

const IconSearch = () => {
  const [copied, setCopied] = useState("");
  const [search, setSearch] = useState("");
  const { t } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleCopy = (name: GrowthICONS) => {
    copy(name);
    setCopied(name);
    setTimeout(() => setCopied(""), 1000);
  };

  const renderIconColumn = (name: GrowthICONS) => {
    return (
      <Grid.Col
        key={name}
        horizontalAlign="center"
        minimobile={5}
        mobile={5}
        tablet={4}
        width={3}
        onClick={() => handleCopy(name)}
        style={{
          cursor: "pointer",
        }}
      >
        <Icon name={name} size={30} pointerEvents="none" />
        <Spacer size={10} />
        <Heading as="h5" textAlign="center">
          {copied === name ? t("common:copied") : name}
        </Heading>
      </Grid.Col>
    );
  };

  const renderIcons = () => {
    const query = search.trim().toLowerCase();

    // no search
    if (!query) {
      return (
        <Grid fluid relaxed>
          <Grid.Row verticalAlign="top">{ICONS.map((name) => renderIconColumn(name))}</Grid.Row>
        </Grid>
      );
    }

    // results
    return (
      <Grid fluid>
        <Grid.Row verticalAlign="top">
          {ICONS.filter((name) => {
            const similarity = stringSimilarity.compareTwoStrings(name, search);

            if (similarity > 0.15) return true;

            return false;
          }).map((name) => renderIconColumn(name))}
        </Grid.Row>
      </Grid>
    );
  };

  return (
    <>
      <Spacer size={30} />
      <Input
        icon="search"
        placeholder={t("common:search")}
        size="sm"
        value={search}
        onChange={handleChange}
      />
      <Spacer size={30} />
      {renderIcons()}
    </>
  );
};

export default IconSearch;
