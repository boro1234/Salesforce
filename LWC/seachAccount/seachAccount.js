import { LightningElement, wire } from 'lwc';
import findAccounts from '@salesforce/apex/AccountController.findAccounts';

const DELAY = 300;

export default class searchAccount extends LightningElement {
    searchKey = '';

    @wire(findAccounts, { searchKey: '$searchKey' })
    accounts;

    handleKeyChange(event) {
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
    }
}