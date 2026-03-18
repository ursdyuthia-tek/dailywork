package Threads;

public class MyThread extends Thread {
	@Override
	public void run() {
		try {
			sleep(2000);
		} catch (InterruptedException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		System.out.println("worker thread is running");
	}

}
