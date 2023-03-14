import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  footer?: ReactNode;
}

function Card({ children, footer }: CardProps) {
  return (
    <div className="border rounded-lg bg-white divide-y mb-4">
      <div className="p-4">{children}</div>
      <div className="p-4 bg-gray-100 rounded-b-lg text-gray-500">{footer}</div>
    </div>
  );
}

export default Card;
