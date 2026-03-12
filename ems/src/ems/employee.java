
package ems;

class Employee {
    void hire() { System.out.println("Hire employee"); }
    void terminate() { System.out.println("Terminate employee"); }
    void getCurrent() { System.out.println("Current employee"); }
    void getHistory() { System.out.println("Employe History")); }
}

class PermanentEmployee extends Employee { }

class Manager extends PermanentEmployee { }

class HourlyEmployee extends Employee { }

class TempEmployee extends HourlyEmployee { }

class ContractEmployee extends HourlyEmployee { }

public class Main {
    public static void main(String[] args) {
        Manager m = new Manager();
        m.hire();

        TempEmployee t = new TempEmployee();
        t.getCurrent();
    }
}

