package exercises;

import java.util.*;
import java.util.stream.*;

public class Librarys {

    private List<Books> books = new ArrayList<>();

    public void addBook(Books book) {
        books.add(book);
    }

    public void displayBooks() {
        books.forEach(System.out::println);
    }

    public void searchByTitle(String title) {
        books.stream()
             .filter(book -> book.getTitle().toLowerCase().contains(title.toLowerCase()))
             .forEach(System.out::println);
    }

    public void showAvailableBooks() {
        books.stream()
             .filter(Books::isAvailable)
             .forEach(System.out::println);
    }

    public void borrowBook(int id) {
        books.stream()
             .filter(book -> book.getId() == id)
             .findFirst()
             .ifPresent(Books::borrowBook);
    }

    public void sortBooksByTitle() {
        books.stream()
             .sorted(Comparator.comparing(Books::getTitle))
             .forEach(System.out::println);
    }

    public long countAvailableBooks() {
        return books.stream()
                    .filter(Books::isAvailable)
                    .count();
    }

    public List<Books> getBooks() {
        return books;
    }

    public void setBooks(List<Books> books) {
        this.books = books;
    }
}