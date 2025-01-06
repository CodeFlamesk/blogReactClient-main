import $api from "../http/index";

class PostAction {

    async addNewPosts(intro, file, description, category, mainTitle, descriptionTag, id) {
            const formData = new FormData();

            formData.append("intro", intro);
            formData.append("file", file);
            formData.append("description", description);
            formData.append("mainTitle", mainTitle);
            formData.append("descriptionTag", descriptionTag);
            formData.append("id", id);

            const response = await $api.post(`/blog/${category}`, formData);
            
            return response;
    }

}

export default new PostAction