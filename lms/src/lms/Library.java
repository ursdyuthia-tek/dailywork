package lms;

import java.util.ArrayList;

public class Library {

	List<Book> books = new ArrayList<>();

    void add(String id, String title, float price, String author) {
        Book book = new Book(id, title, price, author);
        books.add(book);
    }

    void reserve(String title) throws Exception {
        for (Book b : books) {
            if (b.title.equals(title) && b.getStatus() == STATUS.AVAILABLE) {
                b.setstatus(STATUS.BOOKED);
                System.out.println("Borrowed: " + title);
                return;
            }
        }
        throw new Exception("Book is not available.");
    }

}
