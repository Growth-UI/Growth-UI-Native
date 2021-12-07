import dynamic from "next/dynamic";
import React from "react";

const Icon = dynamic(() => import("@growth-ui/native/atoms/Icon"), { ssr: false });

const IconExampleSize = () => (
  <>
    <Icon name="language" size={10} />
    <Icon name="language" size={20} />
    <Icon name="language" size={30} />
    <Icon name="language" size={40} />
    <Icon name="language" size={50} />
  </>
);

export default IconExampleSize;
