export class VendorDetails {

    private title: string;
    private categories: string[];
    private products: string[];
    private sum: number;

    constructor(title: string, sum: number, categories: string[], products: string[] = []) {
        this.title = title;
        this.sum = sum;
        this.categories = categories;
        this.products = products;
    }
}
