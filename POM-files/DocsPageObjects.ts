import { type Page, type Locator } from '@playwright/test';

export class DocsPageObjects{
    
    private readonly page: Page;

    constructor(page:Page){
        this.page = page;
    }

    async navigateToPageUsingLeftSidebar(link: string){
        await this.page.getByRole('link', { name: link }).nth(0).click();
    }
}