const { BasePage } = require('./Base.page');

export class IndustriesPage extends BasePage{

    get breadCrumbIndustries() {
        return this.page.locator('[class="breadcrumb-item active"]');
    };

    get breadCrumbHome() {
        return this.page.getByRole('link', { name: 'Home' });
    };

    get pageTitleIndustries() {
        return this.page.locator('[class="title topblk__title"]'); 
    };

    async getBreadCrumbIndustriesText() {
        return this.breadCrumbIndustries.textContent();
    }
    
    async getIndustriesPageTitleText() {
        return this.pageTitleIndustries.textContent();
    }

    async returnToHomePage() {
        return this.breadCrumbHome.click();
    }
}