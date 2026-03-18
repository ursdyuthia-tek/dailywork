package com.tek.fi;

import java.util.Arrays;
import java.util.List;

public class StreamExample {
    public static void main(String[] args) {
        streamWithChain();
    }

    private static void streamWithChain() {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        long count = numbers.stream()
                .map(number -> {
                    if (number % 2 == 1) {
                        return number * number;
                    } else {
                        return number;
                    }
        });
        List finallist = finalStream.collect(Collectors.toList());
        finalList.forEach(x -> System.out.println(x));
        finalList.forEach(System.out::println);
    	}
                .peek(System.out::println)
                .count();
        System.out.println("Total elements: " + count);
    }

}