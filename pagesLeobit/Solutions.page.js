const { BasePage } = require('./Base.page');

export class SolutionsPage extends BasePage{

    get breadCrumbSolutions() {
        return this.page.locator('[class="breadcrumb-item active"]');
    };

    get breadCrumbHome() {
        return this.page.getByRole('link', { name: 'Home' });
    };

    get pageTitleSolutions() {
        return this.page.locator('.hero-header'); 
    };

    async getBreadCrumbSolutionsText() {
        return this.breadCrumbSolutions.textContent();
    }
    
    async getSolutionsPageTitleText() {
        return this.pageTitleSolutions.textContent();
    }

    async returnToHomePage() {
        return this.breadCrumbHome.click();
    }
}