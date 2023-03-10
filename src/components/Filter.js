import { Button, Form } from "react-bootstrap";
import { Rating } from "./Rating";
import "./styles.css";
export const Filter = () => {
  return (
    <div className="filters">
      <span className="title"> Filter products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery only"
          name="group1"
          type="checkbox"
          id={`inline-1`}
        />
      </span>

      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating style={{ cursor: "pointer" }} />
      </span>
      <Button variant="light"> Clear Filters</Button>
    </div>
  );
};
