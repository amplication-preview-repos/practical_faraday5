import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ShareTitle } from "../share/ShareTitle";
import { UserTitle } from "../user/UserTitle";

export const PortfolioCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Quantity" source="quantity" />
        <ReferenceInput source="share.id" reference="Share" label="Share">
          <SelectInput optionText={ShareTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
