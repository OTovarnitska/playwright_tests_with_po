
const { BasePage } = require('./Base.page');

export class HomePage extends BasePage {

    get mainHomePageText() { return this.page.locator('.top-banner h1'); }

    async getMainHomePageText() {
        return this.mainHomePageText.textContent();
    }
}
