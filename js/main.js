let current = 0;
    const answers = [];
    const userInfo = {};

    function renderQuestion(index) {
      console.log('index: ', index);
      console.log('questions.length: ', questions.length);
      if (index >= questions.length) {
        renderResultFormBeforeSummary();
        return;
      }

      const question = questions[index];
      const container = document.getElementById("questionContainer");
      container.innerHTML = "";

      if (current > 0) {
        const backIcon = document.createElement("i");
        backIcon.className = "bi bi-arrow-left-circle back-icon";
        backIcon.title = "이전 질문으로 이동";
        backIcon.onclick = goBack;
        container.appendChild(backIcon);
      }

      const title = document.createElement("h3");
      title.textContent = question.q;
      container.appendChild(title);

      if (question.a) {
        const list = document.createElement("div");
        list.className = "answer-list";

        question.a.forEach((answer, i) => {
          const item = document.createElement("div");
          item.className = "answer-item";

          const img = document.createElement("img");
          img.src = answer.image;
          img.alt = answer.label;
          img.className = "answer-image";

          const label = document.createElement("p");
          label.textContent = answer.label;

          item.appendChild(img);
          item.appendChild(label);
          item.addEventListener("click", () => handleAnswer(index, answer.label));

          list.appendChild(item);
        });

        container.appendChild(list);
      } else {
        const textarea = document.createElement("textarea");
        textarea.id = "free-text";
        textarea.placeholder = "자유롭게 입력해주세요.";
        container.appendChild(textarea);

        const nav = document.createElement("div");
        nav.className = "navigation-buttons";

        const next = document.createElement("button");
        next.textContent = "다음";
        next.onclick = () => {
          const text = document.getElementById("free-text").value.trim();
          handleAnswer(index, text || "응답 없음");
        };

        nav.appendChild(next);
        container.appendChild(nav);
      }
    }

    function handleAnswer(index, answerText) {
      answers[index] = { question: questions[index].q, answer: [answerText] };
      current = index + 1;
      renderQuestion(current);
    }

    function goBack() {
      if (current > 0) {
        current--;
        renderQuestion(current);
      }
    }

    function renderResult() {
      const container = document.getElementById("quiz-container");
      const traits = answers.flatMap(a => a.answer).join(' ');

      let userInfoHTML = `
        <div class='result-box'>
          <h3>기본 정보</h3>
          <p>
            <strong>이름:</strong> ${userInfo.name || '-'}<br>
            <strong>생년월일:</strong> ${userInfo.birth || '-'}<br>
            <strong>연락처:</strong> ${userInfo.contact || '-'}<br>
            <strong>주소지:</strong> ${userInfo.address || '-'}<br>
            <strong>직업:</strong> ${userInfo.job || '-'}<br>
            <strong>최종학력:</strong> ${userInfo.school || '-'}<br>
            <strong>종교:</strong> ${userInfo.religion || '-'}
          </p>
        </div>
      `;



      let summaryText = `<div class='result-box'><h3>답변 요약</h3><p>아래는 사용자의 주요 성향을 정리한 내용입니다.</p></div>`;
      let profileSummary = `<div class='summary-text-box'><h3>사용자 성향 요약</h3>`;

      const positives = [];
      const suggestions = [];

      if (traits.match(/151cm|155cm|160cm/)) positives.push("아담한 체형의 상대를 선호합니다.");
      if (traits.match(/170cm 초과/)) positives.push("키가 큰 상대를 선호합니다.");
      if (traits.match(/41kg|45kg|50kg/)) positives.push("슬림한 체형을 선호합니다.");
      if (traits.match(/60kg 초과/)) positives.push("건강한 체형에 대해 긍정적인 시각을 가집니다.");
      if (traits.match(/강아지상|토끼상/)) positives.push("귀엽고 친근한 인상을 선호합니다.");
      if (traits.match(/여우상|뱀상/)) positives.push("도도하거나 카리스마 있는 인상에 끌리는 편입니다.");
      if (traits.match(/대학교 이상|대학원 이상/)) positives.push("높은 학력에 대한 기대가 있습니다.");
      if (traits.includes("중산층")) positives.push("상대 가족의 안정적인 경제 상황을 선호합니다.");
      if (traits.includes("전문직")) positives.push("전문적인 직업에 대한 선호가 강합니다.");
      if (traits.includes("딩크족")) positives.push("자녀 없이 자유로운 삶을 추구할 수 있습니다.");
      if (traits.includes("제3국")) positives.push("유연한 국제적 거주를 고려하는 성향입니다.");
      if (traits.includes("불가능")) suggestions.push("가족과의 동거에 대해 조금 더 열린 마음을 가져보는 것도 좋습니다.");
      if (traits.includes("비흡연")) positives.push("건강을 중요하게 생각합니다.");
      if (traits.includes("한갑 이상")) suggestions.push("흡연 습관은 건강을 위해 조절할 필요가 있습니다.");
      if (traits.includes("금주")) positives.push("절제된 생활습관을 가지고 있습니다.");
      if (traits.includes("부동산과 자동차")) positives.push("경제적으로 자립도가 높은 편입니다.");
      if (traits.includes("1억원 이상")) positives.push("높은 연수입을 기록하고 있습니다.");
      if (traits.includes("재혼")) positives.push("인생 경험이 풍부하며 현실적인 시각을 가졌습니다.");
      if (traits.includes("A형")) positives.push("세심하고 조심스러운 성격입니다.");
      if (traits.includes("O형")) positives.push("외향적이고 사교적인 성향입니다.");
      if (traits.includes("INFJ") || traits.includes("INTJ")) positives.push("계획적이고 내성적인 경향이 있습니다.");
      if (traits.includes("ENFP") || traits.includes("ESFP")) positives.push("에너지가 넘치고 사람들과 어울리는 것을 좋아합니다.");
      if (traits.includes("여행") || traits.includes("드라이브")) positives.push("활동적이고 외부 활동을 선호합니다.");
      if (traits.includes("맛집탐방")) positives.push("소소한 즐거움을 아는 생활형 취미가 있습니다.");

      if (positives.length > 0) {
        profileSummary += `<p><strong>긍정적인 성향:</strong><br>${positives.map(t => `• ${t}`).join('<br>')}</p>`;
      }
      if (suggestions.length > 0) {
        profileSummary += `<p><strong>노력이 필요한 부분:</strong><br>${suggestions.map(t => `• ${t}`).join('<br>')}</p>`;
      }
      profileSummary += `</div>`;

      let tableHTML = `<div class='summary-table'><h3>응답 내용 요약</h3><table class='table'><thead><tr><th>질문</th><th>답변</th></tr></thead><tbody>`;
      answers.forEach(a => {
        tableHTML += `<tr><td>${a.question}</td><td>${a.answer.join(', ')}</td></tr>`;
      });
      tableHTML += `</tbody></table></div>`;

      container.innerHTML = userInfoHTML + summaryText + profileSummary + tableHTML;
    }

    window.onload = () => renderQuestion(current);

    function renderResultFormBeforeSummary() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = `<div class="result-box"><h3>결과를 보기 전에 정보를 입력해주세요</h3></div>`;

  const form = document.createElement("form");
  form.innerHTML = `
    <div class="mb-3">
      <label for="name" class="form-label">이름</label>
      <input type="text" class="form-control" id="name" placeholder="이름 입력">
    </div>
    <div class="mb-3">
      <label for="contact" class="form-label">연락처</label>
      <input type="tel" class="form-control" id="contact" placeholder="010-0000-0000" pattern="010-[0-9]{4}-[0-9]{4}" required>
    </div>
    <div class="mb-3">
      <label for="address" class="form-label">주소지</label>
      <input type="text" class="form-control" id="address" placeholder="주소지 입력">
    </div>    
    <div class="mb-3">
      <label for="job" class="form-label">직업</label>
      <input type="text" class="form-control" id="job" placeholder="직업 입력">
    </div>
    <div class="mb-3">
      <label for="school" class="form-label">최종학력</label>
      <select class="form-select" id="school">
        <option value="">선택</option>
        <option value="초등학교 졸업">초등학교 졸업</option>
        <option value="중학교 졸업">중학교 졸업</option>
        <option value="고등학교 졸업">고등학교 졸업</option>
        <option value="대학교 졸업">대학교 졸업</option>
        <option value="대학원 졸업">대학원 졸업</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="religion" class="form-label">종교</label>
      <select class="form-select" id="religion">
        <option value="">선택</option>
        <option value="무교">무교</option>
        <option value="개신교">개신교</option>
        <option value="천주교">천주교</option>
        <option value="불교">불교</option>
      </select>
    </div>       
    <div class="mb-3">
      <label for="birth" class="form-label">생년월일</label>
      <input type="date" class="form-control" id="birth">
    </div>
    <div class="text-center">
      <button type="button" class="btn btn-primary" onclick="submitUserInfo()">결과 보기</button>
    </div>
  `;
  container.appendChild(form);
}

function submitUserInfo() {
  userInfo.name = document.getElementById("name").value.trim();
  userInfo.contact = document.getElementById("contact").value.trim();
  userInfo.address = document.getElementById("address").value.trim();
  userInfo.job = document.getElementById("job").value.trim();
  userInfo.school = document.getElementById("school").value;
  userInfo.religion = document.getElementById("religion").value;
  userInfo.birth = document.getElementById("birth").value;

  renderResult(); // 결과 표시
}
