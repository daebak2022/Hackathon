var initFlag = true;
var randomIndex = 0;

/* 보내기 버튼 클릭 시 */
function sendMessage() {
    if(initFlag) {
        document.getElementById('chatIntro').style.display = 'none';
        initFlag = false;
    }

    const userInput = document.getElementById('userInput').value.trim();
    if (userInput !== '') {
        // 사용자 입력 출력
        appendMessage('user', userInput);

        // 챗봇 답변 출력
        const answer = getAnswer(userInput);
        setTimeout(() => appendMessage('bot', answer), 500);

        // 사용자 버튼 선택 출력
        const btnDiv = document.createElement('div');
        btnDiv.setAttribute('class', 'chat-button');
        btnDiv.setAttribute('id', 'chatBtn');
        const btnArr = ["▶ 도슨튼 영상", "▤ 한국 문화 퀴즈"];
        for(var i=0; i<btnArr.length; i++) {
            const newBtn = setBtn(btnArr[i]);
            if(i == 0) {
                newBtn.addEventListener('click', function() {viewDst()});
            } else {
                newBtn.addEventListener('click', function() {viewQuiz()});
            }
            
            btnDiv.appendChild(newBtn);
        }
        setTimeout(() => appendMessage(btnDiv, ''), 500)

        // 사용자 자동 답변 출력
        setTimeout(() => appendMessage('userBtn', getQuestion(0)), 600);
        setTimeout(() => appendMessage('userBtn', getQuestion(1)), 600);
        
        // 입력 필드 초기화
        document.getElementById('userInput').value = '';
    }
}

/* 채팅 창에 메시지 출력 */
function appendMessage(obj, message) {
    const chatMsg = document.getElementById('chatMessage');

    if(typeof(obj) == 'object') {
        chatMsg.appendChild(obj);
        console.log('add');
    } else {
        var typeClass = '';
        
        switch(obj) {
            case "user":
                typeClass = "chat-msg-user";
                break;
            case "bot":
                typeClass = "chat-msg-bot";
                break;
            case "userBtn":
                typeClass = "chat-msg-user-btn";
                break;
            default:
                break;
        }

        const messageDiv = document.createElement('div');
        messageDiv.setAttribute('class', typeClass);
        messageDiv.textContent = message;
        chatMsg.appendChild(messageDiv);
        console.log('create');
    }
    chatMsg.style.display = 'block';
    // chatMsg.scrollTop = chatMsg.scrollHeight; // 스크롤 맨 아래로 이동
}

/* 사용자가 선택할 버튼 생성 */
function setBtn(message) {
    const btn = document.createElement('div');
    btn.setAttribute('class', "chat-button-sel");
    btn.textContent = message;

    return btn;
}

/* 채팅 창에 출력할 답변 목록 */
/* 향후 API 연결 시 수정할 영역 */
function getAnswer(question) {
    // 여기서는 간단히 미리 정의된 답변을 제공하도록 했습니다.
    // 실제로는 자연어 처리 기술이나 외부 API를 활용하여 더 다양한 답변을 제공할 수 있습니다.
    const answers = [
        '한국을 여행할 예정이군요!\n한국만의 문화를 이해하고 다양한 경험을 하는 건 어떤가요?\n당신에게 경주를 추천드려요!',
        '죄송해요, 제가 잘 이해하지 못했어요. 다른 질문을 해주시겠어요?',
        '물어보신 내용에 대해서는 아직 제가 알려드릴 수 없는 정보네요.',
        '대답 드리기 어려운 질문이네요. 다른 질문이 있으시면 답변 드리겠습니다.',
    ];

    // 간단히 랜덤하게 답변을 선택하여 반환합니다.
    //const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex++];
}

/* 채팅 창에 출력할 답변 목록 */
/* 향후 API 연결 시 수정할 영역 */
function getQuestion(idx) {
    // 여기서는 간단히 미리 정의된 답변을 제공하도록 했습니다.
    // 실제로는 자연어 처리 기술이나 외부 API를 활용하여 더 다양한 답변을 제공할 수 있습니다.
    const qeustions = [
        '좋아! 근처 관광 투어 추천해줘.',
        '다른 특별한 관광지도 추천해줘.'
    ];
    return qeustions[idx];
}

/* 도스튼 영상 */
function viewDst() {
    var divElement = document.createElement('div');
    divElement.setAttribute('class', "video-container");

    var iframeElement = document.createElement('iframe');
    iframeElement.src = "https://studio.d-id.com/share?id=ac05de7901a2ec06bdfbf9cc46aaf96d&utm_source=copy";
    iframeElement.width = "400";
    iframeElement.height = "600";
    iframeElement.classList.add("video-iframe");

    divElement.appendChild(iframeElement);
    document.getElementById('chatMessage').appendChild(divElement);
}

function viewQuiz() {

}