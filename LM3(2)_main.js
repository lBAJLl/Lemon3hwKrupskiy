public class WorkdayChecker {
    public static void main(String[] args) {
        // Введені дані (1 - понеділок, ..., 7 - неділя)
        int dayOfWeek = 3;  // Наприклад, середа

        // Використання умовного оператора if-else
        if (isWeekendIfElse(dayOfWeek)) {
            System.out.println("Це вихідний день.");
        } else {
            System.out.println("Це робочий день.");
        }

        // Використання оператора switch
        switch (dayOfWeek) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                System.out.println("Це робочий день.");
                break;
            case 6:
            case 7:
                System.out.println("Це вихідний день.");
                break;
            default:
                System.out.println("Введено некоректний номер дня тижня.");
        }

        // Використання тернарного оператора
        String result = isWeekendTernary(dayOfWeek) ? "Це вихідний день." : "Це робочий день.";
        System.out.println(result);
    }

    // Метод для визначення вихідного дня за допомогою if-else
    private static boolean isWeekendIfElse(int day) {
        return (day == 6 || day == 7);
    }

    // Метод для визначення вихідного дня за допомогою тернарного оператора
    private static boolean isWeekendTernary(int day) {
        return (day == 6 || day == 7) ? true : false;
    }
}
