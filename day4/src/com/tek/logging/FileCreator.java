package com.tek.logging;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class FileCreator {
    public static void main(String[] args) throws IOException {

        try (BufferedWriter writer = new BufferedWriter(new FileWriter("Received Input File.txt", true));
             Scanner sc = new Scanner(System.in)) {

            System.out.println("Enter the text you want in the file, press Ctrl+C to stop:");

            while (true) {
                String input = sc.nextLine();
                writer.write(input);
                writer.newLine();  
                writer.flush();
                System.out.println("If you want to enter more, go ahead: ");
            }

        } 
    }
}