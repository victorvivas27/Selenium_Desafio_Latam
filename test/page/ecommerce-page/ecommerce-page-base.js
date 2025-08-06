import { ecommerceSelectores } from '../../selectores/ecommerce-selectores/ecommerce-selectores.js';

class EcommercePageBase {
    open() {
        return browser.url('https://ecommerce-js-test.vercel.app/')
    }

    get inputEmail() {
        return ($(ecommerceSelectores.inputEmail));
    }
    get inputPassword() {
        return ($(ecommerceSelectores.inputPassword));
    }

    get btnSubmit() {
        return ($(ecommerceSelectores.btnSubmit));
    }

    get btnLogout() {
        return ($(ecommerceSelectores.btnLogout));
    }

}

export default EcommercePageBase;