export const ApiConstants = {
    VIEW_POSTS_BY_ID: (id: string) => `/api/posts/${id}/view`,
    VIEW_ALL_POSTS: () => `/api/posts/view/all`,
    SAVE_POST: () => `/api/posts/save`,
    EDIT_POST: (id: string) => `/api/posts/${id}/edit`
}