import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [{
        $id:'',
        userId:'',
        title:'',
        content:'',
        status:'',
        FeaturedImage:'',
    }]
}

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            const post = {
                $id: action.payload.$id,
                userId: action.payload.userId,
                title: action.payload.title,
                content: action.payload.content,
                status: action.payload.status,
                FeaturedImage: action.payload.FeaturedImage,
            }
            state.posts.push(post);
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.$id !== action.payload.$id)
        },
        editPost: (state, action) => {
            state.posts.map((post) => {
                if(post.$id === action.payload.$id){
                    post.title = action.payload.title;
                    post.content = action.payload.content;
                    post.FeaturedImage = action.payload.FeaturedImage;
                }
            })
        },
    }
})

export const {addPost, deletePost, editPost} = postsSlice.actions;

export default postsSlice.reducer;