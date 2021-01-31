"use strict"
let str1 = 'You\'re catnip to a girl like me. Handsome, dazed,and to die for...';
let res;
res = 'Just string: ' + str1 + '\n';
res += 'Length: ' + str1.length + '\n';
res += 'Character number 8 is: ' + str1[7] + '\n';
res += 'To uppercase: ' + str1.toUpperCase() + '\n';
res += 'Concatenation in a phrase: ' + str1.concat(' - Catwoomen') + '\n';
let str2 = 'Batman: "I tried to save you."';
res += '[Batman Returns] ' + str2 + '\n';
let str3 = 'Selina Kyle: catwoman"Mmm seemsCatwomanlike everyCatWomanwoman you try to savewindsCatWOMANup dead... or deeply resentful."';
res += str3.replace(/catwoman/ig, ' ');// Заменяет вхождение несколько раз без учета регистра

alert(res);
