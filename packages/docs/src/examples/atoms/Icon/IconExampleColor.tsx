import dynamic from "next/dynamic";
import React from "react";
import Row from "@growth-ui/native/atoms/Row";

const Icon = dynamic(() => import("@growth-ui/native/atoms/Icon"), { ssr: false });

const IconExampleColor = () => (
  <Row>
    <Icon name="language" color="red-600" size={30} />
    <Icon name="language" color="blue-600" size={30} />
    <Icon name="language" color="yellow-600" size={30} />
    <Icon name="language" color="green-600" size={30} />
    <Icon name="language" color="indigo-600" size={30} />
    <Icon name="language" color="purple-600" size={30} />
    <Icon name="language" color="gray-600" size={30} />
  </Row>
);

export default IconExampleColor;
