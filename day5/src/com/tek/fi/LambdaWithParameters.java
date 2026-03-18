package com.tek.fi;
interface Add {
	int sum(int a,int b);
}

public class LambdaWithParameters {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Add add = (a, b) -> a+b;
		
		System.out.println(add.sum(5,3));

	}

}
