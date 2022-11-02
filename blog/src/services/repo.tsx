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

    static create(item: any) {
        this.instance.push(item);
        const newData = this.instance;
        this.data = newData;
        sessionStorage.setItem('data', JSON.stringify(newData));
    }

    static size() {
        return PostRepo.instance.length;
    }
}

export default PostRepo;
