import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return <div className={cn("py-24", className)}>{children}</div>;
}
