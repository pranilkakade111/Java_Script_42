let isExit =false;
function store(id,firstName,lastName,zip_code,city,state,phone_number,email_address)
{
   return{ 
    id:id,
    firstName:firstName,
    lastName:lastName,
    zip_code:zip_code,
    city:city,
    state:state,
    phone_number:phone_number,
    email_address:email_address
   };

}

const prompt = require('prompt-sync')({sigint: true}); 

let bookStore =[];

function ContentDisplay()
 {
     let condition = false;


     while(!condition)
      {
        console.log("[0] FOR CHECKING THOUGH NAME");
        console.log("[1] FOR CHECKING THROUGH STATE");
        console.log("[2] FOR CHECKING THROUGH CITY ");
        console.log("[3] FOR DELECTING ZIPCODE");
        console.log("[4] FOR exiting");

        let choice1 = prompt("enter the choice from given option :");
        choice1 =Number(choice1);

        switch(choice1)
         {
             case 0:
                 let inputName = prompt("enter the name you want to find : ");
                 inputName=String(inputName);
                 
                 for(var i=0 ;i<bookStore.length;i++)
                 {
                 let a = bookStore.some(y => bookStore.firstName===inputName);
                  console.log(a);
                 

                  if(a==true)
                  {
                      console.log(inputName+ " is presnt in list");
                  }
                  else
                  {
                    console.log(inputName+ " is is not presnt in list");
                  }
                }
                
                  break;

            

                case 1:
                    let inputstate = prompt("enter the name you want to find : ");
                    inputstate=String(inputstate);
   
                    let b = bookStore.some(y => bookStore.state===inputstate);

                    if(b==true)
                    {
                        console.log(inputstate+ " is presnt in list");
                    }
                    else
                    {
                      console.log(inputstate+ " is is not presnt in list");
                    }
                        break;

                case 2:
                    let inputcity = prompt("enter the name you want to find : ");
                    inputcity=String(inputcity);
                    
                    let c = bookStore.some(y => bookStore.city===city);

                    if(c==true)
                    {
                        console.log(inputcity+ " is presnt in list");
                    }
                    else
                    {
                      console.log(inputcity+ " is is not presnt in list");
                    }
                        break;

   
                    
                  

                   

                case 3:
                    let inputzip = prompt("enter the name you want to find : ");
                    inputzip=String(inputzip);
                    

                    let d = bookStore.some(y => bookStore.zip_code===inputzip);

                    if(d==true)
                    {
                        console.log(inputzip+ " is presnt in list");
                    }
                    else
                    {
                      console.log(inputzip+ " is is not presnt in list");
                    }
                        break;

               
                   
                case 4:
                    condition=false;
                    break;
                   
         }
    }
     
 }

function  addAdress()
{

    let num=prompt("ENTER NUMBER OF PERSON YOU WANT TO ADD :");

    num=Number(num);

    var i;

    for( i=0 ;i<num ;i++)

    {

        let id=prompt("ENTER THE ID :");

        id=Number(id);


        let firstName=prompt("ENTER THE FIRST NAME :");

        firstName=String(firstName);


        let lastName=prompt("ENTER THE LAST NAME :");

        lastName=String(lastName);


        let zip_code=prompt("ENTER THE ZIP_CODE :");

        zip_code=String(zip_code);


        let city=prompt("ENTER THE CITY:");

        city=String(city);


        let state=prompt("ENTER THE STATE :");

        state=String(state);


        let phone_number=prompt("ENTER THE PHONE NUMBER :");

        phone_number=String(phone_number);


        let email_address=prompt("ENTER THE EMAIL ADDRESS :");

        email_address=String(email_address);

        bookStore.push(store(id,firstName,lastName,zip_code,city,state,phone_number,email_address));

    }

    console.log(bookStore);
}

function deleltingContact()
 {
     let nameenter = prompt("enter the name of person you want to delete")
     var j;

     for(i = bookStore.length ; i>=0 ;i--)
     {
         if(bookStore[i].firstName===nameenter)
          {
              bookStore.splice(i,1);

          }
     }

 }


function displayList()

  {    
    console.log("your booklist is displayed below :")
    console.log(bookStore);
  }


while(!isExit)
{
    console.log("--------------------WELCOME TO ADDRESS BOOK STORE--------------------------");
    console.log("[0] FOR EXIT");
    console.log("[1] FOR DISPLAY");
    console.log("[2] FOR ADDING CONTACTS");
    console.log("[3] FOR DELECTING CONTCTACT");
    console.log("[4] FOR DISPLAYING USING PARTICULAR FEILD");

    let choice = prompt("enter the choice from given option");
      choice =Number(choice);
      

      switch(choice)
      {
           case 0:
               isExit=true;
               break;

           case 1:
               displayList();
               break;
               
           case 2:
               addAdress();
               break;

           case 3:
               
               break;

           case 4:
               ContentDisplay();
               break;
      }
}