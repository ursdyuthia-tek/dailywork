package com.tek.fi;

import java.util.function.Predicate;

public class PredicateExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Predicate<Integer> isEven = (Integer n) -> n % 2 == 0;
		System.out.println(isEven.test(10));
	}

}
