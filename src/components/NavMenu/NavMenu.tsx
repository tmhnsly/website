"use client";

import { IconButton, Flex, Popover, Text } from "@radix-ui/themes";
import { BiBrush, BiMenu } from "react-icons/bi";
import * as React from "react";
import ThemeToggle from "./ThemeToggle";
import NavMenuItem from "../NavMenuItem/NavMenuItem";
import { NavMenuItems } from "../../constants/NavMenuConfig";

import styles from "./NavMenu.module.css";

const NavMenu = () => {
  const iconSize = 16;

  return (
    <Popover.Root>
      <Popover.Trigger>
        <IconButton size={"2"} variant="solid">
          <BiMenu size={24} />
        </IconButton>
      </Popover.Trigger>
      <Popover.Content minWidth={"14rem"} className={styles.content}>
        <Flex direction={"column"}>
          {NavMenuItems.map((item, index) => (
            <NavMenuItem
              key={index}
              href={item.href}
              label={item.label}
              icon={<item.icon size={iconSize} />}
            />
          ))}
          <Flex px={"3"} py={"2"} justify={"between"} align={"center"}>
            <Flex gap={"2"} align={"center"}>
              <BiBrush size={iconSize} />
              <Text weight={"medium"} size={"3"}>
                Theme
              </Text>
            </Flex>
            <ThemeToggle />
          </Flex>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
};

export default NavMenu;
