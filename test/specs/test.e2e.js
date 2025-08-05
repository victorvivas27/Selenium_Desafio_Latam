import loginPage from "../page/login.page"
import securePage from "../page/secure.page"




describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await loginPage.open()

        await loginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(securePage.flashAlert).toBeExisting()
        await expect(securePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })
})

