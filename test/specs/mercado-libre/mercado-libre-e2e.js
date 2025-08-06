import { expect } from 'expect-webdriverio';
import { producto } from '../../fixture/mercado-libre-fixture/mercado-libre-fixture.json';
import { busquedaProducto } from '../../selectores/mercado-libre-selectores/mercado-libre-selectores.js';
describe('Visitando la pagina de Mercado Libre', () => {

    it('Validar producto de nombre Iphone 14 Pro Max', async () => {
        await browser.url('https://www.mercadolibre.cl/');
        await $(busquedaProducto.inputBusqueda).setValue(producto.iphone14ProMax);
        await $(busquedaProducto.btnBusqueda).click();
        await $(busquedaProducto.tituloProducto).waitForDisplayed({ timeout: 5000 }); // ✅ espera segura
        const titulo = await $(busquedaProducto.tituloProducto);
        expect(titulo).toHaveText(producto.iphone14ProMax);
       //expect(titulo).toMatch(/Iphone 14 pro max/i);
    });
});