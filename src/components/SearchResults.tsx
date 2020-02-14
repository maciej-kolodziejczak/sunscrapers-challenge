import React, { FC } from "react";

import { useSelector } from "react-redux";

import { SearchResponseRecord } from "../types";
import { selectCompanies } from "../store/selectors";

import { SearchResultCard } from "./SearchResultCard";

interface SearchResultsProps {
  results: SearchResponseRecord[];
  setCompany(searchRecord: SearchResponseRecord): void;
}

export const SearchResults: FC<SearchResultsProps> = ({
  results = [],
  setCompany
}) => {
  const companies = useSelector(selectCompanies);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      {results.map(result => (
        <SearchResultCard
          searchResult={result}
          setCompany={setCompany}
          disabled={!!companies.find(d => d.symbol === result["1. symbol"])}
        />
      ))}
    </div>
  );
};
