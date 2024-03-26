// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personname: string = "Maheen Kamran Shamsi";
// step 1 show in lower case:
let lowercaseName: string = personname.toLowerCase();
console.log(lowercaseName);
// step 2 uppercase:
let uppercaseName: string = personname.toUpperCase();
console.log(uppercaseName);
// step 3 show name in titlecase:
let words: string[] = personname.split("");
let titlecasename: string = ""
for(let i = 0 ; i < words.length; i++)
{
    titlecasename +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+""
};
console.log(titlecasename);