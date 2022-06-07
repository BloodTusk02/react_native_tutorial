import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../components/Login';


describe("Login", () => {
    it('invalid form', () => {
        const login = "";
        const password = "";

        const setLoginField = jest.fn();
        const setPasswordField = jest.fn();
        const validateRequiredt = jest.fn();
        let loginScreen = renderer.create(<Login setLoginField={setLoginField} setPasswordField={setPasswordField} validateRequired={validateRequiredt}/>).toJSON;

        console.log(loginScreen);
    
        const validateRequired = loginScreen.validateRequired();
        loginScreen.setLoginField({valid: validateRequired(login), value: login, error: ""});
        loginScreen.setPasswordField({valid: validateRequired(password), value: password, error: ""});
        const result = loginScreen.submitForm();

        expect(result).toEqual("error");
      });
})
