import { ReactNode } from "react";

interface Props {
  className?: string;
  parentMethod: () => void;
  children: ReactNode;
}

export const Button = ({ className = "", parentMethod, children }: Props) => {
  return (
    <button type="button" className={className} onClick={parentMethod}>
      {children}
    </button>
  );
};
