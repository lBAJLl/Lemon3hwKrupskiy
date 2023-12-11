public class PetTypeClassifier {
    public static void main(String[] args) {
        // Задана порода тварини
        String breed = "Labrador";

        // Визначення типу тварини за породою
        String petType = classifyPetType(breed);

        // Виведення результату
        if (petType != null) {
            System.out.println("Ця тварина належить до типу: " + petType);
        } else {
            System.out.println("Не вдалося визначити тип тварини за введеною породою.");
        }
    }

    // Метод для визначення типу тварини за породою
    private static String classifyPetType(String breed) {
        switch (breed.toLowerCase()) {
            case "labrador":
            case "bulldog":
            case "poodle":
                return "Собака";
            case "persian":
            case "siamese":
            case "ragdoll":
                return "Кішка";
            case "parakeet":
            case "canary":
                return "Птах";
            default:
                return null;  // Невідома порода
        }
    }
}
