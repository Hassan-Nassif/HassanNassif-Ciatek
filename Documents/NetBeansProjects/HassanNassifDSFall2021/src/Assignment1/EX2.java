package Assignment1;
import java.util.Scanner;
public class EX2 {
public static void main(String[] args) {
    Scanner a=new Scanner (System.in);
    System.out.println("enter the number of movies to be rated");
   int num=a.nextInt();
   String [] Movie = new String[num];
   for(int i=1;i<=num;i++){
       System.out.print("enter the name of movie " + i +"\n") ;
       String s=a.next();
       Movie[i]= s;
       
   }
   System.out.println("enter the number of attendees");
   int att=a.nextInt();


   for(int f=0;f<att;f++){
    System.out.println("Welcome to cinema critics");
    int[]r =new int[num];
    for(int j=0;j<num;j++){
        System.out.println("please,enter a rating between 1 and 5 for "+Movie);
    }
}
}  
}