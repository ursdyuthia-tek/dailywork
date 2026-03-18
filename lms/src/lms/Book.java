package lms;

public class Book {
    private int id;
    private String title;
    private float price;
    private String author;
    boolean reserved;

    public Book(int id, String title, float price, String author) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.author = author;
        this.reserved = false;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public boolean isReserved() {
        return reserved;
    }

    public void setReserved(boolean reserved) {
        this.reserved = reserved;
    }
}