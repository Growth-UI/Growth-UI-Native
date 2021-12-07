import dynamic from "next/dynamic";
import React, { useState } from "react";
import { View } from "react-native";

const Input = dynamic(() => import("@growth-ui/native/atoms/Input"), { ssr: false });

const InputExampleLabeled = () => {
  const [email, setEmail] = useState("");

  return (
    <View>
      <Input label="Email" placeholder="example@gmail.com" value={email} onChangeText={setEmail} />
    </View>
  );
};

export default InputExampleLabeled;
