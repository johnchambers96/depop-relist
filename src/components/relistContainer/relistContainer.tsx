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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const handleRelistItems = async () => {
    if (user?.userData?.userId) {
      try {
        const products = await (
          await fetchProducts(user.userData.userId)
        ).products;

        for (const product of products) {
          if (product.status === "ONSALE") {
            const detailedProduct = await fetchProduct(product.slug);
            updateProducts(product.slug, detailedProduct);
          }
        }
      } catch (err) {
        console.error(err);
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
        <header className="relist-container__popup__header">header here</header>
        <main className="relist-container__popup__content">
          <Button
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
