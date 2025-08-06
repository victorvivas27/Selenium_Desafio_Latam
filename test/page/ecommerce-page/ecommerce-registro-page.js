
import { ecommerceSelectores } from "../../selectores/ecommerce-selectores/ecommerce-selectores";

import EcommercePageBase from "./ecommerce-page-base";


class EcommerceRegistroPage extends EcommercePageBase {

    get btnRegister() {
        return ($(ecommerceSelectores.btnRegister));
    }
    get inputFullName() {
        return ($(ecommerceSelectores.inputName));
    }

    get inputConfirmPassword() {
        return ($(ecommerceSelectores.inputConfirmPassword));
    }

    get mensajeBienvenida() {
        return ($(ecommerceSelectores.mensajeBienvenida));
    }

    get mensajeError() {
        return ($(ecommerceSelectores.mensajeError));
    }

    async registro(fullName, email, password, confirmPassword) {
        await this.btnRegister.click();
        await this.inputFullName.setValue(fullName);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputConfirmPassword.setValue(confirmPassword);
        await this.btnSubmit.click();

    }

}
export default new EcommerceRegistroPage();
