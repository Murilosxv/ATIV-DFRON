import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api/books',
    headers: {
        'Content-Type': "application/json",
    },
});

export default{
    getBooks(){
        return apiClient.get('/');
    
    },
    addBook(Book){
        return apiClient.post('/',Book);
    },
    updatedBook(id, book) {
        return apiClient.put (`/${id}`, book);
    },
    deleteBook(id) {
        return apiClient.delete(`/${id}`);
    },
};