import ComponentCode from "../../ComponentProp/ComponentCode";
import ComponentPropEnum from "../../ComponentProp/ComponentPropEnum";
import ComponentPropFunc from "../../ComponentProp/ComponentPropFunc";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import { componentProps } from "../../../utils";
import { Table } from "growth-ui-react";

type Props = {
  displayName: string;
};

const ComponentTable = ({ displayName }: Props) => {
  const { t } = useTranslation();

  return (
    <Table basic fluid>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>{t("common:name")}</Table.HeadCell>
          <Table.HeadCell>{t("common:default")}</Table.HeadCell>
          <Table.HeadCell>{t("common:type")}</Table.HeadCell>
          <Table.HeadCell>{t("common:description")}</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body style={{ fontSize: "14px" }}>
        {componentProps[displayName]?.map(
          ({ defaultValue, description, enums, func, name, required, type }) => (
            <Table.Row key={name}>
              <Table.Cell>
                <ComponentCode>{name}</ComponentCode>
              </Table.Cell>
              <Table.Cell>
                {defaultValue}
                {required && <small style={{ color: "#b91c1c" }}>{t("common:required")}</small>}
              </Table.Cell>
              <Table.Cell>{type}</Table.Cell>
              <Table.Cell>
                {description}
                <ComponentPropEnum enums={enums} />
                <ComponentPropFunc func={func} />
              </Table.Cell>
            </Table.Row>
          )
        )}
      </Table.Body>
    </Table>
  );
};

export default ComponentTable;
