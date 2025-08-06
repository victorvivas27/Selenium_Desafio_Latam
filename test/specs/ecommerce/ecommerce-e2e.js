import { ecommerceLogin, ecommerceRegistro } from "../../data/ecommerce-data/ecommerce-data"
import { ecommerceSelectores } from "../../selectores/ecommerce-selectores/ecommerce-selectores"

describe('Visitando la pagina de Ecommerce', () => {
    beforeEach(async () => {
        await browser.url('https://ecommerce-js-test.vercel.app/')
    })
    it('Deveria logiarme con exito y mostrar mensaje de bienvenida', async () => {

        await $(ecommerceSelectores.btnLogin).click()
        await $(ecommerceSelectores.inputEmail).setValue(ecommerceLogin.email)
        await $(ecommerceSelectores.inputPassword).setValue(ecommerceLogin.password)
        await $(ecommerceSelectores.btnSubmit).click()
        //await $(ecommerceSelectores.mensajeBienvenida).waitForDisplayed({ timeout: 5000 }) // ✅ espera segura
        const mensaje = await $(ecommerceSelectores.mensajeBienvenida)
        const texto = await mensaje.getText()
        expect(texto).toBe(`Hello, ${ecommerceLogin.nombre}`)
        await $(ecommerceSelectores.btnLogout).click()


    })

    it('Login con credenciales invalidas deberia mostrar mensaje de error', async () => {
        await $(ecommerceSelectores.btnLogin).click()
        await $(ecommerceSelectores.inputEmail).setValue(ecommerceLogin.emailInvalido)
        await $(ecommerceSelectores.inputPassword).setValue(ecommerceLogin.passwordInvalido)
        await $(ecommerceSelectores.btnSubmit).click()
        const mensajeError = await $(ecommerceSelectores.mensajeError)
        expect(mensajeError).toHaveText(ecommerceLogin.mensajeError)

    })

    it('Deberia registrarme con exito y mostrar mensaje de bienvenida', async () => {

        await $(ecommerceSelectores.btnRegister).click()
        await $(ecommerceSelectores.inputName).setValue(ecommerceRegistro.fullName)
        await $(ecommerceSelectores.inputEmail).setValue(ecommerceRegistro.email)
        await $(ecommerceSelectores.inputPassword).setValue(ecommerceRegistro.password)
        await $(ecommerceSelectores.inputConfirmPassword).setValue(ecommerceRegistro.confirmPassword)
        await $(ecommerceSelectores.btnSubmit).click()
        //await $(ecommerceSelectores.mensajeBienvenida).waitForDisplayed({ timeout: 5000 }) 
        const mensaje = await $(ecommerceSelectores.mensajeBienvenida)
        expect(mensaje).toHaveText(`Hello, ${ecommerceRegistro.fullName}`)
        await $(ecommerceSelectores.btnLogout).click()

    })

    it('Registro con credenciales invalidas deberia mostrar mensaje de error', async () => {
        await $(ecommerceSelectores.btnRegister).click()
        await $(ecommerceSelectores.inputName).setValue(ecommerceRegistro.fullName)
        await $(ecommerceSelectores.inputEmail).setValue(ecommerceLogin.email)
        await $(ecommerceSelectores.inputPassword).setValue(ecommerceRegistro.password)
        await $(ecommerceSelectores.inputConfirmPassword).setValue(ecommerceRegistro.confirmPassword)
        await $(ecommerceSelectores.btnSubmit).click()
        //await $(ecommerceSelectores.mensajeBienvenida).waitForDisplayed({ timeout: 5000 }) 
        const mensaje = await $(ecommerceSelectores.mensajeError)
        expect(mensaje).toHaveText(ecommerceRegistro.emailDuplicado)

    })

    it('Registro con campos vacios deberia permanecer en la misma pagina', async () => {
        await $(ecommerceSelectores.btnRegister).click()
        await $(ecommerceSelectores.inputName).setValue('')
        await $(ecommerceSelectores.inputEmail).setValue('')
        await $(ecommerceSelectores.inputPassword).setValue('')
        await $(ecommerceSelectores.inputConfirmPassword).setValue('')
        await $(ecommerceSelectores.btnSubmit).click()
        await expect(browser).toHaveUrl(/\/register$/);

    })


})