import { Spacer } from "@growth-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { View } from "react-native";

const Avatar = dynamic(() => import("@growth-ui/native/atoms/Avatar"), { ssr: false });

const AvatarExampleAvatar = () => (
  <View>
    <Avatar src="https://images.pexels.com/photos/3031396/pexels-photo-3031396.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    <Spacer size={15} />
    <Avatar text="KH" sx={{ bg: "#ccc" }} />
    <Spacer size={15} />
    <Avatar text="KH" sx={{ bg: "#ccc" }} textStyle={{ color: "#fff" }} />
    <Spacer size={15} />
    <Avatar circular text="KH" sx={{ bg: "rgb(255, 87, 34)" }} />
    <Spacer size={15} />
    <Avatar circular icon={{ name: "airplane" }} sx={{ bg: "rgba(0,0,0,0.05)" }} />
    <Spacer size={15} />
    <Avatar
      circular
      src="https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    />
    <Spacer size={15} />
    <Avatar
      size={50}
      circular
      src="https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    />
    <Spacer size={15} />
    <Avatar
      size={60}
      circular
      src="https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    />
  </View>
);
export default AvatarExampleAvatar;
