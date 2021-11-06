import React, { FC } from "react";
import { useState } from "react";
import { ActionButton, Button } from "../shared";
import { VscAdd, VscChromeClose } from "react-icons/vsc";
import { joinStrings } from "../../utils";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { fetchProducts, updateProducts, fetchProduct } from "../../api";
import "./relistContainer.scss";

/**
 * Component to handle the logic of shared components
 */
export const RelistContainer: FC = () => {
  const user = useContext(UserContext);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const handleRelistItems = async () => {
    if (user?.userData?.userId) {
      try {
        setIsUpdating(true);
        const products = (
          await fetchProducts(user.userData.userId)
        ).products.filter((product) => product.status === "ONSALE");
        for (const product of products) {
          const detailedProduct = await fetchProduct(product.slug);
          await updateProducts(product.slug, detailedProduct);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsUpdating(false);
      }
    } else {
      console.error("Please login");
    }
  };

  return (
    <div className="relist-container">
      <section
        className={joinStrings([
          "relist-container__popup",
          isOpen && "relist-container__popup--show",
        ])}
      >
        <header className="relist-container__popup__header">{`Welcome back, ${user?.userData?.fName}!`}</header>
        <main className="relist-container__popup__content">
          <Button
            isDisabled={isUpdating}
            className="button--full-width"
            type="button"
            buttonSize="large"
            onClick={handleRelistItems}
          >
            Relist Unsold Items
          </Button>
        </main>
      </section>
      <ActionButton type="button" buttonSize="large" onClick={handleOnClick}>
        {isOpen ? <VscChromeClose /> : <VscAdd />}
      </ActionButton>
    </div>
  );
};
