import dynamic from "next/dynamic";
import React, { useState } from "react";
import { View } from "react-native";

const Input = dynamic(() => import("@growth-ui/native/atoms/Input"), { ssr: false });

const InputExampleError = () => {
  const [email, setEmail] = useState("invalid email input");

  return (
    <View>
      <Input
        error
        feedback="Invalid Email"
        label="Email"
        placeholder="example@gmail.com"
        value={email}
        onChangeText={setEmail}
      />
    </View>
  );
};

export default InputExampleError;
