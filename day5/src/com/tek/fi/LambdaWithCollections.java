package com.tek.fi;

import java.util.*;
import java.util.function.Consumer;

class MyComparator implements Comparator<String> {
    @Override
    public int compare(String o1, String o2) {
        return o1.length() - o2.length();
    }
}

public class LambdaWithCollections {

    public static void main(String[] args) {
        comparator();
        comparatorWithAnonymousInnerClass();
        consumerExamples();
    }

    
    private static void comparator() {
        List<String> names = new ArrayList<>(Arrays.asList("Java", "Python", "Go"));
        names.sort(new MyComparator());
        System.out.println("Using named Comparator class: " + names);
    }

    
    private static void comparatorWithAnonymousInnerClass() {
        List<String> names = new ArrayList<>(Arrays.asList("Java", "Python", "Go"));
        names.sort(new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                return o1.length() - o2.length();
            }
        });
        System.out.println("Using anonymous inner class Comparator: " + names);
    }



    private static void consumerExamples() {
        List<String> names = Arrays.asList("Java", "Python", "Go");

        
        List<String> namesCopy = new ArrayList<>(names);
        namesCopy.sort((str1, str2) -> str2.length() - str1.length());
        System.out.println("Using lambda Comparator (desc length): " + namesCopy);

        
        Consumer<String> consumer1 = (String name) -> System.out.println(name);
        Consumer<String> consumer2 = (name) -> System.out.println(name);
        Consumer<String> consumer3 = name -> System.out.println(name);

        System.out.println("Consumer1 output:");
        names.forEach(consumer1);

        System.out.println("Consumer2 output:");
        names.forEach(consumer2);

        System.out.println("Consumer3 output:");
        names.forEach(consumer3);
    }
}