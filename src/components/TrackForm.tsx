import React, { FC } from "react";

import { Input } from "antd";

interface TrackFormProps {
  onChange(v: string): void;
}

export const TrackForm: FC<TrackFormProps> = ({ onChange }) => (
  <div
    style={{
      maxWidth: 480
    }}
  >
    <label htmlFor="name">
      <p>Company name</p>
    </label>
    <Input id="name" onChange={event => onChange(event.target.value)} />
    <small>
      Provide the stock exchange symbol of a company you want to track
    </small>
  </div>
);
