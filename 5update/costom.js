const ClaclucateBtn=document.getElementById('Claclucate').addEventListener('click',function(e){

    // for income
    const inputeIncome=document.getElementById('incomeAmaunt');
   
    const inputeTextOfIncome=inputeIncome.value;
    

    if (inputeTextOfIncome=== '' || inputeTextOfIncome == null){
      alertFantionForIncomeEmty();
    
    }
   else if(inputeTextOfIncome<0){
    alertFantionForNagative();
   }

    const inputeAmaunt=parseInt(inputeTextOfIncome);
  
    
    // for food
    const inputeFood=document.getElementById('fod');
    const inputeTextOfFood=inputeFood.value;
    if (inputeTextOfFood=== '' ||inputeTextOfFood == null){
      alertFantionForFoodEmty();
    
    }
    else if(inputeTextOfFood<0){
      alertFantionForNagative();
     }
     

    const foodAmount=parseInt(inputeTextOfFood);

    //for rent
    const inputeRent=document.getElementById('rent');
    const inputeTextOfRent=inputeRent.value;
    
    if (inputeTextOfRent=== '' ||inputeTextOfRent == null){
      alertFantionForRentEmty();
    
    }
    else if(inputeTextOfRent<0){
      alertFantionForNagative();
  
     }     
     
    const rentAmount=parseInt(inputeTextOfRent);
    //for clothes
    const inputeClothes=document.getElementById('clothes');
    const inputeTextOfClothes=inputeClothes.value;
    if (inputeTextOfClothes=== '' ||inputeTextOfClothes == null){
      alertFantionForClothesEmty();
    
    }
    else if(inputeTextOfClothes<0){
      alertFantionForNagative();
  
     }
     
    const colthesAmount=parseInt(inputeTextOfClothes);
    //for totla expense

    const totalExpense=foodAmount+rentAmount+colthesAmount;
    

    const totalExpenseShow=document.getElementById('totalExpen');
   totalExpenseShow.innerText=totalExpense;

   const totalBlance=document.getElementById('totalBlance');
       const totalBlanceAmaunt=inputeAmaunt-totalExpense;
        const blance= parseInt(totalBlanceAmaunt);
       
       const againCatchIncome= document.getElementById('incomeAmaunt');
        const againInputeTextOfIncome= againCatchIncome.value ;
              
        if(totalExpense>againInputeTextOfIncome){
         
          expenseBigIncome();
        }
        else if(totalExpense<0){
          alertFantionForTotalExpnse();
        }
       
        totalBlance.innerText=blance;
       
       
        
});
 // for save
const  saveBtnCatch=document.getElementById('saveBtn').addEventListener('click',function(){
 
  const incomeAmaunt=document.getElementById('incomeAmaunt');
  const incomeTaka= parseInt(incomeAmaunt.value);
 

      const saveParsent=document.getElementById('saveInpute');
      const saveAmaunt=parseInt(saveParsent.value)
      if (0>=saveAmaunt){
       
      }

      
      const saveTotalTk=(incomeTaka*saveAmaunt)/100;
    
      const totalSave=document.getElementById('saveAmount');
        totalSave.innerText=saveTotalTk;
        const remainingAmaunt=document.getElementById('remainingBlance');

        const priveBlance=document.getElementById('totalBlance');
      const privesBlanceTaka=parseInt(priveBlance.innerText);
      
      if(saveTotalTk>privesBlanceTaka){
        alertFantionForSaveTotalTaka();
      }
      if(saveTotalTk>privesBlanceTaka){
        remainingAmaunt.innerText='No enfoe for remaing';
      }
      else{
        remainingAmaunt.innerText=privesBlanceTaka-saveTotalTk;
        
      }
      
    });
    
  