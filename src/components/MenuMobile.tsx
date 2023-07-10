import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Button,
} from "@chakra-ui/react";
import { CategoryInterface } from "../interfaces/category";
import useApp from "../hook/useApp";

interface props {
  isAdmin?: boolean;
}

export default function MenuMobile({ isAdmin = false }: props) {
  const { handleClickCategory, actualCategory, categories, categoriesAdmin, handleClickCategoryAdmin, featureAdmin } = useApp();

  return (
    <Menu>
      <MenuButton  as={Button} rightIcon={<ChevronDownIcon />}>
        {isAdmin? "Menu" : " Category"}
      </MenuButton>
      <MenuList>
        {!isAdmin
          ? categories?.map((category: CategoryInterface) => {
              return (
                <MenuItem
                  minH="48px"
                  onClick={() => handleClickCategory(category.id)}
                  bgColor={
                    actualCategory!.id === category.id ? "#FFC200" : "white"
                  }
                >
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src={category.img}
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                  />
                  <span>{category.name}</span>
                </MenuItem>
              );
            })
          : categoriesAdmin?.map((category: CategoryInterface) => {
              return (
                <MenuItem
                  minH="48px"
                  onClick={() => handleClickCategoryAdmin(category.id)}
                  bgColor={
                    featureAdmin!.id === category.id ? "#FFC200" : "white"
                  }
                >
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src={category.img}
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                  />
                  <span>{category.name}</span>
                </MenuItem>
              );
            })}
      </MenuList>
    </Menu>
  );
}
