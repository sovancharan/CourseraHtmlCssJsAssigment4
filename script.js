var names =new Array();
names[0]="Yaakov";
names[1]="jon";
names[2]="jen";
names[3]="sovan";
names[4]="priya";
names[5]="pritam";
names[6]="papai";
names[7]="james";
names[8]="souvick";

for (var index = 0; index < names.length; index++) {
  //  console.log(names[index]);

  if(names[index].charAt(0)==='j'|| names[index].charAt(0)==='J'){
      console.log("Goodbye "+names[index]);
  }
  else{
      console.log("Hello "+names[index]);
  }
    
}