import PostType from '../components/types/postType';
import postsSeed from '../mock-posts.json';

interface Post {
    title: string;
    contents: string;
    modified_at: string;
    id: number;
}

interface Data {
    [key: number]: Post;
    find: Function;
    push: Function;
    indexOf: Function;
    splice: Function;
    length: number;
    sort: Function;
    lastIndexOf: Function;
}

class PostRepo {
    static data: Data;

    static getInstance() {
        if (sessionStorage.getItem('data') == null) {
            PostRepo.data = postsSeed;
            sessionStorage.setItem('data', JSON.stringify(postsSeed));
        }
        return this;
    }

    static findAll() {
        PostRepo.data = JSON.parse(sessionStorage.getItem('data')!);
        return PostRepo.data;
    }

    static find(id: number) {
        PostRepo.data = JSON.parse(sessionStorage.getItem('data')!);
        var element = PostRepo.data.find((element: PostType) => element.id == id);
        return element;
    }

    static create(item: PostType) {
        PostRepo.data = JSON.parse(sessionStorage.getItem('data')!);
        this.data = PostRepo.data;
        this.data.push(item);
        sessionStorage.setItem('data', JSON.stringify(this.data));
    }

    static update(id: number, data: PostType) {
        PostRepo.data = JSON.parse(sessionStorage.getItem('data')!);
        const elementToUpdate = PostRepo.data.find((element: PostType) => element.id == id);
        const index: number = this.data.indexOf(elementToUpdate);
        this.data[index].title = data.title;
        this.data[index].contents = data.contents;
        this.data[index].modified_at = data.modified_at.toString();
        sessionStorage.setItem('data', JSON.stringify(this.data));
    }

    static delete(id: number) {
        PostRepo.data = JSON.parse(sessionStorage.getItem('data')!);
        const elementToDelete = PostRepo.data.find((element: PostType) => element.id == id);
        const index = this.data.indexOf(elementToDelete);
        this.data.splice(index, 1);
        sessionStorage.setItem('data', JSON.stringify(this.data));
    }

    static size() {
        return PostRepo.findAll().length;
    }

    static assignId() {
        PostRepo.data = JSON.parse(sessionStorage.getItem('data')!);
        const length = this.data.length - 1;
        const lastIndex = this.data[length].id;
        return lastIndex;
    }
}

export default PostRepo;
