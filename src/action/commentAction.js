
import { getAllComments, getCommentsAdmin } from "store/commentsReducer";
import $api from "../http/index";

class CommentAction {
    async addComment(id, rating, body, postId) {
        try {
            const response = $api.post("/comments/add", {id, rating, body, postId});

            if(response.status === 200) {
                console.log(response.data)
            }
        } catch(e) {
            console.log(e)
        } 
    }

    getAllCommentsCheck() {
        return async dispatch => {
            try {

                const response = await $api.get("/comments/check/all");

                if(response.status === 200) {
                    return dispatch(getAllComments(response.data))
                }
            } catch(e) {
                console.log(e)
            }
        }
    }

    getAllCommentsAdmin() {
        return async dispatch => {
            try {
                const response = await $api.get("/comments/admin/all");

                if(response.status === 200) {
                    return dispatch(getCommentsAdmin(response.data))
                }

            } catch(e) {
                console.log(e)
            }
        }
    }

    async deleteComment(commentId, userId) {
        try {
            const response = await $api.delete("/comments/delete", {commentId, userId});

            if(response.status === 200) {
                return console.log(response?.data?.message)
            }
        } catch(e) {
            console.log(e)
        }
    }

    async checkComments(id) {
        try {
            const response = await $api.post("/comments/admin/check", {id});
            
            if(response.status === 200) {
                return console.log(response?.data?.message)
            }
        } catch(e) {
            console.log(e)
        }
    }
}

export default new CommentAction