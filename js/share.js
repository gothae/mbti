function kakaoshare(){
    Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
    title: '십이간지 연애유형',
    description: '십이간지 연애유형 ',
    imageUrl:
        './img/main.png',
    link: {
        mobileWebUrl: 'https://developers.kakao.com',
        androidExecutionParams: 'test',
    },
    buttons: [
    {
        title: '웹으로 이동',
        link: {
        mobileWebUrl: 'https://developers.kakao.com',
        }
    }
    ]
    }
    });
    }