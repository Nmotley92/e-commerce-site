import React, { Fragment } from 'react';
import Rating from 'react-rating';
import { Form } from 'react-bootstrap';

const RatingFilterComponent = () => {
  return (
    <>
      <span className="fw-bold">Rating</span>
      {Array.from({ length: 5 }).map((_, idx) => (
        <Fragment key={idx}>
          <Form.Check type="checkbox" id={`check-api-${idx}`}>
            <Form.Check.Input type="checkbox" isValid />
            <Form.Check.Label style={{ cursor: 'pointer' }}>
              <span>
                <Rating
                  className="custom-rating"
                  readonly
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  fractions={1}
                  initialRating={5 - idx}
                />
              </span>
            </Form.Check.Label>
          </Form.Check>
        </Fragment>
      ))}
    </>
  );
};

export default RatingFilterComponent;

