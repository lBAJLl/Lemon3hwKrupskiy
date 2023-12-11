public class SignChecker {
    public static void main(String[] args) {
        // Задане число
        int number = -7;

        // Визначення знаку за допомогою умовного оператора if-else
        if (number > 0) {
            System.out.println("Число " + number + " є додатнім.");
        } else if (number < 0) {
            System.out.println("Число " + number + " є від'ємним.");
        } else {
            System.out.println("Число " + number + " є нулем.");
        }

        // Визначення знаку за допомогою тернарного оператора
        String sign = (number > 0) ? "додатнє" : ((number < 0) ? "від'ємне" : "нуль");
        System.out.println("Число " + number + " є " + sign + ".");
    }
}
