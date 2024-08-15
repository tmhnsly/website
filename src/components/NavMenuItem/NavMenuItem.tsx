import { Popover, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

import styles from "./NavMenuItem.module.css";

interface NavMenuItemProps {
  href: string;
  label: string;
  icon: JSX.Element;
}

const NavMenuItem = ({ href, label, icon }: NavMenuItemProps) => {
  return (
    <Popover.Close>
      <Link href={href} aria-label={`Link to ${label} page`}>
        <Flex
          className={styles.item}
          gap={"2"}
          align={"center"}
          px={"3"}
          py={"2"}
        >
          {icon}
          <Text size={"3"} weight={"medium"}>
            {label}
          </Text>
        </Flex>
      </Link>
    </Popover.Close>
  );
};

export default NavMenuItem;
