const main = document.querySelector('#main');
const qna = document.querySelector('#qna');

function addAnswer(answerText,qIdx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    //이벤트리스너를 위해 모든 answer를 담기위해 클래스를 만들어준다
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');
    a.appendChild(answer); //answer와 a 의 관계를 만들어준다
    answer.innerHTML = answerText;
    //answer버튼이 클릭되면 지금거 사라지고 다음게 나타나야한다
    answer.addEventListener('click',function(){
        var children = document.querySelectorAll('.answerList');
        for(let i=0; i< children.length; i++){
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(()=>{
            for(let i =0; i<children.length; i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        },450);
    }, false);
}

function goNext(qIdx){
    var q = document.querySelector('.qBox');

    q.innerHTML = qnaList[qIdx].q;
    for (let i in qnaList[qIdx].a){ //질문당 답변은 여러개니까 for문으로
        addAnswer(qnaList[qIdx].a[i].answer,qIdx);
    }
}

function begin(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(()=>{
            main.style.display = 'none';
            qna.style.display = 'block';
        },400)
        let qIdx = 0;
        goNext(qIdx);
    },400);
}