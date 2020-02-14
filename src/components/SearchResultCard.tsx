import React, { FC } from "react";

import { Card, Button } from "antd";

import { SearchResponseRecord } from "../types";

interface SearchResultCardProps {
  disabled: boolean;
  searchResult: SearchResponseRecord;
  setCompany(searchRecord: SearchResponseRecord): void;
}

export const SearchResultCard: FC<SearchResultCardProps> = ({
  disabled,
  setCompany,
  searchResult
}) => (
  <Card
    title={searchResult["1. symbol"]}
    size="small"
    style={{
      flex: "0 0 200px",
      margin: "10px"
    }}
    extra={
      <Button
        type="link"
        onClick={() => setCompany(searchResult)}
        disabled={disabled}
      >
        Add
      </Button>
    }
  >
    <span>{searchResult["2. name"]}</span>
  </Card>
);
