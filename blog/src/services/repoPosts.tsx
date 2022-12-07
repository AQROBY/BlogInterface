import PostType from '../components/types/postType';
import postsSeed from '../mock-posts.json';

class PostRepo {
    static instance: any = null;
    static data: any = null;
    static getInstance() {
        if (sessionStorage.getItem('data') == null) {
            PostRepo.instance = new PostRepo();
            PostRepo.data = postsSeed;
            sessionStorage.setItem('data', JSON.stringify(postsSeed));
        }
        return this;
    }

    static findAll() {
        PostRepo.data = sessionStorage.getItem('data');
        this.instance = JSON.parse(PostRepo.data);
        return this.instance;
    }

    static find(id: number) {
        PostRepo.data = sessionStorage.getItem('data');
        this.instance = JSON.parse(PostRepo.data);
        var x = this.instance.find((element: PostType) => element.id == id);
        return x;
    }

    static create(item: PostType) {
        this.instance.push(item);
        const newData = this.instance;
        this.data = newData;
        sessionStorage.setItem('data', JSON.stringify(newData));
    }

    static update(id: number, data: PostType) {
        const elementToUpdate = this.instance.find((element: PostType) => element.id == id);
        const index = this.instance.indexOf(elementToUpdate);

        this.instance[index].title = data.title;
        this.instance[index].contents = data.contents;
        this.instance[index].modified_at = data.modified_at;
        const newData = this.instance;
        this.data = newData;
        sessionStorage.setItem('data', JSON.stringify(newData));
    }

    static delete(id: number) {
        const elementToDelete = this.instance.find((element: PostType) => element.id == id);
        const index = this.instance.indexOf(elementToDelete);
        this.instance.splice(index, 1);
        this.data = this.instance;
        sessionStorage.setItem('data', JSON.stringify(this.instance));
    }

    static size() {
        return PostRepo.findAll().length;
    }

    static assignId() {
        return this.instance.length;
    }
}

export default PostRepo;
