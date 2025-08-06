import { ecommerceSelectores } from "../../selectores/ecommerce-selectores/ecommerce-selectores";
import EcommercePageBase from "./ecommerce-page-base";

class ecommerceLoginPage extends EcommercePageBase{
    
    get btnLogin() {
        return ($(ecommerceSelectores.btnLogin));
    }

    get mensajeError() {
        return ($(ecommerceSelectores.mensajeError));
    }

    async login(email, password) {
        await this.btnLogin.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
  
}

export default new ecommerceLoginPage();
