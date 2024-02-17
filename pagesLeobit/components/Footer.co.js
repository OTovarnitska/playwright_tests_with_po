import { BasePage } from "../Base.page";

export class Footer extends BasePage {

    get footer()
        { return this.page.locator('.footer'); };

    
}
