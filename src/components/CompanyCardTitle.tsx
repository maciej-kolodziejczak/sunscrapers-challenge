import React, { FC } from "react";

interface CompanyCardTitleProps {
  name: string;
  symbol: string;
  domain: string;
}

export const CompanyCardTitle: FC<CompanyCardTitleProps> = ({
  name,
  symbol,
  domain
}) => (
  <div>
    <p className="company-card-paragraph">
      <strong>{name}</strong>
    </p>
    <p className="company-card-paragraph">{symbol}</p>
    <p className="company-card-paragraph">{domain}</p>
  </div>
);
