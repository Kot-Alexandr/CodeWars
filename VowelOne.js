function vowelOne(s){
    
    let answer="";
    s=s.toLowerCase().split('');
    for (i=0;i<s.length;i++) {
        if (s[i]=="a" || s[i]=="o" || s[i]=="e" || s[i]=="i" || s[i]=="u") {answer=answer+"1"} else {answer=answer+"0"}
    } 
    return answer;
  }
//   «A», «E», «I», «O», «U» convert to 1;
// others convert to 0;