export class VendorDetails {

    readonly title: string;
    readonly categories: string[];
    readonly products: string[];
    readonly sum: number;

    constructor(title: string, sum: number, categories: string[], products: string[] = []) {
        this.title = title;
        this.sum = sum;
        this.categories = categories;
        this.products = products;
    }
}
