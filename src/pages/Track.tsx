import React, { useState } from "react";

import { PageLayout } from "../layout/PageLayout";
import { TrackForm } from "../components/TrackForm";
import { SearchResults } from "../components/SearchResults";

import { getSearchResults, getLogo, getQuote } from "../api";
import {
  SearchResponse,
  SearchResponseRecord,
  LogoResponse,
  QuoteResponse
} from "../types";
import { trimCompanyName, createCompanyRecord } from "../utils";
import { useDispatch } from "react-redux";
import { addCompany } from "../store/actions";

export const Track = () => {
  const dispatch = useDispatch();
  const [match, setMatch] = useState<SearchResponseRecord[]>([]);

  async function search(value: string) {
    const searchResponse = await getSearchResults<SearchResponse>(value);
    setMatch(searchResponse.bestMatches);
  }

  async function setCompany(searchResult: SearchResponseRecord) {
    const logoResult = await getLogo<LogoResponse>(
      trimCompanyName(searchResult["2. name"])
    );
    const quoteResult = await getQuote<QuoteResponse>(
      searchResult["1. symbol"]
    );

    const company = createCompanyRecord(
      searchResult,
      logoResult[0] || {},
      quoteResult["Global Quote"] || {}
    );

    dispatch(addCompany(company));
  }

  return (
    <PageLayout title="Track new company">
      <TrackForm onChange={search} />
      <SearchResults results={match} setCompany={setCompany} />
    </PageLayout>
  );
};
