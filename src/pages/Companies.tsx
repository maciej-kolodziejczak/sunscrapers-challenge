import React from "react";

import { Link } from "react-router-dom";

import { PageLayout } from "../layout/PageLayout";

export const Companies = () => (
  <PageLayout title="Companies">
    There are no companies yet.{" "}
    <Link to="/track">Track your first company.</Link>
  </PageLayout>
);
