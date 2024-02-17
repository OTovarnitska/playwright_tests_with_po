const { expect } = require('@playwright/test');
const { test } = require('../fixture');

test.describe('Basic navigation test', () => {
    test.beforeEach('Navigate to Home page', async ({ page, homePage }) => {
      await page.goto('/');
      const mainHomePageText = await homePage.getMainHomePageText()
      expect (mainHomePageText).toBe('web and .net software development');
    });
    test('Should expand Service menu, navigate to Service page and back to Home page', async ({page, header, servicesPage}) => {
        await header.hoverOnServicesMenu();        
        await header.clickOnServicesMenu();
        //expect (await header.servicesMenu.getAttribute('aria-expanded')).toBe('true');
        await expect(page).toHaveURL('./services/');
        expect (await servicesPage.getServicesPageTitleText()).toBe('Services');
        expect (await servicesPage.getBreadCrumbServicesText()).toBe('Services');
        await servicesPage.returnToHomePage();
        await expect(page).toHaveURL('./')

    });

    test('Should expand Expertise menu and navigate to Expertise page', async ({page, header}) => {
        await header.hoverOnExpertiseMenu();
        //expect (await header.ExpertiseMenu.getAttribute('aria-expanded')).toBe('true');
        await header.clickOnExpertiseMenu();
        await expect(page).toHaveURL('./#');
    });

    test('Should navigate to Industries page and back to Home page', async ({page, header, industriesPage}) => {
        await header.hoverOnExpertiseMenu();
        await header.clickOnIndustriesLink()
        await expect(page).toHaveURL('./industries/');
        expect (await industriesPage.getIndustriesPageTitleText()).toBe('INDUSTRIES');
        expect (await industriesPage.getBreadCrumbIndustriesText()).toBe('Industries');
        await industriesPage.returnToHomePage();
        await expect(page).toHaveURL('./')
    });

    test('Should navigate to Solutions page and back to Home page', async ({page, header, solutionsPage}) => {
        await header.hoverOnExpertiseMenu();
        await header.clickOnSolutionsLink()
        await expect(page).toHaveURL('./solution/');
        expect (await solutionsPage.getSolutionsPageTitleText()).toContain('SOLUTIONS');
        expect (await solutionsPage.getBreadCrumbSolutionsText()).toBe('Solution');
        await solutionsPage.returnToHomePage();
        await expect(page).toHaveURL('./')
    });

    test('Should expand Technologies menu', async ({header}) => {
        await header.hoverOnTechnologiesMenu();
    
        await header.clickOnTechnologiesMenu();
    
    });

    test('Should expand Approach menu', async ({header}) => {
        await header.hoverOnApproachMenu();

        await header.clickOnApproachMenu();
    
    });

    test('Should expand About menu', async ({header}) => {
        await header.hoverOnAboutMenu();

        await header.clickOnAboutMenu();

    });

});


