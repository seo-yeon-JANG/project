const page = document.getElementById('main');

const arr = [1,2,3,4,5,6];

//배열안에 객체 생성

//배오객인 -> 배열은 forof문 객체는 forin문
//div안에 배열 텍스트

for (const element of arr){
    const a = document.createElement('div');
    a.textContent=element
    page.append(a);
}