import React from "react";
import GridRow from "../../../components/GridRow";
import TextInput from "ps-react/TextInput";
import Select from "ps-react/Select";

const options = [
  { label: "Company Specifics", value: "CompanySpecifics" },
  { label: "Open Category", value: "OpenCategory" },
];

/** Card with image */
export default function ExampleGridRow() {
  return (
    <div>
      <GridRow rowClassName="form-row" colClassNames={["col-7", "col-5"]}>
        <TextInput
          htmlId="name"
          name="name"
          label="Name:"
          placeholder="Enter a name"
          value=""
          required
        />
        <Select
          htmlId="type"
          name="type"
          label="Type event"
          value=""
          options={options}
        />
      </GridRow>

      <GridRow rowClassName="form-row" colClassNames={["col-4", "col-8"]}>
        <TextInput
          htmlId="name"
          name="name"
          label="Name:"
          placeholder="Enter a name"
          value=""
          required
        />
        <Select
          htmlId="type"
          name="type"
          label="Type event"
          value=""
          options={options}
        />
      </GridRow>

      <GridRow
        rowClassName="form-row"
        colClassNames={[
          "col-sm-10 col-md-4 col-lg-9",
          "col-sm-2 col-md-8 col-lg-3",
        ]}
      >
        <TextInput
          htmlId="name"
          name="name"
          label="Name:"
          placeholder="Enter a name"
          value=""
          required
        />
        <Select
          htmlId="type"
          name="type"
          label="Type event"
          value=""
          options={options}
        />
      </GridRow>
    </div>
  );
}
