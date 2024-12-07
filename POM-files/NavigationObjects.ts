import { type Page, type Locator } from '@playwright/test'

export class NavigationObjects{

    private readonly page: Page;
    private readonly linkDocs: Locator;
    private readonly linkAPI: Locator;
    private readonly linkCommunity: Locator;

    constructor(page:Page){
        this.page = page;
        this.linkDocs = this.page.getByRole('link', { name: 'Docs' });
        this.linkAPI = this.page.getByRole('link', { name: 'API', exact: true });
        this.linkCommunity = this.page.getByRole('link', { name: 'Community' });
    }

    async navigateToDocsPage(){
        await this.linkDocs.click();
    }
}