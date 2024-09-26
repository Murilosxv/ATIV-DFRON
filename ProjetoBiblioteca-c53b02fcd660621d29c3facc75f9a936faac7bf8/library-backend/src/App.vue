<template>
  <div id="app">
    <book-form :bookToEdit="bookToEdit" @book-added="fetchBooks" @book-updated="fetchBooks" />
    <BookList @edit-book="setBookToEdit" ref="bookList" />
  </div>
</template>

<script> 
  import BookList from './components/BookList.vue';
  import BookForm from './components/BookForm.vue';

  export default {
    data() {
      return {
        bookToEdit: null,
      }
    },
    components: {
      BookList,
      BookForm,
    },
    methods: {
      setBooktoEdit(book){
        this.bookToEdit = book;
      },
      fetchBooks(){
        this.$refs.bookList.fetchBooks();
        this.bookToEdit = null;
      },
    },
  };
  


</script>
