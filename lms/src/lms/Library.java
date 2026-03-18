package lms;

import java.util.ArrayList;
import java.util.List;

public class Library {

    private List<Book> books = new ArrayList<>(); 

    public void addBook(Book book) {
        
        if (book == null) {
            throw new IllegalArgumentException("Book cannot be null");
        }

        
        if (book.getTitle() == null || book.getTitle().trim().isEmpty()) {
            throw new IllegalArgumentException("Title cannot be null or blank");
        }

        books.add(book);
    }

    public void reserveBook(int bookId) throws BookNotAvailableException {

        
        if (bookId <= 0) {
            throw new IllegalArgumentException("Invalid book ID");
        }

        for (Book book : books) {
            if (book.getId() == bookId) {

                
                if (book.isReserved()) {
                    throw new BookNotAvailableException("Book already reserved");
                }

                book.setReserved(true);
                return;
            }
        }    
        throw new BookNotAvailableException("Book not found");
    }

    
    public void clearBooks() {
        books.clear();
    }
}