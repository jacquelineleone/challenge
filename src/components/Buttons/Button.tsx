import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  parentMethod: () => void;
}

export const Button = ({ children, parentMethod }: Props) => {
  return (
    <button type="button" onClick={parentMethod}>
      {children}
    </button>
  );
};
