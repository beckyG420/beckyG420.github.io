import java.util.Scanner;
import java.applet.Applet;
import java.awt.Graphics;

public class Main extends Applet{
   public void paint(Graphics g){
      g.drawString("Welcome in Java Applet.",40,20);
   }
}
	
	Scanner myScanner = new Scanner(System.in);
	Scanner enterScanner = new Scanner(System.in);
	int playerHP;
	String playerName;
	String playerWeapon;
	int choice;
	int monsterHP;
	int silverRing;
	
  public static void wait(int ms)
{
    try
    {
        Thread.sleep(ms);
    }
    catch(InterruptedException ex)
    {
        Thread.currentThread().interrupt();
    }
}
  
	public static void main(String[] args) {
    

		Main game;
		game = new Main();	
		
		game.playerSetUp(); 	
		game.townGate();
	}
	
	public void playerSetUp(){
		
		
		playerHP = 10;
		monsterHP = 15;

		playerWeapon = "Rubber Duck";

    System.out.println("\nPlease enter your name weary adventurer:");
    
		
		playerName = myScanner.nextLine();
    
		
		System.out.println("\nHello " + playerName + "!, Welcome to Altirskali! My name is Gilmarie");
    wait(2000);
    System.out.println("\n
    ------------------------------------------------------------------\n");
    wait(3000);
    System.out.println("\n------------------------------------------------------------------\n");
    System.out.println("\nGilmarie, " + playerName + " asked. What happened to me?");
    wait(2000);
    System.out.println("Gilmarie: " + playerName + ", you passed out! Don't worry you're fully rested now!");
    wait(3000);
    System.out.println(playerName + ": Thank you!");
    wait(3000);
    System.out.println("Gilmarie: You're welcome " + playerName + ", now take this weapon and head into town, there's a beast to slay!");
    wait(5000);

    System.out.println("\nYou've been handed a strange weapon, take a look at your stats below:");
    wait(2000);
		System.out.println("\nYour HP: "+ playerHP);
		System.out.println("Your Weapon: "+ playerWeapon);
		wait(3000);
		
		
	}	
	
	public void townGate(){
		
		System.out.println("\n------------------------------------------------------------------\n");
		System.out.println("You reach the town gate.");
		System.out.println("There's something protecting the entrance");
		System.out.println("\nWhat do you want to do?");
		System.out.println("\n1: Talk to them");
		System.out.println("2: Attack them");
		System.out.println("3: Head to the crossroads");
		System.out.println("\n------------------------------------------------------------------\n");

		choice = myScanner.nextInt();
		
    switch(choice) {
      case 1:
			 System.out.println("??: Hello there, stranger.");
       wait(2000);
       System.out.println("Hi " + playerName + " said, what's your name?");
       wait(2000);
       System.out.println("Ansel, they replied.");
       wait(2000);
       System.out.println(playerName + ": Hi Ansel, can I enter the town please?");
       wait(2000);
       System.out.println("\nSorry " + playerName + " but we cannot let strangers enter our town.Slay the beast and then we can talk. \nHead to the crossroads your adventure will start there");
       wait(2000);
       System.out.println("\nPress enter to continue");
       wait(2000);
			 enterScanner.nextLine();
			 townGate();
			 break;
			
		  case 2:
			 playerHP = playerHP-1;
			 System.out.println("??: Hey I don't think so buddy.\n\nYou're hit you so hard the wind was knocked out of you.\n(You receive 1 damage)\n");
       wait(1000);
			 System.out.println("Your HP: " + playerHP);
       System.out.println("\nPress enter to continue");
			 enterScanner.nextLine();
			 townGate();
       break;
		
      case 3:
			 crossRoad();
      break;
			
		  default:
			System.out.println(playerName + " Please pick 1, 2 or 3"); 
      System.out.println("\nPress enter to continue");
			enterScanner.nextLine();
			townGate();          
		}
	}
	
	public void crossRoad(){
		System.out.println("\n------------------------------------------------------------------\n");
		System.out.println("You are at a crossroad. If you go south, you will go back to the town.\n\n");
		System.out.println("1: Go north");
		System.out.println("2: Go east");
		System.out.println("3: Go south");
		System.out.println("4: Go west");
		System.out.println("\n------------------------------------------------------------------\n");
		
		choice = myScanner.nextInt();
		
    switch(choice){
		case 1:
			north();
      break;
    case 2:
			east();
      break;
    case 3:
			townGate();
      break;
		case 4:
			west();
      break;
		default:
			System.out.println("That wasn't an option "+ playerName + "Try again!"); 
      System.out.println("\nPress enter to continue");
			enterScanner.nextLine();
			crossRoad();          
		}
	}
	
	public void north(){
		System.out.println("\n------------------------------------------------------------------\n");
		System.out.println("There is a silver pool, calling to you. \nYou drink the silvery liquid.");
    wait(2000);
		System.out.println("\nYour HP is recovered.");
		playerHP = playerHP + 1;
		System.out.println("Your HP: " + playerHP);
		System.out.println("\n\n1: Go back to the crossroad");
		System.out.println("\n------------------------------------------------------------------\n");
		
		choice = myScanner.nextInt();
		
    switch(choice){
		case 1:
			crossRoad();
      break;
      default:
			System.out.println("Head back to the crossroad"); 
      System.out.println("\nPress enter to continue");
			enterScanner.nextLine();
			crossRoad();          
		}
	}
		
	public void east(){
		System.out.println("\n------------------------------------------------------------------\n");
		System.out.println("You walked into a forest and found a Brick!");
		playerWeapon = "Brick";
		System.out.println("Your Weapon: "+ playerWeapon);
		System.out.println("\n\n1: Go back to the crossroad");
		System.out.println("\n------------------------------------------------------------------\n");
		
		choice = myScanner.nextInt();
		
	   switch(choice){
		 case 1:
		   crossRoad();
       break;
       default:
			 System.out.println("Head back to the crossroad");
       System.out.println("\nPress enter to continue");
			 enterScanner.nextLine();
			 crossRoad();          
		}
	}
	
	public void west(){
		System.out.println("\n------------------------------------------------------------------\n");
		System.out.println("You encounter a a horse sized cat!\n");
		System.out.println("1: Fight");
		System.out.println("2: Run");
		System.out.println("\n------------------------------------------------------------------\n");
		
		choice = myScanner.nextInt();
		
    switch(choice){
		case 1:
			fight();
      break;
    case 2:
			crossRoad();
      break;
    default:
    	 System.out.println("Fight or Run?");System.out.println("\nPress enter to continue");
			 enterScanner.nextLine();
			 west();          
		}
	}
    	
	public void fight(){
		System.out.println("\n------------------------------------------------------------------\n");
		System.out.println("Your HP: "+ playerHP);
		System.out.println("Monster HP: " + monsterHP);
		System.out.println("\n1: Attack");
		System.out.println("2: Run");
		System.out.println("\n------------------------------------------------------------------\n");
		
		choice = myScanner.nextInt();
		
	switch(choice){
		case 1:
			fight();
      break;
    case 2:
			crossRoad();
      break;
    default:
    	 System.out.println("Fight or Run?");System.out.println("\nPress enter to continue");
			 enterScanner.nextLine();
			 fight();          
		}
	}
   	
	public void attack(){
		int playerDamage =0;
		
		
		if(playerWeapon.equals("Rubber Duck")){
			playerDamage = new java.util.Random().nextInt(5); 
		}
		else if(playerWeapon.equals("Brick")){
			playerDamage = new java.util.Random().nextInt(8); 
		}
		
		System.out.println("You attacked the monster and gave " + playerDamage + " damage!");
		
		monsterHP = monsterHP - playerDamage;
		
		System.out.println("Monster HP: " + monsterHP);
		
		if(monsterHP<1){ win(); } else if(monsterHP>0){
			int monsterDamage =0;
			
			monsterDamage = new java.util.Random().nextInt(4);
			
			System.out.println("The monster attacked you and gave " + monsterDamage + " damage!");
			
			playerHP = playerHP - monsterDamage;
			
			System.out.println("Player HP: " + playerHP);
			
			if(playerHP<1){ dead(); } else if(playerHP>0){
				fight();
			}
		}
		
		
	}
	
	public void dead(){
		System.out.println("\n------------------------------------------------------------------\n");
		System.out.println("You are dead!!!");
		System.out.println("\n\nGAME OVER");
		System.out.println("\n------------------------------------------------------------------\n");
		
	}
	
	public void win(){
		System.out.println("\n------------------------------------------------------------------\n");
		System.out.println("You killed the beast!");
		System.out.println("The beast dropped a something!");
		System.out.println("You obtained a silver ring!\n\n");
		System.out.println("1: Go east");
		System.out.println("\n------------------------------------------------------------------\n");
		
		silverRing = 1;
		
		 switch(choice){
		 case 1:
			crossRoad();
      break;
    default:
			win();
		}
		
	}
	
	public void ending(){
		System.out.println("\n------------------------------------------------------------------\n");
		System.out.println("Ansel: I see you slayed the beast" + playerName + " Altirskali thanks you");
		System.out.println("Ansel: Welcome to our town! Head to the Inn, Gilmarie is waiting for you");
		System.out.println("\n\n           Next Part Coming Soon!                    ");
		System.out.println("\n------------------------------------------------------------------\n");
	}
}