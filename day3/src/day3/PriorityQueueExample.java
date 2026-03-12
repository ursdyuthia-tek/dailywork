package day3;

import java.util.PriorityQueue;

public class PriorityQueueExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		PriorityQueue<Integer> pq = new PriorityQueue<>();
		
		pq.add(30);
		pq.add(10);
		pq.add(20);
		System.out.println(pq);
		
		System.out.println(pq.poll());

	}

}
