package com.tek.logging;

import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class FileWriteExample {

    public static void main(String[] args) throws IOException {

        FileWriter writer = new FileWriter("OutputFile.txt", true); 
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the text you want in the file, press Ctrl+C to stop:");

        try {
            while (true) {
                String input = sc.nextLine();
                writer.write(input + "\n"); // append newline after input
                writer.flush();
                System.out.println("If you want to enter more, go ahead: ");
            }
        } finally {
            writer.close();
            sc.close();
        }
    }
}