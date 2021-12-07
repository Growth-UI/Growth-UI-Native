import Checkbox, { CheckboxProps } from "growth-ui-react/modules/Checkbox";
import ComponentTable from "../ComponentDoc/ComponentTable";
import List from "growth-ui-react/elements/List";
import React, { memo, SyntheticEvent, useEffect, useState } from "react";
import { componentInfo } from "../../utils";

type Props = {
  component: string;
};

const ComponentProps = ({ component }: Props) => {
  const [activeName, setActiveName] = useState("");
  const [checked, setChecked] = useState(false);

  const handleItemClick = (name: string) => {
    setActiveName(name);
    setChecked(true);
  };

  const onToggle = (e: SyntheticEvent, { checked: _checked }: CheckboxProps) => {
    e.preventDefault();

    setChecked(!!_checked);

    if (_checked) {
      setActiveName(componentInfo[component]?.names[0]);
    } else {
      setActiveName("");
    }
  };

  useEffect(() => {
    setActiveName("");
  }, [component]);

  return (
    <>
      <List horizontal verticalAlign="middle">
        <List.Item>
          <Checkbox slider checked={checked} color="gray-600" outline={false} onChange={onToggle} />
        </List.Item>
        <List.Item active>Props:</List.Item>
        <List.Item>
          <List horizontal selection>
            {componentInfo[component]?.names?.map((name) => (
              <List.Item
                active={name === activeName}
                key={name}
                onClick={() => handleItemClick(name)}
              >
                {name}
              </List.Item>
            ))}
          </List>
        </List.Item>
      </List>
      {activeName && <ComponentTable displayName={activeName} />}
    </>
  );
};

export default memo(ComponentProps);
