package Threads;

class WithdrawTask implements Runnable {
    private final BankAccount account;
    private final int amount;

    public WithdrawTask(BankAccount account, int amount) {
        this.account = account;
        this.amount = amount;
    }

    @Override
    public void run() {
        String thread = Thread.currentThread().getName();
        System.out.println(thread + " attempting to withdraw ₹" + amount);

        boolean success = account.withdraw(amount);

        if (success) {
            System.out.println(thread + " successfully withdrew ₹" + amount);
        } else {
            System.out.println(thread + " FAILED to withdraw ₹" + amount + " (Insufficient balance)");
        }
    }
}

class DepositTask implements Runnable {
    private final BankAccount account;
    private final int amount;

    public DepositTask(BankAccount account, int amount) {
        this.account = account;
        this.amount = amount;
    }

    @Override
    public void run() {
        String thread = Thread.currentThread().getName();
        System.out.println(thread + " depositing ₹" + amount);
        account.deposite(amount);
        System.out.println(thread + " completed deposit of ₹" + amount);
    }
}
