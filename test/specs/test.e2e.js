import { expect } from "expect-webdriverio";
import { validLogin,invalidLogin } from "../fixture/the-internet-fixture/the-internet-fixture.json";
import { login } from "../selectores/the-internet-selctores/the-internet-login-selector.js"


describe('Visitando la pagina de login de the-internet', () => {
    it('Validar login con credenciales validas', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');
        await $(login.inputUserName).setValue(validLogin.username);
        await $(login.inputPassword).setValue(validLogin.password);
        await $(login.btnLogin).click();
        await expect($(login.message)).toBeDisplayed();
    });

    it('Verificar el login con credenciales invalidas con mensage de error', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');
        await $(login.inputUserName).setValue(invalidLogin.username);
        await $(login.inputPassword).setValue(invalidLogin.password);
        await $(login.btnLogin).click();
        await expect($(login.message)).toBeDisplayed();
    });

    it.only('Validar campos vacios con mensage de error', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');
        await $(login.inputUserName).setValue('');
        await $(login.inputPassword).setValue('');
        await $(login.btnLogin).click();
        await expect(browser).toHaveUrl(/\/login$/);
    });
});