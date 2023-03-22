import { Form } from "react-bootstrap";

const AttributesFilterComponent = () => {
  return (
    <>
      <Form.Label>Color</Form.Label>
      <Form.Check 
        type="checkbox"
        id="default-checkbox"
        label="green"
      />
    </>
  );
};

export default AttributesFilterComponent;
