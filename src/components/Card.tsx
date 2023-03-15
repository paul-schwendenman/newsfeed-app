import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="border rounded-lg bg-white mb-4">
      <div className="p-4">{children}</div>
    </div>
  );
}

export default Card;
