import React, { FC } from "react";

import { Card } from "antd";

import { Company } from "../types";

import { CompanyCardImage } from "./CompanyCardImage";
import { CompanyCardTitle } from "./CompanyCardTitle";
import { CompanyCardInfo } from "./CompanyCardInfo";

import "./company-card.css";

interface CompanyCardProps {
  company: Company;
}

export const CompanyCard: FC<CompanyCardProps> = ({ company }) => (
  <Card className="company-card">
    <div className="company-card-content">
      <CompanyCardImage src={company.logo} name={company.name} />
      <div>
        <CompanyCardTitle
          name={company.name}
          symbol={company.symbol}
          domain={company.domain}
        />
        <CompanyCardInfo company={company} />
      </div>
    </div>
  </Card>
);
