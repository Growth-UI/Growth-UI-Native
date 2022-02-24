import AvatarGroup from "@growth-ui/native/atoms/Avatar/AvatarGroup";
import dynamic from "next/dynamic";
import React from "react";
import Spacer from "@growth-ui/native/atoms/Spacer";
import Typography from "@growth-ui/native/atoms/Typography";
import { View } from "react-native";

const Avatar = dynamic(() => import("@growth-ui/native/atoms/Avatar"), { ssr: false });

const AvatarExampleGroup = () => (
  <View>
    <Typography variant="h4">Total avatars</Typography>
    <Typography>
      If you need to control the total number of avatars not shown, you can use the total prop.
    </Typography>
    <Spacer size={20} />

    <AvatarGroup total={20}>
      <Avatar
        circular
        src="https://images.pexels.com/photos/2598024/pexels-photo-2598024.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <Avatar
        circular
        src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <Avatar
        circular
        src="https://images.pexels.com/photos/2709386/pexels-photo-2709386.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <Avatar
        circular
        src="https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
    </AvatarGroup>
    <Spacer size={30} />

    <Typography variant="h4">Max avatars</Typography>
    <Typography>Use the max prop to limit the number of avatars.</Typography>
    <Spacer size={20} />

    <AvatarGroup max={2}>
      <Avatar
        circular
        src="https://images.pexels.com/photos/2598024/pexels-photo-2598024.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <Avatar
        circular
        src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <Avatar
        circular
        src="https://images.pexels.com/photos/2709386/pexels-photo-2709386.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <Avatar
        circular
        src="https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
    </AvatarGroup>
  </View>
);

export default AvatarExampleGroup;
