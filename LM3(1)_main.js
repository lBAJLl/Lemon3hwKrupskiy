import java.time.LocalTime;

public class Main {
    public static void main(String[] args) {
        LocalTime currentTime = LocalTime.now();

        if (currentTime.isAfter(LocalTime.MIDNIGHT) && currentTime.isBefore(LocalTime.NOON)) {
            System.out.println("Ранок");
        } else if (currentTime.isAfter(LocalTime.NOON) && currentTime.isBefore(LocalTime.of(18, 0))) {
            System.out.println("День");
        } else {
            System.out.println("Вечір");
        }
    }
}