package banking.app.banking.service;


import banking.app.accounts.app.AccountRepository;
import banking.app.banking.model.Account;

public class BankService {

    private final AccountRepository repository;

    public BankService(AccountRepository repository) {
        this.repository = repository;
    }

    public void deposit(int accountNumber, double amount) {
        banking.app.accounts.app.Account account = repository.findById(accountNumber);
        account.deposit(amount);
        repository.save(account);
    }

    public void withdraw(int accountNumber, double amount) {
        banking.app.accounts.app.Account account = repository.findById(accountNumber);
        account.withdraw(amount);
        repository.save(account);
    }
}
