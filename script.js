/*1.Определите переменные str, sum, num, flag и txt со значениями «Привет», 123, 15.8,
true, «true», соответственно. При помощи оператора определения типа (typeof)
убедитесь, что переменные принадлежат типам: string, number или boolean. Выведите в
консоль (console.log()) типы операторов.*/

console.log('Task number 1');

let str = 'Привет',
    sum = 123,
    num = 15.8,
    flag = true,
    txt = 'true';

    console.log(str, typeof str);
    console.log(sum, typeof sum);
    console.log(num, typeof num);
    console.log(flag, typeof flag);
    console.log(txt, typeof txt);





/*9.Выведите в консоль стихотворение (соблюдайте все переносы и абзацы):*/ 

console.log('Task number 9');

let a = `Бывало, спит у ног собака,
костер занявшийся гудит,
женщина из полумрака
глазами зыбкими глядит.

Потом под пихтою приляжет
на куртку рыжую мою
и мне, задумчивая, скажет:

"А ну-ка, спой!.."- и я пою.`;

console.log(a);  





/*10.Есть восемь текстовых строк (создайте 8 переменных), составьте из них грамотные по
смыслу предложения (1 абзац, переменная text):*/

console.log('Task number 10');

let text1 = 'индо земля зашаталась под ногами-и вырос,',
    text2 = 'и заревел он голосом диким...',
    text3 = 'блеснула молния и ударил гром,',
    text4 = 'а так какое-то чудище, страшное и мохнатое,',
    text5 = 'как будто из-под земли, перед купцом:',
    text6 = 'Он подошёл и сорвал аленький цветочек.',
    text7 = 'зверь не зверь, человек не человек,',
    text8 = 'В ту же минуту, безо всяких туч,';

    console.log(text8 + text3 + text1 + text5 + text7 + text4 + text2 + text6);