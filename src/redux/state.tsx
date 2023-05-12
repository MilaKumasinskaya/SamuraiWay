let rerenderEntireTree = () => {
    console.log('state changed')
}


export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number

}
export type ProfileInfoType = {
    avatar: string
    description: string
}
export type ProfilePageType = {
    profileInfo: ProfileInfoType
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}



export let state: RootStateType = {
    profilePage: {
        profileInfo: {
            avatar: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042718_14-768x432.jpg',
            description: 'some text'
        },
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 23},
            {id: 2, message: '"It\'s my first post"', likesCount: 54},
        ],
        newPostText: 'IT-kamasutra.com'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Vika'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Masha'},
            {id: 4, name: 'Lena'},
            {id: 5, name: 'Anna'},
            {id: 6, name: 'Viktor'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Hi'},
            {id: 4, message: 'Nice'},
            {id: 5, message: 'Hi'},
        ]
    },
    sidebar: {}
}
export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText =  newText;
    rerenderEntireTree();
}
export const subscribe = (observer: any) => {
    rerenderEntireTree = observer
}
export default state;
