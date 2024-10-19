public class Top_Btn 
{
    private String label; 
    private String color; 
    private int size; 

    public Top_Btn(String label, String color, int size) {
        this.label = label;
        this.color = color;
        this.size = size;
    }

    public String getLabel() {
        return label;
    }

    public String getColor() {
        return color;
    }

    public int getSize() {
        return size;
    }

    public void click() {
        System.out.println("Butona tıklandı: " + label);
    }

    public static void main(String[] args) {
        Top_Btn myButton = new Top_Btn("Yukarı Kaydır", "Yeşil", 24);
        System.out.println("Buton: " + myButton.getLabel());
        myButton.click();
    }
}