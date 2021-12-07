import dynamic from "next/dynamic";
import React, { memo } from "react";

/**
 * Context API was not used to prevent the component from re-rendering.
 */
type Props = {
  examplePath: string;
};

const renderDemo = (examplePath: string) =>
  dynamic({
    loader: () => import(`../../../examples/${examplePath}`),
  });

const ComponentDemo = ({ examplePath }: Props) => {
  const Demo = renderDemo(examplePath);

  return <Demo />;
};

export default memo(ComponentDemo);
