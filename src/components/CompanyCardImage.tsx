import React, { FC } from "react";

interface CompanyCardImageProps {
  src: string;
  name: string;
}

export const CompanyCardImage: FC<CompanyCardImageProps> = ({
  src = "http://placehold.it/64x64",
  name
}) => (
  <div className="company-card-image-wrapper">
    <img className="company-card-image" src={src} alt={name} />
  </div>
);
