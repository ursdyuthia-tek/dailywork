package Threads;

import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;

class Worker2 implements Runnable {
	@Override
	private void run() {
		// TODO Auto-generated method stub
		System.out.println(Thread.currentThread().getName() + "started");
		try {
			Thread.sleep(2000);
		} catch(Exception e) {
		}
		System.out.println(Thread.currentThread().getName() + "finished");
	}
}

public class ExecutorServiceDemo {
	public static void main(String[] args) {
		ExecutorService executor1 = Executor.newFixedThreadPool(1);
		
		executor1.submit(new Worker2());
		executor1.shutdown();
		
	}
}
