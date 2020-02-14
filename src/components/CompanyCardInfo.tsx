import React, { FC } from "react";

import { Company } from "../types";

interface CompanyCardInfoProps {
  company: Company;
}

export const CompanyCardInfo: FC<CompanyCardInfoProps> = ({ company }) => {
  const {
    region,
    closed,
    currency,
    marketOpen,
    marketClose,
    changePercent,
    price: priceStr,
    change: changeStr
  } = company;
  const price = parseFloat(priceStr);
  const change = parseFloat(changeStr);
  return (
    <React.Fragment>
      <div>
        <p className="company-card-paragraph">{region}</p>
        <p className="company-card-paragraph">
          {marketOpen} - {marketClose}
        </p>
      </div>
      <div>
        <p className="company-card-paragraph">
          <strong>{price.toFixed(2)}</strong> {currency}
        </p>
        <p
          className="company-card-paragraph"
          style={{
            color: change < 0 ? "red" : "green"
          }}
        >
          {change > 0 ? "+" : ""}
          {change.toFixed(2)} ({changePercent})
        </p>
        <p className="company-card-paragraph">Closed: {closed}</p>
      </div>
    </React.Fragment>
  );
};
