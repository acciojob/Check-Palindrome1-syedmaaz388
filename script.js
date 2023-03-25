function palindrome(str){
  str.toLowerCase();
  let verdict  = true;
	for(let i = 0;i<str.length;i++){
 		for( let j = str.length;j>0;j--){
 			if(String[i]!==String[j]){
 				verdict = false;
 			}
 		}
	}
 	return verdict;
 }