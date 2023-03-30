import React from "react";
import { shallow } from "enzyme";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginPageComponent from "./LoginPageComponent";

describe("LoginPageComponent", () => {
  const loginUserApiRequest = jest.fn();
  const reduxDispatch = jest.fn();
  const setReduxUserState = jest.fn();

  it("should render without errors", () => {
    const component = shallow(
      <LoginPageComponent
        loginUserApiRequest={loginUserApiRequest}
        reduxDispatch={reduxDispatch}
        setReduxUserState={setReduxUserState}
      />
    );
    const wrapper = component.find(Container);
    expect(wrapper.length).toBe(1);
  });

  it("should update the state when form is submitted", () => {
    const component = shallow(
      <LoginPageComponent
        loginUserApiRequest={loginUserApiRequest}
        reduxDispatch={reduxDispatch}
        setReduxUserState={setReduxUserState}
      />
    );
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      currentTarget: {
        elements: {
          email: { value: "test@test.com" },
          password: { value: "password" },
          doNotLogout: { checked: true },
        },
        checkValidity: () => true,
      },
    };
    const form = component.find(Form);
    form.simulate("submit", mockEvent);
    expect(component.state("validated")).toBe(true);
    expect(loginUserApiRequest).toHaveBeenCalledWith("test@test.com", "password", true);
  });

  it("should render error alert when login fails", () => {
    const component = shallow(
      <LoginPageComponent
        loginUserApiRequest={loginUserApiRequest}
        reduxDispatch={reduxDispatch}
        setReduxUserState={setReduxUserState}
      />
    );
    component.setState({
      loginUserResponseState: {
        success: "",
        error: "Invalid login credentials",
        loading: false,
      },
    });
    const alert = component.find(Alert);
    expect(alert.length).toBe(1);
    expect(alert.prop("show")).toBe(true);
    expect(alert.prop("variant")).toBe("danger");
    expect(alert.text()).toBe("Wrong credentials");
  });
});