import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import {
  TOASTTYPE,
  CUSTOM_TOASTID,
  ITEMS_PER_PAGE,
  STATES,
} from "../constants/constants";
import confetti from "canvas-confetti";
import { Faker } from "@faker-js/faker";

export const calculateDiscountPercentage = (discountPrice, originalPrice) =>
  Math.floor(((originalPrice - discountPrice) * 100) / originalPrice);

export const uniqueLabelFor = (type, id) => `${type}-${id}`;

export const toastHandler = (type, message, toastId = uuid()) => {
  const ToastStyle = {
    position: "bottom-left",
    autoClose: "1000",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    toastId,
  };
};

export const setIntoLocalStorage = (name, dataObject) =>
  localStorage.setItem(name, JSON.stringify(dataObject));

export const getFromLocalStorage = (name) =>
  JSON.parse(localStorage.getItem(name)) ?? null;

export const removeFromLocalStorage = (name) => localStorage.removeItem(name);
