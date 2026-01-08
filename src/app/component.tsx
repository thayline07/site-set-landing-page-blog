"use client";
import { useEffect } from "react";

export const ErrorComponent = () => {
  useEffect(() => {
    throw new Error("ErrorComponent");
  }, []);

  return <h2>ErrorComponent</h2>;
};
