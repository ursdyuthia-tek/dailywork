package DSA;

public class ArrayExample {

    public static void main(String[] args) {
        basicArray();
        arrayWithCustomObjects();
    }

    private static void arrayWithCustomObjects() {

        Book[] books = new Book[5];  

        books[0] = new Book("1", "Learn Java", 123.3F, "Pariwesh");
        books[1] = new Book("2", "Master Python", 200.0F, "John");
        books[2] = new Book("3", "C Programming", 150.5F, "Dennis");
        books[3] = new Book("4", "Data Structures", 175.0F, "Mark");
        books[4] = new Book("5", "Algorithms", 220.0F, "Alice");

        
        for (int i = 0; i < books.length; i++) {
            System.out.println(books[i]);
        }
    }

    private static void basicArray() {
        int[] numbers = new int[10];
        numbers[1] = 10;

        System.out.println(numbers[2]); 
    }
}


class Book {
    String id;
    String name;
    float price;
    String author;

    public Book(String id, String name, float price, String author) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.author = author;
    }

    @Override
    public String toString() {
        return id + " | " + name + " | " + price + " | " + author;
    }
}