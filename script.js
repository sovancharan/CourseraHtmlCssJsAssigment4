var names =new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jen";
names[3]="Jason";
names[4]="paul";
names[5]="frank";
names[6]="larry";
names[7]="paula";
names[8]="laura";
names[9]="jim";

for (var index = 0; index < names.length; index++) {
  //  console.log(names[index]);

  if(names[index].charAt(0)==='j'|| names[index].charAt(0)==='J'){
      console.log("Goodbye "+names[index]);
  }
  else{
      console.log("Hello "+names[index]);
  }
    
}
