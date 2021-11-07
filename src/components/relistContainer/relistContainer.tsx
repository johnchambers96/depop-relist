import React, { FC } from "react";
import { useState } from "react";
import { ActionButton, Button } from "../shared";
import { VscAdd, VscChromeClose } from "react-icons/vsc";
import { joinStrings } from "../../utils";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { fetchProducts, updateProducts, fetchProduct } from "../../api";
import "./relistContainer.scss";
import { productsResponse, productType } from "../../types";

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
    if (user?.userData?.id) {
      try {
        setIsUpdating(true);
        let end: boolean = false;
        let lastOffsetId: string | undefined = undefined;
        let products: productType[] = [];
        // fetch until we have a full list of products in store
        while (end === false) {
          const fetchedProducts: productsResponse = await fetchProducts(
            user.userData.id,
            lastOffsetId
          );
          const filtered = fetchedProducts.products.filter(
            (product) => product.status === "ONSALE"
          );
          products.push(...filtered);
          lastOffsetId = fetchedProducts.meta.last_offset_id;
          if (fetchedProducts.meta.end) end = true;
        }
        // Update each individual item which is currently on sale
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
        {user?.userData && (
          <header className="relist-container__popup__header">{`Welcome back, ${user?.userData?.first_name}!`}</header>
        )}
        <main className="relist-container__popup__content">
          {user?.userData ? (
            <Button
              isDisabled={isUpdating}
              className="button--full-width"
              type="button"
              buttonSize="large"
              onClick={handleRelistItems}
            >
              Relist Unsold Items
            </Button>
          ) : (
            <p>Please log into Depop</p>
          )}
        </main>
      </section>
      <ActionButton type="button" buttonSize="large" onClick={handleOnClick}>
        {isOpen ? <VscChromeClose /> : <VscAdd />}
      </ActionButton>
    </div>
  );
};
