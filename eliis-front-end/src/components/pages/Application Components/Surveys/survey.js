import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRadio,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";

export default function CardWithFeedback() {
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol size="6">
          <MDBCard>
            <MDBCardBody>
              <div className="text-center">
                <MDBIcon far icon="file-alt mb-3 text-primary" size="4x" />
                <p>
                  <strong>Your opinion matters</strong>
                </p>
                <p>
                  Have some ideas on how to improve our product?{" "}
                  <strong>Give us your feedback.</strong>
                </p>
              </div>

              <hr />

              <form className="px-4" action="">
                <p className="text-center">
                  <strong>Your rating:</strong>
                </p>
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  label="Very good"
                  className="mb-2"
                  defaultChecked
                />
                {/* Add labels for the other radio buttons */}
                {/* ... */}
                <p className="text-center">
                  <strong>What could we improve?</strong>
                </p>
                {/* Add a label for the text area */}
                <MDBTextArea
                  className="mb-4"
                  label="Your feedback"
                  id="textAreaExample"
                  rows={4}
                />
              </form>
            </MDBCardBody>
            <MDBCardFooter>
              <div className="text-end">
                {/* Improve the submit button label */}
                <MDBBtn>Submit Feedback</MDBBtn>
              </div>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
