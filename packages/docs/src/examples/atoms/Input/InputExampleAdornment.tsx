import dynamic from "next/dynamic";
import React, { useState } from "react";
import { View } from "react-native";

const Input = dynamic(() => import("@growth-ui/native/atoms/Input"), { ssr: false });

const InputExampleAdornment = () => {
  const [amount, setAmount] = useState("");

  return (
    <View>
      <Input
        adornment="$"
        label="Amount"
        placeholder="15.99"
        value={amount}
        onChangeText={setAmount}
      />
    </View>
  );
};

export default InputExampleAdornment;
