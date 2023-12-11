public class FoodClassifier {
    public static void main(String[] args) {
        // Приклад: назва страви
        String foodName = "Паста";

        // Використання умовного оператора if-else
        if (isPizza(foodName)) {
            System.out.println("Це піца.");
        } else if (isPasta(foodName)) {
            System.out.println("Це паста.");
        } else if (isSalad(foodName)) {
            System.out.println("Це салат.");
        } else {
            System.out.println("Не вдалося класифікувати страву.");
        }

        // Використання оператора switch
        switch (foodName.toLowerCase()) {
            case "піца":
                System.out.println("Це піца.");
                break;
            case "паста":
                System.out.println("Це паста.");
                break;
            case "салат":
                System.out.println("Це салат.");
                break;
            default:
                System.out.println("Не вдалося класифікувати страву.");
        }

        // Використання тернарного оператора
        String foodType = isPizza(foodName) ? "піца" : (isPasta(foodName) ? "паста" : (isSalad(foodName) ? "салат" : "невідомо"));
        System.out.println("Це " + foodType + ".");
    }

    // Методи для класифікації страв
    private static boolean isPizza(String foodName) {
        return foodName.toLowerCase().equals("піца");
    }

    private static boolean isPasta(String foodName) {
        return foodName.toLowerCase().equals("паста");
    }

    private static boolean isSalad(String foodName) {
        return foodName.toLowerCase().equals("салат");
    }
}
