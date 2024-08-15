import { Flex, Text } from "@radix-ui/themes";
import * as React from "react";
import NavMenu from "../NavMenu/NavMenu";

import styles from "./NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Flex align={"center"} justify={"between"} px={"4"} py={"2"}>
        <Link href={"/"} className={styles.brandLink}>
          <Text weight={"medium"}>@tmhnsly</Text>
        </Link>
        <NavMenu />
      </Flex>
    </nav>
  );
};

export default NavBar;
