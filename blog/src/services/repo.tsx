class Repo {
    data: any;
    /**
     * Naming attributes the same as in the database
     * helps when adding the items back to the database.
     */
    constructor(data: any) {
        this.data = data.map((post: any) => post.id);
    }

    add(item: any) {
        this.data.add(item);
    }
}
export {};
