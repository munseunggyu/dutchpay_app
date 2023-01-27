import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import CenteredOverlayForm from "./CenteredOverlayForm";

export default function CreateGroup() {
  return (
    <div>
      CreateGroup
      <Container>
        <Form noValidate>
          <Row>
            <h2>먼저, 더치 페이 할 그룹의 이름을 정할까요?</h2>
          </Row>
          <Row>
            <Form.Group controlId="validationGroupName">
              <Form.Control
                type="text"
                required
                placeholder="2022 제주도 여행"
              />
              <Form.Control.Feedback type="invaild">
                그룹 이름을 입력해 주세요.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Button type="submit">저장</Button>
          </Row>
        </Form>
      </Container>
      {/* <CenteredOverlayForm /> */}
    </div>
  );
}
