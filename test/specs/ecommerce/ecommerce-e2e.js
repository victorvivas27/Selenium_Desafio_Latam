import { browser } from "../../../node_modules/@wdio/globals/build/index"
import { ecommerceLogin, ecommerceRegistro } from "../../data/ecommerce-data/ecommerce-data"
import ecommerceLoginPage from "../../page/ecommerce-page/ecommerce-login-page"
import ecommerceRegistroPage from "../../page/ecommerce-page/ecommerce-registro-page"
import { ecommerceSelectores } from "../../selectores/ecommerce-selectores/ecommerce-selectores"

describe('Visitando la pagina de Ecommerce', () => {
    beforeEach(async () => {
        await ecommerceRegistroPage.open()
    })
    it('Deveria logiarme con exito y mostrar mensaje de bienvenida', async () => {

        await ecommerceLoginPage.login(
            ecommerceLogin.email,
            ecommerceLogin.password
        );
        const mensaje = await ecommerceRegistroPage.mensajeBienvenida;
        const texto = await mensaje.getText()
        expect(texto).toBe(`Hello, ${ecommerceLogin.nombre}`)
        await browser.pause(2000)
        await ecommerceLoginPage.btnLogout.click()
    })

    it('Login con credenciales invalidas deberia mostrar mensaje de error', async () => {
        await ecommerceLoginPage.login(
            ecommerceLogin.emailInvalido,
            ecommerceLogin.passwordInvalido
        );
        const mensajeError = await ecommerceLoginPage.mensajeError;
        expect(mensajeError).toHaveText(ecommerceLogin.mensajeError);
        await browser.pause(2000)

    })

    it('Deberia registrarme con exito y mostrar mensaje de bienvenida', async () => {
        await ecommerceRegistroPage.registro(
            ecommerceRegistro.fullName,
            ecommerceRegistro.email,
            ecommerceRegistro.password,
            ecommerceRegistro.confirmPassword
        );
        const mensaje = await ecommerceRegistroPage.mensajeBienvenida;
        const texto = await mensaje.getText()
        expect(texto).toBe(`Hello, ${ecommerceRegistro.fullName}`)
        await browser.pause(2000)
        await ecommerceRegistroPage.btnLogout.click()

    })

    it('Registro con credenciales invalidas deberia mostrar mensaje de error', async () => {
        await ecommerceRegistroPage.registro(
            ecommerceRegistro.fullName,
            ecommerceLogin.email,
            ecommerceRegistro.password,
            ecommerceRegistro.confirmPassword
        );
        const mensaje = await ecommerceRegistroPage.mensajeError;
        expect(mensaje).toHaveText(ecommerceRegistro.emailDuplicado)
        await browser.pause(2000)

    })

    it('Registro con campos vacios deberia permanecer en la misma pagina', async () => {
        await ecommerceRegistroPage.registro('', '', '', '');
        await expect(browser).toHaveUrl(/\/register$/);
        await browser.pause(2000)
    })


})