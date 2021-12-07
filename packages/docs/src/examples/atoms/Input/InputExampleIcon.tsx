import dynamic from "next/dynamic";
import React, { useState } from "react";
import { View } from "react-native";

const Input = dynamic(() => import("@growth-ui/native/atoms/Input"), { ssr: false });

const InputExampleIcon = () => {
  const [email, setEmail] = useState("");
  const [receipt, setReceipt] = useState("");

  return (
    <View>
      <Input label="Email" icon={{ name: "email" }} value={email} onChangeText={setEmail} />
      <Input
        label="Receipt Number"
        icon={{ name: "confirmation number" }}
        iconPosition="right"
        value={receipt}
        onChangeText={setReceipt}
      />
    </View>
  );
};

export default InputExampleIcon;
