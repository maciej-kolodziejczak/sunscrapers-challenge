import React from "react";

import { Typography } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCompanies } from "../store/selectors";

import { PageLayout } from "../layout/PageLayout";
import { CompanyCard } from "../components/CompanyCard";

export const Companies = () => {
  const companies = useSelector(selectCompanies);

  return (
    <PageLayout title="Companies">
      {companies.length ? (
        companies.map(company => <CompanyCard company={company} />)
      ) : (
        <Typography.Paragraph>
          There are no companies yet.{" "}
          <Link to="/track">Track your first company.</Link>
        </Typography.Paragraph>
      )}
    </PageLayout>
  );
};
